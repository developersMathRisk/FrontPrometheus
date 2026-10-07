import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { ToastService } from '../../../shared/services/toast.service';
import { Acceso, SesionService } from '../../../shared/services/sesion.service';
import { AdminService, Opcion, Rol, UsuarioAdmin } from '../admin.service';
import { MatrizPermisosComponent } from '../matriz-permisos/matriz-permisos.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, MatrizPermisosComponent],
  providers: [DatePipe],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent implements OnInit {
  private readonly api = inject(AdminService);
  private readonly toast = inject(ToastService);
  readonly sesion = inject(SesionService);

  usuarios: UsuarioAdmin[] = [];
  roles: Rol[] = [];
  opciones: Opcion[] = [];
  filtro = '';

  /** null = panel cerrado; 0 = usuario nuevo; otro = id en edición. */
  editando: number | null = null;
  form = this.vacio();
  guardando = false;
  error = '';
  /** Clave temporal recién generada: se muestra una sola vez. */
  temporal: { usuario: string; clave: string } | null = null;

  ngOnInit(): void {
    this.api.opciones().subscribe((o) => (this.opciones = o));
    this.api.roles().subscribe((r) => (this.roles = r));
    this.cargar();
  }

  cargar(): void {
    this.api.usuarios().subscribe((u) => (this.usuarios = u));
  }

  get visibles(): UsuarioAdmin[] {
    const q = this.filtro.trim().toLowerCase();
    return !q
      ? this.usuarios
      : this.usuarios.filter((u) => `${u.username} ${u.nombres} ${u.apellidos} ${u.email} ${u.rol}`.toLowerCase().includes(q));
  }

  get permisosDelRol(): Record<string, Acceso> | null {
    const r = this.roles.find((x) => x.id === this.form.idRol);
    return r && !r.superAdmin ? r.permisos : null;
  }

  get rolEsAdmin(): boolean {
    return !!this.roles.find((x) => x.id === this.form.idRol)?.superAdmin;
  }

  nuevo(): void {
    this.editando = 0;
    this.form = this.vacio();
    this.form.idRol = this.roles.find((r) => !r.superAdmin && r.activo)?.id ?? 0;
    this.error = '';
  }

  editar(u: UsuarioAdmin): void {
    this.editando = u.id;
    this.form = {
      username: u.username,
      email: u.email,
      nombres: u.nombres,
      apellidos: u.apellidos,
      idRol: u.idRol,
      activo: u.activo,
      permisosPropios: JSON.parse(JSON.stringify(u.permisosPropios)),
    };
    this.error = '';
  }

  cerrar(): void {
    this.editando = null;
  }

  guardar(): void {
    this.guardando = true;
    this.error = '';
    const { username, ...datos } = this.form;
    const peticion = this.editando === 0 ? this.api.crearUsuario({ username, ...datos }) : this.api.editarUsuario(this.editando!, datos);
    peticion.subscribe({
      next: (u) => {
        this.guardando = false;
        if (u.claveTemporal) this.temporal = { usuario: u.username, clave: u.claveTemporal };
        this.toast.mostrar(this.editando === 0 ? 'Usuario creado.' : 'Usuario actualizado.', 'exito');
        this.editando = null;
        this.cargar();
      },
      error: (e) => {
        this.guardando = false;
        this.error = e?.error?.message ?? 'No se pudo guardar el usuario.';
      },
    });
  }

  resetear(u: UsuarioAdmin): void {
    if (!confirm(`¿Restablecer la contraseña de ${u.username}? Se generará una clave temporal.`)) return;
    this.api.resetClave(u.id).subscribe({
      next: (r) => {
        this.temporal = { usuario: r.username, clave: r.claveTemporal! };
        this.cargar();
      },
      error: (e) => this.toast.mostrar(e?.error?.message ?? 'No se pudo restablecer.', 'error'),
    });
  }

  desbloquear(u: UsuarioAdmin): void {
    this.api.desbloquear(u.id).subscribe(() => {
      this.toast.mostrar('Usuario desbloqueado.', 'exito');
      this.cargar();
    });
  }

  alternarActivo(u: UsuarioAdmin): void {
    const cuerpo = { email: u.email, nombres: u.nombres, apellidos: u.apellidos, idRol: u.idRol, activo: !u.activo, permisosPropios: u.permisosPropios };
    this.api.editarUsuario(u.id, cuerpo).subscribe({
      next: () => {
        this.toast.mostrar(u.activo ? 'Usuario desactivado.' : 'Usuario activado.', 'exito');
        this.cargar();
      },
      error: (e) => this.toast.mostrar(e?.error?.message ?? 'No se pudo actualizar.', 'error'),
    });
  }

  copiar(): void {
    if (this.temporal) navigator.clipboard?.writeText(this.temporal.clave);
    this.toast.mostrar('Clave copiada.', 'info', 2000);
  }

  private vacio() {
    return {
      username: '',
      email: '',
      nombres: '',
      apellidos: '',
      idRol: 0,
      activo: true,
      permisosPropios: {} as Record<string, Acceso>,
    };
  }
}
