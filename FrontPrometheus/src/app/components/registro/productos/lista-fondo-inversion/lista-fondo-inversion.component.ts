import { Component, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CargaFondoInversionComponent } from "../carga-fondo-inversion/carga-fondo-inversion.component";
import { EditarFondoInversionComponent } from "../editar-fondo-inversion/editar-fondo-inversion.component";
import { FondoInversion } from '../../../../shared/models/producto/fondo-inversion';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroService } from '../../../../shared/services/registro.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-fondo-inversion',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatCheckboxModule, MatMenuModule, CargaFondoInversionComponent, EditarFondoInversionComponent],
  templateUrl: './lista-fondo-inversion.component.html',
  styleUrl: './lista-fondo-inversion.component.scss'
})
export class ListaFondoInversionComponent {
  filaEditar: FondoInversion = new FondoInversion;
  selectedRow: any;

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource!: MatTableDataSource<FondoInversion>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  displayedColumns: string[] = [
    'idFondoInversion',
    'codISIN',
    'codTicker',
    'desNemonico',
    'codTipoFondo',
    'codMoneda',
    'codPlaza',
    'codEmisor',
    'montoTotal',
    'fuenteInformacion',
    'flgCargaAutom',
    'flgActivo',
    'flgVar'
  ];

  constructor(private modalService: NgbModal, private registroService: RegistroService){}

  ngOnInit(){
    this.listarRegistros();
  }

  // ngAfterViewInit() {
  //   console.log('contextMenu:', this.menuTrigger);
  // }
  

  listarRegistros(){
    this.registroService.getListaFondoInversion().subscribe(
      (response: FondoInversion[]) => {
        this.dataSource = new MatTableDataSource<FondoInversion>(response);
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

  editar(row: FondoInversion, modal: any) {
    this.filaEditar = row;
    const modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  eliminar(row: FondoInversion) {
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
        this.registroService.eiminarFondoInversion(row.idFondoInversion).subscribe(
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
              icon: 'success',
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
