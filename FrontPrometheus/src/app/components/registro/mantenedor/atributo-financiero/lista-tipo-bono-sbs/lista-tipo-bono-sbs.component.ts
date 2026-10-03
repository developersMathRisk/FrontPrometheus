import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { TipoBono } from '../../../../../shared/models/atributo-financiero/tipo-bono-sbs';
import { CargaTipoBonoSbsComponent } from "../carga-tipo-bono-sbs/carga-tipo-bono-sbs.component";
import { EditarTipoBonoSbsComponent } from "../editar-tipo-bono-sbs/editar-tipo-bono-sbs.component";
import { TablaToolbarComponent } from '../../../../../shared/components/tabla-toolbar/tabla-toolbar.component';
import { EstadoTabla, TablaEstadoComponent, mensajeDeError } from '../../../../../shared/components/tabla-estado/tabla-estado.component';

@Component({
  selector: 'app-lista-tipo-bono-sbs',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatMenuModule, CargaTipoBonoSbsComponent, EditarTipoBonoSbsComponent, TablaToolbarComponent, TablaEstadoComponent],
  templateUrl: './lista-tipo-bono-sbs.component.html',
  styleUrl: './lista-tipo-bono-sbs.component.scss'
})
export class ListaTipoBonoSbsComponent {
  filaEditar: TipoBono = new TipoBono;
  selectedRow: any;

  modalRef: any;

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource!: MatTableDataSource<TipoBono>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;
  cargando = true;
  mensajeError = '';
  total = 0;
  busqueda = '';

  readonly displayedColumns: string[] = [
    'idTipoBono',
    'descripcionTipoBono',
    'acciones',
  ];

  get filtrados(): number {
    return this.dataSource?.filteredData?.length ?? 0;
  }

  get estadoTabla(): EstadoTabla {
    if (this.cargando) return 'cargando';
    if (this.mensajeError) return 'error';
    if (this.total === 0) return 'vacio';
    if (this.filtrados === 0) return 'sin-resultados';
    return null;
  }

  constructor(private modalService: NgbModal, private registroService: RegistroService){}

  ngOnInit(){
    this.listarRegistros();
  }

  listarRegistros(){
    this.cargando = true;
    this.mensajeError = '';
    this.registroService.getListaTipoBono().subscribe(
      (response: TipoBono[]) => {
        this.dataSource = new MatTableDataSource<TipoBono>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.total = response.length;
        this.cargando = false;
        this.buscar(this.busqueda);
      },
      (error: HttpErrorResponse) => {
        this.cargando = false;
        this.mensajeError = mensajeDeError(error);
      }
    )
  }

  buscar(texto: string) {
    this.busqueda = texto;
    if (!this.dataSource) return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }

  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event: MouseEvent, item: any) {
    event.stopPropagation();
    const boton = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + 'px';
    this.contextMenuPosition.y = boton.bottom + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? 'keyboard' : 'mouse');
    this.contextMenu.openMenu();
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

  editar(row: TipoBono, modal: any) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  eliminar(row: TipoBono) {
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
        this.registroService.eiminarTipoBono(row.idTipoBono).subscribe(
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
