import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Acceso } from '../../shared/services/sesion.service';

export interface Opcion {
  clave: string;
  etiqueta: string;
  grupo: string;
}

export interface Rol {
  id: number;
  nombre: string;
  descripcion: string;
  superAdmin: boolean;
  activo: boolean;
  usuarios: number;
  permisos: Record<string, Acceso>;
}

export interface UsuarioAdmin {
  id: number;
  username: string;
  email: string;
  nombres: string;
  apellidos: string;
  idRol: number;
  rol: string;
  activo: boolean;
  bloqueado: boolean;
  debeCambiarClave: boolean;
  ultimoAcceso: string | null;
  permisosPropios: Record<string, Acceso>;
  claveTemporal: string | null;
}

export interface UsuarioForm {
  username?: string;
  email: string;
  nombres: string;
  apellidos: string;
  idRol: number;
  activo: boolean;
  permisosPropios: Record<string, Acceso>;
}

export interface RolForm {
  nombre: string;
  descripcion: string;
  activo: boolean;
  permisos: Record<string, Acceso>;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseURL}/admin`;

  opciones(): Observable<Opcion[]> {
    return this.http.get<Opcion[]>(`${this.base}/opciones`);
  }
  roles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.base}/roles`);
  }
  crearRol(r: RolForm): Observable<Rol> {
    return this.http.post<Rol>(`${this.base}/roles`, r);
  }
  editarRol(id: number, r: RolForm): Observable<Rol> {
    return this.http.put<Rol>(`${this.base}/roles/${id}`, r);
  }
  eliminarRol(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/roles/${id}`);
  }
  usuarios(): Observable<UsuarioAdmin[]> {
    return this.http.get<UsuarioAdmin[]>(`${this.base}/usuarios`);
  }
  crearUsuario(u: UsuarioForm): Observable<UsuarioAdmin> {
    return this.http.post<UsuarioAdmin>(`${this.base}/usuarios`, u);
  }
  editarUsuario(id: number, u: UsuarioForm): Observable<UsuarioAdmin> {
    return this.http.put<UsuarioAdmin>(`${this.base}/usuarios/${id}`, u);
  }
  resetClave(id: number): Observable<UsuarioAdmin> {
    return this.http.post<UsuarioAdmin>(`${this.base}/usuarios/${id}/reset-clave`, {});
  }
  desbloquear(id: number): Observable<UsuarioAdmin> {
    return this.http.post<UsuarioAdmin>(`${this.base}/usuarios/${id}/desbloquear`, {});
  }
}
