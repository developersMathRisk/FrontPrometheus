import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, isObservable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface MensajeAsistente {
  autor: 'usuario' | 'asistente';
  texto: string;
  /** 'ia' = generado por el modelo de lenguaje; 'datos' = calculado con los datos de la pantalla. */
  origen?: 'ia' | 'datos';
}

/** Opción predefinida: se responde al instante con los datos de la pantalla (sin modelo de lenguaje). */
export interface OpcionAsistente {
  etiqueta: string;
  responder: () => string | Observable<string>;
}

/** Lo que una pantalla le ofrece al asistente. */
export interface ContextoAsistente {
  /** Identifica el contenido; si cambia, la conversación empieza de nuevo. */
  clave: string;
  /** Módulo funcional (para el modelo y la trazabilidad), p. ej. "VaR", "Back Office · Liquidación". */
  modulo?: string;
  titulo: string;
  /** Mensaje inicial: lectura automática de lo que muestra la pantalla. */
  interpretacion: string;
  /** Opciones predefinidas (respuesta inmediata con los datos de la pantalla). */
  opciones?: OpcionAsistente[];
  /** Preguntas sugeridas que se envían como texto libre (compatibilidad). */
  sugerencias?: string[];
  placeholder?: string;
  /**
   * Respuesta propia de la pantalla para preguntas libres que sabe resolver (p. ej. simular un shock con el
   * motor real). Devuelve null si no la reconoce: entonces la pregunta va al modelo de lenguaje.
   */
  responder?: (pregunta: string) => Observable<string> | null;
  /** Resumen estructurado de la pantalla que acompaña a las preguntas libres enviadas al modelo. */
  datos?: () => unknown;
}

/**
 * Estado del asistente IA flotante (la burbuja del shell). Cada pantalla con IA registra su contexto y lo
 * libera al salir. Flujo de una pregunta: opción predefinida → respuesta propia de la pantalla → modelo de
 * lenguaje del backend (/ia/consultar, con el resumen de la pantalla) → si la IA no está disponible, se
 * ofrecen las opciones predefinidas.
 */
@Injectable({ providedIn: 'root' })
export class AsistenteIaService {
  private readonly http = inject(HttpClient);

  readonly contexto = signal<ContextoAsistente | null>(null);
  readonly mensajes = signal<MensajeAsistente[]>([]);
  readonly abierto = signal(false);
  readonly pensando = signal(false);
  /** Hay una interpretación nueva que el usuario aún no abrió: la burbuja la señala. */
  readonly novedad = signal(false);
  /** null = aún no se consultó; true/false = el backend tiene (o no) modelo de lenguaje configurado. */
  readonly iaDisponible = signal<boolean | null>(null);

  constructor() {
    this.http.get<{ disponible: boolean }>(`${environment.apiBaseURL}/ia/estado`)
      .subscribe({ next: (r) => this.iaDisponible.set(r.disponible), error: () => this.iaDisponible.set(false) });
  }

  registrar(ctx: ContextoAsistente): void {
    const previo = this.contexto();
    if (!previo || previo.clave !== ctx.clave) {
      this.mensajes.set([]);
      this.novedad.set(!this.abierto());
    }
    this.contexto.set(ctx);
  }

  liberar(clave?: string): void {
    // Una pantalla solo libera su propio contexto (evita borrar el de la pantalla que acaba de entrar)
    if (clave && this.contexto()?.clave !== clave) return;
    this.contexto.set(null);
    this.mensajes.set([]);
    this.abierto.set(false);
    this.novedad.set(false);
  }

  alternar(): void {
    this.abierto.update((v) => !v);
    if (this.abierto()) this.novedad.set(false);
  }

  cerrar(): void {
    this.abierto.set(false);
  }

  usarOpcion(opcion: OpcionAsistente): void {
    if (this.pensando()) return;
    this.mensajes.update((m) => [...m, { autor: 'usuario', texto: opcion.etiqueta }]);
    let r: string | Observable<string>;
    try {
      r = opcion.responder();
    } catch {
      r = 'No pude calcular esta respuesta con los datos actuales.';
    }
    if (isObservable(r)) {
      this.pensando.set(true);
      r.subscribe({ next: (t) => this.terminar(t, 'datos'), error: () => this.terminar('No pude calcular esta respuesta.', 'datos') });
    } else {
      this.terminar(r, 'datos');
    }
  }

  preguntar(texto: string): void {
    const ctx = this.contexto();
    const pregunta = texto.trim();
    if (!ctx || !pregunta || this.pensando()) return;
    const historial = this.mensajes().map((m) => ({ autor: m.autor, texto: m.texto }));
    this.mensajes.update((m) => [...m, { autor: 'usuario', texto: pregunta }]);
    this.pensando.set(true);

    const propia = ctx.responder?.(pregunta) ?? null;
    if (propia) {
      propia.subscribe({ next: (r) => this.terminar(r, 'datos'), error: () => this.terminar('No pude responder en este momento.', 'datos') });
      return;
    }
    if (this.iaDisponible() === false) {
      this.terminar(this.sinIa(ctx), 'datos');
      return;
    }
    this.http.post<{ respuesta: string; origen: string }>(`${environment.apiBaseURL}/ia/consultar`, {
      modulo: ctx.modulo ?? ctx.titulo,
      titulo: ctx.titulo,
      contexto: { lectura: ctx.interpretacion, ...(this.datosSeguros(ctx) as object) },
      pregunta,
      historial: [{ autor: 'asistente', texto: ctx.interpretacion }, ...historial],
    }).pipe(
      map((r) => r.respuesta),
      catchError((e: HttpErrorResponse) => {
        if (e.status === 503 && /no está configurada/.test(e.error?.message ?? '')) this.iaDisponible.set(false);
        return of(e.error?.message ? `${e.error.message}` : this.sinIa(ctx));
      }),
    ).subscribe((r) => this.terminar(r, 'ia'));
  }

  private datosSeguros(ctx: ContextoAsistente): unknown {
    try {
      const d = ctx.datos?.();
      return d && typeof d === 'object' ? d : { datos: d ?? null };
    } catch {
      return {};
    }
  }

  private sinIa(ctx: ContextoAsistente): string {
    const opciones = (ctx.opciones ?? []).map((o) => `«${o.etiqueta}»`).join(', ');
    return 'La IA generativa no está habilitada en este servidor, así que no puedo responder preguntas libres. '
      + (opciones ? `Puede usar las opciones predefinidas: ${opciones}.` : '');
  }

  private terminar(texto: string, origen: 'ia' | 'datos'): void {
    this.pensando.set(false);
    this.mensajes.update((m) => [...m, { autor: 'asistente', texto, origen }]);
  }
}
