import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../../shared/services/registro.service';
import { PrecioMercado } from '../../../../../shared/models/factor/precio-mercado';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CargaPrecioMercadoComponent } from "../carga-precio-mercado/carga-precio-mercado.component";
import { EditarPrecioMercadoComponent } from "../editar-precio-mercado/editar-precio-mercado.component";
import { TablaToolbarComponent } from '../../../../../shared/components/tabla-toolbar/tabla-toolbar.component';
import { EstadoTabla, TablaEstadoComponent, mensajeDeError } from '../../../../../shared/components/tabla-estado/tabla-estado.component';
import { RangoFechas, RangoFechasComponent } from '../../../../../shared/components/rango-fechas/rango-fechas.component';

@Component({
  selector: 'app-lista-precio-mercado',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatCheckboxModule, MatMenuModule, CargaPrecioMercadoComponent, EditarPrecioMercadoComponent, TablaToolbarComponent, TablaEstadoComponent, RangoFechasComponent],
  templateUrl: './lista-precio-mercado.component.html',
  styleUrl: './lista-precio-mercado.component.scss'
})
export class ListaPrecioMercadoComponent {
  filaEditar: PrecioMercado = new PrecioMercado;
  selectedRow: any;

  modalRef: any;

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource!: MatTableDataSource<PrecioMercado>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;

  cargando = true;
  mensajeError = '';
  total = 0;
  busqueda = '';
  // El rango ya no filtra en el cliente: se lo pide al backend (antes se traia la tabla completa).
  rango: RangoFechas = RangoFechasComponent.ultimosDias(30);
  verTodasLasColumnas = false;

  readonly columnasNumericas = [
    { campo: 'numPrecioLimpio', titulo: 'Precio Limpio', formato: '1.2-6' },
    { campo: 'numPrecioSucio', titulo: 'Precio Sucio', formato: '1.2-6' },
    { campo: 'numInteresCorrido', titulo: 'Interés Corrido', formato: '1.2-6' },
    { campo: 'numTIR', titulo: 'TIR', formato: '1.2-6' },
    { campo: 'numDurMacaulay', titulo: 'Dur. Macaulay', formato: '1.2-6' },
    { campo: 'numDurModified', titulo: 'Dur. Modificada', formato: '1.2-6' },
    { campo: 'numConvexidad', titulo: 'Convexidad', formato: '1.2-6' },
    { campo: 'numValorFacial', titulo: 'Valor Facial', formato: '1.2-6' },
    { campo: 'numTasaCupon', titulo: 'Tasa Cupón (%)', formato: '1.2-6' }
  ];

  // Vista por defecto: lo esencial de un precio. El resto (renta fija) queda a un clic.
  private readonly columnasBasicas: string[] = [
    'fecProceso',
    'nemonico',
    'codISIN',
    'numPrecioLimpio',
    'moneda',
    'codFuenteDatos',
    'acciones'
  ];
  private readonly columnasCompletas: string[] = [
    'idVectorPrecio',
    'fecProceso',
    'nemonico',
    'codISIN',
    'numPrecioLimpio',
    'numPrecioSucio',
    'numInteresCorrido',
    'numTIR',
    'numDurMacaulay',
    'numDurModified',
    'numConvexidad',
    'numValorFacial',
    'numTasaCupon',
    'maturity',
    'moneda',
    'codFuenteDatos',
    'acciones'
  ];

  get displayedColumns(): string[] {
    return this.verTodasLasColumnas ? this.columnasCompletas : this.columnasBasicas;
  }

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
    this.registroService.getListaPrecioMercado(this.rango.desde, this.rango.hasta).subscribe(
      (response: PrecioMercado[]) => {
        // Orden inicial: fecha más reciente primero y, dentro de cada fecha, por nemónico
        const ordenados = [...response].sort((a, b) => (a.nemonico ?? '').localeCompare(b.nemonico ?? ''));
        this.dataSource = new MatTableDataSource<PrecioMercado>(ordenados);
        this.dataSource.filterPredicate = (fila, filtro) => this.coincide(fila, filtro);
        this.dataSource.sortingDataAccessor = (fila, columna) =>
          columna === 'moneda' ? (fila.desMoneda ?? fila.idMoneda ?? '') : (fila as any)[columna];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.total = response.length;
        this.cargando = false;
        this.aplicarFiltros();
      },
      (error: HttpErrorResponse) => {
        this.cargando = false;
        this.mensajeError = mensajeDeError(error);
      }
    )
  }

  // ---- búsqueda y filtros -------------------------------------------------

  buscar(texto: string) {
    this.busqueda = texto;
    this.aplicarFiltros();
  }

  alCambiarRango(rango: RangoFechas) {
    this.rango = rango;
    this.listarRegistros();
  }

  limpiarFiltros() {
    this.busqueda = '';
    this.rango = RangoFechasComponent.ultimosDias(30);
    this.listarRegistros();
  }

  private aplicarFiltros() {
    if (!this.dataSource) return;
    this.dataSource.filter = JSON.stringify({ texto: this.normalizar(this.busqueda.trim()) });
    this.dataSource.paginator?.firstPage();
  }

  private coincide(fila: PrecioMercado, filtro: string): boolean {
    const { texto } = JSON.parse(filtro);
    const fecha = String(fila.fecProceso ?? '').slice(0, 10); // yyyy-MM-dd
    if (!texto) return true;
    const [anio, mes, dia] = fecha.split('-');
    const enDdMmYyyy = `${dia}/${mes}/${anio}`;
    const contenido = [fila.nemonico, fila.codISIN, fila.codFuenteDatos, fila.desMoneda, fecha, enDdMmYyyy].join(' ');
    return this.normalizar(contenido).includes(texto);
  }

  private normalizar(valor: string): string {
    return (valor ?? '').toString().toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
  }

  // ---- acciones de fila ---------------------------------------------------

  onContextMenu(event: MouseEvent, item: any) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.openMenu();
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

  registrar(modal: any){
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  editar(row: PrecioMercado, modal: any) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, {windowClass: 'my-classModal', backdrop: 'static', keyboard: false, size:'xl'});//size: sm, lg, xl
  }

  eliminar(row: PrecioMercado) {
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
        this.registroService.eiminarPrecioMercado(row.idVectorPrecio).subscribe(
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
