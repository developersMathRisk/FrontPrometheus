import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/components/encabezado/encabezado.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { mensajeDeError } from '../../../../shared/components/tabla-estado/tabla-estado.component';
import { ToastService } from '../../../../shared/services/toast.service';
import { Contraparte, CuentaBancaria, Custodia, TesoreriaService } from '../../../../shared/services/tesoreria.service';

type Maestro = 'contrapartes' | 'custodias' | 'cuentas';

/**
 * Back Office · Maestros de tesorería: contrapartes (con la regla "exige ID de subasta"), custodias y cuentas
 * bancarias. El saldo de una cuenta se puede fijar como saldo inicial hasta su primera liquidación; después
 * solo lo mueven las operaciones liquidadas.
 */
@Component({
  selector: 'app-maestros-tesoreria',
  standalone: true,
  imports: [CommonModule, FormsModule, EncabezadoComponent, LoaderComponent],
  templateUrl: './maestros-tesoreria.component.html',
  styleUrl: './maestros-tesoreria.component.scss',
})
export class MaestrosTesoreriaComponent implements OnInit {
  private readonly api = inject(TesoreriaService);
  private readonly toast = inject(ToastService);

  maestro: Maestro = 'contrapartes';
  contrapartes: Contraparte[] = [];
  custodias: Custodia[] = [];
  cuentas: CuentaBancaria[] = [];
  cargando = false;

  /** Fila en edición (nueva o existente); null si no se está editando. */
  edicion: any = null;
  guardando = false;

  readonly tiposContraparte = ['BANCO', 'SAB', 'BCRP', 'OTRO'];
  readonly monedas = ['PEN', 'USD', 'EUR'];

  ngOnInit(): void {
    this.cargar();
  }

  cambiar(m: Maestro) {
    this.maestro = m;
    this.edicion = null;
    this.cargar();
  }

  cargar() {
    this.cargando = true;
    const fin = () => (this.cargando = false);
    if (this.maestro === 'contrapartes') this.api.maestros<Contraparte>('contrapartes').subscribe({ next: r => { this.contrapartes = r.sort((a, b) => a.nombre.localeCompare(b.nombre)); fin(); }, error: fin });
    if (this.maestro === 'custodias') this.api.maestros<Custodia>('custodias').subscribe({ next: r => { this.custodias = r.sort((a, b) => a.nombre.localeCompare(b.nombre)); fin(); }, error: fin });
    if (this.maestro === 'cuentas') this.api.maestros<CuentaBancaria>('cuentas').subscribe({ next: r => { this.cuentas = r; fin(); }, error: fin });
  }

  nuevo() {
    this.edicion = this.maestro === 'contrapartes' ? { nombre: '', tipo: 'BANCO', exigeSubasta: false, activo: true }
      : this.maestro === 'custodias' ? { nombre: '', cuenta: '', activo: true }
      : { banco: '', moneda: 'PEN', numero: '', saldo: 0, activo: true };
  }

  editar(registro: any) {
    this.edicion = { ...registro };
  }

  guardar() {
    this.guardando = true;
    this.api.guardarMaestro(this.maestro, this.edicion).subscribe({
      next: () => { this.guardando = false; this.edicion = null; this.toast.mostrar('Guardado.', 'exito'); this.cargar(); },
      error: (e: HttpErrorResponse) => { this.guardando = false; this.toast.mostrar(mensajeDeError(e), 'error', 7000); },
    });
  }

  alternarActivo(registro: any) {
    this.api.guardarMaestro(this.maestro, { ...registro, activo: !registro.activo }).subscribe({
      next: () => this.cargar(),
      error: (e: HttpErrorResponse) => this.toast.mostrar(mensajeDeError(e), 'error'),
    });
  }
}
