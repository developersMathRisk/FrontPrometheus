import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface MensajeAsistente {
  autor: 'usuario' | 'asistente';
  texto: string;
}

/** Lo que una pantalla le ofrece al asistente: qué interpretar y cómo responder a una pregunta. */
export interface ContextoAsistente {
  /** Identifica el contenido; si cambia, la conversación empieza de nuevo. */
  clave: string;
  titulo: string;
  interpretacion: string;
  sugerencias: string[];
  placeholder?: string;
  responder: (pregunta: string) => Observable<string>;
}

/**
 * Estado del asistente IA flotante. Cada pantalla con IA registra su contexto al mostrar un resultado y lo
 * libera al salir; la burbuja del shell solo aparece mientras hay un contexto. El asistente actual interpreta
 * el resultado con sus propios números y simula escenarios con el motor real de Stress Testing (no consulta
 * un modelo de lenguaje externo).
 */
@Injectable({ providedIn: 'root' })
export class AsistenteIaService {
  readonly contexto = signal<ContextoAsistente | null>(null);
  readonly mensajes = signal<MensajeAsistente[]>([]);
  readonly abierto = signal(false);
  readonly pensando = signal(false);
  /** Hay una interpretación nueva que el usuario aún no abrió: la burbuja la señala. */
  readonly novedad = signal(false);

  registrar(ctx: ContextoAsistente): void {
    const previo = this.contexto();
    if (!previo || previo.clave !== ctx.clave) {
      this.mensajes.set([]);
      this.novedad.set(!this.abierto());
    }
    this.contexto.set(ctx);
  }

  liberar(): void {
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

  preguntar(texto: string): void {
    const ctx = this.contexto();
    const pregunta = texto.trim();
    if (!ctx || !pregunta || this.pensando()) return;
    this.mensajes.update((m) => [...m, { autor: 'usuario', texto: pregunta }]);
    this.pensando.set(true);
    ctx.responder(pregunta).subscribe({
      next: (r) => this.terminar(r),
      error: () => this.terminar('No pude responder en este momento. Intente de nuevo.'),
    });
  }

  private terminar(texto: string): void {
    this.pensando.set(false);
    this.mensajes.update((m) => [...m, { autor: 'asistente', texto }]);
  }
}
