import {
  CargaSkewPointComponent,
  CargaTermVolatilidadComponent,
  CargaTipoCambioComponent,
  SkewPoint,
  TermVolatilidad,
  TipoCambio
} from "./chunk-5CDLZWUB.js";
import {
  TablaToolbarComponent
} from "./chunk-GNUHOFZQ.js";
import {
  CalculoBaseInteres,
  CargaCalculoBaseInteresComponent,
  CargaCurvaReferenciaComponent,
  CargaEmisorComponent,
  CargaFormulaTasaComponent,
  CargaFrecuenciaPagoComponent,
  CargaFuenteInformacionComponent,
  CargaMetodoAmortizacionComponent,
  CargaPaisComponent,
  CargaPlazaComponent,
  CargaTipoAccionComponent,
  CargaTipoBonoSbsComponent,
  CargaTipoFondoComponent,
  CargaTipoInstrumentoComponent,
  CargaTipoSectorComponent,
  CargaTipoTasaComponent,
  CurvaReferencia,
  Emisor,
  FormulaTasa,
  FrecuenciaPago,
  FuenteInformacion,
  MetodoAmortizacion,
  Pais,
  Plaza,
  TipoAccion,
  TipoBono,
  TipoFondo,
  TipoInstrumento,
  TipoSector,
  TipoTasa
} from "./chunk-7UUZPDQ6.js";
import {
  TablaEstadoComponent,
  mensajeDeError
} from "./chunk-MBO6WKBF.js";
import {
  CargaMonedaComponent,
  ModalFormularioComponent,
  Moneda
} from "./chunk-3Z7W44IR.js";
import {
  RegistroService
} from "./chunk-FSM2IJQ7.js";
import {
  MatCheckboxModule
} from "./chunk-J5SGSLZO.js";
import {
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-GE2TBQ5B.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatSort,
  MatSortHeader,
  MatSortModule,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-FUFMTRYL.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  require_sweetalert2_all
} from "./chunk-XNBVOFQ5.js";
import "./chunk-BG5S72EG.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-DJZSF5ZU.js";
import "./chunk-ZN2CT4H2.js";
import "./chunk-F6B7KXT2.js";
import "./chunk-KI24SFMQ.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-Z7KJ7TUU.js";
import "./chunk-GXUHRYX3.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  NgbModal
} from "./chunk-JG564GD5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-BKD3PXJL.js";
import {
  CommonModule,
  EventEmitter,
  NgComponentOutlet,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __spreadValues,
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/registro/mantenedor/atributo-financiero/editar-pais/editar-pais.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var EditarPaisComponent = class _EditarPaisComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codPais))
      f.push("C\xF3digo");
    if (vacio(r.desPais))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Pais();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert2.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarPais(this.objRegistroEditado.idPais, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarPaisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarPaisComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarPaisComponent, selectors: [["app-editar-pais"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["titulo", "Editar Pa\xEDs", "subtitulo", "Modifique los datos del pa\xEDs.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "pa-e-codPais", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "pa-e-codPais", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "2", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pa-e-desPais", 1, "form-label"], ["id", "pa-e-desPais", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pa-e-abrev", 1, "form-label"], ["id", "pa-e-abrev", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarPaisComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarPaisComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarPaisComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPaisComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codPais, $event) || (ctx.objRegistroEditado.codPais = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPaisComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desPais, $event) || (ctx.objRegistroEditado.desPais = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 3)(18, "label", 9);
        \u0275\u0275text(19, "Abreviatura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPaisComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.abrev, $event) || (ctx.objRegistroEditado.abrev = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codPais);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desPais);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.abrev);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-pais.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarPaisComponent, { className: "EditarPaisComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-pais\\editar-pais.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-pais/lista-pais.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());
var _c0 = ["paginator"];
var _c1 = ["sort"];
var _c2 = () => [10, 20, 50, 100];
function ListaPaisComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idPais);
  }
}
function ListaPaisComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codPais);
  }
}
function ListaPaisComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desPais);
  }
}
function ListaPaisComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Abreviatura");
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.abrev);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.abrev || "\u2014");
  }
}
function ListaPaisComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaPaisComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaPaisComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaPaisComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaPaisComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaPaisComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaPaisComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaPaisComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-pais", 38);
    \u0275\u0275listener("close", function ListaPaisComponent_ng_template_29_Template_app_carga_pais_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPaisComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-pais", 39);
    \u0275\u0275listener("close", function ListaPaisComponent_ng_template_31_Template_app_editar_pais_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaPaisComponent = class _ListaPaisComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Pais();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idPais",
      "codPais",
      "desPais",
      "abrev",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaPais().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert22.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarPais(row.idPais).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert22.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert22.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaPaisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaPaisComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPaisComponent, selectors: [["app-lista-pais"]], viewQuery: function ListaPaisComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Pa\xEDs", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codPais", "matSortDirection", "asc", "aria-label", "Listado de pa\xEDses", 3, "dataSource"], ["matColumnDef", "idPais"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codPais"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desPais"], ["matColumnDef", "abrev"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay pa\xEDses registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Pa\xEDs\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de pa\xEDses", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaPaisComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaPaisComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaPaisComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaPaisComponent_th_6_Template, 2, 0, "th", 10)(7, ListaPaisComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaPaisComponent_th_9_Template, 2, 0, "th", 10)(10, ListaPaisComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaPaisComponent_th_12_Template, 2, 0, "th", 10)(13, ListaPaisComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaPaisComponent_th_15_Template, 2, 0, "th", 10)(16, ListaPaisComponent_td_16_Template, 2, 3, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaPaisComponent_th_18_Template, 3, 0, "th", 18)(19, ListaPaisComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaPaisComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaPaisComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaPaisComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaPaisComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaPaisComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaPaisComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaPaisComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c2))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaPaisComponent, EditarPaisComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPaisComponent, { className: "ListaPaisComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-pais\\lista-pais.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-corporacion/lista-corporacion.component.ts
var import_sweetalert25 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/corporacion.ts
var Corporacion = class {
};

// src/app/components/registro/mantenedor/atributo-financiero/carga-corporacion/carga-corporacion.component.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());
function CargaCorporacionComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-pais", 15);
    \u0275\u0275listener("close", function CargaCorporacionComponent_ng_template_27_Template_app_carga_pais_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaCorporacionComponent = class _CargaCorporacionComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new Corporacion();
    this.listPais = [];
    this.guardando = false;
  }
  ngOnInit() {
    this.obtenerPaises();
  }
  obtenerPaises() {
    this.registroService.getListaPais().subscribe((response) => {
      this.listPais = response;
    }, (error) => {
      import_sweetalert23.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarCorporacion(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert23.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La corporaci\xF3n ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
      import_sweetalert23.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  cerrar() {
    this.close.emit();
  }
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerPaises();
  }
  static {
    this.\u0275fac = function CargaCorporacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaCorporacionComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaCorporacionComponent, selectors: [["app-carga-corporacion"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 7, consts: [["cargaModalPais", ""], ["titulo", "Cargar Corporaci\xF3n", "subtitulo", "Registre una corporaci\xF3n para agrupar sus subsidiarias.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "co-c-descripcion", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "co-c-descripcion", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "2", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "co-c-abrev", 1, "form-label"], ["id", "co-c-abrev", "type", "text", "autocomplete", "off", "placeholder", "Abreviatura", "minlength", "2", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "co-c-pais", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "co-c-pais", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPais", "bindValue", "idPais", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar pa\xEDs", "aria-label", "Agregar pa\xEDs", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], [3, "close"]], template: function CargaCorporacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function CargaCorporacionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaCorporacionComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
        });
        \u0275\u0275elementStart(1, "fieldset", 2)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Descripci\xF3n");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CargaCorporacionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descripcion, $event) || (ctx.nuevoRegistro.descripcion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "Abreviatura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function CargaCorporacionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.abrev, $event) || (ctx.nuevoRegistro.abrev = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "fieldset", 2)(16, "legend");
        \u0275\u0275text(17, "Clasificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 3)(19, "div", 4)(20, "label", 10);
        \u0275\u0275text(21, "Pa\xEDs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11)(23, "ng-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function CargaCorporacionComponent_Template_ng_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.pais, $event) || (ctx.nuevoRegistro.pais = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 13);
        \u0275\u0275listener("click", function CargaCorporacionComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalPais_r2 = \u0275\u0275reference(28);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalPais_r2));
        });
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26, "+");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(27, CargaCorporacionComponent_ng_template_27_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descripcion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.abrev);
        \u0275\u0275advance(9);
        \u0275\u0275property("items", ctx.listPais);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.pais);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, CargaPaisComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-corporacion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaCorporacionComponent, { className: "CargaCorporacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-corporacion\\carga-corporacion.component.ts", lineNumber: 21 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/editar-corporacion/editar-corporacion.component.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());
function EditarCorporacionComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-pais", 15);
    \u0275\u0275listener("close", function EditarCorporacionComponent_ng_template_27_Template_app_carga_pais_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarCorporacionComponent = class _EditarCorporacionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Corporacion();
    this.listPais = [];
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerPaises();
  }
  obtenerPaises() {
    this.registroService.getListaPais().subscribe((response) => {
      this.listPais = response;
    }, (error) => {
      import_sweetalert24.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert24.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarCorporacion(this.objRegistroEditado.id, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert24.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert24.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerPaises();
  }
  static {
    this.\u0275fac = function EditarCorporacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarCorporacionComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarCorporacionComponent, selectors: [["app-editar-corporacion"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 7, consts: [["cargaModalPais", ""], ["titulo", "Editar Corporaci\xF3n", "subtitulo", "Modifique los datos de la corporaci\xF3n.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "co-e-descripcion", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "co-e-descripcion", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "co-e-abrev", 1, "form-label"], ["id", "co-e-abrev", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "co-e-pais", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "co-e-pais", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPais", "bindValue", "idPais", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar pa\xEDs", "aria-label", "Agregar pa\xEDs", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], [3, "close"]], template: function EditarCorporacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function EditarCorporacionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarCorporacionComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 2)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Descripci\xF3n");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCorporacionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcion, $event) || (ctx.objRegistroEditado.descripcion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "Abreviatura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCorporacionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.abrev, $event) || (ctx.objRegistroEditado.abrev = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "fieldset", 2)(16, "legend");
        \u0275\u0275text(17, "Clasificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 3)(19, "div", 4)(20, "label", 10);
        \u0275\u0275text(21, "Pa\xEDs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11)(23, "ng-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCorporacionComponent_Template_ng_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.pais, $event) || (ctx.objRegistroEditado.pais = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 13);
        \u0275\u0275listener("click", function EditarCorporacionComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalPais_r2 = \u0275\u0275reference(28);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalPais_r2));
        });
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26, "+");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(27, EditarCorporacionComponent_ng_template_27_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.abrev);
        \u0275\u0275advance(9);
        \u0275\u0275property("items", ctx.listPais);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.pais);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, CargaPaisComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-corporacion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarCorporacionComponent, { className: "EditarCorporacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-corporacion\\editar-corporacion.component.ts", lineNumber: 21 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-corporacion/lista-corporacion.component.ts
var _c02 = ["paginator"];
var _c12 = ["sort"];
var _c22 = () => [10, 20, 50, 100];
function ListaCorporacionComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.id);
  }
}
function ListaCorporacionComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.descripcion);
  }
}
function ListaCorporacionComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Abreviatura");
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.abrev);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.abrev || "\u2014");
  }
}
function ListaCorporacionComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Pa\xEDs");
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.pais);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.pais || "\u2014");
  }
}
function ListaCorporacionComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaCorporacionComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaCorporacionComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaCorporacionComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaCorporacionComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaCorporacionComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaCorporacionComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaCorporacionComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-corporacion", 38);
    \u0275\u0275listener("close", function ListaCorporacionComponent_ng_template_29_Template_app_carga_corporacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaCorporacionComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-corporacion", 39);
    \u0275\u0275listener("close", function ListaCorporacionComponent_ng_template_31_Template_app_editar_corporacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaCorporacionComponent = class _ListaCorporacionComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Corporacion();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "descripcion",
      "abrev",
      "pais",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaCorporacion().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert25.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarPais(row.id).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert25.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert25.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaCorporacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaCorporacionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaCorporacionComponent, selectors: [["app-lista-corporacion"]], viewQuery: function ListaCorporacionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar descripci\xF3n o abreviatura\u2026", "accion", "Agregar Corporaci\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "descripcion", "matSortDirection", "asc", "aria-label", "Listado de corporaciones", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "abrev"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "pais"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay corporaciones registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Corporaci\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de corporaciones", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaCorporacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaCorporacionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaCorporacionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaCorporacionComponent_th_6_Template, 2, 0, "th", 10)(7, ListaCorporacionComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaCorporacionComponent_th_9_Template, 2, 0, "th", 10)(10, ListaCorporacionComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaCorporacionComponent_th_12_Template, 2, 0, "th", 10)(13, ListaCorporacionComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaCorporacionComponent_th_15_Template, 2, 0, "th", 10)(16, ListaCorporacionComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaCorporacionComponent_th_18_Template, 3, 0, "th", 18)(19, ListaCorporacionComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaCorporacionComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaCorporacionComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaCorporacionComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaCorporacionComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaCorporacionComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaCorporacionComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaCorporacionComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c22))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaCorporacionComponent, EditarCorporacionComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaCorporacionComponent, { className: "ListaCorporacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-corporacion\\lista-corporacion.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-fuente-informacion/lista-fuente-informacion.component.ts
var import_sweetalert27 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-fuente-informacion/editar-fuente-informacion.component.ts
var import_sweetalert26 = __toESM(require_sweetalert2_all());
var EditarFuenteInformacionComponent = class _EditarFuenteInformacionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codFuenteInformacion))
      f.push("C\xF3digo");
    if (vacio(r.desFuenteInformacion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new FuenteInformacion();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert26.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarFuenteInformacion(this.objRegistroEditado.idFuenteInformacion, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert26.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert26.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarFuenteInformacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarFuenteInformacionComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarFuenteInformacionComponent, selectors: [["app-editar-fuente-informacion"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Fuente de Informaci\xF3n", "subtitulo", "Modifique los datos de la fuente de informaci\xF3n.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "fi-e-codFuenteInformacion", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "fi-e-codFuenteInformacion", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fi-e-desFuenteInformacion", 1, "form-label"], ["id", "fi-e-desFuenteInformacion", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarFuenteInformacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarFuenteInformacionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarFuenteInformacionComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFuenteInformacionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codFuenteInformacion, $event) || (ctx.objRegistroEditado.codFuenteInformacion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFuenteInformacionComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desFuenteInformacion, $event) || (ctx.objRegistroEditado.desFuenteInformacion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codFuenteInformacion);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desFuenteInformacion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-fuente-informacion.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarFuenteInformacionComponent, { className: "EditarFuenteInformacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-fuente-informacion\\editar-fuente-informacion.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-fuente-informacion/lista-fuente-informacion.component.ts
var _c03 = ["paginator"];
var _c13 = ["sort"];
var _c23 = () => [10, 20, 50, 100];
function ListaFuenteInformacionComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaFuenteInformacionComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idFuenteInformacion);
  }
}
function ListaFuenteInformacionComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaFuenteInformacionComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codFuenteInformacion);
  }
}
function ListaFuenteInformacionComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaFuenteInformacionComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desFuenteInformacion);
  }
}
function ListaFuenteInformacionComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28)(1, "span", 29);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaFuenteInformacionComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 31);
    \u0275\u0275listener("click", function ListaFuenteInformacionComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 32);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaFuenteInformacionComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ListaFuenteInformacionComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34);
    \u0275\u0275listener("contextmenu", function ListaFuenteInformacionComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFuenteInformacionComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ListaFuenteInformacionComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function ListaFuenteInformacionComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaFuenteInformacionComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fuente-informacion", 36);
    \u0275\u0275listener("close", function ListaFuenteInformacionComponent_ng_template_26_Template_app_carga_fuente_informacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFuenteInformacionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-fuente-informacion", 37);
    \u0275\u0275listener("close", function ListaFuenteInformacionComponent_ng_template_28_Template_app_editar_fuente_informacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaFuenteInformacionComponent = class _ListaFuenteInformacionComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new FuenteInformacion();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idFuenteInformacion",
      "codFuenteInformacion",
      "desFuenteInformacion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaFuenteInformacion().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert27.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarFuenteInformacion(row.idFuenteInformacion).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert27.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert27.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaFuenteInformacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaFuenteInformacionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaFuenteInformacionComponent, selectors: [["app-lista-fuente-informacion"]], viewQuery: function ListaFuenteInformacionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Fuente de Informaci\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codFuenteInformacion", "matSortDirection", "asc", "aria-label", "Listado de fuentes de informaci\xF3n", 3, "dataSource"], ["matColumnDef", "idFuenteInformacion"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codFuenteInformacion"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desFuenteInformacion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay fuentes de informaci\xF3n registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Fuente de Informaci\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de fuentes de informaci\xF3n", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaFuenteInformacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaFuenteInformacionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaFuenteInformacionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaFuenteInformacionComponent_th_6_Template, 2, 0, "th", 10)(7, ListaFuenteInformacionComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaFuenteInformacionComponent_th_9_Template, 2, 0, "th", 10)(10, ListaFuenteInformacionComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaFuenteInformacionComponent_th_12_Template, 2, 0, "th", 10)(13, ListaFuenteInformacionComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaFuenteInformacionComponent_th_15_Template, 3, 0, "th", 16)(16, ListaFuenteInformacionComponent_td_16_Template, 4, 0, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaFuenteInformacionComponent_tr_17_Template, 1, 0, "tr", 18)(18, ListaFuenteInformacionComponent_tr_18_Template, 1, 0, "tr", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 20);
        \u0275\u0275listener("reintentar", function ListaFuenteInformacionComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaFuenteInformacionComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 21, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 22);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaFuenteInformacionComponent_ng_template_25_Template, 8, 0, "ng-template", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaFuenteInformacionComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaFuenteInformacionComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c23))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaFuenteInformacionComponent, EditarFuenteInformacionComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaFuenteInformacionComponent, { className: "ListaFuenteInformacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-fuente-informacion\\lista-fuente-informacion.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-plaza/lista-plaza.component.ts
var import_sweetalert29 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-plaza/editar-plaza.component.ts
var import_sweetalert28 = __toESM(require_sweetalert2_all());
var EditarPlazaComponent = class _EditarPlazaComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codPlaza))
      f.push("C\xF3digo");
    if (vacio(r.desPlaza))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Plaza();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert28.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarPlaza(this.objRegistroEditado.idPlaza, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert28.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert28.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarPlazaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarPlazaComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarPlazaComponent, selectors: [["app-editar-plaza"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Plaza", "subtitulo", "Modifique los datos de la plaza.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "pl-e-codPlaza", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "pl-e-codPlaza", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pl-e-desPlaza", 1, "form-label"], ["id", "pl-e-desPlaza", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarPlazaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarPlazaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarPlazaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPlazaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codPlaza, $event) || (ctx.objRegistroEditado.codPlaza = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPlazaComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desPlaza, $event) || (ctx.objRegistroEditado.desPlaza = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codPlaza);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desPlaza);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-plaza.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarPlazaComponent, { className: "EditarPlazaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-plaza\\editar-plaza.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-plaza/lista-plaza.component.ts
var _c04 = ["paginator"];
var _c14 = ["sort"];
var _c24 = () => [10, 20, 50, 100];
function ListaPlazaComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaPlazaComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idPlaza);
  }
}
function ListaPlazaComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaPlazaComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codPlaza);
  }
}
function ListaPlazaComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaPlazaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desPlaza);
  }
}
function ListaPlazaComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28)(1, "span", 29);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaPlazaComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 31);
    \u0275\u0275listener("click", function ListaPlazaComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 32);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaPlazaComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ListaPlazaComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34);
    \u0275\u0275listener("contextmenu", function ListaPlazaComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPlazaComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ListaPlazaComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function ListaPlazaComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaPlazaComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-plaza", 36);
    \u0275\u0275listener("close", function ListaPlazaComponent_ng_template_26_Template_app_carga_plaza_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPlazaComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-plaza", 37);
    \u0275\u0275listener("close", function ListaPlazaComponent_ng_template_28_Template_app_editar_plaza_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaPlazaComponent = class _ListaPlazaComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Plaza();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idPlaza",
      "codPlaza",
      "desPlaza",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaPlaza().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert29.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarPlaza(row.idPlaza).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert29.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert29.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaPlazaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaPlazaComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPlazaComponent, selectors: [["app-lista-plaza"]], viewQuery: function ListaPlazaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Plaza", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codPlaza", "matSortDirection", "asc", "aria-label", "Listado de plazas", 3, "dataSource"], ["matColumnDef", "idPlaza"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codPlaza"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desPlaza"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay plazas registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Plaza\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de plazas", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaPlazaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaPlazaComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaPlazaComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaPlazaComponent_th_6_Template, 2, 0, "th", 10)(7, ListaPlazaComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaPlazaComponent_th_9_Template, 2, 0, "th", 10)(10, ListaPlazaComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaPlazaComponent_th_12_Template, 2, 0, "th", 10)(13, ListaPlazaComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaPlazaComponent_th_15_Template, 3, 0, "th", 16)(16, ListaPlazaComponent_td_16_Template, 4, 0, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaPlazaComponent_tr_17_Template, 1, 0, "tr", 18)(18, ListaPlazaComponent_tr_18_Template, 1, 0, "tr", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 20);
        \u0275\u0275listener("reintentar", function ListaPlazaComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaPlazaComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 21, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 22);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaPlazaComponent_ng_template_25_Template, 8, 0, "ng-template", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaPlazaComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaPlazaComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c24))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaPlazaComponent, EditarPlazaComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPlazaComponent, { className: "ListaPlazaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-plaza\\lista-plaza.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-accion/lista-tipo-accion.component.ts
var import_sweetalert211 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-accion/editar-tipo-accion.component.ts
var import_sweetalert210 = __toESM(require_sweetalert2_all());
var EditarTipoAccionComponent = class _EditarTipoAccionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codTipoAccion))
      f.push("C\xF3digo");
    if (vacio(r.desTipoAccion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoAccion();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert210.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoAccion(this.objRegistroEditado.idTipoAccion, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert210.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert210.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoAccionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoAccionComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoAccionComponent, selectors: [["app-editar-tipo-accion"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Tipo Acci\xF3n", "subtitulo", "Modifique los datos del tipo de acci\xF3n.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ta-e-codTipoAccion", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ta-e-codTipoAccion", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ta-e-desTipoAccion", 1, "form-label"], ["id", "ta-e-desTipoAccion", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoAccionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoAccionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoAccionComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoAccionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTipoAccion, $event) || (ctx.objRegistroEditado.codTipoAccion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoAccionComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desTipoAccion, $event) || (ctx.objRegistroEditado.desTipoAccion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTipoAccion);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desTipoAccion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-accion.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoAccionComponent, { className: "EditarTipoAccionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-accion\\editar-tipo-accion.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-accion/lista-tipo-accion.component.ts
var _c05 = ["paginator"];
var _c15 = ["sort"];
var _c25 = () => [10, 20, 50, 100];
function ListaTipoAccionComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoAccionComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoAccion);
  }
}
function ListaTipoAccionComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoAccionComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codTipoAccion);
  }
}
function ListaTipoAccionComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoAccionComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desTipoAccion);
  }
}
function ListaTipoAccionComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28)(1, "span", 29);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoAccionComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 31);
    \u0275\u0275listener("click", function ListaTipoAccionComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 32);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoAccionComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ListaTipoAccionComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34);
    \u0275\u0275listener("contextmenu", function ListaTipoAccionComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoAccionComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ListaTipoAccionComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function ListaTipoAccionComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoAccionComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-accion", 36);
    \u0275\u0275listener("close", function ListaTipoAccionComponent_ng_template_26_Template_app_carga_tipo_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoAccionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-accion", 37);
    \u0275\u0275listener("close", function ListaTipoAccionComponent_ng_template_28_Template_app_editar_tipo_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaTipoAccionComponent = class _ListaTipoAccionComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoAccion();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTipoAccion",
      "codTipoAccion",
      "desTipoAccion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoAccion().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert211.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoAccion(row.idTipoAccion).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert211.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert211.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoAccionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoAccionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoAccionComponent, selectors: [["app-lista-tipo-accion"]], viewQuery: function ListaTipoAccionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c05, 5);
        \u0275\u0275viewQuery(_c15, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Tipo Acci\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codTipoAccion", "matSortDirection", "asc", "aria-label", "Listado de tipos de acci\xF3n", 3, "dataSource"], ["matColumnDef", "idTipoAccion"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codTipoAccion"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desTipoAccion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de acci\xF3n registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo Acci\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de acci\xF3n", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoAccionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoAccionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoAccionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoAccionComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoAccionComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoAccionComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTipoAccionComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTipoAccionComponent_th_12_Template, 2, 0, "th", 10)(13, ListaTipoAccionComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaTipoAccionComponent_th_15_Template, 3, 0, "th", 16)(16, ListaTipoAccionComponent_td_16_Template, 4, 0, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaTipoAccionComponent_tr_17_Template, 1, 0, "tr", 18)(18, ListaTipoAccionComponent_tr_18_Template, 1, 0, "tr", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 20);
        \u0275\u0275listener("reintentar", function ListaTipoAccionComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoAccionComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 21, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 22);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaTipoAccionComponent_ng_template_25_Template, 8, 0, "ng-template", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaTipoAccionComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaTipoAccionComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c25))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoAccionComponent, EditarTipoAccionComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoAccionComponent, { className: "ListaTipoAccionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-accion\\lista-tipo-accion.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-metodo-amortizacion/lista-metodo-amortizacion.component.ts
var import_sweetalert213 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-metodo-amortizacion/editar-metodo-amortizacion.component.ts
var import_sweetalert212 = __toESM(require_sweetalert2_all());
var EditarMetodoAmortizacionComponent = class _EditarMetodoAmortizacionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreMetodo))
      f.push("Nombre");
    if (vacio(r.descripcionMetodo))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new MetodoAmortizacion();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert212.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarMetodoAmortizacion(this.objRegistroEditado.idMetodoAmortizacion, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert212.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert212.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarMetodoAmortizacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarMetodoAmortizacionComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarMetodoAmortizacionComponent, selectors: [["app-editar-metodo-amortizacion"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["titulo", "Editar M\xE9todo Amortizaci\xF3n", "subtitulo", "Modifique los datos del m\xE9todo de amortizaci\xF3n.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ma-e-nombreMetodo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ma-e-nombreMetodo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ma-e-nombreCortoMetodo", 1, "form-label"], ["id", "ma-e-nombreCortoMetodo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ma-e-descripcionMetodo", 1, "form-label"], ["id", "ma-e-descripcionMetodo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarMetodoAmortizacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarMetodoAmortizacionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarMetodoAmortizacionComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMetodoAmortizacionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreMetodo, $event) || (ctx.objRegistroEditado.nombreMetodo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMetodoAmortizacionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCortoMetodo, $event) || (ctx.objRegistroEditado.nombreCortoMetodo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementStart(18, "span", 5);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMetodoAmortizacionComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionMetodo, $event) || (ctx.objRegistroEditado.descripcionMetodo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreMetodo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCortoMetodo);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionMetodo);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-metodo-amortizacion.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarMetodoAmortizacionComponent, { className: "EditarMetodoAmortizacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-metodo-amortizacion\\editar-metodo-amortizacion.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-metodo-amortizacion/lista-metodo-amortizacion.component.ts
var _c06 = ["paginator"];
var _c16 = ["sort"];
var _c26 = () => [10, 20, 50, 100];
function ListaMetodoAmortizacionComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idMetodoAmortizacion);
  }
}
function ListaMetodoAmortizacionComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreMetodo);
  }
}
function ListaMetodoAmortizacionComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCortoMetodo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCortoMetodo || "\u2014");
  }
}
function ListaMetodoAmortizacionComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcionMetodo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcionMetodo || "\u2014");
  }
}
function ListaMetodoAmortizacionComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaMetodoAmortizacionComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaMetodoAmortizacionComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaMetodoAmortizacionComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaMetodoAmortizacionComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaMetodoAmortizacionComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaMetodoAmortizacionComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaMetodoAmortizacionComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-metodo-amortizacion", 38);
    \u0275\u0275listener("close", function ListaMetodoAmortizacionComponent_ng_template_29_Template_app_carga_metodo_amortizacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaMetodoAmortizacionComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-metodo-amortizacion", 39);
    \u0275\u0275listener("close", function ListaMetodoAmortizacionComponent_ng_template_31_Template_app_editar_metodo_amortizacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaMetodoAmortizacionComponent = class _ListaMetodoAmortizacionComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new MetodoAmortizacion();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaMetodoAmortizacion().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert213.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarMetodoAmortizacion(row.idMetodoAmortizacion).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert213.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert213.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaMetodoAmortizacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaMetodoAmortizacionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaMetodoAmortizacionComponent, selectors: [["app-lista-metodo-amortizacion"]], viewQuery: function ListaMetodoAmortizacionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c06, 5);
        \u0275\u0275viewQuery(_c16, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar M\xE9todo Amortizaci\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de m\xE9todos de amortizaci\xF3n", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay m\xE9todos de amortizaci\xF3n registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar M\xE9todo Amortizaci\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de m\xE9todos de amortizaci\xF3n", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaMetodoAmortizacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaMetodoAmortizacionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaMetodoAmortizacionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaMetodoAmortizacionComponent_th_6_Template, 2, 0, "th", 10)(7, ListaMetodoAmortizacionComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaMetodoAmortizacionComponent_th_9_Template, 2, 0, "th", 10)(10, ListaMetodoAmortizacionComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaMetodoAmortizacionComponent_th_12_Template, 2, 0, "th", 10)(13, ListaMetodoAmortizacionComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaMetodoAmortizacionComponent_th_15_Template, 2, 0, "th", 10)(16, ListaMetodoAmortizacionComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaMetodoAmortizacionComponent_th_18_Template, 3, 0, "th", 18)(19, ListaMetodoAmortizacionComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaMetodoAmortizacionComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaMetodoAmortizacionComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaMetodoAmortizacionComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaMetodoAmortizacionComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaMetodoAmortizacionComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaMetodoAmortizacionComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaMetodoAmortizacionComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c26))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaMetodoAmortizacionComponent, EditarMetodoAmortizacionComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaMetodoAmortizacionComponent, { className: "ListaMetodoAmortizacionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-metodo-amortizacion\\lista-metodo-amortizacion.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/carga-subsidiaria/carga-subsidiaria.component.ts
var import_sweetalert214 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/subsidiaria.ts
var Subsidiaria = class {
};

// src/app/components/registro/mantenedor/atributo-financiero/carga-subsidiaria/carga-subsidiaria.component.ts
var CargaSubsidiariaComponent = class _CargaSubsidiariaComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codCorp))
      f.push("Corporaci\xF3n");
    if (vacio(r.descSubsidiaria))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new Subsidiaria();
    this.guardando = false;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarSubsidiaria(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert214.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La subsidiaria ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
      import_sweetalert214.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CargaSubsidiariaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaSubsidiariaComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaSubsidiariaComponent, selectors: [["app-carga-subsidiaria"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["titulo", "Cargar Subsidiaria", "subtitulo", "Registre una subsidiaria para asociarla a su corporaci\xF3n y moneda funcional.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "su-c-codCorp", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "su-c-codCorp", "type", "text", "autocomplete", "off", "placeholder", "C\xF3digo", "minlength", "3", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "su-c-descSubsidiaria", 1, "form-label"], ["id", "su-c-descSubsidiaria", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "3", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "su-c-codMonedaFunc", 1, "form-label"], ["id", "su-c-codMonedaFunc", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CargaSubsidiariaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaSubsidiariaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaSubsidiariaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Corporaci\xF3n");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaSubsidiariaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codCorp, $event) || (ctx.nuevoRegistro.codCorp = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaSubsidiariaComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descSubsidiaria, $event) || (ctx.nuevoRegistro.descSubsidiaria = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 3)(18, "label", 9);
        \u0275\u0275text(19, "Moneda Funcional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CargaSubsidiariaComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codMonedaFunc, $event) || (ctx.nuevoRegistro.codMonedaFunc = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codCorp);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descSubsidiaria);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codMonedaFunc);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-subsidiaria.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaSubsidiariaComponent, { className: "CargaSubsidiariaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-subsidiaria\\carga-subsidiaria.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/editar-subsidiaria/editar-subsidiaria.component.ts
var import_sweetalert215 = __toESM(require_sweetalert2_all());
var EditarSubsidiariaComponent = class _EditarSubsidiariaComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codCorp))
      f.push("Corporaci\xF3n");
    if (vacio(r.descSubsidiaria))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Subsidiaria();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert215.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarSubsidiaria(this.objRegistroEditado.idSubsidiaria, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert215.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert215.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarSubsidiariaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarSubsidiariaComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarSubsidiariaComponent, selectors: [["app-editar-subsidiaria"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["titulo", "Editar Subsidiaria", "subtitulo", "Modifique los datos de la subsidiaria.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "su-e-codCorp", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "su-e-codCorp", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "su-e-descSubsidiaria", 1, "form-label"], ["id", "su-e-descSubsidiaria", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "su-e-codMonedaFunc", 1, "form-label"], ["id", "su-e-codMonedaFunc", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarSubsidiariaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarSubsidiariaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarSubsidiariaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Corporaci\xF3n");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarSubsidiariaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codCorp, $event) || (ctx.objRegistroEditado.codCorp = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarSubsidiariaComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descSubsidiaria, $event) || (ctx.objRegistroEditado.descSubsidiaria = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 3)(18, "label", 9);
        \u0275\u0275text(19, "Moneda Funcional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarSubsidiariaComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codMonedaFunc, $event) || (ctx.objRegistroEditado.codMonedaFunc = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codCorp);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descSubsidiaria);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codMonedaFunc);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-subsidiaria.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarSubsidiariaComponent, { className: "EditarSubsidiariaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-subsidiaria\\editar-subsidiaria.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-subsidiaria/lista-subsidiaria.component.ts
var import_sweetalert216 = __toESM(require_sweetalert2_all());
var _c07 = ["paginator"];
var _c17 = ["sort"];
var _c27 = () => [10, 20, 50, 100];
function ListaSubsidiariaComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idSubsidiaria);
  }
}
function ListaSubsidiariaComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Cod. Corporaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codCorp);
  }
}
function ListaSubsidiariaComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descSubsidiaria);
  }
}
function ListaSubsidiariaComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Cod. Moneda Funcional");
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.codMonedaFunc);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.codMonedaFunc || "\u2014");
  }
}
function ListaSubsidiariaComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaSubsidiariaComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaSubsidiariaComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaSubsidiariaComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaSubsidiariaComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaSubsidiariaComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaSubsidiariaComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaSubsidiariaComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-subsidiaria", 38);
    \u0275\u0275listener("close", function ListaSubsidiariaComponent_ng_template_29_Template_app_carga_subsidiaria_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaSubsidiariaComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-subsidiaria", 39);
    \u0275\u0275listener("close", function ListaSubsidiariaComponent_ng_template_31_Template_app_editar_subsidiaria_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaSubsidiariaComponent = class _ListaSubsidiariaComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Subsidiaria();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "codCorp",
      "descripcion",
      "codMonedaFunc",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaSubsidiaria().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert216.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarSubsidiaria(row.idSubsidiaria).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert216.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert216.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaSubsidiariaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaSubsidiariaComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaSubsidiariaComponent, selectors: [["app-lista-subsidiaria"]], viewQuery: function ListaSubsidiariaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c07, 5);
        \u0275\u0275viewQuery(_c17, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar corporaci\xF3n o descripci\xF3n\u2026", "accion", "Agregar Subsidiaria", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "descripcion", "matSortDirection", "asc", "aria-label", "Listado de subsidiarias", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codCorp"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "codMonedaFunc"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay subsidiarias registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Subsidiaria\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de subsidiarias", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaSubsidiariaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaSubsidiariaComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaSubsidiariaComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaSubsidiariaComponent_th_6_Template, 2, 0, "th", 10)(7, ListaSubsidiariaComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaSubsidiariaComponent_th_9_Template, 2, 0, "th", 10)(10, ListaSubsidiariaComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaSubsidiariaComponent_th_12_Template, 2, 0, "th", 10)(13, ListaSubsidiariaComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaSubsidiariaComponent_th_15_Template, 2, 0, "th", 10)(16, ListaSubsidiariaComponent_td_16_Template, 2, 3, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaSubsidiariaComponent_th_18_Template, 3, 0, "th", 18)(19, ListaSubsidiariaComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaSubsidiariaComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaSubsidiariaComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaSubsidiariaComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaSubsidiariaComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaSubsidiariaComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaSubsidiariaComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaSubsidiariaComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c27))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaSubsidiariaComponent, EditarSubsidiariaComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaSubsidiariaComponent, { className: "ListaSubsidiariaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-subsidiaria\\lista-subsidiaria.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-frecuencia-pago/lista-frecuencia-pago.component.ts
var import_sweetalert218 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-frecuencia-pago/editar-frecuencia-pago.component.ts
var import_sweetalert217 = __toESM(require_sweetalert2_all());
var EditarFrecuenciaPagoComponent = class _EditarFrecuenciaPagoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreFrecuencia))
      f.push("Nombre");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new FrecuenciaPago();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert217.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarFrecuenciaPago(this.objRegistroEditado.idFrecuenciaPago, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert217.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert217.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarFrecuenciaPagoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarFrecuenciaPagoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarFrecuenciaPagoComponent, selectors: [["app-editar-frecuencia-pago"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 5, consts: [["titulo", "Editar Frecuencia de Pago", "subtitulo", "Modifique los datos de la frecuencia de pago.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "fp-e-nombreFrecuencia", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "fp-e-nombreFrecuencia", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fp-e-descripcionFrecuencia", 1, "form-label"], ["id", "fp-e-descripcionFrecuencia", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarFrecuenciaPagoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarFrecuenciaPagoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarFrecuenciaPagoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFrecuenciaPagoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreFrecuencia, $event) || (ctx.objRegistroEditado.nombreFrecuencia = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFrecuenciaPagoComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionFrecuencia, $event) || (ctx.objRegistroEditado.descripcionFrecuencia = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreFrecuencia);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionFrecuencia);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-frecuencia-pago.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarFrecuenciaPagoComponent, { className: "EditarFrecuenciaPagoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-frecuencia-pago\\editar-frecuencia-pago.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-frecuencia-pago/lista-frecuencia-pago.component.ts
var _c08 = ["paginator"];
var _c18 = ["sort"];
var _c28 = () => [10, 20, 50, 100];
function ListaFrecuenciaPagoComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaFrecuenciaPagoComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idFrecuenciaPago);
  }
}
function ListaFrecuenciaPagoComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaFrecuenciaPagoComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreFrecuencia);
  }
}
function ListaFrecuenciaPagoComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaFrecuenciaPagoComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.descripcionFrecuencia);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descripcionFrecuencia || "\u2014");
  }
}
function ListaFrecuenciaPagoComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29)(1, "span", 30);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaFrecuenciaPagoComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 32);
    \u0275\u0275listener("click", function ListaFrecuenciaPagoComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 33);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaFrecuenciaPagoComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function ListaFrecuenciaPagoComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 35);
    \u0275\u0275listener("contextmenu", function ListaFrecuenciaPagoComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFrecuenciaPagoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ListaFrecuenciaPagoComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function ListaFrecuenciaPagoComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaFrecuenciaPagoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-frecuencia-pago", 37);
    \u0275\u0275listener("close", function ListaFrecuenciaPagoComponent_ng_template_26_Template_app_carga_frecuencia_pago_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFrecuenciaPagoComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-frecuencia-pago", 38);
    \u0275\u0275listener("close", function ListaFrecuenciaPagoComponent_ng_template_28_Template_app_editar_frecuencia_pago_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaFrecuenciaPagoComponent = class _ListaFrecuenciaPagoComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new FrecuenciaPago();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaFrecuenciaPago().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert218.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarPais(row.idFrecuenciaPago).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert218.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert218.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaFrecuenciaPagoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaFrecuenciaPagoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaFrecuenciaPagoComponent, selectors: [["app-lista-frecuencia-pago"]], viewQuery: function ListaFrecuenciaPagoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c08, 5);
        \u0275\u0275viewQuery(_c18, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar Frecuencia de Pago", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de frecuencias de pago", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay frecuencias de pago registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Frecuencia de Pago\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de frecuencias de pago", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaFrecuenciaPagoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaFrecuenciaPagoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaFrecuenciaPagoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaFrecuenciaPagoComponent_th_6_Template, 2, 0, "th", 10)(7, ListaFrecuenciaPagoComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaFrecuenciaPagoComponent_th_9_Template, 2, 0, "th", 10)(10, ListaFrecuenciaPagoComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaFrecuenciaPagoComponent_th_12_Template, 2, 0, "th", 10)(13, ListaFrecuenciaPagoComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaFrecuenciaPagoComponent_th_15_Template, 3, 0, "th", 17)(16, ListaFrecuenciaPagoComponent_td_16_Template, 4, 0, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaFrecuenciaPagoComponent_tr_17_Template, 1, 0, "tr", 19)(18, ListaFrecuenciaPagoComponent_tr_18_Template, 1, 0, "tr", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 21);
        \u0275\u0275listener("reintentar", function ListaFrecuenciaPagoComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaFrecuenciaPagoComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 22, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 23);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaFrecuenciaPagoComponent_ng_template_25_Template, 8, 0, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaFrecuenciaPagoComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaFrecuenciaPagoComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c28))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaFrecuenciaPagoComponent, EditarFrecuenciaPagoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaFrecuenciaPagoComponent, { className: "ListaFrecuenciaPagoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-frecuencia-pago\\lista-frecuencia-pago.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-formula-tasa/lista-formula-tasa.component.ts
var import_sweetalert220 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-formula-tasa/editar-formula-tasa.component.ts
var import_sweetalert219 = __toESM(require_sweetalert2_all());
var EditarFormulaTasaComponent = class _EditarFormulaTasaComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreFormula))
      f.push("Nombre");
    if (vacio(r.expresionFormula))
      f.push("Expresi\xF3n");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new FormulaTasa();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert219.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarFormulaTasa(this.objRegistroEditado.idFormulaTasa, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert219.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert219.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarFormulaTasaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarFormulaTasaComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarFormulaTasaComponent, selectors: [["app-editar-formula-tasa"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 7, consts: [["titulo", "Editar F\xF3rmula Tasa", "subtitulo", "Modifique los datos de la f\xF3rmula de tasa.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ft-e-nombreFormula", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ft-e-nombreFormula", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ft-e-nombreCortoFormula", 1, "form-label"], ["id", "ft-e-nombreCortoFormula", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ft-e-descripcionFormula", 1, "form-label"], ["id", "ft-e-descripcionFormula", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-1"], ["for", "ft-e-expresionFormula", 1, "form-label"], ["id", "ft-e-expresionFormula", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarFormulaTasaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarFormulaTasaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarFormulaTasaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFormulaTasaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreFormula, $event) || (ctx.objRegistroEditado.nombreFormula = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFormulaTasaComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCortoFormula, $event) || (ctx.objRegistroEditado.nombreCortoFormula = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFormulaTasaComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionFormula, $event) || (ctx.objRegistroEditado.descripcionFormula = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "fieldset", 1)(20, "legend");
        \u0275\u0275text(21, "Expresi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11)(23, "div", 3)(24, "label", 12);
        \u0275\u0275text(25, "Expresi\xF3n");
        \u0275\u0275elementStart(26, "span", 5);
        \u0275\u0275text(27, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFormulaTasaComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.expresionFormula, $event) || (ctx.objRegistroEditado.expresionFormula = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreFormula);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCortoFormula);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionFormula);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.expresionFormula);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-formula-tasa.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarFormulaTasaComponent, { className: "EditarFormulaTasaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-formula-tasa\\editar-formula-tasa.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-formula-tasa/lista-formula-tasa.component.ts
var _c09 = ["paginator"];
var _c19 = ["sort"];
var _c29 = () => [10, 20, 50, 100];
function ListaFormulaTasaComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idFormulaTasa);
  }
}
function ListaFormulaTasaComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreFormula);
  }
}
function ListaFormulaTasaComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCortoFormula);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCortoFormula || "\u2014");
  }
}
function ListaFormulaTasaComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcionFormula);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcionFormula || "\u2014");
  }
}
function ListaFormulaTasaComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Expresi\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.expresionFormula);
  }
}
function ListaFormulaTasaComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31)(1, "span", 32);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaFormulaTasaComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 34);
    \u0275\u0275listener("click", function ListaFormulaTasaComponent_td_22_Template_button_click_1_listener($event) {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.abrirMenuFila($event, element_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon", 35);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaFormulaTasaComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function ListaFormulaTasaComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37);
    \u0275\u0275listener("contextmenu", function ListaFormulaTasaComponent_tr_24_Template_tr_contextmenu_0_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onContextMenu($event, row_r12));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ListaFormulaTasaComponent_ng_template_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r9 = \u0275\u0275nextContext();
      const editarModal_r14 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(ctx_r9.editar(ctx_r9.selectedRow, editarModal_r14));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function ListaFormulaTasaComponent_ng_template_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.eliminar(ctx_r9.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-formula-tasa", 39);
    \u0275\u0275listener("close", function ListaFormulaTasaComponent_ng_template_32_Template_app_carga_formula_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFormulaTasaComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-formula-tasa", 40);
    \u0275\u0275listener("close", function ListaFormulaTasaComponent_ng_template_34_Template_app_editar_formula_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r9.filaEditar);
  }
}
var ListaFormulaTasaComponent = class _ListaFormulaTasaComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new FormulaTasa();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "expresionFormula",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaFormulaTasa().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert220.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarPais(row.idFormulaTasa).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert220.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert220.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaFormulaTasaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaFormulaTasaComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaFormulaTasaComponent, selectors: [["app-lista-formula-tasa"]], viewQuery: function ListaFormulaTasaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c09, 5);
        \u0275\u0275viewQuery(_c19, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o expresi\xF3n\u2026", "accion", "Agregar F\xF3rmula Tasa", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de f\xF3rmulas de tasa", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "expresionFormula"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay f\xF3rmulas de tasa registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar F\xF3rmula Tasa\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de f\xF3rmulas de tasa", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaFormulaTasaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaFormulaTasaComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaFormulaTasaComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(33);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaFormulaTasaComponent_th_6_Template, 2, 0, "th", 10)(7, ListaFormulaTasaComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaFormulaTasaComponent_th_9_Template, 2, 0, "th", 10)(10, ListaFormulaTasaComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaFormulaTasaComponent_th_12_Template, 2, 0, "th", 10)(13, ListaFormulaTasaComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaFormulaTasaComponent_th_15_Template, 2, 0, "th", 10)(16, ListaFormulaTasaComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaFormulaTasaComponent_th_18_Template, 2, 0, "th", 10)(19, ListaFormulaTasaComponent_td_19_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 18);
        \u0275\u0275template(21, ListaFormulaTasaComponent_th_21_Template, 3, 0, "th", 19)(22, ListaFormulaTasaComponent_td_22_Template, 4, 0, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(23, ListaFormulaTasaComponent_tr_23_Template, 1, 0, "tr", 21)(24, ListaFormulaTasaComponent_tr_24_Template, 1, 0, "tr", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "app-tabla-estado", 23);
        \u0275\u0275listener("reintentar", function ListaFormulaTasaComponent_Template_app_tabla_estado_reintentar_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaFormulaTasaComponent_Template_app_tabla_estado_limpiar_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "mat-paginator", 24, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "div", 25);
        \u0275\u0275elementStart(29, "mat-menu", null, 2);
        \u0275\u0275template(31, ListaFormulaTasaComponent_ng_template_31_Template, 8, 0, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, ListaFormulaTasaComponent_ng_template_32_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(34, ListaFormulaTasaComponent_ng_template_34_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r17 = \u0275\u0275reference(30);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(20);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c29))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r17);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaFormulaTasaComponent, EditarFormulaTasaComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaFormulaTasaComponent, { className: "ListaFormulaTasaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-formula-tasa\\lista-formula-tasa.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-calculo-base-interes/lista-calculo-base-interes.component.ts
var import_sweetalert222 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-calculo-base-interes/editar-calculo-base-interes.component.ts
var import_sweetalert221 = __toESM(require_sweetalert2_all());
var EditarCalculoBaseInteresComponent = class _EditarCalculoBaseInteresComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreCalculo))
      f.push("Nombre");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new CalculoBaseInteres();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert221.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarCalculoBaseInteres(this.objRegistroEditado.idCalculobase, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert221.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert221.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarCalculoBaseInteresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarCalculoBaseInteresComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarCalculoBaseInteresComponent, selectors: [["app-editar-calculo-base-interes"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [["titulo", "Editar C\xE1lculo de Base de Inter\xE9s", "subtitulo", "Modifique los datos del c\xE1lculo de base de inter\xE9s.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "cbi-e-nombreCalculo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "cbi-e-nombreCalculo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cbi-e-nombreCortoCalculo", 1, "form-label"], ["id", "cbi-e-nombreCortoCalculo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cbi-e-descripcionCalculoBase", 1, "form-label"], ["id", "cbi-e-descripcionCalculoBase", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarCalculoBaseInteresComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarCalculoBaseInteresComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarCalculoBaseInteresComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCalculoBaseInteresComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCalculo, $event) || (ctx.objRegistroEditado.nombreCalculo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCalculoBaseInteresComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCortoCalculo, $event) || (ctx.objRegistroEditado.nombreCortoCalculo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCalculoBaseInteresComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionCalculoBase, $event) || (ctx.objRegistroEditado.descripcionCalculoBase = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCalculo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCortoCalculo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionCalculoBase);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-calculo-base-interes.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarCalculoBaseInteresComponent, { className: "EditarCalculoBaseInteresComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-calculo-base-interes\\editar-calculo-base-interes.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-calculo-base-interes/lista-calculo-base-interes.component.ts
var _c010 = ["paginator"];
var _c110 = ["sort"];
var _c210 = () => [10, 20, 50, 100];
function ListaCalculoBaseInteresComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idCalculobase);
  }
}
function ListaCalculoBaseInteresComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreCalculo);
  }
}
function ListaCalculoBaseInteresComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCortoCalculo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCortoCalculo || "\u2014");
  }
}
function ListaCalculoBaseInteresComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcionCalculoBase);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcionCalculoBase || "\u2014");
  }
}
function ListaCalculoBaseInteresComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaCalculoBaseInteresComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaCalculoBaseInteresComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaCalculoBaseInteresComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaCalculoBaseInteresComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaCalculoBaseInteresComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaCalculoBaseInteresComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaCalculoBaseInteresComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-calculo-base-interes", 38);
    \u0275\u0275listener("close", function ListaCalculoBaseInteresComponent_ng_template_29_Template_app_carga_calculo_base_interes_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaCalculoBaseInteresComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-calculo-base-interes", 39);
    \u0275\u0275listener("close", function ListaCalculoBaseInteresComponent_ng_template_31_Template_app_editar_calculo_base_interes_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaCalculoBaseInteresComponent = class _ListaCalculoBaseInteresComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new CalculoBaseInteres();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaCalculoBaseInteres().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert222.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarCalculoBaseInteres(row.idCalculobase).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert222.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert222.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaCalculoBaseInteresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaCalculoBaseInteresComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaCalculoBaseInteresComponent, selectors: [["app-lista-calculo-base-interes"]], viewQuery: function ListaCalculoBaseInteresComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c010, 5);
        \u0275\u0275viewQuery(_c110, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar C\xE1lculo de Base de Inter\xE9s", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de c\xE1lculos de base de inter\xE9s", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay c\xE1lculos de base de inter\xE9s registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar C\xE1lculo de Base de Inter\xE9s\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de c\xE1lculos de base de inter\xE9s", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaCalculoBaseInteresComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaCalculoBaseInteresComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaCalculoBaseInteresComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaCalculoBaseInteresComponent_th_6_Template, 2, 0, "th", 10)(7, ListaCalculoBaseInteresComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaCalculoBaseInteresComponent_th_9_Template, 2, 0, "th", 10)(10, ListaCalculoBaseInteresComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaCalculoBaseInteresComponent_th_12_Template, 2, 0, "th", 10)(13, ListaCalculoBaseInteresComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaCalculoBaseInteresComponent_th_15_Template, 2, 0, "th", 10)(16, ListaCalculoBaseInteresComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaCalculoBaseInteresComponent_th_18_Template, 3, 0, "th", 18)(19, ListaCalculoBaseInteresComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaCalculoBaseInteresComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaCalculoBaseInteresComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaCalculoBaseInteresComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaCalculoBaseInteresComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaCalculoBaseInteresComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaCalculoBaseInteresComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaCalculoBaseInteresComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c210))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaCalculoBaseInteresComponent, EditarCalculoBaseInteresComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaCalculoBaseInteresComponent, { className: "ListaCalculoBaseInteresComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-calculo-base-interes\\lista-calculo-base-interes.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-tasa/lista-tipo-tasa.component.ts
var import_sweetalert224 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-tasa/editar-tipo-tasa.component.ts
var import_sweetalert223 = __toESM(require_sweetalert2_all());
var EditarTipoTasaComponent = class _EditarTipoTasaComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreTipoTasa))
      f.push("Nombre");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoTasa();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert223.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoTasa(this.objRegistroEditado.idTipoTasaInteres, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert223.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert223.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoTasaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoTasaComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoTasaComponent, selectors: [["app-editar-tipo-tasa"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [["titulo", "Editar Tipo de Tasa", "subtitulo", "Modifique los datos del tipo de tasa.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "tt-e-nombreTipoTasa", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tt-e-nombreTipoTasa", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tt-e-nombreCortoTipoTasa", 1, "form-label"], ["id", "tt-e-nombreCortoTipoTasa", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tt-e-descripcionTipoTasa", 1, "form-label"], ["id", "tt-e-descripcionTipoTasa", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoTasaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoTasaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoTasaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoTasaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreTipoTasa, $event) || (ctx.objRegistroEditado.nombreTipoTasa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoTasaComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCortoTipoTasa, $event) || (ctx.objRegistroEditado.nombreCortoTipoTasa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoTasaComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionTipoTasa, $event) || (ctx.objRegistroEditado.descripcionTipoTasa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreTipoTasa);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCortoTipoTasa);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionTipoTasa);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-tasa.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoTasaComponent, { className: "EditarTipoTasaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-tasa\\editar-tipo-tasa.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-tasa/lista-tipo-tasa.component.ts
var _c011 = ["paginator"];
var _c111 = ["sort"];
var _c211 = () => [10, 20, 50, 100];
function ListaTipoTasaComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoTasaInteres);
  }
}
function ListaTipoTasaComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreTipoTasa);
  }
}
function ListaTipoTasaComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCortoTipoTasa);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCortoTipoTasa || "\u2014");
  }
}
function ListaTipoTasaComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcionTipoTasa);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcionTipoTasa || "\u2014");
  }
}
function ListaTipoTasaComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoTasaComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaTipoTasaComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoTasaComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaTipoTasaComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaTipoTasaComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaTipoTasaComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaTipoTasaComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-tasa", 38);
    \u0275\u0275listener("close", function ListaTipoTasaComponent_ng_template_29_Template_app_carga_tipo_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoTasaComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-tasa", 39);
    \u0275\u0275listener("close", function ListaTipoTasaComponent_ng_template_31_Template_app_editar_tipo_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaTipoTasaComponent = class _ListaTipoTasaComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoTasa();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoTasa().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert224.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoTasa(row.idTipoTasaInteres).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert224.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert224.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoTasaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoTasaComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoTasaComponent, selectors: [["app-lista-tipo-tasa"]], viewQuery: function ListaTipoTasaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c011, 5);
        \u0275\u0275viewQuery(_c111, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar Tipo de Tasa", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de tipos de tasa", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de tasa registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo de Tasa\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de tasa", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoTasaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoTasaComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoTasaComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoTasaComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoTasaComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoTasaComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTipoTasaComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTipoTasaComponent_th_12_Template, 2, 0, "th", 10)(13, ListaTipoTasaComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTipoTasaComponent_th_15_Template, 2, 0, "th", 10)(16, ListaTipoTasaComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaTipoTasaComponent_th_18_Template, 3, 0, "th", 18)(19, ListaTipoTasaComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaTipoTasaComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaTipoTasaComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaTipoTasaComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoTasaComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaTipoTasaComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaTipoTasaComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaTipoTasaComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c211))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoTasaComponent, EditarTipoTasaComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoTasaComponent, { className: "ListaTipoTasaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-tasa\\lista-tipo-tasa.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tasa-rjte/lista-tasa-rjte.component.ts
var import_sweetalert227 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/tasa-rjte.ts
var TasaRJTE = class {
};

// src/app/components/registro/mantenedor/atributo-financiero/carga-tasa-rjte/carga-tasa-rjte.component.ts
var import_sweetalert225 = __toESM(require_sweetalert2_all());
var CargaTasaRjteComponent = class _CargaTasaRjteComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreTasa))
      f.push("Nombre");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new TasaRJTE();
    this.guardando = false;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarTasaRJTE(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert225.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La tasa RJTE ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
      import_sweetalert225.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CargaTasaRjteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaTasaRjteComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaTasaRjteComponent, selectors: [["app-carga-tasa-rjte"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [["titulo", "Cargar Tasa RJTE", "subtitulo", "Registre una tasa RJTE para usarla en instrumentos y reportes.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "tr-c-nombreTasa", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tr-c-nombreTasa", "type", "text", "autocomplete", "off", "placeholder", "Nombre", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tr-c-nombreCorto", 1, "form-label"], ["id", "tr-c-nombreCorto", "type", "text", "autocomplete", "off", "placeholder", "Nombre Corto", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tr-c-descripcion", 1, "form-label"], ["id", "tr-c-descripcion", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "3", "maxlength", "500", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CargaTasaRjteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaTasaRjteComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaTasaRjteComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaRjteComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nombreTasa, $event) || (ctx.nuevoRegistro.nombreTasa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaRjteComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nombreCorto, $event) || (ctx.nuevoRegistro.nombreCorto = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaRjteComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descripcion, $event) || (ctx.nuevoRegistro.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nombreTasa);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nombreCorto);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-tasa-rjte.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaTasaRjteComponent, { className: "CargaTasaRjteComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-tasa-rjte\\carga-tasa-rjte.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/editar-tasa-rjte/editar-tasa-rjte.component.ts
var import_sweetalert226 = __toESM(require_sweetalert2_all());
var EditarTasaRjteComponent = class _EditarTasaRjteComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreTasa))
      f.push("Nombre");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TasaRJTE();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert226.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTasaRJTE(this.objRegistroEditado.iD_TasaRJTE, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert226.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert226.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTasaRjteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTasaRjteComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTasaRjteComponent, selectors: [["app-editar-tasa-rjte"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [["titulo", "Editar Tasa RJTE", "subtitulo", "Modifique los datos de la tasa RJTE.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "tr-e-nombreTasa", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tr-e-nombreTasa", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tr-e-nombreCorto", 1, "form-label"], ["id", "tr-e-nombreCorto", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tr-e-descripcion", 1, "form-label"], ["id", "tr-e-descripcion", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTasaRjteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTasaRjteComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTasaRjteComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaRjteComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreTasa, $event) || (ctx.objRegistroEditado.nombreTasa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaRjteComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCorto, $event) || (ctx.objRegistroEditado.nombreCorto = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaRjteComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcion, $event) || (ctx.objRegistroEditado.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreTasa);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCorto);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tasa-rjte.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTasaRjteComponent, { className: "EditarTasaRjteComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tasa-rjte\\editar-tasa-rjte.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tasa-rjte/lista-tasa-rjte.component.ts
var _c012 = ["paginator"];
var _c112 = ["sort"];
var _c212 = () => [10, 20, 50, 100];
function ListaTasaRjteComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.iD_TasaRJTE);
  }
}
function ListaTasaRjteComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreTasa);
  }
}
function ListaTasaRjteComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCorto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCorto || "\u2014");
  }
}
function ListaTasaRjteComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcion || "\u2014");
  }
}
function ListaTasaRjteComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTasaRjteComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaTasaRjteComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTasaRjteComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaTasaRjteComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaTasaRjteComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaTasaRjteComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaTasaRjteComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tasa-rjte", 38);
    \u0275\u0275listener("close", function ListaTasaRjteComponent_ng_template_29_Template_app_carga_tasa_rjte_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTasaRjteComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tasa-rjte", 39);
    \u0275\u0275listener("close", function ListaTasaRjteComponent_ng_template_31_Template_app_editar_tasa_rjte_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaTasaRjteComponent = class _ListaTasaRjteComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TasaRJTE();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTasaRJTE().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert227.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTasaRJTE(row.iD_TasaRJTE).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert227.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert227.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTasaRjteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTasaRjteComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTasaRjteComponent, selectors: [["app-lista-tasa-rjte"]], viewQuery: function ListaTasaRjteComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c012, 5);
        \u0275\u0275viewQuery(_c112, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o c\xF3digo\u2026", "accion", "Agregar Tasa RJTE", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de tasas RJTE", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tasas RJTE registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Tasa RJTE\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tasas RJTE", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTasaRjteComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTasaRjteComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTasaRjteComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTasaRjteComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTasaRjteComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTasaRjteComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTasaRjteComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTasaRjteComponent_th_12_Template, 2, 0, "th", 10)(13, ListaTasaRjteComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTasaRjteComponent_th_15_Template, 2, 0, "th", 10)(16, ListaTasaRjteComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaTasaRjteComponent_th_18_Template, 3, 0, "th", 18)(19, ListaTasaRjteComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaTasaRjteComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaTasaRjteComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaTasaRjteComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTasaRjteComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaTasaRjteComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaTasaRjteComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaTasaRjteComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c212))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTasaRjteComponent, EditarTasaRjteComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTasaRjteComponent, { className: "ListaTasaRjteComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tasa-rjte\\lista-tasa-rjte.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-curva-referencia/lista-curva-referencia.component.ts
var import_sweetalert229 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-curva-referencia/editar-curva-referencia.component.ts
var import_sweetalert228 = __toESM(require_sweetalert2_all());
var EditarCurvaReferenciaComponent = class _EditarCurvaReferenciaComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreCurva))
      f.push("Nombre");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new CurvaReferencia();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert228.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarCurvaReferencia(this.objRegistroEditado.idCurvaReferencia, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert228.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert228.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarCurvaReferenciaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarCurvaReferenciaComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarCurvaReferenciaComponent, selectors: [["app-editar-curva-referencia"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [["titulo", "Editar Curva de Referencia", "subtitulo", "Modifique los datos de la curva de referencia.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "cr-e-nombreCurva", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "cr-e-nombreCurva", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cr-e-nombreCortoCurva", 1, "form-label"], ["id", "cr-e-nombreCortoCurva", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cr-e-descripcionCurva", 1, "form-label"], ["id", "cr-e-descripcionCurva", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarCurvaReferenciaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarCurvaReferenciaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarCurvaReferenciaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCurvaReferenciaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCurva, $event) || (ctx.objRegistroEditado.nombreCurva = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCurvaReferenciaComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCortoCurva, $event) || (ctx.objRegistroEditado.nombreCortoCurva = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarCurvaReferenciaComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionCurva, $event) || (ctx.objRegistroEditado.descripcionCurva = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCurva);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCortoCurva);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionCurva);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-curva-referencia.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarCurvaReferenciaComponent, { className: "EditarCurvaReferenciaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-curva-referencia\\editar-curva-referencia.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-curva-referencia/lista-curva-referencia.component.ts
var _c013 = ["paginator"];
var _c113 = ["sort"];
var _c213 = () => [10, 20, 50, 100];
function ListaCurvaReferenciaComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idCurvaReferencia);
  }
}
function ListaCurvaReferenciaComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreCurva);
  }
}
function ListaCurvaReferenciaComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCortoCurva);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCortoCurva || "\u2014");
  }
}
function ListaCurvaReferenciaComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcionCurva);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcionCurva || "\u2014");
  }
}
function ListaCurvaReferenciaComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaCurvaReferenciaComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaCurvaReferenciaComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaCurvaReferenciaComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaCurvaReferenciaComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaCurvaReferenciaComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaCurvaReferenciaComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaCurvaReferenciaComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-curva-referencia", 38);
    \u0275\u0275listener("close", function ListaCurvaReferenciaComponent_ng_template_29_Template_app_carga_curva_referencia_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaCurvaReferenciaComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-curva-referencia", 39);
    \u0275\u0275listener("close", function ListaCurvaReferenciaComponent_ng_template_31_Template_app_editar_curva_referencia_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaCurvaReferenciaComponent = class _ListaCurvaReferenciaComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new CurvaReferencia();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaCurvaReferencia().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert229.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarCurvaReferencia(row.idCurvaReferencia).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert229.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert229.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaCurvaReferenciaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaCurvaReferenciaComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaCurvaReferenciaComponent, selectors: [["app-lista-curva-referencia"]], viewQuery: function ListaCurvaReferenciaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c013, 5);
        \u0275\u0275viewQuery(_c113, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o c\xF3digo\u2026", "accion", "Agregar Curva de Referencia", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de curvas de referencia", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay curvas de referencia registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Curva de Referencia\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de curvas de referencia", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaCurvaReferenciaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaCurvaReferenciaComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaCurvaReferenciaComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaCurvaReferenciaComponent_th_6_Template, 2, 0, "th", 10)(7, ListaCurvaReferenciaComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaCurvaReferenciaComponent_th_9_Template, 2, 0, "th", 10)(10, ListaCurvaReferenciaComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaCurvaReferenciaComponent_th_12_Template, 2, 0, "th", 10)(13, ListaCurvaReferenciaComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaCurvaReferenciaComponent_th_15_Template, 2, 0, "th", 10)(16, ListaCurvaReferenciaComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaCurvaReferenciaComponent_th_18_Template, 3, 0, "th", 18)(19, ListaCurvaReferenciaComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaCurvaReferenciaComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaCurvaReferenciaComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaCurvaReferenciaComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaCurvaReferenciaComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaCurvaReferenciaComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaCurvaReferenciaComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaCurvaReferenciaComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c213))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaCurvaReferenciaComponent, EditarCurvaReferenciaComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaCurvaReferenciaComponent, { className: "ListaCurvaReferenciaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-curva-referencia\\lista-curva-referencia.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-emision/lista-tipo-emision.component.ts
var import_sweetalert232 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/tipo-emision.ts
var TipoEmision = class {
};

// src/app/components/registro/mantenedor/atributo-financiero/carga-tipo-emision/carga-tipo-emision.component.ts
var import_sweetalert230 = __toESM(require_sweetalert2_all());
var CargaTipoEmisionComponent = class _CargaTipoEmisionComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreEmision))
      f.push("Nombre");
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new TipoEmision();
    this.guardando = false;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarTipoEmision(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert230.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El tipo de emisi\xF3n ha sido registrado correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
      import_sweetalert230.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CargaTipoEmisionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaTipoEmisionComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaTipoEmisionComponent, selectors: [["app-carga-tipo-emision"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["titulo", "Cargar Tipo de Emisi\xF3n", "subtitulo", "Registre un tipo de emisi\xF3n para clasificar instrumentos de renta fija.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "te-c-nombreEmision", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "te-c-nombreEmision", "type", "text", "autocomplete", "off", "placeholder", "Nombre", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "te-c-nombreCorto", 1, "form-label"], ["id", "te-c-nombreCorto", "type", "text", "autocomplete", "off", "placeholder", "Nombre Corto", "minlength", "3", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "te-c-descripcion", 1, "form-label"], ["id", "te-c-descripcion", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CargaTipoEmisionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaTipoEmisionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaTipoEmisionComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTipoEmisionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nombreEmision, $event) || (ctx.nuevoRegistro.nombreEmision = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTipoEmisionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nombreCorto, $event) || (ctx.nuevoRegistro.nombreCorto = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementStart(18, "span", 5);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTipoEmisionComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descripcion, $event) || (ctx.nuevoRegistro.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nombreEmision);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nombreCorto);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-tipo-emision.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaTipoEmisionComponent, { className: "CargaTipoEmisionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-tipo-emision\\carga-tipo-emision.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-emision/editar-tipo-emision.component.ts
var import_sweetalert231 = __toESM(require_sweetalert2_all());
var EditarTipoEmisionComponent = class _EditarTipoEmisionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreEmision))
      f.push("Nombre");
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoEmision();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert231.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoEmision(this.objRegistroEditado.id_TipoEmision, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert231.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert231.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoEmisionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoEmisionComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoEmisionComponent, selectors: [["app-editar-tipo-emision"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["titulo", "Editar Tipo de Emisi\xF3n", "subtitulo", "Modifique los datos del tipo de emisi\xF3n.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "te-e-nombreEmision", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "te-e-nombreEmision", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "te-e-nombreCorto", 1, "form-label"], ["id", "te-e-nombreCorto", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "te-e-descripcion", 1, "form-label"], ["id", "te-e-descripcion", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoEmisionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoEmisionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoEmisionComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoEmisionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreEmision, $event) || (ctx.objRegistroEditado.nombreEmision = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Nombre Corto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoEmisionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreCorto, $event) || (ctx.objRegistroEditado.nombreCorto = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Descripci\xF3n");
        \u0275\u0275elementStart(18, "span", 5);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoEmisionComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcion, $event) || (ctx.objRegistroEditado.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreEmision);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreCorto);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-emision.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoEmisionComponent, { className: "EditarTipoEmisionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-emision\\editar-tipo-emision.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-emision/lista-tipo-emision.component.ts
var _c014 = ["paginator"];
var _c114 = ["sort"];
var _c214 = () => [10, 20, 50, 100];
function ListaTipoEmisionComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.id_TipoEmision);
  }
}
function ListaTipoEmisionComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreEmision);
  }
}
function ListaTipoEmisionComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Nombre Corto");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.nombreCorto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.nombreCorto || "\u2014");
  }
}
function ListaTipoEmisionComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.descripcion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.descripcion || "\u2014");
  }
}
function ListaTipoEmisionComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoEmisionComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaTipoEmisionComponent_td_19_Template_button_click_1_listener($event) {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.abrirMenuFila($event, element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoEmisionComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaTipoEmisionComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaTipoEmisionComponent_tr_21_Template_tr_contextmenu_0_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onContextMenu($event, row_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaTipoEmisionComponent_ng_template_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      const editarModal_r13 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r8.editar(ctx_r8.selectedRow, editarModal_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaTipoEmisionComponent_ng_template_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.eliminar(ctx_r8.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-emision", 38);
    \u0275\u0275listener("close", function ListaTipoEmisionComponent_ng_template_29_Template_app_carga_tipo_emision_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoEmisionComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-emision", 39);
    \u0275\u0275listener("close", function ListaTipoEmisionComponent_ng_template_31_Template_app_editar_tipo_emision_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r8.filaEditar);
  }
}
var ListaTipoEmisionComponent = class _ListaTipoEmisionComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoEmision();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "id",
      "nombre",
      "nombreCorto",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoEmision().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert232.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoEmision(row.id_TipoEmision).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert232.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert232.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.listarRegistros();
    this.modalRef.close();
  }
  static {
    this.\u0275fac = function ListaTipoEmisionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoEmisionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoEmisionComponent, selectors: [["app-lista-tipo-emision"]], viewQuery: function ListaTipoEmisionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c014, 5);
        \u0275\u0275viewQuery(_c114, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar Tipo de Emisi\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombre", "matSortDirection", "asc", "aria-label", "Listado de tipos de emisi\xF3n", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreCorto"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de emisi\xF3n registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo de Emisi\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de emisi\xF3n", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoEmisionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoEmisionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoEmisionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoEmisionComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoEmisionComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoEmisionComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTipoEmisionComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTipoEmisionComponent_th_12_Template, 2, 0, "th", 10)(13, ListaTipoEmisionComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTipoEmisionComponent_th_15_Template, 2, 0, "th", 10)(16, ListaTipoEmisionComponent_td_16_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaTipoEmisionComponent_th_18_Template, 3, 0, "th", 18)(19, ListaTipoEmisionComponent_td_19_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(20, ListaTipoEmisionComponent_tr_20_Template, 1, 0, "tr", 20)(21, ListaTipoEmisionComponent_tr_21_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaTipoEmisionComponent_Template_app_tabla_estado_reintentar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoEmisionComponent_Template_app_tabla_estado_limpiar_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 24);
        \u0275\u0275elementStart(26, "mat-menu", null, 2);
        \u0275\u0275template(28, ListaTipoEmisionComponent_ng_template_28_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ListaTipoEmisionComponent_ng_template_29_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, ListaTipoEmisionComponent_ng_template_31_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r16 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(17);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c214))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r16);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoEmisionComponent, EditarTipoEmisionComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoEmisionComponent, { className: "ListaTipoEmisionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-emision\\lista-tipo-emision.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-fondo/lista-tipo-fondo.component.ts
var import_sweetalert234 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-fondo/editar-tipo-fondo.component.ts
var import_sweetalert233 = __toESM(require_sweetalert2_all());
var EditarTipoFondoComponent = class _EditarTipoFondoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codTipoFondo))
      f.push("C\xF3digo");
    if (vacio(r.desTipoFondo))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoFondo();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert233.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoFondo(this.objRegistroEditado.idTipoFondo, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert233.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert233.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoFondoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoFondoComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoFondoComponent, selectors: [["app-editar-tipo-fondo"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Tipo de Fondo", "subtitulo", "Modifique los datos del tipo de fondo.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "tf-e-codTipoFondo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tf-e-codTipoFondo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tf-e-desTipoFondo", 1, "form-label"], ["id", "tf-e-desTipoFondo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "150", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoFondoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoFondoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoFondoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoFondoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTipoFondo, $event) || (ctx.objRegistroEditado.codTipoFondo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoFondoComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desTipoFondo, $event) || (ctx.objRegistroEditado.desTipoFondo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTipoFondo);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desTipoFondo);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-fondo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoFondoComponent, { className: "EditarTipoFondoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-fondo\\editar-tipo-fondo.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-fondo/lista-tipo-fondo.component.ts
var _c015 = ["paginator"];
var _c115 = ["sort"];
var _c215 = () => [10, 20, 50, 100];
function ListaTipoFondoComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoFondoComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoFondo);
  }
}
function ListaTipoFondoComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoFondoComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codTipoFondo);
  }
}
function ListaTipoFondoComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoFondoComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desTipoFondo);
  }
}
function ListaTipoFondoComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoFondoComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaTipoFondoComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoFondoComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaTipoFondoComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaTipoFondoComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoFondoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaTipoFondoComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaTipoFondoComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoFondoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-fondo", 38);
    \u0275\u0275listener("close", function ListaTipoFondoComponent_ng_template_26_Template_app_carga_tipo_fondo_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoFondoComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-fondo", 39);
    \u0275\u0275listener("close", function ListaTipoFondoComponent_ng_template_28_Template_app_editar_tipo_fondo_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaTipoFondoComponent = class _ListaTipoFondoComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoFondo();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTipoFondo",
      "codTipoFondo",
      "desTipoFondo",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoFondo().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert234.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoFondo(row.idTipoFondo).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert234.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert234.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoFondoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoFondoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoFondoComponent, selectors: [["app-lista-tipo-fondo"]], viewQuery: function ListaTipoFondoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c015, 5);
        \u0275\u0275viewQuery(_c115, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Tipo de Fondo", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codTipoFondo", "matSortDirection", "asc", "aria-label", "Listado de tipos de fondo", 3, "dataSource"], ["matColumnDef", "idTipoFondo"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-id", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codTipoFondo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desTipoFondo"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de fondo registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo de Fondo\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de fondo", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-id"], ["mat-cell", "", 1, "col-id"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoFondoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoFondoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoFondoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoFondoComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoFondoComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoFondoComponent_th_9_Template, 2, 0, "th", 13)(10, ListaTipoFondoComponent_td_10_Template, 3, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 15);
        \u0275\u0275template(12, ListaTipoFondoComponent_th_12_Template, 2, 0, "th", 13)(13, ListaTipoFondoComponent_td_13_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTipoFondoComponent_th_15_Template, 3, 0, "th", 17)(16, ListaTipoFondoComponent_td_16_Template, 4, 0, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaTipoFondoComponent_tr_17_Template, 1, 0, "tr", 19)(18, ListaTipoFondoComponent_tr_18_Template, 1, 0, "tr", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 21);
        \u0275\u0275listener("reintentar", function ListaTipoFondoComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoFondoComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 22, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 23);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaTipoFondoComponent_ng_template_25_Template, 8, 0, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaTipoFondoComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaTipoFondoComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c215))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoFondoComponent, EditarTipoFondoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoFondoComponent, { className: "ListaTipoFondoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-fondo\\lista-tipo-fondo.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-emisor/lista-emisor.component.ts
var import_sweetalert236 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-emisor/editar-emisor.component.ts
var import_sweetalert235 = __toESM(require_sweetalert2_all());
function EditarEmisorComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-pais", 43);
    \u0275\u0275listener("close", function EditarEmisorComponent_ng_template_93_Template_app_carga_pais_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarEmisorComponent = class _EditarEmisorComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codEmisor))
      f.push("C\xF3digo");
    if (vacio(r.nomEmisor))
      f.push("Nombre");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.guardando = false;
    this.listPais = [];
    this.objRegistroEditado = new Emisor();
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerListPais();
  }
  obtenerListPais() {
    this.registroService.getListaPais().subscribe((response) => {
      this.listPais = response;
    });
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert235.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarEmisor(this.objRegistroEditado.idEmisor, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert235.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert235.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListPais();
  }
  static {
    this.\u0275fac = function EditarEmisorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarEmisorComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarEmisorComponent, selectors: [["app-editar-emisor"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 20, consts: [["cargaModalPais", ""], ["titulo", "Editar Emisor", "subtitulo", "Modifique los datos del emisor.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "em-e-codEmisor", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "em-e-codEmisor", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "4", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-codIDCCliente", 1, "form-label"], ["id", "em-e-codIDCCliente", "type", "number", "autocomplete", "off", "minlength", "2", "maxlength", "9", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-nomEmisor", 1, "form-label"], ["id", "em-e-nomEmisor", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-codTipoEmisor", 1, "form-label"], ["id", "em-e-codTipoEmisor", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-detalle", 1, "form-label"], ["id", "em-e-detalle", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-ambito", 1, "form-label"], ["id", "em-e-ambito", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-codBloomberg", 1, "form-label"], ["id", "em-e-codBloomberg", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-idPais", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "em-e-idPais", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPais", "bindValue", "idPais", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar pa\xEDs", "aria-label", "Agregar pa\xEDs", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "em-e-codSBS", 1, "form-label"], ["id", "em-e-codSBS", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-codRUC", 1, "form-label"], ["id", "em-e-codRUC", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-codFuente", 1, "form-label"], ["id", "em-e-codFuente", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "em-e-codTipoEmisorAnx8", 1, "form-label"], ["id", "em-e-codTipoEmisorAnx8", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "em-e-flgEmiReport", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "em-e-flgEmiReport", 1, "hig-opcion__titulo"], ["type", "checkbox", "id", "em-e-flgOrgaMulti", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "em-e-flgOrgaMulti", 1, "hig-opcion__titulo"], ["type", "checkbox", "id", "em-e-flgContratoMarco", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "em-e-flgContratoMarco", 1, "hig-opcion__titulo"], ["type", "checkbox", "id", "em-e-flgContratoEspecifico", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "em-e-flgContratoEspecifico", 1, "hig-opcion__titulo"], [3, "close"]], template: function EditarEmisorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function EditarEmisorComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarEmisorComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 2)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codEmisor, $event) || (ctx.objRegistroEditado.codEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "C\xF3d. IDC Cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codIDCCliente, $event) || (ctx.objRegistroEditado.codIDCCliente = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "label", 10);
        \u0275\u0275text(17, "Nombre");
        \u0275\u0275elementStart(18, "span", 6);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nomEmisor, $event) || (ctx.objRegistroEditado.nomEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 4)(22, "label", 12);
        \u0275\u0275text(23, "Tipo Emisor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTipoEmisor, $event) || (ctx.objRegistroEditado.codTipoEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 4)(26, "label", 14);
        \u0275\u0275text(27, "Detalle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.detalle, $event) || (ctx.objRegistroEditado.detalle = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 4)(30, "label", 16);
        \u0275\u0275text(31, "\xC1mbito");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.ambito, $event) || (ctx.objRegistroEditado.ambito = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 4)(34, "label", 18);
        \u0275\u0275text(35, "C\xF3d. Bloomberg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codBloomberg, $event) || (ctx.objRegistroEditado.codBloomberg = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "fieldset", 2)(38, "legend");
        \u0275\u0275text(39, "Clasificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 3)(41, "div", 4)(42, "label", 20);
        \u0275\u0275text(43, "Pa\xEDs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 21)(45, "ng-select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_ng_select_ngModelChange_45_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idPais, $event) || (ctx.objRegistroEditado.idPais = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 23);
        \u0275\u0275listener("click", function EditarEmisorComponent_Template_button_click_46_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalPais_r2 = \u0275\u0275reference(94);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalPais_r2));
        });
        \u0275\u0275elementStart(47, "span", 24);
        \u0275\u0275text(48, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(49, "fieldset", 2)(50, "legend");
        \u0275\u0275text(51, "Datos Adicionales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "div", 4)(54, "label", 25);
        \u0275\u0275text(55, "C\xF3d. SBS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codSBS, $event) || (ctx.objRegistroEditado.codSBS = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 4)(58, "label", 27);
        \u0275\u0275text(59, "C\xF3d. RUC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codRUC, $event) || (ctx.objRegistroEditado.codRUC = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 4)(62, "label", 29);
        \u0275\u0275text(63, "Fuente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codFuente, $event) || (ctx.objRegistroEditado.codFuente = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 4)(66, "label", 31);
        \u0275\u0275text(67, "Tipo Emisor Anx8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 32);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTipoEmisorAnx8, $event) || (ctx.objRegistroEditado.codTipoEmisorAnx8 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "fieldset", 2)(70, "legend");
        \u0275\u0275text(71, "Opciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 33)(73, "div", 34)(74, "input", 35);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_74_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgEmiReport, $event) || (ctx.objRegistroEditado.flgEmiReport = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div")(76, "label", 36);
        \u0275\u0275text(77, "Emite Reporte");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 34)(79, "input", 37);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_79_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgOrgaMulti, $event) || (ctx.objRegistroEditado.flgOrgaMulti = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div")(81, "label", 38);
        \u0275\u0275text(82, "Organismo Multilateral");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "div", 34)(84, "input", 39);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgContratoMarco, $event) || (ctx.objRegistroEditado.flgContratoMarco = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div")(86, "label", 40);
        \u0275\u0275text(87, "Contrato Marco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 34)(89, "input", 41);
        \u0275\u0275twoWayListener("ngModelChange", function EditarEmisorComponent_Template_input_ngModelChange_89_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgContratoEspecifico, $event) || (ctx.objRegistroEditado.flgContratoEspecifico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div")(91, "label", 42);
        \u0275\u0275text(92, "Contrato Espec\xEDfico");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(93, EditarEmisorComponent_ng_template_93_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codEmisor);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codIDCCliente);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nomEmisor);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTipoEmisor);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.detalle);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.ambito);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codBloomberg);
        \u0275\u0275advance(9);
        \u0275\u0275property("items", ctx.listPais);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idPais);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codSBS);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codRUC);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codFuente);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTipoEmisorAnx8);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgEmiReport);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgOrgaMulti);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgContratoMarco);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgContratoEspecifico);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, CargaPaisComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-emisor.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarEmisorComponent, { className: "EditarEmisorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-emisor\\editar-emisor.component.ts", lineNumber: 21 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-emisor/lista-emisor.component.ts
var _c016 = ["paginator"];
var _c116 = ["sort"];
var _c216 = () => [10, 20, 50, 100];
function ListaEmisorComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idEmisor);
  }
}
function ListaEmisorComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codEmisor);
  }
}
function ListaEmisorComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "C\xF3d. IDC Cliente");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.codIDCCliente);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.codIDCCliente || "\u2014");
  }
}
function ListaEmisorComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.nomEmisor);
  }
}
function ListaEmisorComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r7.codTipoEmisor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.codTipoEmisor || "\u2014");
  }
}
function ListaEmisorComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Detalle");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r8.detalle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.detalle || "\u2014");
  }
}
function ListaEmisorComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Emite Reporte");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "mat-icon", 51);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmisorComponent_td_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275template(1, ListaEmisorComponent_td_25_span_1_Template, 5, 0, "span", 49)(2, ListaEmisorComponent_td_25_ng_template_2_Template, 4, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const sinMarcaER_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r9.flgEmiReport)("ngIfElse", sinMarcaER_r10);
  }
}
function ListaEmisorComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Organismo Multilateral");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "mat-icon", 51);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmisorComponent_td_28_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275template(1, ListaEmisorComponent_td_28_span_1_Template, 5, 0, "span", 49)(2, ListaEmisorComponent_td_28_ng_template_2_Template, 4, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const sinMarcaOM_r12 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r11.flgOrgaMulti)("ngIfElse", sinMarcaOM_r12);
  }
}
function ListaEmisorComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "\xC1mbito");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r13.ambito);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r13.ambito || "\u2014");
  }
}
function ListaEmisorComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "C\xF3d. Bloomberg");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r14.codBloomberg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r14.codBloomberg || "\u2014");
  }
}
function ListaEmisorComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Contrato Marco");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "mat-icon", 51);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmisorComponent_td_37_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275template(1, ListaEmisorComponent_td_37_span_1_Template, 5, 0, "span", 49)(2, ListaEmisorComponent_td_37_ng_template_2_Template, 4, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const sinMarcaCM_r16 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r15.flgContratoMarco)("ngIfElse", sinMarcaCM_r16);
  }
}
function ListaEmisorComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Contrato Espec\xEDfico");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "mat-icon", 51);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmisorComponent_td_40_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275template(1, ListaEmisorComponent_td_40_span_1_Template, 5, 0, "span", 49)(2, ListaEmisorComponent_td_40_ng_template_2_Template, 4, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const sinMarcaCE_r18 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r17.flgContratoEspecifico)("ngIfElse", sinMarcaCE_r18);
  }
}
function ListaEmisorComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "C\xF3d. SBS");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r19.codSBS);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r19.codSBS || "\u2014");
  }
}
function ListaEmisorComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "RUC");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r20.codRUC);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r20.codRUC || "\u2014");
  }
}
function ListaEmisorComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Fuente");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r21.codFuente);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r21.codFuente || "\u2014");
  }
}
function ListaEmisorComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Tipo Emisor Anx8");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r22.codTipoEmisorAnx8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r22.codTipoEmisorAnx8 || "\u2014");
  }
}
function ListaEmisorComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Pa\xEDs");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r23.idPais);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r23.idPais || "\u2014");
  }
}
function ListaEmisorComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54)(1, "span", 52);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmisorComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "button", 56);
    \u0275\u0275listener("click", function ListaEmisorComponent_td_58_Template_button_click_1_listener($event) {
      const element_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.abrirMenuFila($event, element_r25));
    });
    \u0275\u0275elementStart(2, "mat-icon", 51);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaEmisorComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function ListaEmisorComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 58);
    \u0275\u0275listener("contextmenu", function ListaEmisorComponent_tr_60_Template_tr_contextmenu_0_listener($event) {
      const row_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.onContextMenu($event, row_r28));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ListaEmisorComponent_ng_template_67_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r25 = \u0275\u0275nextContext();
      const editarModal_r30 = \u0275\u0275reference(71);
      return \u0275\u0275resetView(ctx_r25.editar(ctx_r25.selectedRow, editarModal_r30));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function ListaEmisorComponent_ng_template_67_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.eliminar(ctx_r25.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 60);
    \u0275\u0275listener("close", function ListaEmisorComponent_ng_template_68_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaEmisorComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-emisor", 61);
    \u0275\u0275listener("close", function ListaEmisorComponent_ng_template_70_Template_app_editar_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r25 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r25.filaEditar);
  }
}
var ListaEmisorComponent = class _ListaEmisorComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Emisor();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idEmisor",
      "codEmisor",
      "codIDCCliente",
      "nomEmisor",
      "codTipoEmisor",
      "detalle",
      "flgEmiReport",
      "flgOrgaMulti",
      "ambito",
      "codBloomberg",
      "flgContratoMarco",
      "flgContratoEspecifico",
      "codSBS",
      "codRUC",
      "codFuente",
      "codTipoEmisorAnx8",
      "idPais",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaEmisor().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert236.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarEmisor(row.idEmisor).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert236.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert236.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaEmisorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaEmisorComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaEmisorComponent, selectors: [["app-lista-emisor"]], viewQuery: function ListaEmisorComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c016, 5);
        \u0275\u0275viewQuery(_c116, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], ["sinMarcaER", ""], ["sinMarcaOM", ""], ["sinMarcaCM", ""], ["sinMarcaCE", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o nombre\u2026", "accion", "Agregar Emisor", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nomEmisor", "matSortDirection", "asc", "aria-label", "Listado de emisores", 3, "dataSource"], ["matColumnDef", "idEmisor"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codEmisor"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codIDCCliente"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "nomEmisor"], ["matColumnDef", "codTipoEmisor"], ["matColumnDef", "detalle"], ["matColumnDef", "flgEmiReport"], ["mat-cell", "", "class", "col-estado", 4, "matCellDef"], ["matColumnDef", "flgOrgaMulti"], ["matColumnDef", "ambito"], ["matColumnDef", "codBloomberg"], ["matColumnDef", "flgContratoMarco"], ["matColumnDef", "flgContratoEspecifico"], ["matColumnDef", "codSBS"], ["matColumnDef", "codRUC"], ["matColumnDef", "codFuente"], ["matColumnDef", "codTipoEmisorAnx8"], ["matColumnDef", "idPais"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay emisores registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Emisor\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de emisores", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-cell", "", 1, "col-estado"], ["class", "estado-si", 4, "ngIf", "ngIfElse"], [1, "estado-si"], ["aria-hidden", "true"], [1, "solo-lector"], ["aria-hidden", "true", 1, "celda-vacia"], ["mat-header-cell", "", 1, "col-acciones"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaEmisorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 9)(1, "app-tabla-toolbar", 10);
        \u0275\u0275listener("buscar", function ListaEmisorComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaEmisorComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(69);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 11)(3, "table", 12, 0);
        \u0275\u0275elementContainerStart(5, 13);
        \u0275\u0275template(6, ListaEmisorComponent_th_6_Template, 2, 0, "th", 14)(7, ListaEmisorComponent_td_7_Template, 2, 1, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 16);
        \u0275\u0275template(9, ListaEmisorComponent_th_9_Template, 2, 0, "th", 14)(10, ListaEmisorComponent_td_10_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 18);
        \u0275\u0275template(12, ListaEmisorComponent_th_12_Template, 2, 0, "th", 14)(13, ListaEmisorComponent_td_13_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 20);
        \u0275\u0275template(15, ListaEmisorComponent_th_15_Template, 2, 0, "th", 14)(16, ListaEmisorComponent_td_16_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 21);
        \u0275\u0275template(18, ListaEmisorComponent_th_18_Template, 2, 0, "th", 14)(19, ListaEmisorComponent_td_19_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 22);
        \u0275\u0275template(21, ListaEmisorComponent_th_21_Template, 2, 0, "th", 14)(22, ListaEmisorComponent_td_22_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(23, 23);
        \u0275\u0275template(24, ListaEmisorComponent_th_24_Template, 2, 0, "th", 14)(25, ListaEmisorComponent_td_25_Template, 4, 2, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(26, 25);
        \u0275\u0275template(27, ListaEmisorComponent_th_27_Template, 2, 0, "th", 14)(28, ListaEmisorComponent_td_28_Template, 4, 2, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(29, 26);
        \u0275\u0275template(30, ListaEmisorComponent_th_30_Template, 2, 0, "th", 14)(31, ListaEmisorComponent_td_31_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 27);
        \u0275\u0275template(33, ListaEmisorComponent_th_33_Template, 2, 0, "th", 14)(34, ListaEmisorComponent_td_34_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 28);
        \u0275\u0275template(36, ListaEmisorComponent_th_36_Template, 2, 0, "th", 14)(37, ListaEmisorComponent_td_37_Template, 4, 2, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 29);
        \u0275\u0275template(39, ListaEmisorComponent_th_39_Template, 2, 0, "th", 14)(40, ListaEmisorComponent_td_40_Template, 4, 2, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(41, 30);
        \u0275\u0275template(42, ListaEmisorComponent_th_42_Template, 2, 0, "th", 14)(43, ListaEmisorComponent_td_43_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(44, 31);
        \u0275\u0275template(45, ListaEmisorComponent_th_45_Template, 2, 0, "th", 14)(46, ListaEmisorComponent_td_46_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(47, 32);
        \u0275\u0275template(48, ListaEmisorComponent_th_48_Template, 2, 0, "th", 14)(49, ListaEmisorComponent_td_49_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(50, 33);
        \u0275\u0275template(51, ListaEmisorComponent_th_51_Template, 2, 0, "th", 14)(52, ListaEmisorComponent_td_52_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(53, 34);
        \u0275\u0275template(54, ListaEmisorComponent_th_54_Template, 2, 0, "th", 14)(55, ListaEmisorComponent_td_55_Template, 2, 3, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(56, 35);
        \u0275\u0275template(57, ListaEmisorComponent_th_57_Template, 3, 0, "th", 36)(58, ListaEmisorComponent_td_58_Template, 4, 0, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(59, ListaEmisorComponent_tr_59_Template, 1, 0, "tr", 38)(60, ListaEmisorComponent_tr_60_Template, 1, 0, "tr", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "app-tabla-estado", 40);
        \u0275\u0275listener("reintentar", function ListaEmisorComponent_Template_app_tabla_estado_reintentar_61_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaEmisorComponent_Template_app_tabla_estado_limpiar_61_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(62, "mat-paginator", 41, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "div", 42);
        \u0275\u0275elementStart(65, "mat-menu", null, 2);
        \u0275\u0275template(67, ListaEmisorComponent_ng_template_67_Template, 8, 0, "ng-template", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275template(68, ListaEmisorComponent_ng_template_68_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(70, ListaEmisorComponent_ng_template_70_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r33 = \u0275\u0275reference(66);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(56);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c216))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r33);
      }
    }, dependencies: [CommonModule, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaEmisorComponent, EditarEmisorComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaEmisorComponent, { className: "ListaEmisorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-emisor\\lista-emisor.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-moneda/lista-moneda.component.ts
var import_sweetalert238 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-moneda/editar-moneda.component.ts
var import_sweetalert237 = __toESM(require_sweetalert2_all());
var EditarMonedaComponent = class _EditarMonedaComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codMoneda))
      f.push("C\xF3digo");
    if (vacio(r.desMoneda))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Moneda();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert237.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarMoneda(this.objRegistroEditado.idMoneda, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert237.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert237.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  permitirSoloDoI(event) {
    const tecla = event.key.toUpperCase();
    if (tecla !== "D" && tecla !== "I" && tecla.length === 1) {
      event.preventDefault();
    }
  }
  static {
    this.\u0275fac = function EditarMonedaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarMonedaComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarMonedaComponent, selectors: [["app-editar-moneda"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 12, consts: [["titulo", "Editar Moneda", "subtitulo", "Modifique los datos de la moneda.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "mo-e-codMoneda", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "mo-e-codMoneda", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-e-desMoneda", 1, "form-label"], ["id", "mo-e-desMoneda", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-e-desCorto", 1, "form-label"], ["id", "mo-e-desCorto", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-e-codSucave", 1, "form-label"], ["id", "mo-e-codSucave", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-e-codTipoRelacionUSD", 1, "form-label"], ["data-bs-toggle", "tooltip", "data-bs-html", "true", "data-bs-placement", "right", "title", "Ingrese la letra D (Directo) o I (Indirecto)", 1, "bi", "bi-info-circle-fill", "text-primary", "ms-2"], ["id", "mo-e-codTipoRelacionUSD", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "1", 1, "form-control", 3, "ngModelChange", "keydown", "ngModel"], ["for", "mo-e-codMonedaInt", 1, "form-label"], ["id", "mo-e-codMonedaInt", "type", "text", "autocomplete", "off", "minlength", "4", "maxlength", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-e-desTicker", 1, "form-label"], ["id", "mo-e-desTicker", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "mo-e-flgCargaAutom", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "mo-e-flgCargaAutom", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], ["type", "checkbox", "id", "mo-e-flgVaR", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "mo-e-flgVaR", 1, "hig-opcion__titulo"]], template: function EditarMonedaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarMonedaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarMonedaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codMoneda, $event) || (ctx.objRegistroEditado.codMoneda = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desMoneda, $event) || (ctx.objRegistroEditado.desMoneda = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 3)(18, "label", 9);
        \u0275\u0275text(19, "Descripci\xF3n Corta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desCorto, $event) || (ctx.objRegistroEditado.desCorto = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 3)(22, "label", 11);
        \u0275\u0275text(23, "C\xF3d. Sucave");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codSucave, $event) || (ctx.objRegistroEditado.codSucave = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "fieldset", 1)(26, "legend");
        \u0275\u0275text(27, "Equivalencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "label", 13);
        \u0275\u0275text(31, " Relaci\xF3n USD ");
        \u0275\u0275element(32, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTipoRelacionUSD, $event) || (ctx.objRegistroEditado.codTipoRelacionUSD = $event);
          return $event;
        });
        \u0275\u0275listener("keydown", function EditarMonedaComponent_Template_input_keydown_33_listener($event) {
          return ctx.permitirSoloDoI($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 3)(35, "label", 16);
        \u0275\u0275text(36, "C\xF3d. Moneda Int.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codMonedaInt, $event) || (ctx.objRegistroEditado.codMonedaInt = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 3)(39, "label", 18);
        \u0275\u0275text(40, "Ticker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desTicker, $event) || (ctx.objRegistroEditado.desTicker = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "fieldset", 1)(43, "legend");
        \u0275\u0275text(44, "Opciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 20)(46, "div", 21)(47, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgCargaAutom, $event) || (ctx.objRegistroEditado.flgCargaAutom = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div")(49, "label", 23);
        \u0275\u0275text(50, "Carga autom\xE1tica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 24);
        \u0275\u0275text(52, "El tipo de cambio se actualiza autom\xE1ticamente desde la fuente de informaci\xF3n.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 21)(54, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function EditarMonedaComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgVaR, $event) || (ctx.objRegistroEditado.flgVaR = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div")(56, "label", 26);
        \u0275\u0275text(57, "C\xE1lculo de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 24);
        \u0275\u0275text(59, "Habilita esta moneda como moneda de reporte en el c\xE1lculo de Valor en Riesgo.");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codMoneda);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desMoneda);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desCorto);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codSucave);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTipoRelacionUSD);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codMonedaInt);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desTicker);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgCargaAutom);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgVaR);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-moneda.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarMonedaComponent, { className: "EditarMonedaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-moneda\\editar-moneda.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-moneda/lista-moneda.component.ts
var _c017 = ["paginator"];
var _c117 = ["sort"];
var _c217 = () => [10, 20, 50, 100];
function ListaMonedaComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r3.codMoneda);
  }
}
function ListaMonedaComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.desMoneda);
  }
}
function ListaMonedaComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Desc. Corta");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desCorto);
  }
}
function ListaMonedaComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "C\xF3d. Sucave");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.codSucave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.codSucave || "\u2014");
  }
}
function ListaMonedaComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Relaci\xF3n USD");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r7.codTipoRelacionUSD);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.codTipoRelacionUSD || "\u2014");
  }
}
function ListaMonedaComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "C\xF3d. Moneda Int.");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r8.codMonedaInt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.codMonedaInt || "\u2014");
  }
}
function ListaMonedaComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Ticker");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r9.desTicker);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.desTicker || "\u2014");
  }
}
function ListaMonedaComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Carga Autom\xE1tica");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38)(1, "mat-icon", 39);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaMonedaComponent_td_28_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, ListaMonedaComponent_td_28_span_1_Template, 5, 0, "span", 37)(2, ListaMonedaComponent_td_28_ng_template_2_Template, 4, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const sinMarcaCA_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r10.flgCargaAutom)("ngIfElse", sinMarcaCA_r11);
  }
}
function ListaMonedaComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "VaR");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38)(1, "mat-icon", 39);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaMonedaComponent_td_31_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, ListaMonedaComponent_td_31_span_1_Template, 5, 0, "span", 37)(2, ListaMonedaComponent_td_31_ng_template_2_Template, 4, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const sinMarcaVR_r13 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r12.flgVaR)("ngIfElse", sinMarcaVR_r13);
  }
}
function ListaMonedaComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42)(1, "span", 40);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaMonedaComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 43)(1, "button", 44);
    \u0275\u0275listener("click", function ListaMonedaComponent_td_34_Template_button_click_1_listener($event) {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.abrirMenuFila($event, element_r15));
    });
    \u0275\u0275elementStart(2, "mat-icon", 39);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaMonedaComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 45);
  }
}
function ListaMonedaComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46);
    \u0275\u0275listener("contextmenu", function ListaMonedaComponent_tr_36_Template_tr_contextmenu_0_listener($event) {
      const row_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.onContextMenu($event, row_r18));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ListaMonedaComponent_ng_template_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r15 = \u0275\u0275nextContext();
      const editarModal_r20 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(ctx_r15.editar(ctx_r15.selectedRow, editarModal_r20));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 47);
    \u0275\u0275listener("click", function ListaMonedaComponent_ng_template_43_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.eliminar(ctx_r15.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 48);
    \u0275\u0275listener("close", function ListaMonedaComponent_ng_template_44_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaMonedaComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-moneda", 49);
    \u0275\u0275listener("close", function ListaMonedaComponent_ng_template_46_Template_app_editar_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r15.filaEditar);
  }
}
var ListaMonedaComponent = class _ListaMonedaComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Moneda();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "codMoneda",
      "desMoneda",
      "desCorto",
      "codSucave",
      "codTipoRelacionUSD",
      "codMonedaInt",
      "desTicker",
      "flgCargaAutom",
      "flgVaR",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaMoneda().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert238.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.eiminarMoneda(row.idMoneda).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert238.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert238.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaMonedaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaMonedaComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaMonedaComponent, selectors: [["app-lista-moneda"]], viewQuery: function ListaMonedaComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c017, 5);
        \u0275\u0275viewQuery(_c117, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], ["sinMarcaCA", ""], ["sinMarcaVR", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Moneda", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codMoneda", "matSortDirection", "asc", "aria-label", "Listado de monedas", 3, "dataSource"], ["matColumnDef", "codMoneda"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desMoneda"], ["matColumnDef", "desCorto"], ["matColumnDef", "codSucave"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "codTipoRelacionUSD"], ["matColumnDef", "codMonedaInt"], ["matColumnDef", "desTicker"], ["matColumnDef", "flgCargaAutom"], ["mat-cell", "", "class", "col-estado", 4, "matCellDef"], ["matColumnDef", "flgVaR"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay monedas registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Moneda\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de monedas", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-cell", "", 1, "col-estado"], ["class", "estado-si", 4, "ngIf", "ngIfElse"], [1, "estado-si"], ["aria-hidden", "true"], [1, "solo-lector"], ["aria-hidden", "true", 1, "celda-vacia"], ["mat-header-cell", "", 1, "col-acciones"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaMonedaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 7)(1, "app-tabla-toolbar", 8);
        \u0275\u0275listener("buscar", function ListaMonedaComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaMonedaComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(45);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 9)(3, "table", 10, 0);
        \u0275\u0275elementContainerStart(5, 11);
        \u0275\u0275template(6, ListaMonedaComponent_th_6_Template, 2, 0, "th", 12)(7, ListaMonedaComponent_td_7_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 14);
        \u0275\u0275template(9, ListaMonedaComponent_th_9_Template, 2, 0, "th", 12)(10, ListaMonedaComponent_td_10_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 15);
        \u0275\u0275template(12, ListaMonedaComponent_th_12_Template, 2, 0, "th", 12)(13, ListaMonedaComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaMonedaComponent_th_15_Template, 2, 0, "th", 12)(16, ListaMonedaComponent_td_16_Template, 2, 3, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 18);
        \u0275\u0275template(18, ListaMonedaComponent_th_18_Template, 2, 0, "th", 12)(19, ListaMonedaComponent_td_19_Template, 2, 3, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 19);
        \u0275\u0275template(21, ListaMonedaComponent_th_21_Template, 2, 0, "th", 12)(22, ListaMonedaComponent_td_22_Template, 2, 3, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(23, 20);
        \u0275\u0275template(24, ListaMonedaComponent_th_24_Template, 2, 0, "th", 12)(25, ListaMonedaComponent_td_25_Template, 2, 3, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(26, 21);
        \u0275\u0275template(27, ListaMonedaComponent_th_27_Template, 2, 0, "th", 12)(28, ListaMonedaComponent_td_28_Template, 4, 2, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(29, 23);
        \u0275\u0275template(30, ListaMonedaComponent_th_30_Template, 2, 0, "th", 12)(31, ListaMonedaComponent_td_31_Template, 4, 2, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 24);
        \u0275\u0275template(33, ListaMonedaComponent_th_33_Template, 3, 0, "th", 25)(34, ListaMonedaComponent_td_34_Template, 4, 0, "td", 26);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(35, ListaMonedaComponent_tr_35_Template, 1, 0, "tr", 27)(36, ListaMonedaComponent_tr_36_Template, 1, 0, "tr", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "app-tabla-estado", 29);
        \u0275\u0275listener("reintentar", function ListaMonedaComponent_Template_app_tabla_estado_reintentar_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaMonedaComponent_Template_app_tabla_estado_limpiar_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "mat-paginator", 30, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "div", 31);
        \u0275\u0275elementStart(41, "mat-menu", null, 2);
        \u0275\u0275template(43, ListaMonedaComponent_ng_template_43_Template, 8, 0, "ng-template", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, ListaMonedaComponent_ng_template_44_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(46, ListaMonedaComponent_ng_template_46_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r23 = \u0275\u0275reference(42);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(32);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c217))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r23);
      }
    }, dependencies: [CommonModule, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaMonedaComponent, EditarMonedaComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaMonedaComponent, { className: "ListaMonedaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-moneda\\lista-moneda.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-sector/lista-sector.component.ts
var import_sweetalert241 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/sector.ts
var Sector = class {
};

// src/app/components/registro/mantenedor/atributo-financiero/carga-sector/carga-sector.component.ts
var import_sweetalert239 = __toESM(require_sweetalert2_all());
var CargaSectorComponent = class _CargaSectorComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreSector))
      f.push("Nombre");
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new Sector();
    this.guardando = false;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarSector(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert239.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El sector ha sido registrado correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
      import_sweetalert239.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CargaSectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaSectorComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaSectorComponent, selectors: [["app-carga-sector"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Cargar Sector", "subtitulo", "Registre un sector para clasificar instrumentos seg\xFAn su rubro econ\xF3mico.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "se-c-nombreSector", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "se-c-nombreSector", "type", "text", "autocomplete", "off", "placeholder", "Nombre", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "se-c-descripcion", 1, "form-label"], ["id", "se-c-descripcion", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CargaSectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaSectorComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaSectorComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaSectorComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nombreSector, $event) || (ctx.nuevoRegistro.nombreSector = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaSectorComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descripcion, $event) || (ctx.nuevoRegistro.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nombreSector);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-sector.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaSectorComponent, { className: "CargaSectorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-sector\\carga-sector.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/editar-sector/editar-sector.component.ts
var import_sweetalert240 = __toESM(require_sweetalert2_all());
var EditarSectorComponent = class _EditarSectorComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreSector))
      f.push("Nombre");
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Sector();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert240.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarSector(this.objRegistroEditado.iD_Sector, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert240.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert240.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarSectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarSectorComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarSectorComponent, selectors: [["app-editar-sector"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Sector", "subtitulo", "Modifique los datos del sector.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "se-e-nombreSector", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "se-e-nombreSector", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "se-e-descripcion", 1, "form-label"], ["id", "se-e-descripcion", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarSectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarSectorComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarSectorComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarSectorComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreSector, $event) || (ctx.objRegistroEditado.nombreSector = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarSectorComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcion, $event) || (ctx.objRegistroEditado.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreSector);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-sector.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarSectorComponent, { className: "EditarSectorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-sector\\editar-sector.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-sector/lista-sector.component.ts
var _c018 = ["paginator"];
var _c118 = ["sort"];
var _c218 = () => [10, 20, 50, 100];
function ListaSectorComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaSectorComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.iD_Sector);
  }
}
function ListaSectorComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaSectorComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreSector);
  }
}
function ListaSectorComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaSectorComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.descripcion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descripcion || "\u2014");
  }
}
function ListaSectorComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31)(1, "span", 32);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaSectorComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 34);
    \u0275\u0275listener("click", function ListaSectorComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 35);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaSectorComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function ListaSectorComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37);
    \u0275\u0275listener("contextmenu", function ListaSectorComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaSectorComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ListaSectorComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function ListaSectorComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaSectorComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-sector", 39);
    \u0275\u0275listener("close", function ListaSectorComponent_ng_template_26_Template_app_carga_sector_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaSectorComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-sector", 40);
    \u0275\u0275listener("close", function ListaSectorComponent_ng_template_28_Template_app_editar_sector_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaSectorComponent = class _ListaSectorComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new Sector();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "iD_Sector",
      "nombreSector",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaSector().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert241.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarSector(row.iD_Sector).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert241.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert241.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaSectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaSectorComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaSectorComponent, selectors: [["app-lista-sector"]], viewQuery: function ListaSectorComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c018, 5);
        \u0275\u0275viewQuery(_c118, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar Sector", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombreSector", "matSortDirection", "asc", "aria-label", "Listado de sectores", 3, "dataSource"], ["matColumnDef", "iD_Sector"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-id", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombreSector"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay sectores registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Sector\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de sectores", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-id"], ["mat-cell", "", 1, "col-id"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaSectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaSectorComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaSectorComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaSectorComponent_th_6_Template, 2, 0, "th", 10)(7, ListaSectorComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaSectorComponent_th_9_Template, 2, 0, "th", 13)(10, ListaSectorComponent_td_10_Template, 3, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 15);
        \u0275\u0275template(12, ListaSectorComponent_th_12_Template, 2, 0, "th", 13)(13, ListaSectorComponent_td_13_Template, 2, 3, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 17);
        \u0275\u0275template(15, ListaSectorComponent_th_15_Template, 3, 0, "th", 18)(16, ListaSectorComponent_td_16_Template, 4, 0, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaSectorComponent_tr_17_Template, 1, 0, "tr", 20)(18, ListaSectorComponent_tr_18_Template, 1, 0, "tr", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 22);
        \u0275\u0275listener("reintentar", function ListaSectorComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaSectorComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 23, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 24);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaSectorComponent_ng_template_25_Template, 8, 0, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaSectorComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaSectorComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c218))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaSectorComponent, EditarSectorComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaSectorComponent, { className: "ListaSectorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-sector\\lista-sector.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-grupo-economico/lista-grupo-economico.component.ts
var import_sweetalert244 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/grupo-economico.ts
var GrupoEconomico = class {
};

// src/app/components/registro/mantenedor/atributo-financiero/carga-grupo-economico/carga-grupo-economico.component.ts
var import_sweetalert242 = __toESM(require_sweetalert2_all());
var CargaGrupoEconomicoComponent = class _CargaGrupoEconomicoComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreGrupo))
      f.push("Nombre");
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new GrupoEconomico();
    this.guardando = false;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarGrupoEconomico(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert242.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El grupo econ\xF3mico ha sido registrado correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
      import_sweetalert242.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CargaGrupoEconomicoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaGrupoEconomicoComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaGrupoEconomicoComponent, selectors: [["app-carga-grupo-economico"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Cargar Grupo Econ\xF3mico", "subtitulo", "Registre un grupo econ\xF3mico para agrupar emisores relacionados.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ge-c-nombreGrupo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ge-c-nombreGrupo", "type", "text", "autocomplete", "off", "placeholder", "Nombre", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ge-c-descripcion", 1, "form-label"], ["id", "ge-c-descripcion", "type", "text", "autocomplete", "off", "placeholder", "Descripci\xF3n", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CargaGrupoEconomicoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaGrupoEconomicoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaGrupoEconomicoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaGrupoEconomicoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nombreGrupo, $event) || (ctx.nuevoRegistro.nombreGrupo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaGrupoEconomicoComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descripcion, $event) || (ctx.nuevoRegistro.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nombreGrupo);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-grupo-economico.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaGrupoEconomicoComponent, { className: "CargaGrupoEconomicoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-grupo-economico\\carga-grupo-economico.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/editar-grupo-economico/editar-grupo-economico.component.ts
var import_sweetalert243 = __toESM(require_sweetalert2_all());
var EditarGrupoEconomicoComponent = class _EditarGrupoEconomicoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.nombreGrupo))
      f.push("Nombre");
    if (vacio(r.descripcion))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new GrupoEconomico();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert243.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarGrupoEconomico(this.objRegistroEditado.iD_Grupo, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert243.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert243.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarGrupoEconomicoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarGrupoEconomicoComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarGrupoEconomicoComponent, selectors: [["app-editar-grupo-economico"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Grupo Econ\xF3mico", "subtitulo", "Modifique los datos del grupo econ\xF3mico.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ge-e-nombreGrupo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ge-e-nombreGrupo", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ge-e-descripcion", 1, "form-label"], ["id", "ge-e-descripcion", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "500", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarGrupoEconomicoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarGrupoEconomicoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarGrupoEconomicoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarGrupoEconomicoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nombreGrupo, $event) || (ctx.objRegistroEditado.nombreGrupo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarGrupoEconomicoComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcion, $event) || (ctx.objRegistroEditado.descripcion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nombreGrupo);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcion);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-grupo-economico.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarGrupoEconomicoComponent, { className: "EditarGrupoEconomicoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-grupo-economico\\editar-grupo-economico.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-grupo-economico/lista-grupo-economico.component.ts
var _c019 = ["paginator"];
var _c119 = ["sort"];
var _c219 = () => [10, 20, 50, 100];
function ListaGrupoEconomicoComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaGrupoEconomicoComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.iD_Grupo);
  }
}
function ListaGrupoEconomicoComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ListaGrupoEconomicoComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.nombreGrupo);
  }
}
function ListaGrupoEconomicoComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaGrupoEconomicoComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.descripcion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descripcion || "\u2014");
  }
}
function ListaGrupoEconomicoComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29)(1, "span", 30);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaGrupoEconomicoComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 32);
    \u0275\u0275listener("click", function ListaGrupoEconomicoComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 33);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaGrupoEconomicoComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function ListaGrupoEconomicoComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 35);
    \u0275\u0275listener("contextmenu", function ListaGrupoEconomicoComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaGrupoEconomicoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ListaGrupoEconomicoComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function ListaGrupoEconomicoComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaGrupoEconomicoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-grupo-economico", 37);
    \u0275\u0275listener("close", function ListaGrupoEconomicoComponent_ng_template_26_Template_app_carga_grupo_economico_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaGrupoEconomicoComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-grupo-economico", 38);
    \u0275\u0275listener("close", function ListaGrupoEconomicoComponent_ng_template_28_Template_app_editar_grupo_economico_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaGrupoEconomicoComponent = class _ListaGrupoEconomicoComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new GrupoEconomico();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "iD_Grupo",
      "nombreGrupo",
      "descripcion",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaGrupoEconomico().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert244.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarGrupoEconomico(row.iD_Grupo).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert244.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert244.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaGrupoEconomicoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaGrupoEconomicoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaGrupoEconomicoComponent, selectors: [["app-lista-grupo-economico"]], viewQuery: function ListaGrupoEconomicoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c019, 5);
        \u0275\u0275viewQuery(_c119, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nombre o descripci\xF3n\u2026", "accion", "Agregar Grupo Econ\xF3mico", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "nombreGrupo", "matSortDirection", "asc", "aria-label", "Listado de grupos econ\xF3micos", 3, "dataSource"], ["matColumnDef", "iD_Grupo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "nombreGrupo"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay grupos econ\xF3micos registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Grupo Econ\xF3mico\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de grupos econ\xF3micos", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaGrupoEconomicoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaGrupoEconomicoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaGrupoEconomicoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaGrupoEconomicoComponent_th_6_Template, 2, 0, "th", 10)(7, ListaGrupoEconomicoComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaGrupoEconomicoComponent_th_9_Template, 2, 0, "th", 10)(10, ListaGrupoEconomicoComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaGrupoEconomicoComponent_th_12_Template, 2, 0, "th", 10)(13, ListaGrupoEconomicoComponent_td_13_Template, 2, 3, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaGrupoEconomicoComponent_th_15_Template, 3, 0, "th", 17)(16, ListaGrupoEconomicoComponent_td_16_Template, 4, 0, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaGrupoEconomicoComponent_tr_17_Template, 1, 0, "tr", 19)(18, ListaGrupoEconomicoComponent_tr_18_Template, 1, 0, "tr", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 21);
        \u0275\u0275listener("reintentar", function ListaGrupoEconomicoComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaGrupoEconomicoComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 22, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 23);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaGrupoEconomicoComponent_ng_template_25_Template, 8, 0, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaGrupoEconomicoComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaGrupoEconomicoComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c219))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaGrupoEconomicoComponent, EditarGrupoEconomicoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaGrupoEconomicoComponent, { className: "ListaGrupoEconomicoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-grupo-economico\\lista-grupo-economico.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-bono-sbs/lista-tipo-bono-sbs.component.ts
var import_sweetalert246 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-bono-sbs/editar-tipo-bono-sbs.component.ts
var import_sweetalert245 = __toESM(require_sweetalert2_all());
var EditarTipoBonoSbsComponent = class _EditarTipoBonoSbsComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.descripcionTipoBono))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoBono();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert245.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoBono(this.objRegistroEditado.idTipoBono, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert245.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert245.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoBonoSbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoBonoSbsComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoBonoSbsComponent, selectors: [["app-editar-tipo-bono-sbs"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [["titulo", "Editar Tipo Bono", "subtitulo", "Modifique los datos del tipo de bono.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "tb-e-descripcionTipoBono", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tb-e-descripcionTipoBono", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoBonoSbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoBonoSbsComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoBonoSbsComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Descripci\xF3n");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoBonoSbsComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionTipoBono, $event) || (ctx.objRegistroEditado.descripcionTipoBono = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionTipoBono);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-bono-sbs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoBonoSbsComponent, { className: "EditarTipoBonoSbsComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-bono-sbs\\editar-tipo-bono-sbs.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-bono-sbs/lista-tipo-bono-sbs.component.ts
var _c020 = ["paginator"];
var _c120 = ["sort"];
var _c220 = () => [10, 20, 50, 100];
function ListaTipoBonoSbsComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoBonoSbsComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoBono);
  }
}
function ListaTipoBonoSbsComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoBonoSbsComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.descripcionTipoBono);
  }
}
function ListaTipoBonoSbsComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27)(1, "span", 28);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoBonoSbsComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 29)(1, "button", 30);
    \u0275\u0275listener("click", function ListaTipoBonoSbsComponent_td_13_Template_button_click_1_listener($event) {
      const element_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.abrirMenuFila($event, element_r6));
    });
    \u0275\u0275elementStart(2, "mat-icon", 31);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoBonoSbsComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
function ListaTipoBonoSbsComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33);
    \u0275\u0275listener("contextmenu", function ListaTipoBonoSbsComponent_tr_15_Template_tr_contextmenu_0_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onContextMenu($event, row_r9));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoBonoSbsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ListaTipoBonoSbsComponent_ng_template_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      const editarModal_r11 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(ctx_r6.editar(ctx_r6.selectedRow, editarModal_r11));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ListaTipoBonoSbsComponent_ng_template_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.eliminar(ctx_r6.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoBonoSbsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-bono-sbs", 35);
    \u0275\u0275listener("close", function ListaTipoBonoSbsComponent_ng_template_23_Template_app_carga_tipo_bono_sbs_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoBonoSbsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-bono-sbs", 36);
    \u0275\u0275listener("close", function ListaTipoBonoSbsComponent_ng_template_25_Template_app_editar_tipo_bono_sbs_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r6.filaEditar);
  }
}
var ListaTipoBonoSbsComponent = class _ListaTipoBonoSbsComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoBono();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTipoBono",
      "descripcionTipoBono",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoBono().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert246.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoBono(row.idTipoBono).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert246.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert246.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoBonoSbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoBonoSbsComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoBonoSbsComponent, selectors: [["app-lista-tipo-bono-sbs"]], viewQuery: function ListaTipoBonoSbsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c020, 5);
        \u0275\u0275viewQuery(_c120, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar descripci\xF3n\u2026", "accion", "Agregar Tipo Bono", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "descripcionTipoBono", "matSortDirection", "asc", "aria-label", "Listado de tipos de bono SBS", 3, "dataSource"], ["matColumnDef", "idTipoBono"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "descripcionTipoBono"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de bono registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo Bono\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de bono SBS", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoBonoSbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoBonoSbsComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoBonoSbsComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(24);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoBonoSbsComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoBonoSbsComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoBonoSbsComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTipoBonoSbsComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTipoBonoSbsComponent_th_12_Template, 3, 0, "th", 15)(13, ListaTipoBonoSbsComponent_td_13_Template, 4, 0, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(14, ListaTipoBonoSbsComponent_tr_14_Template, 1, 0, "tr", 17)(15, ListaTipoBonoSbsComponent_tr_15_Template, 1, 0, "tr", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "app-tabla-estado", 19);
        \u0275\u0275listener("reintentar", function ListaTipoBonoSbsComponent_Template_app_tabla_estado_reintentar_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoBonoSbsComponent_Template_app_tabla_estado_limpiar_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "mat-paginator", 20, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "div", 21);
        \u0275\u0275elementStart(20, "mat-menu", null, 2);
        \u0275\u0275template(22, ListaTipoBonoSbsComponent_ng_template_22_Template, 8, 0, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, ListaTipoBonoSbsComponent_ng_template_23_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(25, ListaTipoBonoSbsComponent_ng_template_25_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r14 = \u0275\u0275reference(21);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(11);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c220))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r14);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoBonoSbsComponent, EditarTipoBonoSbsComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoBonoSbsComponent, { className: "ListaTipoBonoSbsComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-bono-sbs\\lista-tipo-bono-sbs.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-term-volatilidad/lista-term-volatilidad.component.ts
var import_sweetalert248 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-term-volatilidad/editar-term-volatilidad.component.ts
var import_sweetalert247 = __toESM(require_sweetalert2_all());
var EditarTermVolatilidadComponent = class _EditarTermVolatilidadComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.descripcionTermVolatility))
      f.push("Descripci\xF3n");
    if (vacio(r.code))
      f.push("C\xF3digo");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TermVolatilidad();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert247.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTermVolatilidad(this.objRegistroEditado.idTermVolatility, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert247.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert247.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTermVolatilidadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTermVolatilidadComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTermVolatilidadComponent, selectors: [["app-editar-term-volatilidad"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Term. Volatilidad", "subtitulo", "Modifique los datos del term. volatilidad.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "tv-e-descripcionTermVolatility", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tv-e-descripcionTermVolatility", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tv-e-code", 1, "form-label"], ["id", "tv-e-code", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "10", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTermVolatilidadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTermVolatilidadComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTermVolatilidadComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Descripci\xF3n");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTermVolatilidadComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionTermVolatility, $event) || (ctx.objRegistroEditado.descripcionTermVolatility = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "C\xF3digo");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTermVolatilidadComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.code, $event) || (ctx.objRegistroEditado.code = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionTermVolatility);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.code);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-term-volatilidad.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTermVolatilidadComponent, { className: "EditarTermVolatilidadComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-term-volatilidad\\editar-term-volatilidad.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-term-volatilidad/lista-term-volatilidad.component.ts
var _c021 = ["paginator"];
var _c121 = ["sort"];
var _c221 = () => [10, 20, 50, 100];
function ListaTermVolatilidadComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTermVolatilidadComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTermVolatility);
  }
}
function ListaTermVolatilidadComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTermVolatilidadComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.descripcionTermVolatility);
  }
}
function ListaTermVolatilidadComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaTermVolatilidadComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.code);
  }
}
function ListaTermVolatilidadComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28)(1, "span", 29);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTermVolatilidadComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 31);
    \u0275\u0275listener("click", function ListaTermVolatilidadComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 32);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTermVolatilidadComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ListaTermVolatilidadComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34);
    \u0275\u0275listener("contextmenu", function ListaTermVolatilidadComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTermVolatilidadComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ListaTermVolatilidadComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function ListaTermVolatilidadComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTermVolatilidadComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-term-volatilidad", 36);
    \u0275\u0275listener("close", function ListaTermVolatilidadComponent_ng_template_26_Template_app_carga_term_volatilidad_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTermVolatilidadComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-term-volatilidad", 37);
    \u0275\u0275listener("close", function ListaTermVolatilidadComponent_ng_template_28_Template_app_editar_term_volatilidad_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaTermVolatilidadComponent = class _ListaTermVolatilidadComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TermVolatilidad();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTermVolatility",
      "descripcionTermVolatility",
      "code",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTermVolatilidad().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert248.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTermVolatilidad(row.idTermVolatility).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert248.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert248.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTermVolatilidadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTermVolatilidadComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTermVolatilidadComponent, selectors: [["app-lista-term-volatilidad"]], viewQuery: function ListaTermVolatilidadComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c021, 5);
        \u0275\u0275viewQuery(_c121, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar descripci\xF3n o c\xF3digo\u2026", "accion", "Agregar Term. Volatilidad", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "descripcionTermVolatility", "matSortDirection", "asc", "aria-label", "Listado de term. volatilidad", 3, "dataSource"], ["matColumnDef", "idTermVolatility"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "descripcionTermVolatility"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay term. volatilidad registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Term. Volatilidad\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de term. volatilidad", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTermVolatilidadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTermVolatilidadComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTermVolatilidadComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTermVolatilidadComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTermVolatilidadComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTermVolatilidadComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTermVolatilidadComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTermVolatilidadComponent_th_12_Template, 2, 0, "th", 10)(13, ListaTermVolatilidadComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaTermVolatilidadComponent_th_15_Template, 3, 0, "th", 16)(16, ListaTermVolatilidadComponent_td_16_Template, 4, 0, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaTermVolatilidadComponent_tr_17_Template, 1, 0, "tr", 18)(18, ListaTermVolatilidadComponent_tr_18_Template, 1, 0, "tr", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 20);
        \u0275\u0275listener("reintentar", function ListaTermVolatilidadComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTermVolatilidadComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 21, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 22);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaTermVolatilidadComponent_ng_template_25_Template, 8, 0, "ng-template", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaTermVolatilidadComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaTermVolatilidadComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c221))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTermVolatilidadComponent, EditarTermVolatilidadComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTermVolatilidadComponent, { className: "ListaTermVolatilidadComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-term-volatilidad\\lista-term-volatilidad.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-skew-point/lista-skew-point.component.ts
var import_sweetalert250 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-skew-point/editar-skew-point.component.ts
var import_sweetalert249 = __toESM(require_sweetalert2_all());
var EditarSkewPointComponent = class _EditarSkewPointComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.point))
      f.push("Punto");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new SkewPoint();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert249.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarSkewPoint(this.objRegistroEditado.idSwekPoint, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert249.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert249.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarSkewPointComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarSkewPointComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarSkewPointComponent, selectors: [["app-editar-skew-point"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [["titulo", "Editar Skew Point", "subtitulo", "Modifique los datos del skew point.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "sp-e-point", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "sp-e-point", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "5", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarSkewPointComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarSkewPointComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarSkewPointComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Punto");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarSkewPointComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.point, $event) || (ctx.objRegistroEditado.point = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.point);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-skew-point.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarSkewPointComponent, { className: "EditarSkewPointComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-skew-point\\editar-skew-point.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-skew-point/lista-skew-point.component.ts
var _c022 = ["paginator"];
var _c122 = ["sort"];
var _c222 = () => [10, 20, 50, 100];
function ListaSkewPointComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaSkewPointComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idSwekPoint);
  }
}
function ListaSkewPointComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Punto");
    \u0275\u0275elementEnd();
  }
}
function ListaSkewPointComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.point);
  }
}
function ListaSkewPointComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27)(1, "span", 28);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaSkewPointComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 29)(1, "button", 30);
    \u0275\u0275listener("click", function ListaSkewPointComponent_td_13_Template_button_click_1_listener($event) {
      const element_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.abrirMenuFila($event, element_r6));
    });
    \u0275\u0275elementStart(2, "mat-icon", 31);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaSkewPointComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
function ListaSkewPointComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33);
    \u0275\u0275listener("contextmenu", function ListaSkewPointComponent_tr_15_Template_tr_contextmenu_0_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onContextMenu($event, row_r9));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaSkewPointComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ListaSkewPointComponent_ng_template_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      const editarModal_r11 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(ctx_r6.editar(ctx_r6.selectedRow, editarModal_r11));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ListaSkewPointComponent_ng_template_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.eliminar(ctx_r6.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaSkewPointComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-skew-point", 35);
    \u0275\u0275listener("close", function ListaSkewPointComponent_ng_template_23_Template_app_carga_skew_point_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaSkewPointComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-skew-point", 36);
    \u0275\u0275listener("close", function ListaSkewPointComponent_ng_template_25_Template_app_editar_skew_point_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r6.filaEditar);
  }
}
var ListaSkewPointComponent = class _ListaSkewPointComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new SkewPoint();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idSwekPoint",
      "point",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaSkewPoint().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert250.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarSkewPoint(row.idSwekPoint).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert250.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert250.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaSkewPointComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaSkewPointComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaSkewPointComponent, selectors: [["app-lista-skew-point"]], viewQuery: function ListaSkewPointComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c022, 5);
        \u0275\u0275viewQuery(_c122, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar punto\u2026", "accion", "Agregar Skew Point", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "point", "matSortDirection", "asc", "aria-label", "Listado de skew points", 3, "dataSource"], ["matColumnDef", "idSwekPoint"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "point"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay skew points registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Skew Point\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de skew points", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaSkewPointComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaSkewPointComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaSkewPointComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(24);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaSkewPointComponent_th_6_Template, 2, 0, "th", 10)(7, ListaSkewPointComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaSkewPointComponent_th_9_Template, 2, 0, "th", 10)(10, ListaSkewPointComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaSkewPointComponent_th_12_Template, 3, 0, "th", 15)(13, ListaSkewPointComponent_td_13_Template, 4, 0, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(14, ListaSkewPointComponent_tr_14_Template, 1, 0, "tr", 17)(15, ListaSkewPointComponent_tr_15_Template, 1, 0, "tr", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "app-tabla-estado", 19);
        \u0275\u0275listener("reintentar", function ListaSkewPointComponent_Template_app_tabla_estado_reintentar_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaSkewPointComponent_Template_app_tabla_estado_limpiar_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "mat-paginator", 20, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "div", 21);
        \u0275\u0275elementStart(20, "mat-menu", null, 2);
        \u0275\u0275template(22, ListaSkewPointComponent_ng_template_22_Template, 8, 0, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, ListaSkewPointComponent_ng_template_23_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(25, ListaSkewPointComponent_ng_template_25_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r14 = \u0275\u0275reference(21);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(11);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c222))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r14);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaSkewPointComponent, EditarSkewPointComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaSkewPointComponent, { className: "ListaSkewPointComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-skew-point\\lista-skew-point.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-cambio/lista-tipo-cambio.component.ts
var import_sweetalert252 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-cambio/editar-tipo-cambio.component.ts
var import_sweetalert251 = __toESM(require_sweetalert2_all());
var EditarTipoCambioComponent = class _EditarTipoCambioComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codFuenteDatos))
      f.push("Fuente de Datos");
    if (vacio(r.desTicker))
      f.push("Ticker");
    if (vacio(r.fecProceso))
      f.push("Fecha de Proceso");
    if (vacio(r.valor))
      f.push("Valor");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoCambio();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert251.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoCambio(this.objRegistroEditado.idTipoCambio, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert251.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert251.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoCambioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoCambioComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoCambioComponent, selectors: [["app-editar-tipo-cambio"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 7, consts: [["titulo", "Editar Tipo de Cambio", "subtitulo", "Modifique los datos del tipo de cambio.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "tc-e-codFuenteDatos", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "tc-e-codFuenteDatos", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "3", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tc-e-desTicker", 1, "form-label"], ["id", "tc-e-desTicker", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tc-e-fecProceso", 1, "form-label"], ["id", "tc-e-fecProceso", "type", "date", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tc-e-valor", 1, "form-label"], ["id", "tc-e-valor", "type", "number", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoCambioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoCambioComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoCambioComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Fuente de Datos");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoCambioComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codFuenteDatos, $event) || (ctx.objRegistroEditado.codFuenteDatos = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Ticker");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoCambioComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desTicker, $event) || (ctx.objRegistroEditado.desTicker = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "fieldset", 1)(18, "legend");
        \u0275\u0275text(19, "Valor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 2)(21, "div", 3)(22, "label", 9);
        \u0275\u0275text(23, "Fecha de Proceso");
        \u0275\u0275elementStart(24, "span", 5);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoCambioComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.fecProceso, $event) || (ctx.objRegistroEditado.fecProceso = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 3)(28, "label", 11);
        \u0275\u0275text(29, "Valor");
        \u0275\u0275elementStart(30, "span", 5);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoCambioComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.valor, $event) || (ctx.objRegistroEditado.valor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codFuenteDatos);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desTicker);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.fecProceso);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.valor);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-cambio.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoCambioComponent, { className: "EditarTipoCambioComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-cambio\\editar-tipo-cambio.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-cambio/lista-tipo-cambio.component.ts
var _c023 = ["paginator"];
var _c123 = ["sort"];
var _c223 = () => [10, 20, 50, 100];
function ListaTipoCambioComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoCambio);
  }
}
function ListaTipoCambioComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Fecha de Proceso");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.fecProceso);
  }
}
function ListaTipoCambioComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Fuente de Datos");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.codFuenteDatos);
  }
}
function ListaTipoCambioComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Ticker");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.desTicker);
  }
}
function ListaTipoCambioComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Valor");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.valor);
  }
}
function ListaTipoCambioComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32)(1, "span", 33);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoCambioComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 34)(1, "button", 35);
    \u0275\u0275listener("click", function ListaTipoCambioComponent_td_22_Template_button_click_1_listener($event) {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.abrirMenuFila($event, element_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon", 36);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoCambioComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function ListaTipoCambioComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("contextmenu", function ListaTipoCambioComponent_tr_24_Template_tr_contextmenu_0_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onContextMenu($event, row_r12));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ListaTipoCambioComponent_ng_template_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r9 = \u0275\u0275nextContext();
      const editarModal_r14 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(ctx_r9.editar(ctx_r9.selectedRow, editarModal_r14));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function ListaTipoCambioComponent_ng_template_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.eliminar(ctx_r9.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-cambio", 40);
    \u0275\u0275listener("close", function ListaTipoCambioComponent_ng_template_32_Template_app_carga_tipo_cambio_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoCambioComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-cambio", 41);
    \u0275\u0275listener("close", function ListaTipoCambioComponent_ng_template_34_Template_app_editar_tipo_cambio_close_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r9.filaEditar);
  }
}
var ListaTipoCambioComponent = class _ListaTipoCambioComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoCambio();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTipoCambio",
      "fecProceso",
      "codFuenteDatos",
      "desTicker",
      "valor",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoCambio().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert252.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoCambio(row.idTipoCambio).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert252.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert252.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoCambioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoCambioComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoCambioComponent, selectors: [["app-lista-tipo-cambio"]], viewQuery: function ListaTipoCambioComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c023, 5);
        \u0275\u0275viewQuery(_c123, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar fuente de datos o ticker\u2026", "accion", "Agregar Tipo de Cambio", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "fecProceso", "matSortDirection", "asc", "aria-label", "Listado de tipos de cambio", 3, "dataSource"], ["matColumnDef", "idTipoCambio"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-id", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "fecProceso"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codFuenteDatos"], ["matColumnDef", "desTicker"], ["matColumnDef", "valor"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de cambio registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo de Cambio\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de cambio", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-id"], ["mat-cell", "", 1, "col-id"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoCambioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoCambioComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoCambioComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(33);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoCambioComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoCambioComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoCambioComponent_th_9_Template, 2, 0, "th", 13)(10, ListaTipoCambioComponent_td_10_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 15);
        \u0275\u0275template(12, ListaTipoCambioComponent_th_12_Template, 2, 0, "th", 13)(13, ListaTipoCambioComponent_td_13_Template, 3, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTipoCambioComponent_th_15_Template, 2, 0, "th", 13)(16, ListaTipoCambioComponent_td_16_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 17);
        \u0275\u0275template(18, ListaTipoCambioComponent_th_18_Template, 2, 0, "th", 13)(19, ListaTipoCambioComponent_td_19_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 18);
        \u0275\u0275template(21, ListaTipoCambioComponent_th_21_Template, 3, 0, "th", 19)(22, ListaTipoCambioComponent_td_22_Template, 4, 0, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(23, ListaTipoCambioComponent_tr_23_Template, 1, 0, "tr", 21)(24, ListaTipoCambioComponent_tr_24_Template, 1, 0, "tr", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "app-tabla-estado", 23);
        \u0275\u0275listener("reintentar", function ListaTipoCambioComponent_Template_app_tabla_estado_reintentar_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoCambioComponent_Template_app_tabla_estado_limpiar_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "mat-paginator", 24, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "div", 25);
        \u0275\u0275elementStart(29, "mat-menu", null, 2);
        \u0275\u0275template(31, ListaTipoCambioComponent_ng_template_31_Template, 8, 0, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, ListaTipoCambioComponent_ng_template_32_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(34, ListaTipoCambioComponent_ng_template_34_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r17 = \u0275\u0275reference(30);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(20);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c223))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r17);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoCambioComponent, EditarTipoCambioComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoCambioComponent, { className: "ListaTipoCambioComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-cambio\\lista-tipo-cambio.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-instrumento/lista-tipo-instrumento.component.ts
var import_sweetalert254 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-instrumento/editar-tipo-instrumento.component.ts
var import_sweetalert253 = __toESM(require_sweetalert2_all());
var EditarTipoInstrumentoComponent = class _EditarTipoInstrumentoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codTipoInstrumento))
      f.push("C\xF3digo");
    if (vacio(r.descripcionTipoInstrumento))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoInstrumento();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert253.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoInstrumento(this.objRegistroEditado.idTipoInstrumento, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert253.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert253.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoInstrumentoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoInstrumentoComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoInstrumentoComponent, selectors: [["app-editar-tipo-instrumento"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Tipo de Instrumento", "subtitulo", "Modifique los datos del tipo de instrumento.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "ti-e-codTipoInstrumento", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ti-e-codTipoInstrumento", "type", "text", "autocomplete", "off", "minlength", "2", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-e-descripcionTipoInstrumento", 1, "form-label"], ["id", "ti-e-descripcionTipoInstrumento", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoInstrumentoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoInstrumentoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoInstrumentoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoInstrumentoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTipoInstrumento, $event) || (ctx.objRegistroEditado.codTipoInstrumento = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoInstrumentoComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionTipoInstrumento, $event) || (ctx.objRegistroEditado.descripcionTipoInstrumento = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTipoInstrumento);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionTipoInstrumento);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-instrumento.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoInstrumentoComponent, { className: "EditarTipoInstrumentoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-instrumento\\editar-tipo-instrumento.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-instrumento/lista-tipo-instrumento.component.ts
var _c024 = ["paginator"];
var _c124 = ["sort"];
var _c224 = () => [10, 20, 50, 100];
function ListaTipoInstrumentoComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoInstrumentoComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoInstrumento);
  }
}
function ListaTipoInstrumentoComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoInstrumentoComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codTipoInstrumento);
  }
}
function ListaTipoInstrumentoComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoInstrumentoComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descripcionTipoInstrumento);
  }
}
function ListaTipoInstrumentoComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoInstrumentoComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaTipoInstrumentoComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoInstrumentoComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaTipoInstrumentoComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaTipoInstrumentoComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoInstrumentoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaTipoInstrumentoComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaTipoInstrumentoComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoInstrumentoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-instrumento", 38);
    \u0275\u0275listener("close", function ListaTipoInstrumentoComponent_ng_template_26_Template_app_carga_tipo_instrumento_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoInstrumentoComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-instrumento", 39);
    \u0275\u0275listener("close", function ListaTipoInstrumentoComponent_ng_template_28_Template_app_editar_tipo_instrumento_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaTipoInstrumentoComponent = class _ListaTipoInstrumentoComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoInstrumento();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTipoInstrumento",
      "codTipoInstrumento",
      "descripcionTipoInstrumento",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoInstrumento().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert254.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoInstrumento(row.idTipoInstrumento).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert254.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert254.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoInstrumentoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoInstrumentoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoInstrumentoComponent, selectors: [["app-lista-tipo-instrumento"]], viewQuery: function ListaTipoInstrumentoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c024, 5);
        \u0275\u0275viewQuery(_c124, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Tipo de Instrumento", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codTipoInstrumento", "matSortDirection", "asc", "aria-label", "Listado de tipos de instrumento", 3, "dataSource"], ["matColumnDef", "idTipoInstrumento"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-id", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codTipoInstrumento"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcionTipoInstrumento"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de instrumento registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo de Instrumento\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de instrumento", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-id"], ["mat-cell", "", 1, "col-id"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoInstrumentoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoInstrumentoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoInstrumentoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoInstrumentoComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoInstrumentoComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoInstrumentoComponent_th_9_Template, 2, 0, "th", 13)(10, ListaTipoInstrumentoComponent_td_10_Template, 3, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 15);
        \u0275\u0275template(12, ListaTipoInstrumentoComponent_th_12_Template, 2, 0, "th", 13)(13, ListaTipoInstrumentoComponent_td_13_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTipoInstrumentoComponent_th_15_Template, 3, 0, "th", 17)(16, ListaTipoInstrumentoComponent_td_16_Template, 4, 0, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaTipoInstrumentoComponent_tr_17_Template, 1, 0, "tr", 19)(18, ListaTipoInstrumentoComponent_tr_18_Template, 1, 0, "tr", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 21);
        \u0275\u0275listener("reintentar", function ListaTipoInstrumentoComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoInstrumentoComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 22, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 23);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaTipoInstrumentoComponent_ng_template_25_Template, 8, 0, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaTipoInstrumentoComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaTipoInstrumentoComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c224))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoInstrumentoComponent, EditarTipoInstrumentoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoInstrumentoComponent, { className: "ListaTipoInstrumentoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-instrumento\\lista-tipo-instrumento.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-sector/lista-tipo-sector.component.ts
var import_sweetalert256 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/atributo-financiero/editar-tipo-sector/editar-tipo-sector.component.ts
var import_sweetalert255 = __toESM(require_sweetalert2_all());
var EditarTipoSectorComponent = class _EditarTipoSectorComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codTiposector))
      f.push("C\xF3digo");
    if (vacio(r.descripcionTiposector))
      f.push("Descripci\xF3n");
    return f;
  }
  constructor(registroService) {
    this.registroService = registroService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TipoSector();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert255.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardando = true;
        this.registroService.putModificarTipoSector(this.objRegistroEditado.idTipoSector, this.objRegistroEditado).subscribe((response) => {
          this.guardando = false;
          import_sweetalert255.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          this.guardando = false;
          import_sweetalert255.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTipoSectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTipoSectorComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTipoSectorComponent, selectors: [["app-editar-tipo-sector"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["titulo", "Editar Tipo Sector", "subtitulo", "Modifique los datos del tipo de sector.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "ts-e-codTiposector", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ts-e-codTiposector", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ts-e-descripcionTiposector", 1, "form-label"], ["id", "ts-e-descripcionTiposector", "type", "text", "autocomplete", "off", "minlength", "1", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarTipoSectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTipoSectorComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTipoSectorComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoSectorComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTiposector, $event) || (ctx.objRegistroEditado.codTiposector = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTipoSectorComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionTiposector, $event) || (ctx.objRegistroEditado.descripcionTiposector = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTiposector);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionTiposector);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tipo-sector.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTipoSectorComponent, { className: "EditarTipoSectorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\editar-tipo-sector\\editar-tipo-sector.component.ts", lineNumber: 17 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/lista-tipo-sector/lista-tipo-sector.component.ts
var _c025 = ["paginator"];
var _c125 = ["sort"];
var _c225 = () => [10, 20, 50, 100];
function ListaTipoSectorComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoSectorComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idTipoSector);
  }
}
function ListaTipoSectorComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoSectorComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codTiposector);
  }
}
function ListaTipoSectorComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoSectorComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descripcionTiposector);
  }
}
function ListaTipoSectorComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "span", 31);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTipoSectorComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ListaTipoSectorComponent_td_16_Template_button_click_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.abrirMenuFila($event, element_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon", 34);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTipoSectorComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function ListaTipoSectorComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("contextmenu", function ListaTipoSectorComponent_tr_18_Template_tr_contextmenu_0_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onContextMenu($event, row_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoSectorComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ListaTipoSectorComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      const editarModal_r12 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(ctx_r7.editar(ctx_r7.selectedRow, editarModal_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function ListaTipoSectorComponent_ng_template_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.eliminar(ctx_r7.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTipoSectorComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-sector", 38);
    \u0275\u0275listener("close", function ListaTipoSectorComponent_ng_template_26_Template_app_carga_tipo_sector_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTipoSectorComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tipo-sector", 39);
    \u0275\u0275listener("close", function ListaTipoSectorComponent_ng_template_28_Template_app_editar_tipo_sector_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r7.filaEditar);
  }
}
var ListaTipoSectorComponent = class _ListaTipoSectorComponent {
  get filtrados() {
    return this.dataSource?.filteredData?.length ?? 0;
  }
  get estadoTabla() {
    if (this.cargando)
      return "cargando";
    if (this.mensajeError)
      return "error";
    if (this.total === 0)
      return "vacio";
    if (this.filtrados === 0)
      return "sin-resultados";
    return null;
  }
  constructor(modalService, registroService) {
    this.modalService = modalService;
    this.registroService = registroService;
    this.filaEditar = new TipoSector();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idTipoSector",
      "codTiposector",
      "descripcionTiposector",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTipoSector().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.buscar(this.busqueda);
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  buscar(texto) {
    this.busqueda = texto;
    if (!this.dataSource)
      return;
    this.dataSource.filter = texto.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }
  // Mismo menú que el clic derecho, pero accesible con un botón visible y con teclado
  abrirMenuFila(event, item) {
    event.stopPropagation();
    const boton = event.currentTarget.getBoundingClientRect();
    this.selectedRow = item;
    this.contextMenuPosition.x = boton.left + "px";
    this.contextMenuPosition.y = boton.bottom + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem(event.detail === 0 ? "keyboard" : "mouse");
    this.contextMenu.openMenu();
  }
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  editar(row, modal) {
    this.filaEditar = row;
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  eliminar(row) {
    import_sweetalert256.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let seleccionado = this.contextMenu.menuData.item;
        this.registroService.eiminarTipoAccion(row.idTipoSector).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert256.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
          import_sweetalert256.default.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTipoSectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTipoSectorComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTipoSectorComponent, selectors: [["app-lista-tipo-sector"]], viewQuery: function ListaTipoSectorComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMenuTrigger, 5);
        \u0275\u0275viewQuery(_c025, 5);
        \u0275\u0275viewQuery(_c125, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Tipo Sector", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codTiposector", "matSortDirection", "asc", "aria-label", "Listado de tipos de sector", 3, "dataSource"], ["matColumnDef", "idTipoSector"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-id", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codTiposector"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcionTiposector"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tipos de sector registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Tipo Sector\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tipos de sector", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-id"], ["mat-cell", "", 1, "col-id"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTipoSectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTipoSectorComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTipoSectorComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTipoSectorComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTipoSectorComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTipoSectorComponent_th_9_Template, 2, 0, "th", 13)(10, ListaTipoSectorComponent_td_10_Template, 3, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 15);
        \u0275\u0275template(12, ListaTipoSectorComponent_th_12_Template, 2, 0, "th", 13)(13, ListaTipoSectorComponent_td_13_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaTipoSectorComponent_th_15_Template, 3, 0, "th", 17)(16, ListaTipoSectorComponent_td_16_Template, 4, 0, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, ListaTipoSectorComponent_tr_17_Template, 1, 0, "tr", 19)(18, ListaTipoSectorComponent_tr_18_Template, 1, 0, "tr", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "app-tabla-estado", 21);
        \u0275\u0275listener("reintentar", function ListaTipoSectorComponent_Template_app_tabla_estado_reintentar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTipoSectorComponent_Template_app_tabla_estado_limpiar_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "mat-paginator", 22, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 23);
        \u0275\u0275elementStart(23, "mat-menu", null, 2);
        \u0275\u0275template(25, ListaTipoSectorComponent_ng_template_25_Template, 8, 0, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ListaTipoSectorComponent_ng_template_26_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ListaTipoSectorComponent_ng_template_28_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r15 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c225))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r15);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTipoSectorComponent, EditarTipoSectorComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTipoSectorComponent, { className: "ListaTipoSectorComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\lista-tipo-sector\\lista-tipo-sector.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/mantenedor-atributos-financieros/mantenedor-atributos-financieros.component.ts
function MantenedorAtributosFinancierosComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MantenedorAtributosFinancierosComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MantenedorAtributosFinancierosComponent_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngComponentOutlet", ctx_r0.componenteSeleccionado);
  }
}
var MantenedorAtributosFinancierosComponent = class _MantenedorAtributosFinancierosComponent {
  constructor() {
    this.listaProductos = [];
    this.productoSeleccionado = 0;
    this.productosComponentes = {
      1: ListaPaisComponent,
      2: ListaCorporacionComponent,
      3: ListaFuenteInformacionComponent,
      4: ListaPlazaComponent,
      5: ListaTipoAccionComponent,
      6: ListaEmisorComponent,
      7: ListaMonedaComponent,
      8: ListaSubsidiariaComponent,
      9: ListaSectorComponent,
      10: ListaGrupoEconomicoComponent,
      11: ListaMetodoAmortizacionComponent,
      12: ListaFrecuenciaPagoComponent,
      13: ListaFormulaTasaComponent,
      14: ListaCalculoBaseInteresComponent,
      15: ListaTipoTasaComponent,
      16: ListaTasaRjteComponent,
      17: ListaCurvaReferenciaComponent,
      18: ListaTipoEmisionComponent,
      19: ListaTipoFondoComponent,
      20: ListaTipoBonoSbsComponent,
      21: ListaTermVolatilidadComponent,
      22: ListaSkewPointComponent,
      23: ListaTipoCambioComponent,
      24: ListaTipoInstrumentoComponent,
      25: ListaTipoSectorComponent
    };
  }
  ngOnInit() {
    this.listaProductos = [
      { id: 1, descripcion: "Pa\xEDs" },
      { id: 2, descripcion: "Corporaci\xF3n" },
      { id: 3, descripcion: "Fuente de Informaci\xF3n" },
      { id: 4, descripcion: "Plaza" },
      { id: 5, descripcion: "Tipo Acci\xF3n" },
      { id: 6, descripcion: "Emisor" },
      { id: 7, descripcion: "Moneda" },
      { id: 8, descripcion: "Subsidiaria" },
      { id: 9, descripcion: "Sector" },
      { id: 10, descripcion: "Grupo Econ\xF3mico" },
      { id: 11, descripcion: "M\xE9todo Amortizaci\xF3n" },
      { id: 12, descripcion: "Frecuencia Pago" },
      { id: 13, descripcion: "F\xF3rmula Tasa" },
      { id: 14, descripcion: "C\xE1lculo Base Inter\xE9s" },
      { id: 15, descripcion: "Tipo Tasa" },
      { id: 16, descripcion: "Tasa RJE" },
      { id: 17, descripcion: "Curva Referencia" },
      { id: 18, descripcion: "Tipo Emisi\xF3n" },
      { id: 19, descripcion: "Tipo Fondo" },
      { id: 20, descripcion: "Tipo Bono" },
      { id: 21, descripcion: "Term. Volatilidad" },
      { id: 22, descripcion: "Skew Point" },
      { id: 23, descripcion: "Tipo Cambio" },
      { id: 24, descripcion: "Tipo Instrumento" },
      { id: 25, descripcion: "Tipo Sector" }
    ];
    this.productoSeleccionado = 1;
  }
  get componenteSeleccionado() {
    return this.productosComponentes[this.productoSeleccionado];
  }
  static {
    this.\u0275fac = function MantenedorAtributosFinancierosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MantenedorAtributosFinancierosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MantenedorAtributosFinancierosComponent, selectors: [["app-mantenedor-atributos-financieros"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 4, consts: [[1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "hig-subtitulo"], [1, "card"], [1, "card-body", "atrfin-selector"], ["for", "atrfin-select", 1, "form-label", "mb-0"], ["id", "atrfin-select", "bindLabel", "descripcion", "bindValue", "id", 1, "atrfin-selector__combo", 3, "ngModelChange", "items", "clearable", "ngModel"], [1, "card-body"], [4, "ngIf"], [4, "ngComponentOutlet"]], template: function MantenedorAtributosFinancierosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Atributos Financieros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Cat\xE1logos de referencia usados por instrumentos, factores y portafolios.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label", 6);
        \u0275\u0275text(9, "Atributo a administrar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "ng-select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function MantenedorAtributosFinancierosComponent_Template_ng_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.productoSeleccionado, $event) || (ctx.productoSeleccionado = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 8);
        \u0275\u0275template(13, MantenedorAtributosFinancierosComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listaProductos)("clearable", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.productoSeleccionado);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.componenteSeleccionado);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, CommonModule, NgComponentOutlet, NgIf, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.atrfin-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n}\n.atrfin-selector__combo[_ngcontent-%COMP%] {\n  width: 320px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=mantenedor-atributos-financieros.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MantenedorAtributosFinancierosComponent, { className: "MantenedorAtributosFinancierosComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\mantenedor-atributos-financieros\\mantenedor-atributos-financieros.component.ts", lineNumber: 38 });
})();
export {
  MantenedorAtributosFinancierosComponent
};
//# sourceMappingURL=mantenedor-atributos-financieros.component-CUJM7J76.js.map
