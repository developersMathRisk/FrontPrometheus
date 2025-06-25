import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { RegistroService } from '../../../../shared/services/registro.service';
import { PortafolioInstrumento } from '../../../../shared/models/portafolio/portafolio-instrumento';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CargaPortafolioComponent } from "../../mantenedor/portafolio/carga-portafolio/carga-portafolio.component";
import { CargaBonoComponent } from "../../mantenedor/productos/carga-bono/carga-bono.component";
import { CargaAccionComponent } from "../../mantenedor/productos/carga-accion/carga-accion.component";
import { CargaFondoInversionComponent } from "../../mantenedor/productos/carga-fondo-inversion/carga-fondo-inversion.component";
import { Benchmark } from '../../../../shared/models/portafolio/benchmark';
import { TipoInstrumento } from '../../../../shared/models/producto/tipo-instrumento';

@Component({
  selector: 'app-carga-portafolio-producto',
  standalone: true,
  imports: [MatIconModule, NgSelectModule, FormsModule, FilePondModule, NgbNavModule, CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, CargaPortafolioComponent, CargaBonoComponent, CargaAccionComponent, CargaFondoInversionComponent],
  templateUrl: './carga-portafolio-producto.component.html',
  styleUrl: './carga-portafolio-producto.component.scss'
})
export class CargaPortafolioProductoComponent {
  @Output() close = new EventEmitter<any>();
  modalRef: any;
  @ViewChild('cargaModalPortafolio') cargaModalPortafolio!: TemplateRef<any>;
  @ViewChild('cargaModalBono') cargaModalBono!: TemplateRef<any>;
  @ViewChild('cargaModalAccion') cargaModalAccion!: TemplateRef<any>;
  @ViewChild('cargaModalFondoInversion') cargaModalFondoInversion!: TemplateRef<any>;

  dataSource = new MatTableDataSource<PortafolioInstrumento>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'accion',
    // 'codISIN',
    // 'codticker',
    'cantidad',
    'precio',
  ];

  listPortafolio: Portafolio[] = [];
  listBenchmark: Benchmark[] = [];
  listTipoInstrumento: TipoInstrumento[] = [];

  listPortafolioInstrumento: PortafolioInstrumento[] = [];
  objPortafolioInstrumento: PortafolioInstrumento = new PortafolioInstrumento();

  idPortafolio = '';

  idInstrumentoSeleccionado: string = '';
  idPortafolioSeleccionado: number = 0;
  idTipoInstrumentoSeleccionado: string = '';

  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Seleccione un archivo o arrástelo aquí...",
  };
  pondFiles: FilePond.FilePondOptions["files"] = [];

  constructor(private registroService: RegistroService,private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListPortafolio();
    this.obtenerListBenchmark();
    this.obtenerListTipoInstrumento();
  }

  obtenerListPortafolio() {
    this.registroService.getListaPortafolio().subscribe(
      (response: Portafolio[]) => {
        this.listPortafolio = response;
      }
    )
  }

  obtenerListBenchmark() {
    this.registroService.getListaBenchmark().subscribe(
      (response: Benchmark[]) => {
        this.listBenchmark = response;
      }
    )
  }

  obtenerListTipoInstrumento() {
    this.registroService.getListaTipoInstrumento().subscribe(
      (response: TipoInstrumento[]) => {
        this.listTipoInstrumento = response;
      }
    )
  }

  nuevoPortafolio(){

  }

  cerrar(){
    this.close.emit();
  }

  abrirModalSecundario(tipoModal: string){
    let modal: any;
    if(tipoModal == 'portafolio'){
      modal = this.cargaModalPortafolio
    }
    else if(tipoModal == 'instrumento'){
      modal = this.cargaModalBono
    }
    
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListPortafolio();
  }

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}

  seleccionarPortafolio(id: number) {
    this.idPortafolioSeleccionado = id;
  }

  seleccionarInstrumento(id: string) {
    this.idInstrumentoSeleccionado = id;
  }

  agregarRelacion(){
    this.objPortafolioInstrumento.idPortafolio = this.idPortafolioSeleccionado;
    this.listPortafolioInstrumento.push(this.objPortafolioInstrumento);
    this.dataSource = new MatTableDataSource<PortafolioInstrumento>(this.listPortafolioInstrumento);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.objPortafolioInstrumento = new PortafolioInstrumento();

    this.idPortafolioSeleccionado = 0;
    this.idInstrumentoSeleccionado = '';
  }

  eliminarRelacion(element:any){
    this.listPortafolioInstrumento = this.listPortafolioInstrumento.filter(obj => obj !== element);
    this.dataSource = new MatTableDataSource<PortafolioInstrumento>(this.listPortafolioInstrumento);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.objPortafolioInstrumento = new PortafolioInstrumento();
  }

  registrar(){
    this.registroService.postRegistrarPortafolioInstrumentoMasivo(this.listPortafolioInstrumento).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La asignación ha sido registrada correctamente.',
          confirmButtonText: 'Aceptar'
        });
        this.idPortafolioSeleccionado = 0;
        this.idInstrumentoSeleccionado = '';
        this.listPortafolioInstrumento = [];
        this.dataSource = new MatTableDataSource<PortafolioInstrumento>(this.listPortafolioInstrumento);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.objPortafolioInstrumento = new PortafolioInstrumento();
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
}
