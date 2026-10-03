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
  CargaMonedaComponent,
  ModalFormularioComponent
} from "./chunk-3Z7W44IR.js";
import {
  RegistroService
} from "./chunk-FSM2IJQ7.js";
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
  FilePondModule
} from "./chunk-NJNQMACQ.js";
import {
  require_sweetalert2_all
} from "./chunk-XNBVOFQ5.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-DJZSF5ZU.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  NgbModal,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavModule,
  NgbNavOutlet
} from "./chunk-JG564GD5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-BKD3PXJL.js";
import {
  CommonModule,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/shared/models/producto/accion.ts
var Accion = class {
};

// src/app/components/registro/mantenedor/productos/carga-accion/carga-accion.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function CargaAccionComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-plaza", 47);
    \u0275\u0275listener("close", function CargaAccionComponent_ng_template_103_Template_app_carga_plaza_close_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaAccionComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-accion", 47);
    \u0275\u0275listener("close", function CargaAccionComponent_ng_template_105_Template_app_carga_tipo_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaAccionComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 47);
    \u0275\u0275listener("close", function CargaAccionComponent_ng_template_107_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaAccionComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 47);
    \u0275\u0275listener("close", function CargaAccionComponent_ng_template_109_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaAccionComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fuente-informacion", 47);
    \u0275\u0275listener("close", function CargaAccionComponent_ng_template_111_Template_app_carga_fuente_informacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaAccionComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-sector", 47);
    \u0275\u0275listener("close", function CargaAccionComponent_ng_template_113_Template_app_carga_tipo_sector_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaAccionComponent = class _CargaAccionComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
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
    this.listPlaza = [];
    this.listTipoAccion = [];
    this.listFuenteInformacion = [];
    this.listEmisor = [];
    this.listMoneda = [];
    this.listTipoSector = [];
    this.nuevoRegistro = new Accion();
  }
  ngOnInit() {
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
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarAccion(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert2.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La acci\xF3n ha sido registrada correctamente.",
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
    this.\u0275fac = function CargaAccionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaAccionComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaAccionComponent, selectors: [["app-carga-accion"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 115, vars: 20, consts: [["cargaModalPlaza", ""], ["cargaModalTipoAccion", ""], ["cargaModalEmisor", ""], ["cargaModalMoneda", ""], ["cargaModalFuenteInformacion", ""], ["cargaModalTipoSector", ""], ["titulo", "Cargar Acci\xF3n", "subtitulo", "Registre una acci\xF3n para incluirla en portafolios y en el c\xE1lculo de VaR.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "ac-c-codTicker", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ac-c-codTicker", "type", "text", "autocomplete", "off", "placeholder", "Ej. AMZN", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ac-c-desNemonico", 1, "form-label"], ["id", "ac-c-desNemonico", "type", "text", "autocomplete", "off", "placeholder", "Ej. AMAZON.COM", "maxlength", "60", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ac-c-codISIN", 1, "form-label"], ["id", "ac-c-codISIN", "type", "text", "autocomplete", "off", "placeholder", "Ej. US0231351067", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ac-c-codIndAsociado", 1, "form-label"], ["id", "ac-c-codIndAsociado", "type", "text", "autocomplete", "off", "placeholder", "Ej. S&P 500", "maxlength", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "ac-c-idPlaza", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "ac-c-idPlaza", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPlaza", "bindValue", "idPlaza", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar plaza", "aria-label", "Agregar plaza", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "ac-c-idTipoSector", 1, "form-label"], ["labelForId", "ac-c-idTipoSector", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTiposector", "bindValue", "idTipoSector", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo sector", "aria-label", "Agregar tipo sector", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-c-idTipoAccion", 1, "form-label"], ["labelForId", "ac-c-idTipoAccion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desTipoAccion", "bindValue", "idTipoAccion", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo acci\xF3n", "aria-label", "Agregar tipo acci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-c-idEmisor", 1, "form-label"], ["labelForId", "ac-c-idEmisor", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "nomEmisor", "bindValue", "idEmisor", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar emisor", "aria-label", "Agregar emisor", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-c-idMoneda", 1, "form-label"], ["labelForId", "ac-c-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "ac-c-idFuenteInformacion", 1, "form-label"], ["labelForId", "ac-c-idFuenteInformacion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desFuenteInformacion", "bindValue", "idFuenteInformacion", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar fuente informaci\xF3n", "aria-label", "Agregar fuente informaci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "ac-c-flgCargaAutom", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "ac-c-flgCargaAutom", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], ["type", "checkbox", "id", "ac-c-flgVar", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "ac-c-flgVar", 1, "hig-opcion__titulo"], [3, "close"]], template: function CargaAccionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 6);
        \u0275\u0275listener("cerrar", function CargaAccionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaAccionComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codTicker, $event) || (ctx.nuevoRegistro.codTicker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 9)(12, "label", 13);
        \u0275\u0275text(13, "Nem\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.desNemonico, $event) || (ctx.nuevoRegistro.desNemonico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "label", 15);
        \u0275\u0275text(17, "C\xF3digo ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codISIN, $event) || (ctx.nuevoRegistro.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "label", 17);
        \u0275\u0275text(21, "\xCDndice Asociado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codIndAsociado, $event) || (ctx.nuevoRegistro.codIndAsociado = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idPlaza, $event) || (ctx.nuevoRegistro.idPlaza = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 23);
        \u0275\u0275listener("click", function CargaAccionComponent_Template_button_click_34_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_ng_select_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTipoSector, $event) || (ctx.nuevoRegistro.idTipoSector = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 27);
        \u0275\u0275listener("click", function CargaAccionComponent_Template_button_click_44_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_ng_select_ngModelChange_53_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTipoAccion, $event) || (ctx.nuevoRegistro.idTipoAccion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 30);
        \u0275\u0275listener("click", function CargaAccionComponent_Template_button_click_54_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_ng_select_ngModelChange_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idEmisor, $event) || (ctx.nuevoRegistro.idEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 33);
        \u0275\u0275listener("click", function CargaAccionComponent_Template_button_click_64_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_ng_select_ngModelChange_73_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idMoneda, $event) || (ctx.nuevoRegistro.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 36);
        \u0275\u0275listener("click", function CargaAccionComponent_Template_button_click_74_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_ng_select_ngModelChange_81_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idFuenteInformacion, $event) || (ctx.nuevoRegistro.idFuenteInformacion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 39);
        \u0275\u0275listener("click", function CargaAccionComponent_Template_button_click_82_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_input_ngModelChange_90_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.flgCargaAutom, $event) || (ctx.nuevoRegistro.flgCargaAutom = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaAccionComponent_Template_input_ngModelChange_97_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.flgVar, $event) || (ctx.nuevoRegistro.flgVar = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div")(99, "label", 46);
        \u0275\u0275text(100, "C\xE1lculo de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "span", 44);
        \u0275\u0275text(102, "Incluye este instrumento en el c\xE1lculo de Valor en Riesgo.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(103, CargaAccionComponent_ng_template_103_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(105, CargaAccionComponent_ng_template_105_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(107, CargaAccionComponent_ng_template_107_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(109, CargaAccionComponent_ng_template_109_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(111, CargaAccionComponent_ng_template_111_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(113, CargaAccionComponent_ng_template_113_Template, 1, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codTicker);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.desNemonico);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codISIN);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codIndAsociado);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listPlaza);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idPlaza);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoSector);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTipoSector);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoAccion);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTipoAccion);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listEmisor);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idEmisor);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idMoneda);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.listFuenteInformacion);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idFuenteInformacion);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.flgCargaAutom);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.flgVar);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CommonModule, CargaPlazaComponent, CargaTipoAccionComponent, CargaEmisorComponent, CargaMonedaComponent, CargaFuenteInformacionComponent, CargaTipoSectorComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-accion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaAccionComponent, { className: "CargaAccionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\carga-accion\\carga-accion.component.ts", lineNumber: 32 });
})();

// src/app/shared/models/producto/bono.ts
var Bono = class {
};

// src/app/components/registro/mantenedor/productos/carga-bono/carga-bono.component.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/productos/carga-bono-cupon/carga-bono-cupon.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());

// src/app/shared/models/producto/bono-cupon.ts
var BonoCupon = class {
};

// src/app/components/registro/mantenedor/productos/carga-bono-cupon/carga-bono-cupon.component.ts
var _c0 = ["paginator"];
var _c1 = ["sort"];
var _c2 = () => [8];
function CargaBonoCuponComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 10);
    \u0275\u0275text(2, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "La carga desde archivo a\xFAn no est\xE1 disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6, " Por ahora la cuponera se registra fila por fila en la pesta\xF1a \xABManual\xBB. Si el bono se cre\xF3 con la opci\xF3n \xABGenerar la cuponera autom\xE1ticamente\xBB, no necesita hacer nada m\xE1s. ");
    \u0275\u0275elementEnd()();
  }
}
function CargaBonoCuponComponent_ng_template_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 10);
    \u0275\u0275text(2, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "A\xFAn no hay cupones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6, "Use \xABAgregar fila\xBB para registrar cada pago de intereses y amortizaci\xF3n.");
    \u0275\u0275elementEnd()();
  }
}
function CargaBonoCuponComponent_ng_template_10_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "ISIN");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_20_Template_input_ngModelChange_1_listener($event) {
      const element_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(element_r5.codISIN, $event) || (element_r5.codISIN = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r5.codISIN);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Cuota ");
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd()();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_23_Template_input_ngModelChange_1_listener($event) {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(element_r7.numeroCuota, $event) || (element_r7.numeroCuota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("campo-vacio", !element_r7.numeroCuota);
    \u0275\u0275twoWayProperty("ngModel", element_r7.numeroCuota);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Fecha de pago ");
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd()();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_26_Template_input_ngModelChange_1_listener($event) {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(element_r9.fechaPago, $event) || (element_r9.fechaPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("campo-vacio", !element_r9.fechaPago);
    \u0275\u0275twoWayProperty("ngModel", element_r9.fechaPago);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "D\xEDas");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_29_Template_input_ngModelChange_1_listener($event) {
      const element_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(element_r11.diasPeriodo, $event) || (element_r11.diasPeriodo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r11.diasPeriodo);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Inter\xE9s");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_32_Template_input_ngModelChange_1_listener($event) {
      const element_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(element_r13.interesCalculado, $event) || (element_r13.interesCalculado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r13.interesCalculado);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Amortizaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_35_Template_input_ngModelChange_1_listener($event) {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(element_r15.amortizacionCapital, $event) || (element_r15.amortizacionCapital = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r15.amortizacionCapital);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Saldo");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_38_Template_input_ngModelChange_1_listener($event) {
      const element_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(element_r17.saldoCapital, $event) || (element_r17.saldoCapital = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r17.saldoCapital);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Mora");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_41_Template_input_ngModelChange_1_listener($event) {
      const element_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(element_r19.interesesMoratorios, $event) || (element_r19.interesesMoratorios = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r19.interesesMoratorios);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_44_Template_input_ngModelChange_1_listener($event) {
      const element_r21 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(element_r21.estadoPago, $event) || (element_r21.estadoPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r21.estadoPago);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Pago real");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_47_Template_input_ngModelChange_1_listener($event) {
      const element_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(element_r23.fechaPagoReal, $event) || (element_r23.fechaPagoReal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r23.fechaPagoReal);
  }
}
function CargaBonoCuponComponent_ng_template_10_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Observaciones");
    \u0275\u0275elementEnd();
  }
}
function CargaBonoCuponComponent_ng_template_10_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 39)(1, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function CargaBonoCuponComponent_ng_template_10_td_50_Template_input_ngModelChange_1_listener($event) {
      const element_r25 = \u0275\u0275restoreView(_r24).$implicit;
      \u0275\u0275twoWayBindingSet(element_r25.observaciones, $event) || (element_r25.observaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r25.observaciones);
  }
}
function CargaBonoCuponComponent_ng_template_10_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 52);
  }
}
function CargaBonoCuponComponent_ng_template_10_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function CargaBonoCuponComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Cuota y fecha de pago son obligatorias en cada fila.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16)(6, "button", 17);
    \u0275\u0275listener("click", function CargaBonoCuponComponent_ng_template_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeData());
    });
    \u0275\u0275elementStart(7, "mat-icon", 10);
    \u0275\u0275text(8, "remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Quitar \xFAltima fila ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 18);
    \u0275\u0275listener("click", function CargaBonoCuponComponent_ng_template_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addData());
    });
    \u0275\u0275elementStart(11, "mat-icon", 10);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Agregar fila ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, CargaBonoCuponComponent_ng_template_10_div_14_Template, 7, 0, "div", 19);
    \u0275\u0275elementStart(15, "div", 20)(16, "table", 21, 1);
    \u0275\u0275elementContainerStart(18, 22);
    \u0275\u0275template(19, CargaBonoCuponComponent_ng_template_10_th_19_Template, 2, 0, "th", 23)(20, CargaBonoCuponComponent_ng_template_10_td_20_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 25);
    \u0275\u0275template(22, CargaBonoCuponComponent_ng_template_10_th_22_Template, 4, 0, "th", 23)(23, CargaBonoCuponComponent_ng_template_10_td_23_Template, 2, 3, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 26);
    \u0275\u0275template(25, CargaBonoCuponComponent_ng_template_10_th_25_Template, 4, 0, "th", 23)(26, CargaBonoCuponComponent_ng_template_10_td_26_Template, 2, 3, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 27);
    \u0275\u0275template(28, CargaBonoCuponComponent_ng_template_10_th_28_Template, 2, 0, "th", 23)(29, CargaBonoCuponComponent_ng_template_10_td_29_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 28);
    \u0275\u0275template(31, CargaBonoCuponComponent_ng_template_10_th_31_Template, 2, 0, "th", 23)(32, CargaBonoCuponComponent_ng_template_10_td_32_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33, 29);
    \u0275\u0275template(34, CargaBonoCuponComponent_ng_template_10_th_34_Template, 2, 0, "th", 23)(35, CargaBonoCuponComponent_ng_template_10_td_35_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(36, 30);
    \u0275\u0275template(37, CargaBonoCuponComponent_ng_template_10_th_37_Template, 2, 0, "th", 23)(38, CargaBonoCuponComponent_ng_template_10_td_38_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(39, 31);
    \u0275\u0275template(40, CargaBonoCuponComponent_ng_template_10_th_40_Template, 2, 0, "th", 23)(41, CargaBonoCuponComponent_ng_template_10_td_41_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(42, 32);
    \u0275\u0275template(43, CargaBonoCuponComponent_ng_template_10_th_43_Template, 2, 0, "th", 23)(44, CargaBonoCuponComponent_ng_template_10_td_44_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(45, 33);
    \u0275\u0275template(46, CargaBonoCuponComponent_ng_template_10_th_46_Template, 2, 0, "th", 23)(47, CargaBonoCuponComponent_ng_template_10_td_47_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(48, 34);
    \u0275\u0275template(49, CargaBonoCuponComponent_ng_template_10_th_49_Template, 2, 0, "th", 23)(50, CargaBonoCuponComponent_ng_template_10_td_50_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(51, CargaBonoCuponComponent_ng_template_10_tr_51_Template, 1, 0, "tr", 35)(52, CargaBonoCuponComponent_ng_template_10_tr_52_Template, 1, 0, "tr", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "mat-paginator", 37, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nuevoRegistro.length === 1 ? "1 cup\xF3n" : ctx_r2.nuevoRegistro.length + " cupones", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.nuevoRegistro.length);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r2.nuevoRegistro.length);
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !ctx_r2.nuevoRegistro.length);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(35);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.nuevoRegistro.length <= 8 ? "none" : null);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(10, _c2));
  }
}
var CargaBonoCuponComponent = class _CargaBonoCuponComponent {
  get faltantes() {
    if (this.nuevoRegistro.length === 0) {
      return ["Cupones (agregue al menos una fila)"];
    }
    const incompleto = this.nuevoRegistro.some((c) => !c.numeroCuota || !c.fechaPago);
    return incompleto ? ["Cuota y fecha de pago de cada fila"] : [];
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.nuevoRegistro = [];
    this.dataSource = new MatTableDataSource(this.nuevoRegistro);
    this.displayedColumns = [
      "codISIN",
      "numeroCuota",
      "fechaPago",
      "diasPeriodo",
      "interesCalculado",
      "amortizacionCapital",
      "saldoCapital",
      "interesesMoratorios",
      "estadoPago",
      "fechaPagoReal",
      "observaciones"
    ];
    this.singlepondOptions = {
      allowMultiple: false,
      labelIdle: "Seleccione un archivo o arr\xE1stelo aqu\xED..."
    };
    this.pondFiles = [];
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.nuevoRegistro.map((i) => i.idBono = this.data.idBono);
    this.registroService.postRegistrarCuponerXBono(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert22.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La cuponera ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      import_sweetalert22.default.fire({
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
  addData() {
    let objCupon = new BonoCupon();
    objCupon.codISIN = this.data?.codISIN;
    objCupon.numeroCuota = this.nuevoRegistro.length + 1;
    objCupon.estadoPago = "PENDIENTE";
    objCupon.interesesMoratorios = 0;
    this.nuevoRegistro.push(objCupon);
    this.nuevoRegistro = [...this.nuevoRegistro];
    this.dataSource = new MatTableDataSource(this.nuevoRegistro);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  removeData() {
    this.nuevoRegistro.pop();
    this.nuevoRegistro = [...this.nuevoRegistro];
    this.dataSource = new MatTableDataSource(this.nuevoRegistro);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  pondHandleInit() {
  }
  pondHandleAddFile(event) {
  }
  pondHandleActivateFile(event) {
  }
  static {
    this.\u0275fac = function CargaBonoCuponComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaBonoCuponComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaBonoCuponComponent, selectors: [["app-carga-bono-cupon"]], viewQuery: function CargaBonoCuponComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 9, consts: [["nav", "ngbNav"], ["sort", "matSort"], ["paginator", ""], ["titulo", "Cargar Cuponera", "accion", "Registrar", 1, "hoja-ancha", 3, "cerrar", "guardar", "subtitulo", "faltantes", "datos"], ["ngbNav", "", 1, "nav", "nav-tabs", "cuponera-pestanas", 3, "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "cuponera-contenido", 3, "ngbNavOutlet"], [1, "cuponera-vacio"], ["aria-hidden", "true"], [1, "cuponera-vacio__titulo"], [1, "cuponera-vacio__texto"], [1, "cuponera-barra"], [1, "cuponera-barra__texto"], [1, "hig-campo__ayuda"], [1, "cuponera-barra__acciones"], ["type", "button", 1, "hoja-boton", "hoja-boton--secundario", 3, "click", "disabled"], ["type", "button", 1, "hoja-boton", "hoja-boton--secundario", 3, "click"], ["class", "cuponera-vacio", 4, "ngIf"], [1, "cuponera-tabla", 3, "hidden"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "codISIN"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "numeroCuota"], ["matColumnDef", "fechaPago"], ["matColumnDef", "diasPeriodo"], ["matColumnDef", "interesCalculado"], ["matColumnDef", "amortizacionCapital"], ["matColumnDef", "saldoCapital"], ["matColumnDef", "interesesMoratorios"], ["matColumnDef", "estadoPago"], ["matColumnDef", "fechaPagoReal"], ["matColumnDef", "observaciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Seleccione la p\xE1gina", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["type", "text", "aria-label", "ISIN", 1, "form-control", 2, "min-width", "130px", 3, "ngModelChange", "ngModel"], ["aria-hidden", "true", 1, "hig-requerido"], ["type", "number", "step", "1", "min", "1", "aria-label", "Cuota", 1, "form-control", "cuponera-num", 2, "min-width", "80px", 3, "ngModelChange", "ngModel"], ["type", "date", "aria-label", "Fecha de pago", 1, "form-control", 2, "min-width", "150px", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "1", "aria-label", "D\xEDas del per\xEDodo", 1, "form-control", "cuponera-num", 2, "min-width", "80px", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "any", "aria-label", "Inter\xE9s calculado", 1, "form-control", "cuponera-num", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "any", "aria-label", "Amortizaci\xF3n de capital", 1, "form-control", "cuponera-num", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "any", "aria-label", "Saldo de capital", 1, "form-control", "cuponera-num", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "any", "aria-label", "Inter\xE9s moratorio", 1, "form-control", "cuponera-num", 2, "min-width", "100px", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "20", "aria-label", "Estado de pago", 1, "form-control", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], ["type", "date", "aria-label", "Fecha de pago real", 1, "form-control", 2, "min-width", "150px", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "255", "aria-label", "Observaciones", 1, "form-control", 2, "min-width", "180px", 3, "ngModelChange", "ngModel"], ["mat-header-row", ""], ["mat-row", ""]], template: function CargaBonoCuponComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 3);
        \u0275\u0275listener("cerrar", function CargaBonoCuponComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaBonoCuponComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
        });
        \u0275\u0275elementStart(1, "ul", 4, 0)(3, "li", 5)(4, "a", 6);
        \u0275\u0275text(5, "Desde archivo");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, CargaBonoCuponComponent_ng_template_6_Template, 7, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Manual");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, CargaBonoCuponComponent_ng_template_10_Template, 55, 11, "ng-template", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const nav_r26 = \u0275\u0275reference(2);
        \u0275\u0275propertyInterpolate2("subtitulo", "Bono ", ctx.data.ticker, " \xB7 ", ctx.data.codISIN, "");
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance();
        \u0275\u0275property("activeId", 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbNavItem", 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavOutlet", nav_r26);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, FilePondModule, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, CommonModule, NgIf, ModalFormularioComponent], styles: ["\n\n.cuponera-pestanas[_ngcontent-%COMP%] {\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.18);\n}\n.cuponera-pestanas[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  min-height: 38px;\n  padding: 8px 16px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  border: 0;\n  border-bottom: 2px solid transparent;\n  border-radius: 0;\n}\n.cuponera-pestanas[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.06);\n}\n.cuponera-pestanas[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(var(--primary-rgb));\n  background: transparent;\n  border-bottom-color: rgb(var(--primary-rgb));\n}\n.cuponera-pestanas[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: -2px;\n}\n[data-theme-mode=dark][_nghost-%COMP%]   .cuponera-pestanas[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], [data-theme-mode=dark]   [_nghost-%COMP%]   .cuponera-pestanas[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--default-text-color);\n}\n.cuponera-barra[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cuponera-barra__texto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n}\n.cuponera-barra__texto[_ngcontent-%COMP%]   .hig-campo__ayuda[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.cuponera-barra__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cuponera-barra__acciones[_ngcontent-%COMP%]   .hoja-boton[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 36px;\n  padding: 0 14px 0 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid rgba(var(--dark-rgb), 0.3);\n  border-radius: 8px;\n}\n.cuponera-barra__acciones[_ngcontent-%COMP%]   .hoja-boton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(var(--dark-rgb), 0.08);\n}\n.cuponera-barra__acciones[_ngcontent-%COMP%]   .hoja-boton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.cuponera-barra__acciones[_ngcontent-%COMP%]   .hoja-boton[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: 2px;\n}\n.cuponera-barra__acciones[_ngcontent-%COMP%]   .hoja-boton[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.cuponera-tabla[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid rgba(var(--dark-rgb), 0.18);\n  border-radius: 10px;\n}\n.cuponera-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n}\n.cuponera-tabla[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  white-space: nowrap;\n  color: rgba(var(--dark-rgb), 0.85);\n  background: rgba(var(--dark-rgb), 0.05);\n}\n.cuponera-tabla[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom-color: rgba(var(--dark-rgb), 0.1);\n}\n.cuponera-tabla[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:last-child   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.cuponera-tabla[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 4px 8px;\n  font-size: 0.875rem;\n}\n.cuponera-tabla[_ngcontent-%COMP%]   .cuponera-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.cuponera-tabla[_ngcontent-%COMP%]   .form-control.campo-vacio[_ngcontent-%COMP%] {\n  border-color: rgb(var(--danger-rgb));\n}\n.cuponera-vacio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 36px 16px;\n  text-align: center;\n  border: 1px dashed rgba(var(--dark-rgb), 0.3);\n  border-radius: 10px;\n}\n.cuponera-vacio[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  margin-bottom: 8px;\n  font-size: 36px;\n  color: rgba(var(--dark-rgb), 0.55);\n}\n.cuponera-vacio__titulo[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.cuponera-vacio__texto[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0;\n  font-size: 0.875rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n/*# sourceMappingURL=carga-bono-cupon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaBonoCuponComponent, { className: "CargaBonoCuponComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\carga-bono-cupon\\carga-bono-cupon.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/productos/carga-bono/carga-bono.component.ts
function CargaBonoComponent_ng_template_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_158_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_160_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-bono-sbs", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_162_Template_app_carga_tipo_bono_sbs_close_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-curva-referencia", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_164_Template_app_carga_curva_referencia_close_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-metodo-amortizacion", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_166_Template_app_carga_metodo_amortizacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-calculo-base-interes", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_168_Template_app_carga_calculo_base_interes_close_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-frecuencia-pago", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_170_Template_app_carga_frecuencia_pago_close_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-tasa", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_172_Template_app_carga_tipo_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-formula-tasa", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_174_Template_app_carga_formula_tasa_close_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-instrumento", 68);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_176_Template_app_carga_tipo_instrumento_close_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaBonoComponent_ng_template_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-bono-cupon", 69);
    \u0275\u0275listener("close", function CargaBonoComponent_ng_template_178_Template_app_carga_bono_cupon_close_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r12.nuevoRegistro);
  }
}
var CargaBonoComponent = class _CargaBonoComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
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
    if (this.flgAutomatico) {
      if (vacio(r.fechaEmision))
        f.push("Fecha Emisi\xF3n");
      if (vacio(r.fechaPrimerCupon))
        f.push("Fecha Primer Cup\xF3n");
      if (vacio(r.fechaVencimiento))
        f.push("Fecha Vencimiento");
    }
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
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
    this.nuevoRegistro = new Bono();
    this.flgAutomatico = false;
  }
  ngOnInit() {
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBono();
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
  obtenerListTipoBono() {
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
  registrar(modal) {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarBono(this.nuevoRegistro, this.flgAutomatico).subscribe((response) => {
      import_sweetalert23.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El bono ha sido registrado correctamente. Ahora debe proceder a registrar la cuponera.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
      if (!this.flgAutomatico) {
        this.nuevoRegistro = response;
        this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
      }
    }, (error) => {
      import_sweetalert23.default.fire({
        icon: "error",
        title: "Error",
        text: error.error?.message ?? error.message,
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
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoBono();
    this.obtenerListCurvaReferencia();
    this.obtenerListMetodoAmortizacion();
    this.obtenerListCalculoBaseInteres();
    this.obtenerListFrecuenciaPago();
    this.obtenerListTipoTasa();
    this.obtenerListFormulaTasa();
    this.obtenerListTipoInstrumento();
  }
  static {
    this.\u0275fac = function CargaBonoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaBonoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaBonoComponent, selectors: [["app-carga-bono"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 180, vars: 29, consts: [["cargaModalEmisor", ""], ["cargaModalMoneda", ""], ["cargaModalTipoBono", ""], ["cargaModalCurvaReferencia", ""], ["cargaModalMetodoAmortizacion", ""], ["cargaModalCalculoBase", ""], ["cargaModalFrecuenciaPago", ""], ["cargaModalTipoTasaInteres", ""], ["cargaModalFormulaTasa", ""], ["cargaModalTipoInstrumento", ""], ["cargaBonoCupon", ""], ["titulo", "Cargar Bono", "subtitulo", "Registre un bono con sus condiciones financieras. La cuponera puede generarse autom\xE1ticamente o ingresarse despu\xE9s.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "bo-c-codISIN", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "bo-c-codISIN", "type", "text", "autocomplete", "off", "placeholder", "Ej. PEP01000C5D1", "maxlength", "12", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-ticker", 1, "form-label"], ["id", "bo-c-ticker", "type", "text", "autocomplete", "off", "placeholder", "Ej. SB12AGO28", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-idTipoBono", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "bo-c-idTipoBono", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTipoBono", "bindValue", "idTipoBono", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo bono", "aria-label", "Agregar tipo bono", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "bo-c-montoNominal", 1, "form-label"], ["id", "bo-c-montoNominal", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-tasaCupon", 1, "form-label"], ["id", "bo-c-tasaCupon", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-campo__ayuda"], ["for", "bo-c-spread", 1, "form-label"], ["id", "bo-c-spread", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-idTipoTasaInteres", 1, "form-label"], ["labelForId", "bo-c-idTipoTasaInteres", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTipoTasa", "bindValue", "idTipoTasaInteres", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo tasa inter\xE9s", "aria-label", "Agregar tipo tasa inter\xE9s", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-c-idFormulaTasa", 1, "form-label"], ["labelForId", "bo-c-idFormulaTasa", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionFormula", "bindValue", "idFormulaTasa", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar f\xF3rmula tasa", "aria-label", "Agregar f\xF3rmula tasa", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-c-idCurvaReferencia", 1, "form-label"], ["labelForId", "bo-c-idCurvaReferencia", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionCurva", "bindValue", "idCurvaReferencia", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar curva referencia", "aria-label", "Agregar curva referencia", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-seccion__ayuda"], ["for", "bo-c-fechaEmision", 1, "form-label"], ["id", "bo-c-fechaEmision", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-fechaPrimerCupon", 1, "form-label"], ["id", "bo-c-fechaPrimerCupon", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-fechaVencimiento", 1, "form-label"], ["id", "bo-c-fechaVencimiento", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bo-c-idEmisor", 1, "form-label"], ["labelForId", "bo-c-idEmisor", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "nomEmisor", "bindValue", "idEmisor", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar emisor", "aria-label", "Agregar emisor", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-c-idMoneda", 1, "form-label"], ["labelForId", "bo-c-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-c-idMetodoAmortizacion", 1, "form-label"], ["labelForId", "bo-c-idMetodoAmortizacion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionMetodo", "bindValue", "idMetodoAmortizacion", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar m\xE9todo amortizaci\xF3n", "aria-label", "Agregar m\xE9todo amortizaci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-c-idCalculobase", 1, "form-label"], ["labelForId", "bo-c-idCalculobase", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionCalculoBase", "bindValue", "idCalculobase", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar c\xE1lculo base", "aria-label", "Agregar c\xE1lculo base", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "bo-c-idFrecuenciaPago", 1, "form-label"], ["labelForId", "bo-c-idFrecuenciaPago", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionFrecuencia", "bindValue", "idFrecuenciaPago", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar frecuencia pago", "aria-label", "Agregar frecuencia pago", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "bo-c-flgAutomatico", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "bo-c-flgAutomatico", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], [3, "close"], [3, "close", "data"]], template: function CargaBonoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 11);
        \u0275\u0275listener("cerrar", function CargaBonoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaBonoComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaBonoCupon_r2 = \u0275\u0275reference(179);
          return \u0275\u0275resetView(ctx.registrar(cargaBonoCupon_r2));
        });
        \u0275\u0275elementStart(1, "fieldset", 12)(2, "legend");
        \u0275\u0275text(3, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "label", 15);
        \u0275\u0275text(7, "C\xF3digo ISIN");
        \u0275\u0275elementStart(8, "span", 16);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codISIN, $event) || (ctx.nuevoRegistro.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 14)(12, "label", 18);
        \u0275\u0275text(13, "Ticker");
        \u0275\u0275elementStart(14, "span", 16);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.ticker, $event) || (ctx.nuevoRegistro.ticker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 14)(18, "label", 20);
        \u0275\u0275text(19, "Tipo Bono");
        \u0275\u0275elementStart(20, "span", 16);
        \u0275\u0275text(21, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 21)(23, "ng-select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTipoBono, $event) || (ctx.nuevoRegistro.idTipoBono = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 23);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoBono_r3 = \u0275\u0275reference(163);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoBono_r3));
        });
        \u0275\u0275elementStart(25, "span", 24);
        \u0275\u0275text(26, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(27, "fieldset", 12)(28, "legend");
        \u0275\u0275text(29, "Condiciones financieras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "label", 25);
        \u0275\u0275text(33, "Nominal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.montoNominal, $event) || (ctx.nuevoRegistro.montoNominal = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 14)(36, "label", 27);
        \u0275\u0275text(37, "Tasa Cup\xF3n (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.tasaCupon, $event) || (ctx.nuevoRegistro.tasaCupon = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p", 29);
        \u0275\u0275text(40, "Expresada en porcentaje, por ejemplo 6.35.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 14)(42, "label", 30);
        \u0275\u0275text(43, "Spread");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.spread, $event) || (ctx.nuevoRegistro.spread = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 14)(46, "label", 32);
        \u0275\u0275text(47, "Tipo Tasa Inter\xE9s");
        \u0275\u0275elementStart(48, "span", 16);
        \u0275\u0275text(49, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 21)(51, "ng-select", 33);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTipoTasaInteres, $event) || (ctx.nuevoRegistro.idTipoTasaInteres = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 34);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoTasaInteres_r4 = \u0275\u0275reference(173);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoTasaInteres_r4));
        });
        \u0275\u0275elementStart(53, "span", 24);
        \u0275\u0275text(54, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 14)(56, "label", 35);
        \u0275\u0275text(57, "F\xF3rmula Tasa");
        \u0275\u0275elementStart(58, "span", 16);
        \u0275\u0275text(59, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 21)(61, "ng-select", 36);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idFormulaTasa, $event) || (ctx.nuevoRegistro.idFormulaTasa = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "button", 37);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalFormulaTasa_r5 = \u0275\u0275reference(175);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalFormulaTasa_r5));
        });
        \u0275\u0275elementStart(63, "span", 24);
        \u0275\u0275text(64, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(65, "div", 14)(66, "label", 38);
        \u0275\u0275text(67, "Curva Referencia");
        \u0275\u0275elementStart(68, "span", 16);
        \u0275\u0275text(69, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 21)(71, "ng-select", 39);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_71_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idCurvaReferencia, $event) || (ctx.nuevoRegistro.idCurvaReferencia = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 40);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalCurvaReferencia_r6 = \u0275\u0275reference(165);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalCurvaReferencia_r6));
        });
        \u0275\u0275elementStart(73, "span", 24);
        \u0275\u0275text(74, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(75, "fieldset", 12)(76, "legend");
        \u0275\u0275text(77, "Fechas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p", 41);
        \u0275\u0275text(79, "Son obligatorias si activa la generaci\xF3n autom\xE1tica de la cuponera.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 13)(81, "div", 14)(82, "label", 42);
        \u0275\u0275text(83, "Fecha Emisi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "input", 43);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.fechaEmision, $event) || (ctx.nuevoRegistro.fechaEmision = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 14)(86, "label", 44);
        \u0275\u0275text(87, "Fecha Primer Cup\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_88_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.fechaPrimerCupon, $event) || (ctx.nuevoRegistro.fechaPrimerCupon = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 14)(90, "label", 46);
        \u0275\u0275text(91, "Fecha Vencimiento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "input", 47);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_92_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.fechaVencimiento, $event) || (ctx.nuevoRegistro.fechaVencimiento = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "fieldset", 12)(94, "legend");
        \u0275\u0275text(95, "Emisor y c\xE1lculo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 13)(97, "div", 14)(98, "label", 48);
        \u0275\u0275text(99, "Emisor");
        \u0275\u0275elementStart(100, "span", 16);
        \u0275\u0275text(101, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 21)(103, "ng-select", 49);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_103_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idEmisor, $event) || (ctx.nuevoRegistro.idEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "button", 50);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_104_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalEmisor_r7 = \u0275\u0275reference(159);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalEmisor_r7));
        });
        \u0275\u0275elementStart(105, "span", 24);
        \u0275\u0275text(106, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(107, "div", 14)(108, "label", 51);
        \u0275\u0275text(109, "Moneda");
        \u0275\u0275elementStart(110, "span", 16);
        \u0275\u0275text(111, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 21)(113, "ng-select", 52);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_113_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idMoneda, $event) || (ctx.nuevoRegistro.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "button", 53);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_114_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r8 = \u0275\u0275reference(161);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r8));
        });
        \u0275\u0275elementStart(115, "span", 24);
        \u0275\u0275text(116, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(117, "div", 14)(118, "label", 54);
        \u0275\u0275text(119, "M\xE9todo Amortizaci\xF3n");
        \u0275\u0275elementStart(120, "span", 16);
        \u0275\u0275text(121, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 21)(123, "ng-select", 55);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_123_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idMetodoAmortizacion, $event) || (ctx.nuevoRegistro.idMetodoAmortizacion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "button", 56);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_124_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMetodoAmortizacion_r9 = \u0275\u0275reference(167);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMetodoAmortizacion_r9));
        });
        \u0275\u0275elementStart(125, "span", 24);
        \u0275\u0275text(126, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(127, "div", 14)(128, "label", 57);
        \u0275\u0275text(129, "C\xE1lculo Base");
        \u0275\u0275elementStart(130, "span", 16);
        \u0275\u0275text(131, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 21)(133, "ng-select", 58);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_133_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idCalculobase, $event) || (ctx.nuevoRegistro.idCalculobase = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "button", 59);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_134_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalCalculoBase_r10 = \u0275\u0275reference(169);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalCalculoBase_r10));
        });
        \u0275\u0275elementStart(135, "span", 24);
        \u0275\u0275text(136, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(137, "div", 14)(138, "label", 60);
        \u0275\u0275text(139, "Frecuencia Pago");
        \u0275\u0275elementStart(140, "span", 16);
        \u0275\u0275text(141, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 21)(143, "ng-select", 61);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_ng_select_ngModelChange_143_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idFrecuenciaPago, $event) || (ctx.nuevoRegistro.idFrecuenciaPago = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "button", 62);
        \u0275\u0275listener("click", function CargaBonoComponent_Template_button_click_144_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalFrecuenciaPago_r11 = \u0275\u0275reference(171);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalFrecuenciaPago_r11));
        });
        \u0275\u0275elementStart(145, "span", 24);
        \u0275\u0275text(146, "+");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(147, "fieldset", 12)(148, "legend");
        \u0275\u0275text(149, "Cuponera");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 63)(151, "div", 64)(152, "input", 65);
        \u0275\u0275twoWayListener("ngModelChange", function CargaBonoComponent_Template_input_ngModelChange_152_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.flgAutomatico, $event) || (ctx.flgAutomatico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div")(154, "label", 66);
        \u0275\u0275text(155, "Generar la cuponera autom\xE1ticamente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "span", 67);
        \u0275\u0275text(157, "Calcula los cupones al registrar el bono. Disponible para bonos bullet, de tasa fija y base 30/360; en otros casos ingr\xE9sela manualmente.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(158, CargaBonoComponent_ng_template_158_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(160, CargaBonoComponent_ng_template_160_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(162, CargaBonoComponent_ng_template_162_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(164, CargaBonoComponent_ng_template_164_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(166, CargaBonoComponent_ng_template_166_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(168, CargaBonoComponent_ng_template_168_Template, 1, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(170, CargaBonoComponent_ng_template_170_Template, 1, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(172, CargaBonoComponent_ng_template_172_Template, 1, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(174, CargaBonoComponent_ng_template_174_Template, 1, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(176, CargaBonoComponent_ng_template_176_Template, 1, 0, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(178, CargaBonoComponent_ng_template_178_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codISIN);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.ticker);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listTipoBonoSBS);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTipoBono);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.montoNominal);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.tasaCupon);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.spread);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listTipoTasaInt);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTipoTasaInteres);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listFormulaTasa);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idFormulaTasa);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listCurvaReferencia);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idCurvaReferencia);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.fechaEmision);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.fechaPrimerCupon);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.fechaVencimiento);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listEmisor);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idEmisor);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idMoneda);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMetodoAmotizacion);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idMetodoAmortizacion);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listCalculoBase);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idCalculobase);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listFrecPago);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idFrecuenciaPago);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.flgAutomatico);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CargaEmisorComponent, CargaMonedaComponent, CargaTipoBonoSbsComponent, CargaCurvaReferenciaComponent, CargaMetodoAmortizacionComponent, CargaCalculoBaseInteresComponent, CargaFrecuenciaPagoComponent, CargaTipoTasaComponent, CargaFormulaTasaComponent, CargaBonoCuponComponent, CargaTipoInstrumentoComponent, CommonModule, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-bono.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaBonoComponent, { className: "CargaBonoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\carga-bono\\carga-bono.component.ts", lineNumber: 42 });
})();

// src/app/shared/models/producto/fondo-inversion.ts
var FondoInversion = class {
};

// src/app/components/registro/mantenedor/productos/carga-fondo-inversion/carga-fondo-inversion.component.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());
function CargaFondoInversionComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-plaza", 43);
    \u0275\u0275listener("close", function CargaFondoInversionComponent_ng_template_93_Template_app_carga_plaza_close_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaFondoInversionComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-emisor", 43);
    \u0275\u0275listener("close", function CargaFondoInversionComponent_ng_template_95_Template_app_carga_emisor_close_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaFondoInversionComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 43);
    \u0275\u0275listener("close", function CargaFondoInversionComponent_ng_template_97_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaFondoInversionComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-fondo", 43);
    \u0275\u0275listener("close", function CargaFondoInversionComponent_ng_template_99_Template_app_carga_tipo_fondo_close_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaFondoInversionComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fuente-informacion", 43);
    \u0275\u0275listener("close", function CargaFondoInversionComponent_ng_template_101_Template_app_carga_fuente_informacion_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaFondoInversionComponent = class _CargaFondoInversionComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
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
    this.listPlaza = [];
    this.listTipoFondo = [];
    this.listFuenteInformacion = [];
    this.listEmisor = [];
    this.listMoneda = [];
    this.listTipoInstrumento = [];
    this.nuevoRegistro = new FondoInversion();
  }
  ngOnInit() {
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
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarFondoInversion(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert24.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El fondo de inversi\xF3n ha sido registrado correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      import_sweetalert24.default.fire({
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
    this.obtenerListPlaza();
    this.obtenerListTipoFondo();
    this.obtenerListFuenteInformacion();
    this.obtenerListEmisor();
    this.obtenerListMoneda();
    this.obtenerListTipoInstrumento();
  }
  static {
    this.\u0275fac = function CargaFondoInversionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaFondoInversionComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaFondoInversionComponent, selectors: [["app-carga-fondo-inversion"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 103, vars: 18, consts: [["cargaModalPlaza", ""], ["cargaModalEmisor", ""], ["cargaModalMoneda", ""], ["cargaModalTipoFondo", ""], ["cargaModalFuenteInformacion", ""], ["titulo", "Cargar Fondo de Inversi\xF3n", "subtitulo", "Registre un fondo para incluirlo en portafolios y en el c\xE1lculo de VaR.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "fo-c-codTicker", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "fo-c-codTicker", "type", "text", "autocomplete", "off", "placeholder", "Ej. CCRFS1", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fo-c-desNemonico", 1, "form-label"], ["id", "fo-c-desNemonico", "type", "text", "autocomplete", "off", "placeholder", "Ej. CC RENTA FIJA SOLES", "maxlength", "60", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fo-c-codISIN", 1, "form-label"], ["id", "fo-c-codISIN", "type", "text", "autocomplete", "off", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fo-c-montoTotal", 1, "form-label"], ["id", "fo-c-montoTotal", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "fo-c-idPlaza", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "fo-c-idPlaza", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desPlaza", "bindValue", "idPlaza", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar plaza", "aria-label", "Agregar plaza", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "fo-c-idEmisor", 1, "form-label"], ["labelForId", "fo-c-idEmisor", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "nomEmisor", "bindValue", "idEmisor", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar emisor", "aria-label", "Agregar emisor", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "fo-c-idMoneda", 1, "form-label"], ["labelForId", "fo-c-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "fo-c-idTipoFondo", 1, "form-label"], ["labelForId", "fo-c-idTipoFondo", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desTipoFondo", "bindValue", "idTipoFondo", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo fondo", "aria-label", "Agregar tipo fondo", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "fo-c-idFuenteInformacion", 1, "form-label"], ["labelForId", "fo-c-idFuenteInformacion", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desFuenteInformacion", "bindValue", "idFuenteInformacion", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar fuente informaci\xF3n", "aria-label", "Agregar fuente informaci\xF3n", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "fo-c-flgCargaAutom", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "fo-c-flgCargaAutom", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], ["type", "checkbox", "id", "fo-c-flgVar", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "fo-c-flgVar", 1, "hig-opcion__titulo"], [3, "close"]], template: function CargaFondoInversionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 5);
        \u0275\u0275listener("cerrar", function CargaFondoInversionComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaFondoInversionComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codTicker, $event) || (ctx.nuevoRegistro.codTicker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "label", 12);
        \u0275\u0275text(13, "Nem\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.desNemonico, $event) || (ctx.nuevoRegistro.desNemonico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 14);
        \u0275\u0275text(17, "C\xF3digo ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codISIN, $event) || (ctx.nuevoRegistro.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label", 16);
        \u0275\u0275text(21, "Monto Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.montoTotal, $event) || (ctx.nuevoRegistro.montoTotal = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idPlaza, $event) || (ctx.nuevoRegistro.idPlaza = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 22);
        \u0275\u0275listener("click", function CargaFondoInversionComponent_Template_button_click_34_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_ng_select_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idEmisor, $event) || (ctx.nuevoRegistro.idEmisor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 26);
        \u0275\u0275listener("click", function CargaFondoInversionComponent_Template_button_click_44_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_ng_select_ngModelChange_53_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idMoneda, $event) || (ctx.nuevoRegistro.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 29);
        \u0275\u0275listener("click", function CargaFondoInversionComponent_Template_button_click_54_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_ng_select_ngModelChange_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTipoFondo, $event) || (ctx.nuevoRegistro.idTipoFondo = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 32);
        \u0275\u0275listener("click", function CargaFondoInversionComponent_Template_button_click_64_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_ng_select_ngModelChange_71_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idFuenteInformacion, $event) || (ctx.nuevoRegistro.idFuenteInformacion = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 35);
        \u0275\u0275listener("click", function CargaFondoInversionComponent_Template_button_click_72_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_input_ngModelChange_80_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.flgCargaAutom, $event) || (ctx.nuevoRegistro.flgCargaAutom = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaFondoInversionComponent_Template_input_ngModelChange_87_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.flgVar, $event) || (ctx.nuevoRegistro.flgVar = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div")(89, "label", 42);
        \u0275\u0275text(90, "C\xE1lculo de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "span", 40);
        \u0275\u0275text(92, "Incluye este instrumento en el c\xE1lculo de Valor en Riesgo.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(93, CargaFondoInversionComponent_ng_template_93_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(95, CargaFondoInversionComponent_ng_template_95_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(97, CargaFondoInversionComponent_ng_template_97_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(99, CargaFondoInversionComponent_ng_template_99_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(101, CargaFondoInversionComponent_ng_template_101_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codTicker);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.desNemonico);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codISIN);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.montoTotal);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listPlaza);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idPlaza);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listEmisor);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idEmisor);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idMoneda);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoFondo);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTipoFondo);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.listFuenteInformacion);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idFuenteInformacion);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.flgCargaAutom);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.flgVar);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CommonModule, CargaMonedaComponent, CargaPlazaComponent, CargaEmisorComponent, CargaTipoFondoComponent, CargaFuenteInformacionComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-fondo-inversion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaFondoInversionComponent, { className: "CargaFondoInversionComponent", filePath: "src\\app\\components\\registro\\mantenedor\\productos\\carga-fondo-inversion\\carga-fondo-inversion.component.ts", lineNumber: 34 });
})();

export {
  Accion,
  CargaAccionComponent,
  Bono,
  CargaBonoComponent,
  FondoInversion,
  CargaFondoInversionComponent
};
//# sourceMappingURL=chunk-YV4HKCPW.js.map
