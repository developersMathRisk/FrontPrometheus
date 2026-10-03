import {
  TablaToolbarComponent
} from "./chunk-GNUHOFZQ.js";
import {
  Accion,
  Bono,
  CargaAccionComponent,
  CargaBonoComponent,
  CargaFondoInversionComponent,
  FondoInversion
} from "./chunk-YV4HKCPW.js";
import {
  CargaCalculoBaseInteresComponent,
  CargaCurvaReferenciaComponent,
  CargaEmisorComponent,
  CargaFormulaTasaComponent,
  CargaFrecuenciaPagoComponent,
  CargaFuenteInformacionComponent,
  CargaMetodoAmortizacionComponent,
  CargaPlazaComponent,
  CargaTipoAccionComponent,
  CargaTipoBonoSbsComponent,
  CargaTipoFondoComponent,
  CargaTipoInstrumentoComponent,
  CargaTipoSectorComponent,
  CargaTipoTasaComponent
} from "./chunk-7UUZPDQ6.js";
import {
  TablaEstadoComponent,
  mensajeDeError
} from "./chunk-MBO6WKBF.js";
import {
  CargaMonedaComponent,
  ModalFormularioComponent
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
import "./chunk-NJNQMACQ.js";
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
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-BKD3PXJL.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-EXZMHBSY.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
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
  ɵɵtextInterpolate1,
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

// src/app/components/registro/mantenedor/productos/editar-accion/editar-accion.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function EditarAccionComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-plaza", 47);
    \u0275\u0275listener("close", function EditarAccionComponent_ng_template_103_Template_app_carga_plaza_close_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarAccionComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-accion", 47);
    \u0275\u0275listener("close", function EditarAccionComponent_ng_template_105_Template_app_carga_tipo_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarAccionComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 47);
    \u0275\u0275listener("close", function EditarAccionComponent_ng_template_107_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarAccionComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 47);
    \u0275\u0275listener("close", function EditarAccionComponent_ng_template_109_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarAccionComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fuente-informacion", 47);
    \u0275\u0275listener("close", function EditarAccionComponent_ng_template_111_Template_app_carga_fuente_informacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarAccionComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-sector", 47);
    \u0275\u0275listener("close", function EditarAccionComponent_ng_template_113_Template_app_carga_tipo_sector_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarAccionComponent = class _EditarAccionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codTicker))
      f.push("Ticker");
    if (vacio(r.idPlaza))
      f.push("Plaza");
    if (vacio(r.idTipoSector))
      f.push("Tipo Sector");
    if (vacio(r.idTipoAccion))
      f.push("Tipo Acci\xF3n");
    if (vacio(r.idEmisor))
      f.push("Emisor");
    if (vacio(r.idMoneda))
      f.push("Moneda");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Accion();
    this.listPlaza = [];
    this.listTipoAccion = [];
    this.listFuenteInformacion = [];
    this.listEmisor = [];
    this.listMoneda = [];
    this.listTipoSector = [];
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerListPlaza();
    this.obtenerListTipoAccion();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoSector();
  }
  obtenerListPlaza() {
    this.registroService.getListaPlaza().subscribe((response) => {
      this.listPlaza = response;
    });
  }
  obtenerListTipoAccion() {
    this.registroService.getListaTipoAccion().subscribe((response) => {
      this.listTipoAccion = response;
    });
  }
  obtenerListFuenteInformacion() {
    this.registroService.getListaFuenteInformacion().subscribe((response) => {
      this.listFuenteInformacion = response;
    });
  }
  obtenerListEmisor() {
    this.registroService.getListaEmisor().subscribe((response) => {
      this.listEmisor = response;
    });
  }
  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe((response) => {
      this.listMoneda = response;
    });
  }
  obtenerListTipoSector() {
    this.registroService.getListaTipoSector().subscribe((response) => {
      this.listTipoSector = response;
    });
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
        this.registroService.putModificarAccion(this.objRegistroEditado.idAccion, this.objRegistroEditado).subscribe((response) => {
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
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
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListPlaza();
    this.obtenerListTipoAccion();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoSector();
  }
  static {
    this.\u0275fac = function EditarAccionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarAccionComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarAccionComponent, selectors: [["app-editar-accion"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 115, vars: 22, consts: [["cargaModalPlaza", ""], ["cargaModalTipoAccion", ""], ["cargaModalEmisor", ""], ["cargaModalMoneda", ""], ["cargaModalFuenteInformacion", ""], ["cargaModalTipoSector", ""], ["titulo", "Editar Acci\xF3n", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "subtitulo", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "ac-e-codTicker", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ac-e-codTicker", "type", "text", "autocomplete", "off", "placeholder", "Ej. AMZN", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ac-e-desNemonico", 1, "form-label"], ["id", "ac-e-desNemonico", "type", "text", "autocomplete", "off", "placeholder", "Ej. AMAZON.COM", "maxlength", "60", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ac-e-codISIN", 1, "form-label"], ["id", "ac-e-codISIN", "type", "text", "autocomplete", "off", "placeholder", "Ej. US0231351067", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ac-e-codIndAsociado", 1, "form-label"], ["id", "ac-e-codIndAsociado", "type", "text", "autocomplete", "off", "placeholder", "Ej. S&P 500", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "ac-e-idPlaza", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "ac-e-idPlaza", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPlaza", "bindValue", "idPlaza", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar plaza", "aria-label", "Agregar plaza", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "ac-e-idTipoSector", 1, "form-label"], ["labelForId", "ac-e-idTipoSector", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTiposector", "bindValue", "idTipoSector", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo sector", "aria-label", "Agregar tipo sector", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-e-idTipoAccion", 1, "form-label"], ["labelForId", "ac-e-idTipoAccion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desTipoAccion", "bindValue", "idTipoAccion", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo acci\xF3n", "aria-label", "Agregar tipo acci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-e-idEmisor", 1, "form-label"], ["labelForId", "ac-e-idEmisor", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "nomEmisor", "bindValue", "idEmisor", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar emisor", "aria-label", "Agregar emisor", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-e-idMoneda", 1, "form-label"], ["labelForId", "ac-e-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-e-idFuenteInformacion", 1, "form-label"], ["labelForId", "ac-e-idFuenteInformacion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desFuenteInformacion", "bindValue", "idFuenteInformacion", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar fuente informaci\xF3n", "aria-label", "Agregar fuente informaci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "ac-e-flgCargaAutom", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "ac-e-flgCargaAutom", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], ["type", "checkbox", "id", "ac-e-flgVar", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "ac-e-flgVar", 1, "hig-opcion__titulo"], [3, "close"]], template: function EditarAccionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 6);
        \u0275\u0275listener("cerrar", function EditarAccionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarAccionComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 7)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "label", 10);
        \u0275\u0275text(7, "Ticker (BLG o Interno)");
        \u0275\u0275elementStart(8, "span", 11);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTicker, $event) || (ctx.objRegistroEditado.codTicker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 9)(12, "label", 13);
        \u0275\u0275text(13, "Nem\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desNemonico, $event) || (ctx.objRegistroEditado.desNemonico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "label", 15);
        \u0275\u0275text(17, "C\xF3digo ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codISIN, $event) || (ctx.objRegistroEditado.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "label", 17);
        \u0275\u0275text(21, "\xCDndice Asociado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codIndAsociado, $event) || (ctx.objRegistroEditado.codIndAsociado = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "fieldset", 7)(24, "legend");
        \u0275\u0275text(25, "Clasificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 19)(27, "div", 9)(28, "label", 20);
        \u0275\u0275text(29, "Plaza");
        \u0275\u0275elementStart(30, "span", 11);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 21)(33, "ng-select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idPlaza, $event) || (ctx.objRegistroEditado.idPlaza = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 23);
        \u0275\u0275listener("click", function EditarAccionComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalPlaza_r2 = \u0275\u0275reference(104);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalPlaza_r2));
        });
        \u0275\u0275elementStart(35, "span", 24);
        \u0275\u0275text(36, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 9)(38, "label", 25);
        \u0275\u0275text(39, "Tipo Sector");
        \u0275\u0275elementStart(40, "span", 11);
        \u0275\u0275text(41, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 21)(43, "ng-select", 26);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_ng_select_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTipoSector, $event) || (ctx.objRegistroEditado.idTipoSector = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 27);
        \u0275\u0275listener("click", function EditarAccionComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoSector_r3 = \u0275\u0275reference(114);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoSector_r3));
        });
        \u0275\u0275elementStart(45, "span", 24);
        \u0275\u0275text(46, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div", 9)(48, "label", 28);
        \u0275\u0275text(49, "Tipo Acci\xF3n");
        \u0275\u0275elementStart(50, "span", 11);
        \u0275\u0275text(51, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 21)(53, "ng-select", 29);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_ng_select_ngModelChange_53_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTipoAccion, $event) || (ctx.objRegistroEditado.idTipoAccion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 30);
        \u0275\u0275listener("click", function EditarAccionComponent_Template_button_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoAccion_r4 = \u0275\u0275reference(106);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoAccion_r4));
        });
        \u0275\u0275elementStart(55, "span", 24);
        \u0275\u0275text(56, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 9)(58, "label", 31);
        \u0275\u0275text(59, "Emisor");
        \u0275\u0275elementStart(60, "span", 11);
        \u0275\u0275text(61, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 21)(63, "ng-select", 32);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_ng_select_ngModelChange_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idEmisor, $event) || (ctx.objRegistroEditado.idEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 33);
        \u0275\u0275listener("click", function EditarAccionComponent_Template_button_click_64_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalEmisor_r5 = \u0275\u0275reference(108);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalEmisor_r5));
        });
        \u0275\u0275elementStart(65, "span", 24);
        \u0275\u0275text(66, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "div", 9)(68, "label", 34);
        \u0275\u0275text(69, "Moneda");
        \u0275\u0275elementStart(70, "span", 11);
        \u0275\u0275text(71, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 21)(73, "ng-select", 35);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_ng_select_ngModelChange_73_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idMoneda, $event) || (ctx.objRegistroEditado.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 36);
        \u0275\u0275listener("click", function EditarAccionComponent_Template_button_click_74_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r6 = \u0275\u0275reference(110);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r6));
        });
        \u0275\u0275elementStart(75, "span", 24);
        \u0275\u0275text(76, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 9)(78, "label", 37);
        \u0275\u0275text(79, "Fuente Informaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 21)(81, "ng-select", 38);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_ng_select_ngModelChange_81_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idFuenteInformacion, $event) || (ctx.objRegistroEditado.idFuenteInformacion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 39);
        \u0275\u0275listener("click", function EditarAccionComponent_Template_button_click_82_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalFuenteInformacion_r7 = \u0275\u0275reference(112);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalFuenteInformacion_r7));
        });
        \u0275\u0275elementStart(83, "span", 24);
        \u0275\u0275text(84, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(85, "fieldset", 7)(86, "legend");
        \u0275\u0275text(87, "Opciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 40)(89, "div", 41)(90, "input", 42);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_input_ngModelChange_90_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgCargaAutom, $event) || (ctx.objRegistroEditado.flgCargaAutom = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div")(92, "label", 43);
        \u0275\u0275text(93, "Carga autom\xE1tica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "span", 44);
        \u0275\u0275text(95, "El precio se actualiza autom\xE1ticamente desde la fuente de informaci\xF3n.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "div", 41)(97, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function EditarAccionComponent_Template_input_ngModelChange_97_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgVar, $event) || (ctx.objRegistroEditado.flgVar = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div")(99, "label", 46);
        \u0275\u0275text(100, "C\xE1lculo de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "span", 44);
        \u0275\u0275text(102, "Incluye este instrumento en el c\xE1lculo de Valor en Riesgo.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(103, EditarAccionComponent_ng_template_103_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(105, EditarAccionComponent_ng_template_105_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(107, EditarAccionComponent_ng_template_107_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(109, EditarAccionComponent_ng_template_109_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(111, EditarAccionComponent_ng_template_111_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(113, EditarAccionComponent_ng_template_113_Template, 1, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275propertyInterpolate1("subtitulo", "C\xF3digo ", ctx.data.idAccion, ". Modifique los datos y guarde los cambios.");
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTicker);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desNemonico);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codISIN);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codIndAsociado);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listPlaza);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idPlaza);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoSector);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTipoSector);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoAccion);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTipoAccion);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listEmisor);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idEmisor);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idMoneda);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.listFuenteInformacion);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idFuenteInformacion);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgCargaAutom);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgVar);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CommonModule, CargaPlazaComponent, CargaTipoAccionComponent, CargaEmisorComponent, CargaMonedaComponent, CargaFuenteInformacionComponent, CargaTipoSectorComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-accion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarAccionComponent, { className: "EditarAccionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\editar-accion\\editar-accion.component.ts", lineNumber: 34 });
})();

