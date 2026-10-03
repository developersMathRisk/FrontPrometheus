import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { BonoCupon } from '../../../../../shared/models/producto/bono-cupon';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Bono } from '../../../../../shared/models/producto/bono';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { CommonModule } from '@angular/common';
import { ModalFormularioComponent } from '../../../../../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-carga-bono-cupon',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, MatTableModule, MatSortModule, MatPaginatorModule, FilePondModule, NgbNavModule, CommonModule, ModalFormularioComponent],
  templateUrl: './carga-bono-cupon.component.html',
  styleUrl: './carga-bono-cupon.component.scss'
})
export class CargaBonoCuponComponent {
  @Input() data!: Bono;
  @Output() close = new EventEmitter<any>();
  
  nuevoRegistro: BonoCupon[] = [];

  dataSource = new MatTableDataSource<BonoCupon>(this.nuevoRegistro);
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'codISIN',
    'numeroCuota',
    'fechaPago',
    'diasPeriodo',
    'interesCalculado',
    'amortizacionCapital',
    'saldoCapital',
    'interesesMoratorios',
    'estadoPago',
    'fechaPagoReal',
    'observaciones'
  ];

  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Seleccione un archivo o arrástelo aquí...",
  };
  pondFiles: FilePond.FilePondOptions["files"] = [];

  get faltantes(): string[] {
    if (this.nuevoRegistro.length === 0) {
      return ['Cupones (agregue al menos una fila)'];
    }
    const incompleto = this.nuevoRegistro.some(c => !c.numeroCuota || !c.fechaPago);
    return incompleto ? ['Cuota y fecha de pago de cada fila'] : [];
  }

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  registrar(){
    if (this.faltantes.length > 0) return;
    this.nuevoRegistro.map(i => i.idBono = this.data.idBono);
    this.registroService.postRegistrarCuponerXBono(this.nuevoRegistro).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La cuponera ha sido registrada correctamente.',
          confirmButtonText: 'Aceptar'
        });
        this.cerrar();
      },
      (error: HttpErrorResponse) =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          confirmButtonText: 'Aceptar'
        });
      }
    )
  }

  cerrar(){
    this.close.emit();
    //this.modalService.dismissAll();
  }

  addData() {
    let objCupon: BonoCupon = new BonoCupon();
    // Valores de partida para ahorrar digitación: el ISIN del bono, el siguiente número de cuota y estado pendiente
    objCupon.codISIN = this.data?.codISIN;
    objCupon.numeroCuota = this.nuevoRegistro.length + 1;
    objCupon.estadoPago = 'PENDIENTE';
    objCupon.interesesMoratorios = 0;

    this.nuevoRegistro.push(objCupon);
    this.nuevoRegistro = [...this.nuevoRegistro];

    this.dataSource = new MatTableDataSource<BonoCupon>(this.nuevoRegistro);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  removeData() {
    this.nuevoRegistro.pop();
    this.nuevoRegistro = [...this.nuevoRegistro];
    this.dataSource = new MatTableDataSource<BonoCupon>(this.nuevoRegistro);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}
}
