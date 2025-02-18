import { Component, ViewChild } from '@angular/core';
import { Bono } from '../../../../shared/models/producto/bono';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroService } from '../../../../shared/services/registro.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CargaBonoComponent } from '../carga-bono/carga-bono.component';
import { EditarBonoComponent } from '../editar-bono/editar-bono.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-lista-bono',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatCheckboxModule, MatMenuModule, CargaBonoComponent, EditarBonoComponent],
  templateUrl: './lista-bono.component.html',
  styleUrl: './lista-bono.component.scss'
})
export class ListaBonoComponent {

  filaEditar: Bono = new Bono;
  selectedRow: any;

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource!: MatTableDataSource<Bono>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'idBono',
    'codISIN',
    'desNemonico',
    'codMetoAmortizac',
    'fecInicio',
    'fecVcto',
    'flgRevisado',
    'flgProrrateo',
    'flgValCirc',
    'numTasaCupon',
    'numSpreadTasaVar',
    'codFrecuenciaPago',
    'codFormulaTasa',
    'flgTipoPago',
    'codBaseCalculoIc',
    'codBaseCalculoDcto',
    'codTipoTasa',
    'codTasaRjte',
    'mtoSpreadLiquidez',
    'mtoSpreadEmision',
    'flgFicticio',
    'codCurvaReferencia',
    'codTipoBonoCVG',
    'flgOpcionCall',
    'codBaseCalculoFlujo',
    'codISINSOBGDN',
    'desResetIndex',
    'codEmisor',
    'codMoneda',
    'codTipoBonoSbs'
  ];

  constructor(private modalService: NgbModal, private registroService: RegistroService){}

  ngOnInit(){
    this.listarRegistros();
  }

  listarRegistros(){
    this.registroService.getListaBono().subscribe(
      (response: Bono[]) => {
        this.dataSource = new MatTableDataSource<Bono>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onContextMenu(event: MouseEvent, item: any) {
    event.preventDefault();
    this.selectedRow = item; 
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  registrar(modal: any){
    const modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  editar(row: any, modal: any) {
    this.filaEditar = row;
    const modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  eliminar(row: Bono) {
    Swal.fire({
      title: '¿Está seguro de eliminar este registro?',
      text: 'Esta eliminación no puede deshacerse.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.eiminarBono(row.idBono).subscribe(
          (response: any) => {
            this.listarRegistros();
            Swal.fire({
              icon: 'success',
              title: 'Eliminación exitosa',
              text: 'El registro ha sido eliminado correctamente.',
              confirmButtonText: 'Aceptar'
            });
          },
          (error: HttpErrorResponse) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.message,
              confirmButtonText: 'Aceptar'
            });
          }
        );
      }
    });
  }

  cerrarModal(event: any){
    this.listarRegistros();
  }

}