// src/app/components/registro/mantenedor/productos/lista-accion/lista-accion.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());
var _c0 = ["paginator"];
var _c1 = ["sort"];
var _c2 = () => [10, 20, 50, 100];
function ListaAccionComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idAccion);
  }
}
function ListaAccionComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Ticker");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codTicker);
  }
}
function ListaAccionComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Nem\xF3nico");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desNemonico);
  }
}
function ListaAccionComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "ISIN");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.codISIN);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.codISIN || "\u2014");
  }
}
function ListaAccionComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "\xCDndice Asociado");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r7.codIndAsociado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.codIndAsociado || "\u2014");
  }
}
function ListaAccionComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Emisor");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.nomEmisor);
  }
}
function ListaAccionComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Plaza");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.desPlaza);
  }
}
function ListaAccionComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Tipo Acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.desTipoAccion);
  }
}
function ListaAccionComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Tipo Sector");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.descripcionTiposector);
  }
}
function ListaAccionComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Moneda");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r12.desMoneda);
  }
}
function ListaAccionComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Fuente Informaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r13.desFuenteInformacion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r13.desFuenteInformacion || "\u2014");
  }
}
function ListaAccionComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Carga Autom\xE1tica");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46)(1, "mat-icon", 47);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaAccionComponent_td_44_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275template(1, ListaAccionComponent_td_44_span_1_Template, 5, 0, "span", 45)(2, ListaAccionComponent_td_44_ng_template_2_Template, 4, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const sinMarca_r15 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r14.flgCargaAutom)("ngIfElse", sinMarca_r15);
  }
}
function ListaAccionComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "VaR");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46)(1, "mat-icon", 47);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaAccionComponent_td_47_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275template(1, ListaAccionComponent_td_47_span_1_Template, 5, 0, "span", 45)(2, ListaAccionComponent_td_47_ng_template_2_Template, 4, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const sinMarca_r17 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r16.flgVar)("ngIfElse", sinMarca_r17);
  }
}
function ListaAccionComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50)(1, "span", 48);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaAccionComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 51)(1, "button", 52);
    \u0275\u0275listener("click", function ListaAccionComponent_td_50_Template_button_click_1_listener($event) {
      const element_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.abrirMenuFila($event, element_r19));
    });
    \u0275\u0275elementStart(2, "mat-icon", 47);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaAccionComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function ListaAccionComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54);
    \u0275\u0275listener("contextmenu", function ListaAccionComponent_tr_52_Template_tr_contextmenu_0_listener($event) {
      const row_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.onContextMenu($event, row_r22));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ListaAccionComponent_ng_template_59_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r19 = \u0275\u0275nextContext();
      const editarAccionModal_r24 = \u0275\u0275reference(63);
      return \u0275\u0275resetView(ctx_r19.editar(ctx_r19.selectedRow, editarAccionModal_r24));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function ListaAccionComponent_ng_template_59_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.eliminar(ctx_r19.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-accion", 56);
    \u0275\u0275listener("close", function ListaAccionComponent_ng_template_60_Template_app_carga_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaAccionComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-accion", 57);
    \u0275\u0275listener("close", function ListaAccionComponent_ng_template_62_Template_app_editar_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r19.filaEditar);
  }
}
var ListaAccionComponent = class _ListaAccionComponent {
  get displayedColumns() {
    return this.verTodasLasColumnas ? this.columnasCompletas : this.columnasBasicas;
  }
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
    this.filaEditar = new Accion();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.verTodasLasColumnas = false;
    this.columnasBasicas = [
      "codTicker",
      "desNemonico",
      "codISIN",
      "nomEmisor",
      "desMoneda",
      "flgVar",
      "acciones"
    ];
    this.columnasCompletas = [
      "idAccion",
      "codTicker",
      "desNemonico",
      "codISIN",
      "codIndAsociado",
      "nomEmisor",
      "desPlaza",
      "desTipoAccion",
      "descripcionTiposector",
      "desMoneda",
      "desFuenteInformacion",
      "flgCargaAutom",
      "flgVar",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaAccion().subscribe((response) => {
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
        this.registroService.eiminarAccion(row.idAccion).subscribe((response) => {
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
    this.\u0275fac = function ListaAccionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaAccionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaAccionComponent, selectors: [["app-lista-accion"]], viewQuery: function ListaAccionComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 21, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaAccionModal", ""], ["editarAccionModal", ""], ["sinMarca", ""], [1, "hig-tabla"], ["placeholder", "Buscar ticker, nem\xF3nico o ISIN\u2026", "accion", "Agregar Acci\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], ["opciones", "", "title", "Muestra todos los atributos del instrumento", 1, "form-check", "form-switch", "interruptor-columnas"], ["type", "checkbox", "role", "switch", "id", "producto-accion-todas", 1, "form-check-input", 3, "change", "checked"], ["for", "producto-accion-todas", 1, "form-check-label"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codTicker", "matSortDirection", "asc", "aria-label", "Listado de acciones", 3, "dataSource"], ["matColumnDef", "idAccion"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codTicker"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desNemonico"], ["matColumnDef", "codISIN"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "codIndAsociado"], ["matColumnDef", "nomEmisor"], ["matColumnDef", "desPlaza"], ["matColumnDef", "desTipoAccion"], ["matColumnDef", "descripcionTiposector"], ["matColumnDef", "desMoneda"], ["matColumnDef", "desFuenteInformacion"], ["matColumnDef", "flgCargaAutom"], ["mat-cell", "", "class", "col-estado", 4, "matCellDef"], ["matColumnDef", "flgVar"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay acciones registradas", "detalleVacio", "Agregue la primera con el bot\xF3n \xABAgregar Acci\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de acciones", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-cell", "", 1, "col-estado"], ["class", "estado-si", 4, "ngIf", "ngIfElse"], [1, "estado-si"], ["aria-hidden", "true"], [1, "solo-lector"], ["aria-hidden", "true", 1, "celda-vacia"], ["mat-header-cell", "", 1, "col-acciones"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaAccionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6)(1, "app-tabla-toolbar", 7);
        \u0275\u0275listener("buscar", function ListaAccionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaAccionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaAccionModal_r2 = \u0275\u0275reference(61);
          return \u0275\u0275resetView(ctx.registrar(cargaAccionModal_r2));
        });
        \u0275\u0275elementStart(2, "div", 8)(3, "input", 9);
        \u0275\u0275listener("change", function ListaAccionComponent_Template_input_change_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.verTodasLasColumnas = $event.target.checked);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "label", 10);
        \u0275\u0275text(5, "Todas las columnas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 11)(7, "table", 12, 0);
        \u0275\u0275elementContainerStart(9, 13);
        \u0275\u0275template(10, ListaAccionComponent_th_10_Template, 2, 0, "th", 14)(11, ListaAccionComponent_td_11_Template, 2, 1, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(12, 16);
        \u0275\u0275template(13, ListaAccionComponent_th_13_Template, 2, 0, "th", 14)(14, ListaAccionComponent_td_14_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(15, 18);
        \u0275\u0275template(16, ListaAccionComponent_th_16_Template, 2, 0, "th", 14)(17, ListaAccionComponent_td_17_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 19);
        \u0275\u0275template(19, ListaAccionComponent_th_19_Template, 2, 0, "th", 14)(20, ListaAccionComponent_td_20_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 21);
        \u0275\u0275template(22, ListaAccionComponent_th_22_Template, 2, 0, "th", 14)(23, ListaAccionComponent_td_23_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 22);
        \u0275\u0275template(25, ListaAccionComponent_th_25_Template, 2, 0, "th", 14)(26, ListaAccionComponent_td_26_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 23);
        \u0275\u0275template(28, ListaAccionComponent_th_28_Template, 2, 0, "th", 14)(29, ListaAccionComponent_td_29_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 24);
        \u0275\u0275template(31, ListaAccionComponent_th_31_Template, 2, 0, "th", 14)(32, ListaAccionComponent_td_32_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 25);
        \u0275\u0275template(34, ListaAccionComponent_th_34_Template, 2, 0, "th", 14)(35, ListaAccionComponent_td_35_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 26);
        \u0275\u0275template(37, ListaAccionComponent_th_37_Template, 2, 0, "th", 14)(38, ListaAccionComponent_td_38_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 27);
        \u0275\u0275template(40, ListaAccionComponent_th_40_Template, 2, 0, "th", 14)(41, ListaAccionComponent_td_41_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 28);
        \u0275\u0275template(43, ListaAccionComponent_th_43_Template, 2, 0, "th", 14)(44, ListaAccionComponent_td_44_Template, 4, 2, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 30);
        \u0275\u0275template(46, ListaAccionComponent_th_46_Template, 2, 0, "th", 14)(47, ListaAccionComponent_td_47_Template, 4, 2, "td", 29);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(48, 31);
        \u0275\u0275template(49, ListaAccionComponent_th_49_Template, 3, 0, "th", 32)(50, ListaAccionComponent_td_50_Template, 4, 0, "td", 33);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(51, ListaAccionComponent_tr_51_Template, 1, 0, "tr", 34)(52, ListaAccionComponent_tr_52_Template, 1, 0, "tr", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "app-tabla-estado", 36);
        \u0275\u0275listener("reintentar", function ListaAccionComponent_Template_app_tabla_estado_reintentar_53_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaAccionComponent_Template_app_tabla_estado_limpiar_53_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(54, "mat-paginator", 37, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "div", 38);
        \u0275\u0275elementStart(57, "mat-menu", null, 2);
        \u0275\u0275template(59, ListaAccionComponent_ng_template_59_Template, 8, 0, "ng-template", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275template(60, ListaAccionComponent_ng_template_60_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(62, ListaAccionComponent_ng_template_62_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r27 = \u0275\u0275reference(58);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.verTodasLasColumnas);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(44);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(20, _c2))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r27);
      }
    }, dependencies: [CommonModule, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaAccionComponent, EditarAccionComponent, TablaToolbarComponent, TablaEstadoComponent], styles: ['@charset "UTF-8";\n\n\n\n.icono-accion[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.icono-editar[_ngcontent-%COMP%] {\n  color: rgb(68, 84, 195);\n}\n.icono-eliminar[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-start;\n}\ntable[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n/*# sourceMappingURL=lista-accion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaAccionComponent, { className: "ListaAccionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\lista-accion\\lista-accion.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/productos/lista-bono/lista-bono.component.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/productos/editar-bono/editar-bono.component.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());
function EditarBonoComponent_ng_template_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_147_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_149_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-bono-sbs", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_151_Template_app_carga_tipo_bono_sbs_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-curva-referencia", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_153_Template_app_carga_curva_referencia_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-metodo-amortizacion", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_155_Template_app_carga_metodo_amortizacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-calculo-base-interes", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_157_Template_app_carga_calculo_base_interes_close_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-frecuencia-pago", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_159_Template_app_carga_frecuencia_pago_close_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-tasa", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_161_Template_app_carga_tipo_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-formula-tasa", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_163_Template_app_carga_formula_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarBonoComponent_ng_template_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-instrumento", 62);
    \u0275\u0275listener("close", function EditarBonoComponent_ng_template_165_Template_app_carga_tipo_instrumento_close_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarBonoComponent = class _EditarBonoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codISIN))
      f.push("ISIN");
    if (vacio(r.ticker))
      f.push("Ticker");
    if (vacio(r.idTipoBono))
      f.push("Tipo Bono");
    if (vacio(r.idTipoTasaInteres))
      f.push("Tipo Tasa Inter\xE9s");
    if (vacio(r.idFormulaTasa))
      f.push("F\xF3rmula Tasa");
    if (vacio(r.idCurvaReferencia))
      f.push("Curva Referencia");
    if (vacio(r.idEmisor))
      f.push("Emisor");
    if (vacio(r.idMoneda))
      f.push("Moneda");
    if (vacio(r.idMetodoAmortizacion))
      f.push("M\xE9todo Amortizaci\xF3n");
    if (vacio(r.idCalculobase))
      f.push("C\xE1lculo Base");
    if (vacio(r.idFrecuenciaPago))
      f.push("Frecuencia Pago");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new Bono();
    this.listEmisor = [];
    this.listMoneda = [];
    this.listTipoBonoSBS = [];
    this.listCurvaReferencia = [];
    this.listMetodoAmotizacion = [];
    this.listCalculoBase = [];
    this.listFrecPago = [];
    this.listTipoTasaInt = [];
    this.listFormulaTasa = [];
    this.listTipoInstrumento = [];
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBonoSBS();
    this.obtenerListCurvaReferencia();
    this.obtenerListMetodoAmortizacion();
    this.obtenerListCalculoBaseInteres();
    this.obtenerListFrecuenciaPago();
    this.obtenerListTipoTasa();
    this.obtenerListFormulaTasa();
    this.obtenerListTipoInstrumento();
  }
  obtenerListEmisor() {
    this.registroService.getListaEmisor().subscribe((response) => {
      this.listEmisor = response;
    });
  }
  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe((response) => {
      this.listMoneda = response;
    });
  }
  obtenerListTipoBonoSBS() {
    this.registroService.getListaTipoBono().subscribe((response) => {
      this.listTipoBonoSBS = response;
    });
  }
  obtenerListCurvaReferencia() {
    this.registroService.getListaCurvaReferencia().subscribe((response) => {
      this.listCurvaReferencia = response;
    });
  }
  obtenerListMetodoAmortizacion() {
    this.registroService.getListaMetodoAmortizacion().subscribe((response) => {
      this.listMetodoAmotizacion = response;
    });
  }
  obtenerListCalculoBaseInteres() {
    this.registroService.getListaCalculoBaseInteres().subscribe((response) => {
      this.listCalculoBase = response;
    });
  }
  obtenerListFrecuenciaPago() {
    this.registroService.getListaFrecuenciaPago().subscribe((response) => {
      this.listFrecPago = response;
    });
  }
  obtenerListTipoTasa() {
    this.registroService.getListaTipoTasa().subscribe((response) => {
      this.listTipoTasaInt = response;
    });
  }
  obtenerListFormulaTasa() {
    this.registroService.getListaFormulaTasa().subscribe((response) => {
      this.listFormulaTasa = response;
    });
  }
  obtenerListTipoInstrumento() {
    this.registroService.getListaTipoInstrumento().subscribe((response) => {
      this.listTipoInstrumento = response;
    });
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert23.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.putModificarBono(this.objRegistroEditado.idBono, this.objRegistroEditado).subscribe((response) => {
          import_sweetalert23.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
          import_sweetalert23.default.fire({
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
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBonoSBS();
    this.obtenerListCurvaReferencia();
    this.obtenerListMetodoAmortizacion();
    this.obtenerListCalculoBaseInteres();
    this.obtenerListFrecuenciaPago();
    this.obtenerListTipoTasa();
    this.obtenerListFormulaTasa();
    this.obtenerListTipoInstrumento();
  }
  static {
    this.\u0275fac = function EditarBonoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarBonoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarBonoComponent, selectors: [["app-editar-bono"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 167, vars: 30, consts: [["cargaModalEmisor", ""], ["cargaModalMoneda", ""], ["cargaModalTipoBono", ""], ["cargaModalCurvaReferencia", ""], ["cargaModalMetodoAmortizacion", ""], ["cargaModalCalculoBase", ""], ["cargaModalFrecuenciaPago", ""], ["cargaModalTipoTasaInteres", ""], ["cargaModalFormulaTasa", ""], ["cargaModalTipoInstrumento", ""], ["titulo", "Editar Bono", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "subtitulo", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "bo-e-codISIN", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "bo-e-codISIN", "type", "text", "autocomplete", "off", "placeholder", "Ej. PEP01000C5D1", "maxlength", "12", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-ticker", 1, "form-label"], ["id", "bo-e-ticker", "type", "text", "autocomplete", "off", "placeholder", "Ej. SB12AGO28", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-idTipoBono", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "bo-e-idTipoBono", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTipoBono", "bindValue", "idTipoBono", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo bono", "aria-label", "Agregar tipo bono", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "bo-e-montoNominal", 1, "form-label"], ["id", "bo-e-montoNominal", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-tasaCupon", 1, "form-label"], ["id", "bo-e-tasaCupon", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-campo__ayuda"], ["for", "bo-e-spread", 1, "form-label"], ["id", "bo-e-spread", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-idTipoTasaInteres", 1, "form-label"], ["labelForId", "bo-e-idTipoTasaInteres", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTipoTasa", "bindValue", "idTipoTasaInteres", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo tasa inter\xE9s", "aria-label", "Agregar tipo tasa inter\xE9s", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-e-idFormulaTasa", 1, "form-label"], ["labelForId", "bo-e-idFormulaTasa", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionFormula", "bindValue", "idFormulaTasa", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar f\xF3rmula tasa", "aria-label", "Agregar f\xF3rmula tasa", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-e-idCurvaReferencia", 1, "form-label"], ["labelForId", "bo-e-idCurvaReferencia", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionCurva", "bindValue", "idCurvaReferencia", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar curva referencia", "aria-label", "Agregar curva referencia", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-seccion__ayuda"], ["for", "bo-e-fechaEmision", 1, "form-label"], ["id", "bo-e-fechaEmision", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-fechaPrimerCupon", 1, "form-label"], ["id", "bo-e-fechaPrimerCupon", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-fechaVencimiento", 1, "form-label"], ["id", "bo-e-fechaVencimiento", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-e-idEmisor", 1, "form-label"], ["labelForId", "bo-e-idEmisor", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "nomEmisor", "bindValue", "idEmisor", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar emisor", "aria-label", "Agregar emisor", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-e-idMoneda", 1, "form-label"], ["labelForId", "bo-e-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-e-idMetodoAmortizacion", 1, "form-label"], ["labelForId", "bo-e-idMetodoAmortizacion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionMetodo", "bindValue", "idMetodoAmortizacion", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar m\xE9todo amortizaci\xF3n", "aria-label", "Agregar m\xE9todo amortizaci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-e-idCalculobase", 1, "form-label"], ["labelForId", "bo-e-idCalculobase", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionCalculoBase", "bindValue", "idCalculobase", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar c\xE1lculo base", "aria-label", "Agregar c\xE1lculo base", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-e-idFrecuenciaPago", 1, "form-label"], ["labelForId", "bo-e-idFrecuenciaPago", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionFrecuencia", "bindValue", "idFrecuenciaPago", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar frecuencia pago", "aria-label", "Agregar frecuencia pago", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [3, "close"]], template: function EditarBonoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 10);
        \u0275\u0275listener("cerrar", function EditarBonoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarBonoComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 11)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 12)(5, "div", 13)(6, "label", 14);
        \u0275\u0275text(7, "C\xF3digo ISIN");
        \u0275\u0275elementStart(8, "span", 15);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codISIN, $event) || (ctx.objRegistroEditado.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 13)(12, "label", 17);
        \u0275\u0275text(13, "Ticker");
        \u0275\u0275elementStart(14, "span", 15);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.ticker, $event) || (ctx.objRegistroEditado.ticker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13)(18, "label", 19);
        \u0275\u0275text(19, "Tipo Bono");
        \u0275\u0275elementStart(20, "span", 15);
        \u0275\u0275text(21, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 20)(23, "ng-select", 21);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTipoBono, $event) || (ctx.objRegistroEditado.idTipoBono = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 22);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoBono_r2 = \u0275\u0275reference(152);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoBono_r2));
        });
        \u0275\u0275elementStart(25, "span", 23);
        \u0275\u0275text(26, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(27, "fieldset", 11)(28, "legend");
        \u0275\u0275text(29, "Condiciones financieras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 12)(31, "div", 13)(32, "label", 24);
        \u0275\u0275text(33, "Nominal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.montoNominal, $event) || (ctx.objRegistroEditado.montoNominal = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 13)(36, "label", 26);
        \u0275\u0275text(37, "Tasa Cup\xF3n (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.tasaCupon, $event) || (ctx.objRegistroEditado.tasaCupon = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p", 28);
        \u0275\u0275text(40, "Expresada en porcentaje, por ejemplo 6.35.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 13)(42, "label", 29);
        \u0275\u0275text(43, "Spread");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.spread, $event) || (ctx.objRegistroEditado.spread = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 13)(46, "label", 31);
        \u0275\u0275text(47, "Tipo Tasa Inter\xE9s");
        \u0275\u0275elementStart(48, "span", 15);
        \u0275\u0275text(49, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 20)(51, "ng-select", 32);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTipoTasaInteres, $event) || (ctx.objRegistroEditado.idTipoTasaInteres = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 33);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoTasaInteres_r3 = \u0275\u0275reference(162);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoTasaInteres_r3));
        });
        \u0275\u0275elementStart(53, "span", 23);
        \u0275\u0275text(54, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 13)(56, "label", 34);
        \u0275\u0275text(57, "F\xF3rmula Tasa");
        \u0275\u0275elementStart(58, "span", 15);
        \u0275\u0275text(59, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 20)(61, "ng-select", 35);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idFormulaTasa, $event) || (ctx.objRegistroEditado.idFormulaTasa = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "button", 36);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalFormulaTasa_r4 = \u0275\u0275reference(164);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalFormulaTasa_r4));
        });
        \u0275\u0275elementStart(63, "span", 23);
        \u0275\u0275text(64, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(65, "div", 13)(66, "label", 37);
        \u0275\u0275text(67, "Curva Referencia");
        \u0275\u0275elementStart(68, "span", 15);
        \u0275\u0275text(69, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 20)(71, "ng-select", 38);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_71_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idCurvaReferencia, $event) || (ctx.objRegistroEditado.idCurvaReferencia = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 39);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalCurvaReferencia_r5 = \u0275\u0275reference(154);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalCurvaReferencia_r5));
        });
        \u0275\u0275elementStart(73, "span", 23);
        \u0275\u0275text(74, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(75, "fieldset", 11)(76, "legend");
        \u0275\u0275text(77, "Fechas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p", 40);
        \u0275\u0275text(79, "Son obligatorias si activa la generaci\xF3n autom\xE1tica de la cuponera.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 12)(81, "div", 13)(82, "label", 41);
        \u0275\u0275text(83, "Fecha Emisi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "input", 42);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.fechaEmision, $event) || (ctx.objRegistroEditado.fechaEmision = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 13)(86, "label", 43);
        \u0275\u0275text(87, "Fecha Primer Cup\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "input", 44);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_88_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.fechaPrimerCupon, $event) || (ctx.objRegistroEditado.fechaPrimerCupon = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 13)(90, "label", 45);
        \u0275\u0275text(91, "Fecha Vencimiento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "input", 46);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_input_ngModelChange_92_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.fechaVencimiento, $event) || (ctx.objRegistroEditado.fechaVencimiento = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "fieldset", 11)(94, "legend");
        \u0275\u0275text(95, "Emisor y c\xE1lculo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 12)(97, "div", 13)(98, "label", 47);
        \u0275\u0275text(99, "Emisor");
        \u0275\u0275elementStart(100, "span", 15);
        \u0275\u0275text(101, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 20)(103, "ng-select", 48);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_103_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idEmisor, $event) || (ctx.objRegistroEditado.idEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "button", 49);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_104_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalEmisor_r6 = \u0275\u0275reference(148);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalEmisor_r6));
        });
        \u0275\u0275elementStart(105, "span", 23);
        \u0275\u0275text(106, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(107, "div", 13)(108, "label", 50);
        \u0275\u0275text(109, "Moneda");
        \u0275\u0275elementStart(110, "span", 15);
        \u0275\u0275text(111, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 20)(113, "ng-select", 51);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_113_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idMoneda, $event) || (ctx.objRegistroEditado.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "button", 52);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_114_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r7 = \u0275\u0275reference(150);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r7));
        });
        \u0275\u0275elementStart(115, "span", 23);
        \u0275\u0275text(116, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(117, "div", 13)(118, "label", 53);
        \u0275\u0275text(119, "M\xE9todo Amortizaci\xF3n");
        \u0275\u0275elementStart(120, "span", 15);
        \u0275\u0275text(121, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 20)(123, "ng-select", 54);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_123_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idMetodoAmortizacion, $event) || (ctx.objRegistroEditado.idMetodoAmortizacion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "button", 55);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_124_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMetodoAmortizacion_r8 = \u0275\u0275reference(156);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMetodoAmortizacion_r8));
        });
        \u0275\u0275elementStart(125, "span", 23);
        \u0275\u0275text(126, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(127, "div", 13)(128, "label", 56);
        \u0275\u0275text(129, "C\xE1lculo Base");
        \u0275\u0275elementStart(130, "span", 15);
        \u0275\u0275text(131, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 20)(133, "ng-select", 57);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_133_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idCalculobase, $event) || (ctx.objRegistroEditado.idCalculobase = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "button", 58);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_134_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalCalculoBase_r9 = \u0275\u0275reference(158);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalCalculoBase_r9));
        });
        \u0275\u0275elementStart(135, "span", 23);
        \u0275\u0275text(136, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(137, "div", 13)(138, "label", 59);
        \u0275\u0275text(139, "Frecuencia Pago");
        \u0275\u0275elementStart(140, "span", 15);
        \u0275\u0275text(141, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 20)(143, "ng-select", 60);
        \u0275\u0275twoWayListener("ngModelChange", function EditarBonoComponent_Template_ng_select_ngModelChange_143_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idFrecuenciaPago, $event) || (ctx.objRegistroEditado.idFrecuenciaPago = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "button", 61);
        \u0275\u0275listener("click", function EditarBonoComponent_Template_button_click_144_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalFrecuenciaPago_r10 = \u0275\u0275reference(160);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalFrecuenciaPago_r10));
        });
        \u0275\u0275elementStart(145, "span", 23);
        \u0275\u0275text(146, "+");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(147, EditarBonoComponent_ng_template_147_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(149, EditarBonoComponent_ng_template_149_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(151, EditarBonoComponent_ng_template_151_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(153, EditarBonoComponent_ng_template_153_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(155, EditarBonoComponent_ng_template_155_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(157, EditarBonoComponent_ng_template_157_Template, 1, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(159, EditarBonoComponent_ng_template_159_Template, 1, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(161, EditarBonoComponent_ng_template_161_Template, 1, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(163, EditarBonoComponent_ng_template_163_Template, 1, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(165, EditarBonoComponent_ng_template_165_Template, 1, 0, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275propertyInterpolate1("subtitulo", "C\xF3digo ", ctx.data.idBono, ". Modifique los datos y guarde los cambios.");
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codISIN);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.ticker);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listTipoBonoSBS);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTipoBono);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.montoNominal);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.tasaCupon);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.spread);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listTipoTasaInt);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTipoTasaInteres);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listFormulaTasa);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idFormulaTasa);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listCurvaReferencia);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idCurvaReferencia);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.fechaEmision);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.fechaPrimerCupon);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.fechaVencimiento);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listEmisor);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idEmisor);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idMoneda);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMetodoAmotizacion);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idMetodoAmortizacion);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listCalculoBase);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idCalculobase);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listFrecPago);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idFrecuenciaPago);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CargaEmisorComponent, CargaMonedaComponent, CargaTipoBonoSbsComponent, CargaCurvaReferenciaComponent, CargaMetodoAmortizacionComponent, CargaCalculoBaseInteresComponent, CargaFrecuenciaPagoComponent, CargaTipoTasaComponent, CargaFormulaTasaComponent, CargaTipoInstrumentoComponent, CommonModule, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-bono.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarBonoComponent, { className: "EditarBonoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\editar-bono\\editar-bono.component.ts", lineNumber: 40 });
})();

