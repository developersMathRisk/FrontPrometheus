import { Component, ViewChild } from '@angular/core';
import { Moneda } from '../../../../shared/models/atributo-financiero/moneda';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroService } from '../../../../shared/services/registro.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { CargaMonedaComponent } from "../../mantenedor/atributo-financiero/carga-moneda/carga-moneda.component";
import { Portafolio } from '../../../../shared/models/portafolio/portafolio';
import { CargaPortafolioComponent } from "../../mantenedor/portafolio/carga-portafolio/carga-portafolio.component";
import { TipoInstrumento } from '../../../../shared/models/atributo-financiero/tipo-instrumento';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PortafolioInstrumento } from '../../../../shared/models/portafolio/portafolio-instrumento';
import { CommonModule } from '@angular/common';
import { VarSimulacionGeneral } from '../../../../shared/models/var/var-simulacion-general';

@Component({
  selector: 'app-ejecutar-var',
  standalone: true,
  imports: [NgSelectModule, FormsModule, MatIconModule, CargaMonedaComponent, CargaPortafolioComponent, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule],
  templateUrl: './ejecutar-var.component.html',
  styleUrl: './ejecutar-var.component.scss'
})
export class EjecutarVarComponent {
  idPortafolioSeleccionado: number = 0;
  valor: number = 0;
  moneda: string = '';
  fechaPortafolio: Date = new Date();
  horizonteTiempo: number = 0;
  flgControl: boolean = true;
  listTipoInstrumentoSeleccionado: any[] = [];

  flgMostrarResultados: boolean = false;

  listaPortafolio: Portafolio[] = [];
  listMoneda: Moneda[] = [];
  listTipoInstrumento: TipoInstrumento[] = [];

  objVarSimulacionGeneral: VarSimulacionGeneral = new VarSimulacionGeneral();
  
  modalRef: any;

  dsResumen!: MatTableDataSource<PortafolioInstrumento>;
  @ViewChild('paginator') paginatorResumen!: MatPaginator;
  @ViewChild('sort') sortResumen!: MatSort;
  displayedColumnsResumen: string[] = [
    'descripcionPortafolio',
    'descripcionTipoInstrumento',
    'codISIN',
    'codticker'
  ];

  constructor(private registroService: RegistroService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.obtenerListPortafolio();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }

  obtenerListPortafolio(){
    this.registroService.getListaPortafolio().subscribe(
      (response: Portafolio[]) => {
        this.listaPortafolio = response;
      }
    )
  }

  obtenerListMoneda(){
    this.registroService.getListaMoneda().subscribe(
      (response: Moneda[]) => {
        this.listMoneda = response;
      }
    )
  }

  obtenerListTipoInstrumento() {
    this.registroService.getListaTipoInstrumento().subscribe(
      (response: TipoInstrumento[]) => {
        // this.listTipoInstrumento = [
        //   { idTipoInstrumento: 0, descripcionTipoInstrumento: 'Todos' } as TipoInstrumento,
        //   ...response
        // ];
        this.listTipoInstrumento = response;
      }
    )
  }

  ejecutarCalculoVar(){
    this.flgMostrarResultados = true;
  }

  abrirModalSecundario(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  cerrarModalSecundario(event: any){
    this.modalRef.close();
    this.obtenerListPortafolio();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }
}
