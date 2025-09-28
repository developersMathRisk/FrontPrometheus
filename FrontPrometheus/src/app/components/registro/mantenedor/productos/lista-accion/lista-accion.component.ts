import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CargaAccionComponent } from "../carga-accion/carga-accion.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { Accion } from '../../../../../shared/models/producto/accion';
import { HttpErrorResponse } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditarAccionComponent } from "../editar-accion/editar-accion.component";
import Swal from 'sweetalert2';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-lista-accion',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatCheckboxModule, MatMenuModule, CargaAccionComponent, EditarAccionComponent],
  templateUrl: './lista-accion.component.html',
  styleUrl: './lista-accion.component.scss'
})
export class ListaAccionComponent {
  filaEditar: Accion = new Accion;
  selectedRow: any;

  modalRef: any;

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource!: MatTableDataSource<Accion>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'idAccion',
    'codISIN',
    'codTicker',
    'desNemonico',
    'flgCargaAutom',
    'codIndAsociado',
    'flgVar',
    'desPlaza',
    'desTipoAccion',
    'desFuenteInformacion',
    'nomEmisor',
    'desMoneda',
    'descripcionTiposector'
  ];

  constructor(private modalService: NgbModal, private registroService: RegistroService){}

  ngOnInit(){
    this.listarRegistros();
  }

  // ngAfterViewInit() {
  //   console.log('contextMenu:', this.menuTrigger);
  // }
  

  listarRegistros(){
    this.registroService.getListaAccion().subscribe(
      (response: Accion[]) => {
        this.dataSource = new MatTableDataSource<Accion>(response);
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
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  editar(row: Accion, modal: any) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  eliminar(row: Accion) {
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
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarAccion(row.idAccion).subscribe(
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
    this.modalRef.close();
    this.listarRegistros();
  }

}
