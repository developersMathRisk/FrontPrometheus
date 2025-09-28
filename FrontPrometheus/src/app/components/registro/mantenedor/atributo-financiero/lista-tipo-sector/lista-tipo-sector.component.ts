import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TipoSector } from '../../../../../shared/models/atributo-financiero/tipo-sector';
import { CargaTipoSectorComponent } from "../carga-tipo-sector/carga-tipo-sector.component";
import { EditarTipoSectorComponent } from "../editar-tipo-sector/editar-tipo-sector.component";

@Component({
  selector: 'app-lista-tipo-sector',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatCheckboxModule, MatMenuModule, CargaTipoSectorComponent, EditarTipoSectorComponent],
  templateUrl: './lista-tipo-sector.component.html',
  styleUrl: './lista-tipo-sector.component.scss'
})
export class ListaTipoSectorComponent {
  filaEditar: TipoSector = new TipoSector;
  selectedRow: any;

  modalRef: any;

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource!: MatTableDataSource<TipoSector>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'idTipoSector',
    'codTiposector',
    'descripcionTiposector'
  ];

  constructor(private modalService: NgbModal, private registroService: RegistroService){}

  ngOnInit(){
    this.listarRegistros();
  }

  listarRegistros(){
    this.registroService.getListaTipoSector().subscribe(
      (response: TipoSector[]) => {
        this.dataSource = new MatTableDataSource<TipoSector>(response);
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

  editar(row: TipoSector, modal: any) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  eliminar(row: TipoSector) {
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
        this.registroService.eiminarTipoAccion(row.idTipoSector).subscribe(
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
