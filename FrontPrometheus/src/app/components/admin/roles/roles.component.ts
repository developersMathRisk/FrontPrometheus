import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { ToastService } from '../../../shared/services/toast.service';
import { Acceso } from '../../../shared/services/sesion.service';
import { AdminService, Opcion, Rol } from '../admin.service';
import { MatrizPermisosComponent } from '../matriz-permisos/matriz-permisos.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, MatrizPermisosComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  private readonly api = inject(AdminService);
  private readonly toast = inject(ToastService);

  roles: Rol[] = [];
  opciones: Opcion[] = [];
  seleccionado: Rol | null = null;
  esNuevo = false;

  nombre = '';
  descripcion = '';
  activo = true;
  permisos: Record<string, Acceso> = {};
  guardando = false;
  error = '';

  ngOnInit(): void {
    this.api.opciones().subscribe((o) => (this.opciones = o));
    this.cargar();
  }

  cargar(seleccionarId?: number): void {
    this.api.roles().subscribe((r) => {
      this.roles = r;
      const destino = r.find((x) => x.id === (seleccionarId ?? this.seleccionado?.id));
      if (destino) this.elegir(destino);
    });
  }

  elegir(r: Rol): void {
    this.esNuevo = false;
    this.seleccionado = r;
    this.nombre = r.nombre;
    this.descripcion = r.descripcion ?? '';
    this.activo = r.activo;
    this.permisos = JSON.parse(JSON.stringify(r.permisos));
    this.error = '';
  }

  nuevo(): void {
    this.esNuevo = true;
    this.seleccionado = null;
    this.nombre = '';
    this.descripcion = '';
    this.activo = true;
    this.permisos = {};
    this.error = '';
  }

  get soloLectura(): boolean {
    return !!this.seleccionado?.superAdmin;
  }

  guardar(): void {
    this.guardando = true;
    this.error = '';
    const cuerpo = { nombre: this.nombre, descripcion: this.descripcion, activo: this.activo, permisos: this.permisos };
    const peticion = this.esNuevo ? this.api.crearRol(cuerpo) : this.api.editarRol(this.seleccionado!.id, cuerpo);
    peticion.subscribe({
      next: (r) => {
        this.guardando = false;
        this.toast.mostrar(this.esNuevo ? 'Rol creado.' : 'Rol actualizado.', 'exito');
        this.cargar(r.id);
      },
      error: (e) => {
        this.guardando = false;
        this.error = e?.error?.message ?? 'No se pudo guardar el rol.';
      },
    });
  }

  eliminar(): void {
    const r = this.seleccionado;
    if (!r || !confirm(`¿Eliminar el rol «${r.nombre}»? Esta acción no se puede deshacer.`)) return;
    this.api.eliminarRol(r.id).subscribe({
      next: () => {
        this.toast.mostrar('Rol eliminado.', 'exito');
        this.seleccionado = null;
        this.cargar();
      },
      error: (e) => (this.error = e?.error?.message ?? 'No se pudo eliminar el rol.'),
    });
  }
}