// src/app/components/registro/mantenedor/productos/lista-bono/lista-bono.component.ts
var _c02 = ["paginator"];
var _c12 = ["sort"];
var _c22 = () => [10, 20, 50, 100];
function ListaBonoComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idBono);
  }
}
function ListaBonoComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Ticker");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.ticker);
  }
}
function ListaBonoComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "ISIN");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r5.codISIN);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.codISIN || "\u2014");
  }
}
function ListaBonoComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Emisor");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.nomEmisor);
  }
}
function ListaBonoComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Tipo Bono");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.descripcionTipoBono);
  }
}
function ListaBonoComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Moneda");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.desMoneda);
  }
}
function ListaBonoComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Nominal");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", element_r9.montoNominal == null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.montoNominal != null ? \u0275\u0275pipeBind2(2, 3, element_r9.montoNominal, "1.2-2") : "\u2014");
  }
}
function ListaBonoComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Tasa Cup\xF3n (%)");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", element_r10.tasaCupon == null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.tasaCupon != null ? \u0275\u0275pipeBind2(2, 3, element_r10.tasaCupon, "1.2-4") : "\u2014");
  }
}
function ListaBonoComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Spread");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", element_r11.spread == null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.spread != null ? \u0275\u0275pipeBind2(2, 3, element_r11.spread, "1.2-4") : "\u2014");
  }
}
function ListaBonoComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Fecha Emisi\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r12.fechaEmision);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r12.fechaEmision ? \u0275\u0275pipeBind2(2, 3, element_r12.fechaEmision, "dd/MM/yyyy") : "\u2014");
  }
}
function ListaBonoComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Fecha Primer Cup\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r13.fechaPrimerCupon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r13.fechaPrimerCupon ? \u0275\u0275pipeBind2(2, 3, element_r13.fechaPrimerCupon, "dd/MM/yyyy") : "\u2014");
  }
}
function ListaBonoComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Fecha Vencimiento");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r14.fechaVencimiento);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r14.fechaVencimiento ? \u0275\u0275pipeBind2(2, 3, element_r14.fechaVencimiento, "dd/MM/yyyy") : "\u2014");
  }
}
function ListaBonoComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Curva Referencia");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    \u0275\u0275property("title", element_r15.descripcionCurva || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r15.descripcionCurva || "\u2014");
  }
}
function ListaBonoComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "M\xE9todo Amortizaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    \u0275\u0275property("title", element_r16.descripcionMetodo || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r16.descripcionMetodo || "\u2014");
  }
}
function ListaBonoComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "C\xE1lculo Base");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    \u0275\u0275property("title", element_r17.descripcionCalculoBase || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r17.descripcionCalculoBase || "\u2014");
  }
}
function ListaBonoComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Frecuencia Pago");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    \u0275\u0275property("title", element_r18.descripcionFrecuencia || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r18.descripcionFrecuencia || "\u2014");
  }
}
function ListaBonoComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Tipo Tasa Inter\xE9s");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    \u0275\u0275property("title", element_r19.descripcionTipoTasa || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r19.descripcionTipoTasa || "\u2014");
  }
}
function ListaBonoComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "F\xF3rmula Tasa");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    \u0275\u0275property("title", element_r20.descripcionFormula || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r20.descripcionFormula || "\u2014");
  }
}
function ListaBonoComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53)(1, "span", 54);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaBonoComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "button", 56);
    \u0275\u0275listener("click", function ListaBonoComponent_td_65_Template_button_click_1_listener($event) {
      const element_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.abrirMenuFila($event, element_r22));
    });
    \u0275\u0275elementStart(2, "mat-icon", 57);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaBonoComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 58);
  }
}
function ListaBonoComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59);
    \u0275\u0275listener("contextmenu", function ListaBonoComponent_tr_67_Template_tr_contextmenu_0_listener($event) {
      const row_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.onContextMenu($event, row_r25));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ListaBonoComponent_ng_template_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r22 = \u0275\u0275nextContext();
      const editarBonoModal_r27 = \u0275\u0275reference(78);
      return \u0275\u0275resetView(ctx_r22.editar(ctx_r22.selectedRow, editarBonoModal_r27));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function ListaBonoComponent_ng_template_74_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.eliminar(ctx_r22.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-bono", 61);
    \u0275\u0275listener("close", function ListaBonoComponent_ng_template_75_Template_app_carga_bono_close_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaBonoComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-bono", 62);
    \u0275\u0275listener("close", function ListaBonoComponent_ng_template_77_Template_app_editar_bono_close_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r22 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r22.filaEditar);
  }
}
var ListaBonoComponent = class _ListaBonoComponent {
  get displayedColumns() {
    return this.verTodasLasColumnas ? this.columnasCompletas : this.columnasBasicas;
  }
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
    this.filaEditar = new Bono();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.verTodasLasColumnas = false;
    this.columnasBasicas = [
      "ticker",
      "codISIN",
      "nomEmisor",
      "descripcionTipoBono",
      "desMoneda",
      "montoNominal",
      "tasaCupon",
      "fechaVencimiento",
      "acciones"
    ];
    this.columnasCompletas = [
      "idBono",
      "ticker",
      "codISIN",
      "nomEmisor",
      "descripcionTipoBono",
      "desMoneda",
      "montoNominal",
      "tasaCupon",
      "spread",
      "fechaEmision",
      "fechaPrimerCupon",
      "fechaVencimiento",
      "descripcionCurva",
      "descripcionMetodo",
      "descripcionCalculoBase",
      "descripcionFrecuencia",
      "descripcionTipoTasa",
      "descripcionFormula",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaBono().subscribe((response) => {
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
    import_sweetalert24.default.fire({
      title: "\xBFEst\xE1 seguro de eliminar este registro?",
      text: "Esta eliminaci\xF3n no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.eiminarBono(row.idBono).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert24.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
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
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaBonoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaBonoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaBonoComponent, selectors: [["app-lista-bono"]], viewQuery: function ListaBonoComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 21, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaBonoModal", ""], ["editarBonoModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar ticker, ISIN o emisor\u2026", "accion", "Agregar Bono", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], ["opciones", "", "title", "Muestra todos los atributos del instrumento", 1, "form-check", "form-switch", "interruptor-columnas"], ["type", "checkbox", "role", "switch", "id", "producto-bono-todas", 1, "form-check-input", 3, "change", "checked"], ["for", "producto-bono-todas", 1, "form-check-label"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "fechaVencimiento", "matSortDirection", "asc", "aria-label", "Listado de bonos", 3, "dataSource"], ["matColumnDef", "idBono"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "ticker"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codISIN"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "nomEmisor"], ["matColumnDef", "descripcionTipoBono"], ["matColumnDef", "desMoneda"], ["matColumnDef", "montoNominal"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-num", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "tasaCupon"], ["matColumnDef", "spread"], ["matColumnDef", "fechaEmision"], ["matColumnDef", "fechaPrimerCupon"], ["matColumnDef", "fechaVencimiento"], ["matColumnDef", "descripcionCurva"], ["mat-cell", "", "class", "celda-truncada", 3, "title", 4, "matCellDef"], ["matColumnDef", "descripcionMetodo"], ["matColumnDef", "descripcionCalculoBase"], ["matColumnDef", "descripcionFrecuencia"], ["matColumnDef", "descripcionTipoTasa"], ["matColumnDef", "descripcionFormula"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay bonos registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Bono\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de bonos", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-num"], ["mat-cell", "", 1, "col-num"], ["mat-cell", "", 1, "celda-truncada", 3, "title"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaBonoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaBonoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaBonoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaBonoModal_r2 = \u0275\u0275reference(76);
          return \u0275\u0275resetView(ctx.registrar(cargaBonoModal_r2));
        });
        \u0275\u0275elementStart(2, "div", 7)(3, "input", 8);
        \u0275\u0275listener("change", function ListaBonoComponent_Template_input_change_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.verTodasLasColumnas = $event.target.checked);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "label", 9);
        \u0275\u0275text(5, "Todas las columnas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 10)(7, "table", 11, 0);
        \u0275\u0275elementContainerStart(9, 12);
        \u0275\u0275template(10, ListaBonoComponent_th_10_Template, 2, 0, "th", 13)(11, ListaBonoComponent_td_11_Template, 2, 1, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(12, 15);
        \u0275\u0275template(13, ListaBonoComponent_th_13_Template, 2, 0, "th", 13)(14, ListaBonoComponent_td_14_Template, 3, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(15, 17);
        \u0275\u0275template(16, ListaBonoComponent_th_16_Template, 2, 0, "th", 13)(17, ListaBonoComponent_td_17_Template, 2, 3, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 19);
        \u0275\u0275template(19, ListaBonoComponent_th_19_Template, 2, 0, "th", 13)(20, ListaBonoComponent_td_20_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 20);
        \u0275\u0275template(22, ListaBonoComponent_th_22_Template, 2, 0, "th", 13)(23, ListaBonoComponent_td_23_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 21);
        \u0275\u0275template(25, ListaBonoComponent_th_25_Template, 2, 0, "th", 13)(26, ListaBonoComponent_td_26_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 22);
        \u0275\u0275template(28, ListaBonoComponent_th_28_Template, 2, 0, "th", 23)(29, ListaBonoComponent_td_29_Template, 3, 6, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 25);
        \u0275\u0275template(31, ListaBonoComponent_th_31_Template, 2, 0, "th", 23)(32, ListaBonoComponent_td_32_Template, 3, 6, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 26);
        \u0275\u0275template(34, ListaBonoComponent_th_34_Template, 2, 0, "th", 23)(35, ListaBonoComponent_td_35_Template, 3, 6, "td", 24);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 27);
        \u0275\u0275template(37, ListaBonoComponent_th_37_Template, 2, 0, "th", 13)(38, ListaBonoComponent_td_38_Template, 3, 6, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 28);
        \u0275\u0275template(40, ListaBonoComponent_th_40_Template, 2, 0, "th", 13)(41, ListaBonoComponent_td_41_Template, 3, 6, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 29);
        \u0275\u0275template(43, ListaBonoComponent_th_43_Template, 2, 0, "th", 13)(44, ListaBonoComponent_td_44_Template, 3, 6, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 30);
        \u0275\u0275template(46, ListaBonoComponent_th_46_Template, 2, 0, "th", 13)(47, ListaBonoComponent_td_47_Template, 2, 2, "td", 31);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(48, 32);
        \u0275\u0275template(49, ListaBonoComponent_th_49_Template, 2, 0, "th", 13)(50, ListaBonoComponent_td_50_Template, 2, 2, "td", 31);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(51, 33);
        \u0275\u0275template(52, ListaBonoComponent_th_52_Template, 2, 0, "th", 13)(53, ListaBonoComponent_td_53_Template, 2, 2, "td", 31);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(54, 34);
        \u0275\u0275template(55, ListaBonoComponent_th_55_Template, 2, 0, "th", 13)(56, ListaBonoComponent_td_56_Template, 2, 2, "td", 31);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(57, 35);
        \u0275\u0275template(58, ListaBonoComponent_th_58_Template, 2, 0, "th", 13)(59, ListaBonoComponent_td_59_Template, 2, 2, "td", 31);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(60, 36);
        \u0275\u0275template(61, ListaBonoComponent_th_61_Template, 2, 0, "th", 13)(62, ListaBonoComponent_td_62_Template, 2, 2, "td", 31);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(63, 37);
        \u0275\u0275template(64, ListaBonoComponent_th_64_Template, 3, 0, "th", 38)(65, ListaBonoComponent_td_65_Template, 4, 0, "td", 39);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(66, ListaBonoComponent_tr_66_Template, 1, 0, "tr", 40)(67, ListaBonoComponent_tr_67_Template, 1, 0, "tr", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "app-tabla-estado", 42);
        \u0275\u0275listener("reintentar", function ListaBonoComponent_Template_app_tabla_estado_reintentar_68_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaBonoComponent_Template_app_tabla_estado_limpiar_68_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(69, "mat-paginator", 43, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "div", 44);
        \u0275\u0275elementStart(72, "mat-menu", null, 2);
        \u0275\u0275template(74, ListaBonoComponent_ng_template_74_Template, 8, 0, "ng-template", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275template(75, ListaBonoComponent_ng_template_75_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(77, ListaBonoComponent_ng_template_77_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r30 = \u0275\u0275reference(73);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.verTodasLasColumnas);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(59);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(20, _c22))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r30);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaBonoComponent, EditarBonoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaBonoComponent, { className: "ListaBonoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\lista-bono\\lista-bono.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/productos/editar-fondo-inversion/editar-fondo-inversion.component.ts
var import_sweetalert25 = __toESM(require_sweetalert2_all());
function EditarFondoInversionComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-plaza", 43);
    \u0275\u0275listener("close", function EditarFondoInversionComponent_ng_template_93_Template_app_carga_plaza_close_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarFondoInversionComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 43);
    \u0275\u0275listener("close", function EditarFondoInversionComponent_ng_template_95_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarFondoInversionComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 43);
    \u0275\u0275listener("close", function EditarFondoInversionComponent_ng_template_97_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarFondoInversionComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-fondo", 43);
    \u0275\u0275listener("close", function EditarFondoInversionComponent_ng_template_99_Template_app_carga_tipo_fondo_close_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarFondoInversionComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fuente-informacion", 43);
    \u0275\u0275listener("close", function EditarFondoInversionComponent_ng_template_101_Template_app_carga_fuente_informacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarFondoInversionComponent = class _EditarFondoInversionComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codTicker))
      f.push("Ticker");
    if (vacio(r.idPlaza))
      f.push("Plaza");
    if (vacio(r.idEmisor))
      f.push("Emisor");
    if (vacio(r.idMoneda))
      f.push("Moneda");
    if (vacio(r.idTipoFondo))
      f.push("Tipo Fondo");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new FondoInversion();
    this.listPlaza = [];
    this.listTipoFondo = [];
    this.listFuenteInformacion = [];
    this.listEmisor = [];
    this.listMoneda = [];
    this.listTipoInstrumento = [];
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerListPlaza();
    this.obtenerListTipoFondo();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }
  obtenerListPlaza() {
    this.registroService.getListaPlaza().subscribe((response) => {
      this.listPlaza = response;
    });
  }
  obtenerListTipoFondo() {
    this.registroService.getListaTipoFondo().subscribe((response) => {
      this.listTipoFondo = response;
    });
  }
  obtenerListFuenteInformacion() {
    this.registroService.getListaFuenteInformacion().subscribe((response) => {
      this.listFuenteInformacion = response;
    });
  }
  obtenerListEmisor() {
    this.registroService.getListaEmisor().subscribe((response) => {
      this.listEmisor = response;
    });
  }
  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe((response) => {
      this.listMoneda = response;
    });
  }
  obtenerListTipoInstrumento() {
    this.registroService.getListaTipoInstrumento().subscribe((response) => {
      this.listTipoInstrumento = response;
    });
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert25.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.putModificarFondoInversion(this.objRegistroEditado.idFondo, this.objRegistroEditado).subscribe((response) => {
          import_sweetalert25.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
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
  cerrar() {
    this.close.emit();
  }
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListPlaza();
    this.obtenerListTipoFondo();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }
  static {
    this.\u0275fac = function EditarFondoInversionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarFondoInversionComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarFondoInversionComponent, selectors: [["app-editar-fondo-inversion"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 103, vars: 18, consts: [["cargaModalPlaza", ""], ["cargaModalEmisor", ""], ["cargaModalMoneda", ""], ["cargaModalTipoFondo", ""], ["cargaModalFuenteInformacion", ""], ["titulo", "Editar Fondo de Inversi\xF3n", "subtitulo", "Modifique los datos y guarde los cambios.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "fo-e-codTicker", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "fo-e-codTicker", "type", "text", "autocomplete", "off", "placeholder", "Ej. CCRFS1", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fo-e-desNemonico", 1, "form-label"], ["id", "fo-e-desNemonico", "type", "text", "autocomplete", "off", "placeholder", "Ej. CC RENTA FIJA SOLES", "maxlength", "60", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fo-e-codISIN", 1, "form-label"], ["id", "fo-e-codISIN", "type", "text", "autocomplete", "off", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fo-e-montoTotal", 1, "form-label"], ["id", "fo-e-montoTotal", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "fo-e-idPlaza", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "fo-e-idPlaza", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPlaza", "bindValue", "idPlaza", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar plaza", "aria-label", "Agregar plaza", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "fo-e-idEmisor", 1, "form-label"], ["labelForId", "fo-e-idEmisor", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "nomEmisor", "bindValue", "idEmisor", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar emisor", "aria-label", "Agregar emisor", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "fo-e-idMoneda", 1, "form-label"], ["labelForId", "fo-e-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "fo-e-idTipoFondo", 1, "form-label"], ["labelForId", "fo-e-idTipoFondo", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desTipoFondo", "bindValue", "idTipoFondo", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo fondo", "aria-label", "Agregar tipo fondo", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "fo-e-idFuenteInformacion", 1, "form-label"], ["labelForId", "fo-e-idFuenteInformacion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desFuenteInformacion", "bindValue", "idFuenteInformacion", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar fuente informaci\xF3n", "aria-label", "Agregar fuente informaci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "fo-e-flgCargaAutom", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "fo-e-flgCargaAutom", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], ["type", "checkbox", "id", "fo-e-flgVar", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "fo-e-flgVar", 1, "hig-opcion__titulo"], [3, "close"]], template: function EditarFondoInversionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 5);
        \u0275\u0275listener("cerrar", function EditarFondoInversionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarFondoInversionComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 6)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 7)(5, "div", 8)(6, "label", 9);
        \u0275\u0275text(7, "Ticker (BLG o Interno)");
        \u0275\u0275elementStart(8, "span", 10);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codTicker, $event) || (ctx.objRegistroEditado.codTicker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "label", 12);
        \u0275\u0275text(13, "Nem\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desNemonico, $event) || (ctx.objRegistroEditado.desNemonico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 14);
        \u0275\u0275text(17, "C\xF3digo ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codISIN, $event) || (ctx.objRegistroEditado.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label", 16);
        \u0275\u0275text(21, "Monto Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.montoTotal, $event) || (ctx.objRegistroEditado.montoTotal = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "fieldset", 6)(24, "legend");
        \u0275\u0275text(25, "Clasificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 18)(27, "div", 8)(28, "label", 19);
        \u0275\u0275text(29, "Plaza");
        \u0275\u0275elementStart(30, "span", 10);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 20)(33, "ng-select", 21);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idPlaza, $event) || (ctx.objRegistroEditado.idPlaza = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 22);
        \u0275\u0275listener("click", function EditarFondoInversionComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalPlaza_r2 = \u0275\u0275reference(94);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalPlaza_r2));
        });
        \u0275\u0275elementStart(35, "span", 23);
        \u0275\u0275text(36, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 8)(38, "label", 24);
        \u0275\u0275text(39, "Emisor");
        \u0275\u0275elementStart(40, "span", 10);
        \u0275\u0275text(41, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 20)(43, "ng-select", 25);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_ng_select_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idEmisor, $event) || (ctx.objRegistroEditado.idEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 26);
        \u0275\u0275listener("click", function EditarFondoInversionComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalEmisor_r3 = \u0275\u0275reference(96);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalEmisor_r3));
        });
        \u0275\u0275elementStart(45, "span", 23);
        \u0275\u0275text(46, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div", 8)(48, "label", 27);
        \u0275\u0275text(49, "Moneda");
        \u0275\u0275elementStart(50, "span", 10);
        \u0275\u0275text(51, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 20)(53, "ng-select", 28);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_ng_select_ngModelChange_53_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idMoneda, $event) || (ctx.objRegistroEditado.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 29);
        \u0275\u0275listener("click", function EditarFondoInversionComponent_Template_button_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r4 = \u0275\u0275reference(98);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r4));
        });
        \u0275\u0275elementStart(55, "span", 23);
        \u0275\u0275text(56, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 8)(58, "label", 30);
        \u0275\u0275text(59, "Tipo Fondo");
        \u0275\u0275elementStart(60, "span", 10);
        \u0275\u0275text(61, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 20)(63, "ng-select", 31);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_ng_select_ngModelChange_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTipoFondo, $event) || (ctx.objRegistroEditado.idTipoFondo = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 32);
        \u0275\u0275listener("click", function EditarFondoInversionComponent_Template_button_click_64_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoFondo_r5 = \u0275\u0275reference(100);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoFondo_r5));
        });
        \u0275\u0275elementStart(65, "span", 23);
        \u0275\u0275text(66, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "div", 8)(68, "label", 33);
        \u0275\u0275text(69, "Fuente Informaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 20)(71, "ng-select", 34);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_ng_select_ngModelChange_71_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idFuenteInformacion, $event) || (ctx.objRegistroEditado.idFuenteInformacion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 35);
        \u0275\u0275listener("click", function EditarFondoInversionComponent_Template_button_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalFuenteInformacion_r6 = \u0275\u0275reference(102);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalFuenteInformacion_r6));
        });
        \u0275\u0275elementStart(73, "span", 23);
        \u0275\u0275text(74, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(75, "fieldset", 6)(76, "legend");
        \u0275\u0275text(77, "Opciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 36)(79, "div", 37)(80, "input", 38);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_input_ngModelChange_80_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgCargaAutom, $event) || (ctx.objRegistroEditado.flgCargaAutom = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div")(82, "label", 39);
        \u0275\u0275text(83, "Carga autom\xE1tica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "span", 40);
        \u0275\u0275text(85, "El precio se actualiza autom\xE1ticamente desde la fuente de informaci\xF3n.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 37)(87, "input", 41);
        \u0275\u0275twoWayListener("ngModelChange", function EditarFondoInversionComponent_Template_input_ngModelChange_87_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.flgVar, $event) || (ctx.objRegistroEditado.flgVar = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div")(89, "label", 42);
        \u0275\u0275text(90, "C\xE1lculo de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "span", 40);
        \u0275\u0275text(92, "Incluye este instrumento en el c\xE1lculo de Valor en Riesgo.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(93, EditarFondoInversionComponent_ng_template_93_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(95, EditarFondoInversionComponent_ng_template_95_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(97, EditarFondoInversionComponent_ng_template_97_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(99, EditarFondoInversionComponent_ng_template_99_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(101, EditarFondoInversionComponent_ng_template_101_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codTicker);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desNemonico);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codISIN);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.montoTotal);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listPlaza);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idPlaza);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listEmisor);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idEmisor);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idMoneda);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoFondo);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTipoFondo);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.listFuenteInformacion);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idFuenteInformacion);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgCargaAutom);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.flgVar);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CommonModule, CargaPlazaComponent, CargaEmisorComponent, CargaMonedaComponent, CargaTipoFondoComponent, CargaFuenteInformacionComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-fondo-inversion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarFondoInversionComponent, { className: "EditarFondoInversionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\editar-fondo-inversion\\editar-fondo-inversion.component.ts", lineNumber: 32 });
})();

// src/app/components/registro/mantenedor/productos/lista-fondo-inversion/lista-fondo-inversion.component.ts
var import_sweetalert26 = __toESM(require_sweetalert2_all());
var _c03 = ["paginator"];
var _c13 = ["sort"];
var _c23 = () => [10, 20, 50, 100];
function ListaFondoInversionComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idFondo);
  }
}
function ListaFondoInversionComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Ticker");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codTicker);
  }
}
function ListaFondoInversionComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Nem\xF3nico");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.desNemonico);
  }
}
function ListaFondoInversionComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "ISIN");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.codISIN);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.codISIN || "\u2014");
  }
}
function ListaFondoInversionComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Tipo Fondo");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.desTipoFondo);
  }
}
function ListaFondoInversionComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Emisor");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.nomEmisor);
  }
}
function ListaFondoInversionComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Plaza");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.desPlaza);
  }
}
function ListaFondoInversionComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Moneda");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.desMoneda);
  }
}
function ListaFondoInversionComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Monto Total");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", element_r11.montoTotal == null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.montoTotal != null ? \u0275\u0275pipeBind2(2, 3, element_r11.montoTotal, "1.0-2") : "\u2014");
  }
}
function ListaFondoInversionComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Fuente de Informaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r12.desFuenteInformacion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r12.desFuenteInformacion || "\u2014");
  }
}
function ListaFondoInversionComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Carga Autom\xE1tica");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49)(1, "mat-icon", 50);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaFondoInversionComponent_td_41_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275template(1, ListaFondoInversionComponent_td_41_span_1_Template, 5, 0, "span", 48)(2, ListaFondoInversionComponent_td_41_ng_template_2_Template, 4, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const sinMarca_r14 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r13.flgCargaAutom)("ngIfElse", sinMarca_r14);
  }
}
function ListaFondoInversionComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "VaR");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49)(1, "mat-icon", 50);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4, "S\xED");
    \u0275\u0275elementEnd()();
  }
}
function ListaFondoInversionComponent_td_44_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3, "No");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47);
    \u0275\u0275template(1, ListaFondoInversionComponent_td_44_span_1_Template, 5, 0, "span", 48)(2, ListaFondoInversionComponent_td_44_ng_template_2_Template, 4, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const sinMarca_r16 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r15.flgVar)("ngIfElse", sinMarca_r16);
  }
}
function ListaFondoInversionComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53)(1, "span", 51);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaFondoInversionComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 54)(1, "button", 55);
    \u0275\u0275listener("click", function ListaFondoInversionComponent_td_47_Template_button_click_1_listener($event) {
      const element_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.abrirMenuFila($event, element_r18));
    });
    \u0275\u0275elementStart(2, "mat-icon", 50);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaFondoInversionComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function ListaFondoInversionComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57);
    \u0275\u0275listener("contextmenu", function ListaFondoInversionComponent_tr_49_Template_tr_contextmenu_0_listener($event) {
      const row_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.onContextMenu($event, row_r21));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ListaFondoInversionComponent_ng_template_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r18 = \u0275\u0275nextContext();
      const editarModal_r23 = \u0275\u0275reference(60);
      return \u0275\u0275resetView(ctx_r18.editar(ctx_r18.selectedRow, editarModal_r23));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 58);
    \u0275\u0275listener("click", function ListaFondoInversionComponent_ng_template_56_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.eliminar(ctx_r18.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fondo-inversion", 59);
    \u0275\u0275listener("close", function ListaFondoInversionComponent_ng_template_57_Template_app_carga_fondo_inversion_close_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaFondoInversionComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-fondo-inversion", 60);
    \u0275\u0275listener("close", function ListaFondoInversionComponent_ng_template_59_Template_app_editar_fondo_inversion_close_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r18.filaEditar);
  }
}
var ListaFondoInversionComponent = class _ListaFondoInversionComponent {
  get displayedColumns() {
    return this.verTodasLasColumnas ? this.columnasCompletas : this.columnasBasicas;
  }
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
    this.filaEditar = new FondoInversion();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.verTodasLasColumnas = false;
    this.columnasBasicas = [
      "codTicker",
      "desNemonico",
      "codISIN",
      "desTipoFondo",
      "nomEmisor",
      "desMoneda",
      "montoTotal",
      "flgVar",
      "acciones"
    ];
    this.columnasCompletas = [
      "idFondo",
      "codTicker",
      "desNemonico",
      "codISIN",
      "desTipoFondo",
      "nomEmisor",
      "desPlaza",
      "desMoneda",
      "montoTotal",
      "desFuenteInformacion",
      "flgCargaAutom",
      "flgVar",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaFondoInversion().subscribe((response) => {
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
    import_sweetalert26.default.fire({
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
        this.registroService.eiminarFondoInversion(row.idFondo).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert26.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
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
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaFondoInversionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaFondoInversionComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaFondoInversionComponent, selectors: [["app-lista-fondo-inversion"]], viewQuery: function ListaFondoInversionComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 21, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], ["sinMarca", ""], [1, "hig-tabla"], ["placeholder", "Buscar ticker, nem\xF3nico o ISIN\u2026", "accion", "Agregar Fondo de Inversi\xF3n", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], ["opciones", "", "title", "Muestra todos los atributos del instrumento", 1, "form-check", "form-switch", "interruptor-columnas"], ["type", "checkbox", "role", "switch", "id", "producto-fondo-todas", 1, "form-check-input", 3, "change", "checked"], ["for", "producto-fondo-todas", 1, "form-check-label"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codTicker", "matSortDirection", "asc", "aria-label", "Listado de fondos de inversi\xF3n", 3, "dataSource"], ["matColumnDef", "idFondo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codTicker"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desNemonico"], ["matColumnDef", "codISIN"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "desTipoFondo"], ["matColumnDef", "nomEmisor"], ["matColumnDef", "desPlaza"], ["matColumnDef", "desMoneda"], ["matColumnDef", "montoTotal"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-num", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "desFuenteInformacion"], ["matColumnDef", "flgCargaAutom"], ["mat-cell", "", "class", "col-estado", 4, "matCellDef"], ["matColumnDef", "flgVar"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay fondos de inversi\xF3n registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Fondo de Inversi\xF3n\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de fondos de inversi\xF3n", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-num"], ["mat-cell", "", 1, "col-num"], ["mat-cell", "", 1, "col-estado"], ["class", "estado-si", 4, "ngIf", "ngIfElse"], [1, "estado-si"], ["aria-hidden", "true"], [1, "solo-lector"], ["aria-hidden", "true", 1, "celda-vacia"], ["mat-header-cell", "", 1, "col-acciones"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaFondoInversionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6)(1, "app-tabla-toolbar", 7);
        \u0275\u0275listener("buscar", function ListaFondoInversionComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaFondoInversionComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(58);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementStart(2, "div", 8)(3, "input", 9);
        \u0275\u0275listener("change", function ListaFondoInversionComponent_Template_input_change_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.verTodasLasColumnas = $event.target.checked);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "label", 10);
        \u0275\u0275text(5, "Todas las columnas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 11)(7, "table", 12, 0);
        \u0275\u0275elementContainerStart(9, 13);
        \u0275\u0275template(10, ListaFondoInversionComponent_th_10_Template, 2, 0, "th", 14)(11, ListaFondoInversionComponent_td_11_Template, 2, 1, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(12, 16);
        \u0275\u0275template(13, ListaFondoInversionComponent_th_13_Template, 2, 0, "th", 14)(14, ListaFondoInversionComponent_td_14_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(15, 18);
        \u0275\u0275template(16, ListaFondoInversionComponent_th_16_Template, 2, 0, "th", 14)(17, ListaFondoInversionComponent_td_17_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 19);
        \u0275\u0275template(19, ListaFondoInversionComponent_th_19_Template, 2, 0, "th", 14)(20, ListaFondoInversionComponent_td_20_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 21);
        \u0275\u0275template(22, ListaFondoInversionComponent_th_22_Template, 2, 0, "th", 14)(23, ListaFondoInversionComponent_td_23_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 22);
        \u0275\u0275template(25, ListaFondoInversionComponent_th_25_Template, 2, 0, "th", 14)(26, ListaFondoInversionComponent_td_26_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 23);
        \u0275\u0275template(28, ListaFondoInversionComponent_th_28_Template, 2, 0, "th", 14)(29, ListaFondoInversionComponent_td_29_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 24);
        \u0275\u0275template(31, ListaFondoInversionComponent_th_31_Template, 2, 0, "th", 14)(32, ListaFondoInversionComponent_td_32_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 25);
        \u0275\u0275template(34, ListaFondoInversionComponent_th_34_Template, 2, 0, "th", 26)(35, ListaFondoInversionComponent_td_35_Template, 3, 6, "td", 27);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(36, 28);
        \u0275\u0275template(37, ListaFondoInversionComponent_th_37_Template, 2, 0, "th", 14)(38, ListaFondoInversionComponent_td_38_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(39, 29);
        \u0275\u0275template(40, ListaFondoInversionComponent_th_40_Template, 2, 0, "th", 14)(41, ListaFondoInversionComponent_td_41_Template, 4, 2, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(42, 31);
        \u0275\u0275template(43, ListaFondoInversionComponent_th_43_Template, 2, 0, "th", 14)(44, ListaFondoInversionComponent_td_44_Template, 4, 2, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(45, 32);
        \u0275\u0275template(46, ListaFondoInversionComponent_th_46_Template, 3, 0, "th", 33)(47, ListaFondoInversionComponent_td_47_Template, 4, 0, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(48, ListaFondoInversionComponent_tr_48_Template, 1, 0, "tr", 35)(49, ListaFondoInversionComponent_tr_49_Template, 1, 0, "tr", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "app-tabla-estado", 37);
        \u0275\u0275listener("reintentar", function ListaFondoInversionComponent_Template_app_tabla_estado_reintentar_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaFondoInversionComponent_Template_app_tabla_estado_limpiar_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(51, "mat-paginator", 38, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "div", 39);
        \u0275\u0275elementStart(54, "mat-menu", null, 2);
        \u0275\u0275template(56, ListaFondoInversionComponent_ng_template_56_Template, 8, 0, "ng-template", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275template(57, ListaFondoInversionComponent_ng_template_57_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(59, ListaFondoInversionComponent_ng_template_59_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r26 = \u0275\u0275reference(55);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.verTodasLasColumnas);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(41);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(20, _c23))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r26);
      }
    }, dependencies: [CommonModule, NgIf, DecimalPipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaFondoInversionComponent, EditarFondoInversionComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaFondoInversionComponent, { className: "ListaFondoInversionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\lista-fondo-inversion\\lista-fondo-inversion.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/productos/mantenedor-productos/mantenedor-productos.component.ts
var _c04 = ["segmento"];
function MantenedorProductosComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11, 0);
    \u0275\u0275listener("click", function MantenedorProductosComponent_button_7_Template_button_click_0_listener() {
      const producto_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionar(producto_r2.id));
    })("keydown", function MantenedorProductosComponent_button_7_Template_button_keydown_0_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.alTeclear($event, i_r4));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("activo", producto_r2.id === ctx_r2.productoSeleccionado);
    \u0275\u0275property("id", "producto-tab-" + producto_r2.id);
    \u0275\u0275attribute("aria-selected", producto_r2.id === ctx_r2.productoSeleccionado)("tabindex", producto_r2.id === ctx_r2.productoSeleccionado ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", producto_r2.etiqueta, " ");
  }
}
function MantenedorProductosComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var MantenedorProductosComponent = class _MantenedorProductosComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.productos = [
      { id: 1, etiqueta: "Acci\xF3n", descripcion: "Acciones que pueden incluirse en portafolios y en el c\xE1lculo de VaR.", componente: ListaAccionComponent },
      { id: 2, etiqueta: "Bono", descripcion: "Bonos con sus condiciones financieras y su cuponera.", componente: ListaBonoComponent },
      { id: 3, etiqueta: "Fondo de Inversi\xF3n", descripcion: "Fondos mutuos y de inversi\xF3n que pueden incluirse en portafolios.", componente: ListaFondoInversionComponent }
    ];
    this.productoSeleccionado = 1;
  }
  ngOnInit() {
    const pedido = Number(this.route.snapshot.queryParamMap.get("producto"));
    if (this.productos.some((p) => p.id === pedido)) {
      this.productoSeleccionado = pedido;
    }
  }
  get actual() {
    return this.productos.find((p) => p.id === this.productoSeleccionado) ?? this.productos[0];
  }
  seleccionar(id) {
    if (id === this.productoSeleccionado) {
      return;
    }
    this.productoSeleccionado = id;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { producto: id },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  // Navegación con teclado del control segmentado: ← → Inicio Fin
  alTeclear(evento, indice) {
    const ultimo = this.productos.length - 1;
    let destino;
    switch (evento.key) {
      case "ArrowRight":
        destino = indice === ultimo ? 0 : indice + 1;
        break;
      case "ArrowLeft":
        destino = indice === 0 ? ultimo : indice - 1;
        break;
      case "Home":
        destino = 0;
        break;
      case "End":
        destino = ultimo;
        break;
      default:
        return;
    }
    evento.preventDefault();
    this.seleccionar(this.productos[destino].id);
    this.segmentos.get(destino)?.nativeElement.focus();
  }
  static {
    this.\u0275fac = function MantenedorProductosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MantenedorProductosComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MantenedorProductosComponent, selectors: [["app-mantenedor-productos"]], viewQuery: function MantenedorProductosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.segmentos = _t);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [["segmento", ""], [1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "productos-subtitulo"], ["role", "tablist", "aria-label", "Tipo de instrumento", 1, "productos-segmentado"], ["type", "button", "role", "tab", "class", "productos-segmento", "aria-controls", "producto-panel", 3, "activo", "id", "click", "keydown", 4, "ngFor", "ngForOf"], ["id", "producto-panel", "role", "tabpanel", 1, "card", "productos-panel"], [1, "card-body"], [1, "productos-descripcion"], [4, "ngComponentOutlet"], ["type", "button", "role", "tab", "aria-controls", "producto-panel", 1, "productos-segmento", 3, "click", "keydown", "id"]], template: function MantenedorProductosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
        \u0275\u0275text(3, "Instrumentos Financieros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, "Acciones, bonos y fondos que se valorizan y forman parte de los portafolios.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, MantenedorProductosComponent_button_7_Template, 3, 6, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "section", 7)(9, "div", 8)(10, "p", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, MantenedorProductosComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.productos);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-labelledby", "producto-tab-" + ctx.productoSeleccionado);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.actual.descripcion);
        \u0275\u0275advance();
        \u0275\u0275property("ngComponentOutlet", ctx.actual.componente);
      }
    }, dependencies: [CommonModule, NgComponentOutlet, NgForOf], styles: ["\n\n.productos-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.875rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.productos-segmentado[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  max-width: 100%;\n  margin-bottom: 20px;\n  padding: 3px;\n  gap: 2px;\n  overflow-x: auto;\n  background: rgba(var(--dark-rgb), 0.07);\n  border-radius: 11px;\n}\n.productos-segmento[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 0 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  white-space: nowrap;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  transition: background-color 0.15s, box-shadow 0.15s;\n}\n.productos-segmento[_ngcontent-%COMP%]:hover:not(.activo) {\n  background: rgba(var(--dark-rgb), 0.08);\n}\n.productos-segmento.activo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: var(--custom-white);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(var(--dark-rgb), 0.1);\n}\n.productos-segmento[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: 2px;\n}\n[data-theme-mode=dark][_nghost-%COMP%]   .productos-segmento.activo[_ngcontent-%COMP%], [data-theme-mode=dark]   [_nghost-%COMP%]   .productos-segmento.activo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.16);\n}\n.productos-panel[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.productos-descripcion[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 0.875rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n@media (prefers-reduced-motion: reduce) {\n  .productos-segmento[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=mantenedor-productos.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MantenedorProductosComponent, { className: "MantenedorProductosComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\mantenedor-productos\\mantenedor-productos.component.ts", lineNumber: 22 });
})();
export {
  MantenedorProductosComponent
};
//# sourceMappingURL=mantenedor-productos.component-MVIHLJJR.js.map
