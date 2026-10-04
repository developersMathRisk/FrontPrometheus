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
import { TipoInstrumento } from '../../../../shared/models/atributo-financiero/tipo-instrumento';
import { DatePickerComponent } from '../../../../shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-carga-portafolio-producto',
  standalone: true,
  imports: [MatIconModule, NgSelectModule, FormsModule, FilePondModule, NgbNavModule, CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, CargaPortafolioComponent, CargaBonoComponent, CargaAccionComponent, CargaFondoInversionComponent, DatePickerComponent],
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

  dsResumen = new MatTableDataSource<PortafolioInstrumento>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'accion',
    'fechaValor',
    'descripcionPortafolio',
    // 'codISIN',
    'codticker',
    'cantidad',
    'precio',
  ];

  listPortafolio: Portafolio[] = [];
  listPortafolioFiltrado: Portafolio[] = [];
  listBenchmark: Benchmark[] = [];
  listBenchmarkFiltrado: Benchmark[] = [];
  listTipoInstrumento: TipoInstrumento[] = [];

  listPortafolioInstrumento: PortafolioInstrumento[] = [];
  objPortafolioInstrumento: PortafolioInstrumento = new PortafolioInstrumento();

  idPortafolio = '';

  idInstrumentoSeleccionado: string = '';
  idPortafolioSeleccionado: number = 0;
  idTipoInstrumentoSeleccionado: number = 0;

  objBenchmark: Benchmark = new Benchmark();

  txtFiltroNombrePortafolio: string = '';
  txtFiltroNombreInstrumento: string = '';

  txtDesPortafolioSeleccionado: string = '';

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
        this.listPortafolioFiltrado = this.listPortafolio;
      }
    )
  }

  obtenerListBenchmark() {
    this.registroService.getListaBenchmark().subscribe(
      (response: Benchmark[]) => {
        this.listBenchmark = response.filter(i => i.idTipoInstrumento != null);
        this.listBenchmarkFiltrado = this.listBenchmark;
        this.filtrarInstrumentos();
      }
    )
  }

  obtenerListTipoInstrumento() {
    this.registroService.getListaTipoInstrumento().subscribe(
      (response: TipoInstrumento[]) => {
        this.listTipoInstrumento = [
          { idTipoInstrumento: 0, descripcionTipoInstrumento: 'Todos' } as TipoInstrumento,
          ...response
        ];
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
      switch(this.idTipoInstrumentoSeleccionado){
        case 1:
          modal = this.cargaModalAccion;
          break;
        case 2:
          modal = this.cargaModalBono;
          break;
        case 3:
          modal = this.cargaModalFondoInversion;
          break;
      }
    }
    
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListPortafolio();
    this.obtenerListBenchmark();
    this.obtenerListTipoInstrumento();
  }

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}

  seleccionarPortafolio(id: number) {
    this.idPortafolioSeleccionado = id;
  }

  seleccionarInstrumento(id: string) {
    this.idInstrumentoSeleccionado = id;
    this.objBenchmark = this.listBenchmarkFiltrado.filter(e => e.codBenchmark == this.idInstrumentoSeleccionado)[0];
  }

  agregarRelacion(){
    this.objPortafolioInstrumento.idPortafolio = this.idPortafolioSeleccionado;
    this.objPortafolioInstrumento.idTipoInstrumento = this.objBenchmark.idTipoInstrumento;
    this.objPortafolioInstrumento.codISIN = this.objBenchmark.codBenchmark;
    this.objPortafolioInstrumento.codticker = this.objBenchmark.descripcionBenchmark;
    this.objPortafolioInstrumento.descripcionPortafolio = this.listPortafolio.filter(e => e.idPortafolio == this.idPortafolioSeleccionado)[0].descripcionPortafolio;
    this.listPortafolioInstrumento.push(this.objPortafolioInstrumento);
    this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listPortafolioInstrumento);
    this.dsResumen.paginator = this.paginator;
    this.dsResumen.sort = this.sort;
    this.objPortafolioInstrumento = new PortafolioInstrumento();

    this.idPortafolioSeleccionado = 0;
    this.idInstrumentoSeleccionado = '';
  }

  eliminarRelacion(element:any){
    this.listPortafolioInstrumento = this.listPortafolioInstrumento.filter(obj => obj !== element);
    this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listPortafolioInstrumento);
    this.dsResumen.paginator = this.paginator;
    this.dsResumen.sort = this.sort;
    this.objPortafolioInstrumento = new PortafolioInstrumento();
  }

  registrar(){
    this.listPortafolioInstrumento.map(e => e.descripcionPortafolio = '');
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
        this.dsResumen = new MatTableDataSource<PortafolioInstrumento>(this.listPortafolioInstrumento);
        this.dsResumen.paginator = this.paginator;
        this.dsResumen.sort = this.sort;
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

  filtrarInstrumentos(){
    const filtro = this.txtFiltroNombreInstrumento.toLowerCase();
    this.listBenchmarkFiltrado = this.listBenchmark.filter(i => (this.idTipoInstrumentoSeleccionado == 0 || i .idTipoInstrumento == this.idTipoInstrumentoSeleccionado) && i.descripcionBenchmark?.toLowerCase().includes(filtro));
  }

  filtrarPortafolios(){
    const filtro = this.txtFiltroNombrePortafolio.toLowerCase();
    this.listPortafolioFiltrado = this.listPortafolio.filter(p => p.descripcionPortafolio?.toLowerCase().includes(filtro));
  }
}
