import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Acceso {
  leer: boolean;
  crear: boolean;
  editar: boolean;
  eliminar: boolean;
}

export type Accion = keyof Acceso;

export interface UsuarioSesion {
  id: number;
  username: string;
  nombres: string;
  apellidos: string;
  email: string;
  idRol: number;
  rol: string;
  superAdmin: boolean;
  debeCambiarClave: boolean;
}

export interface Sesion {
  token: string | null;
  expiraEnSegundos: number;
  usuario: UsuarioSesion;
  permisos: Record<string, Acceso>;
}

const CLAVE_TOKEN = 'prometheus.token';

/**
 * Estado de la sesión: token JWT, usuario y permisos por opción. El token vive en sessionStorage (se
 * pierde al cerrar la pestaña); los permisos se refrescan desde /auth/me al abrir la app, así un cambio
 * de rol o una desactivación se nota sin esperar a que venza el token.
 */
@Injectable({ providedIn: 'root' })
export class SesionService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly base = `${environment.apiBaseURL}/auth`;

  private readonly _usuario = signal<UsuarioSesion | null>(null);
  private readonly _permisos = signal<Record<string, Acceso>>({});

  readonly usuario = this._usuario.asReadonly();
  readonly permisos = this._permisos.asReadonly();
  readonly autenticado = computed(() => this._usuario() !== null);
  readonly iniciales = computed(() => {
    const u = this._usuario();
    return u ? ((u.nombres[0] ?? '') + (u.apellidos[0] ?? '')).toUpperCase() || u.username[0].toUpperCase() : '';
  });
  readonly nombreCompleto = computed(() => {
    const u = this._usuario();
    return u ? `${u.nombres} ${u.apellidos}`.trim() : '';
  });

  get token(): string | null {
    try {
      return sessionStorage.getItem(CLAVE_TOKEN);
    } catch {
      return null;
    }
  }

  login(username: string, password: string): Observable<Sesion> {
    return this.http.post<Sesion>(`${this.base}/login`, { username, password }).pipe(tap((s) => this.aplicar(s)));
  }

  /** Recupera usuario y permisos con el token guardado. Devuelve false si no hay sesión válida. */
  restaurar(): Promise<boolean> {
    if (!this.token) return Promise.resolve(false);
    return new Promise((resolve) => {
      this.http.get<Sesion>(`${this.base}/me`).subscribe({
        next: (s) => {
          this.aplicar(s);
          resolve(true);
        },
        error: () => {
          this.limpiar();
          resolve(false);
        },
      });
    });
  }

  cambiarClave(actual: string, nueva: string): Observable<Sesion> {
    return this.http.post<Sesion>(`${this.base}/cambiar-clave`, { actual, nueva }).pipe(tap((s) => this.aplicar(s, true)));
  }

  logout(motivo?: string): void {
    this.limpiar();
    this.router.navigate(['/auth/login'], motivo ? { queryParams: { motivo } } : undefined);
  }

  puede(clave: string, accion: Accion = 'leer'): boolean {
    const u = this._usuario();
    if (!u) return false;
    if (u.superAdmin) return true;
    return this._permisos()[clave]?.[accion] === true;
  }

  /** Primera pantalla a la que el usuario puede entrar (destino tras el login). */
  primeraRuta(rutas: string[]): string {
    return rutas.find((r) => this.puede(r)) ?? '';
  }

  private aplicar(s: Sesion, conservarToken = false): void {
    if (s.token && !conservarToken) {
      try {
        sessionStorage.setItem(CLAVE_TOKEN, s.token);
      } catch {
        /* sin almacenamiento: la sesión dura lo que dure la pestaña en memoria */
      }
    }
    this._usuario.set(s.usuario);
    this._permisos.set(s.permisos ?? {});
  }

  private limpiar(): void {
    try {
      sessionStorage.removeItem(CLAVE_TOKEN);
    } catch {
      /* nada */
    }
    this._usuario.set(null);
    this._permisos.set({});
  }
}
