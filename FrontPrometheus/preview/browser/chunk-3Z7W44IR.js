import {
  LoaderComponent,
  RegistroService
} from "./chunk-FSM2IJQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  require_sweetalert2_all
} from "./chunk-XNBVOFQ5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-BKD3PXJL.js";
import {
  CommonModule,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/registro/mantenedor/atributo-financiero/carga-moneda/carga-moneda.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());

// src/app/shared/models/atributo-financiero/moneda.ts
var Moneda = class {
};

// src/app/shared/components/modal-formulario/modal-formulario.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["cuerpo"];
var _c1 = ["*"];
function ModalFormularioComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.subtitulo);
  }
}
function ModalFormularioComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "mat-icon", 6);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Faltan campos obligatorios: ", ctx_r1.faltantes.join(", "), "");
  }
}
function ModalFormularioComponent_app_loader_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 15);
  }
}
var contador = 0;
var ModalFormularioComponent = class _ModalFormularioComponent {
  constructor() {
    this.titulo = "";
    this.subtitulo = "";
    this.accion = "Registrar";
    this.faltantes = [];
    this.datos = null;
    this.guardando = false;
    this.cerrar = new EventEmitter();
    this.guardar = new EventEmitter();
    this.idTitulo = `modal-formulario-titulo-${++contador}`;
    this.estadoInicial = "";
  }
  ngOnInit() {
    this.estadoInicial = this.serializar();
  }
  ngAfterViewInit() {
    setTimeout(() => this.cuerpo.nativeElement.querySelector('input:not([type="hidden"]):not([disabled]), textarea:not([disabled])')?.focus(), 60);
  }
  get puedeGuardar() {
    return !this.guardando && this.faltantes.length === 0;
  }
  serializar() {
    try {
      return JSON.stringify(this.datos ?? null);
    } catch {
      return "";
    }
  }
  get hayCambios() {
    return this.serializar() !== this.estadoInicial;
  }
  intentarCerrar() {
    if (!this.hayCambios) {
      this.cerrar.emit();
      return;
    }
    import_sweetalert2.default.fire({
      icon: "warning",
      title: "\xBFDescartar los cambios?",
      text: "Los datos ingresados no se guardar\xE1n.",
      showCancelButton: true,
      confirmButtonText: "Descartar",
      cancelButtonText: "Seguir editando",
      reverseButtons: true,
      focusCancel: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.cerrar.emit();
      }
    });
  }
  // Enter confirma, salvo en listas desplegables (donde selecciona una opción)
  alPresionarEnter(evento) {
    const destino = evento.target;
    if (destino.tagName !== "INPUT" || destino.closest("ng-select") || !this.puedeGuardar) {
      return;
    }
    evento.preventDefault();
    this.guardar.emit();
  }
  static {
    this.\u0275fac = function ModalFormularioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalFormularioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalFormularioComponent, selectors: [["app-modal-formulario"]], viewQuery: function ModalFormularioComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cuerpo = _t.first);
      }
    }, inputs: { titulo: "titulo", subtitulo: "subtitulo", accion: "accion", faltantes: "faltantes", datos: "datos", guardando: "guardando" }, outputs: { cerrar: "cerrar", guardar: "guardar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 18, vars: 8, consts: [["cuerpo", ""], [1, "hoja-cabecera"], [1, "hoja-cabecera__texto"], [1, "hoja-titulo", 3, "id"], ["class", "hoja-subtitulo", 4, "ngIf"], ["type", "button", "aria-label", "Cerrar", 1, "hoja-cerrar", 3, "click"], ["aria-hidden", "true"], [1, "hoja-cuerpo", 3, "keydown.enter"], [1, "hoja-pie"], ["class", "hoja-aviso", "role", "status", "aria-live", "polite", 4, "ngIf"], ["type", "button", 1, "hoja-boton", "hoja-boton--secundario", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "hoja-boton", 3, "click", "disabled"], ["tamano", "inline", "class", "me-1", 4, "ngIf"], [1, "hoja-subtitulo"], ["role", "status", "aria-live", "polite", 1, "hoja-aviso"], ["tamano", "inline", 1, "me-1"]], template: function ModalFormularioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, ModalFormularioComponent_p_4_Template, 2, 1, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function ModalFormularioComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.intentarCerrar());
        });
        \u0275\u0275elementStart(6, "mat-icon", 6);
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7, 0);
        \u0275\u0275listener("keydown.enter", function ModalFormularioComponent_Template_div_keydown_enter_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alPresionarEnter($event));
        });
        \u0275\u0275projection(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "footer", 8);
        \u0275\u0275template(12, ModalFormularioComponent_p_12_Template, 5, 1, "p", 9);
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function ModalFormularioComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.intentarCerrar());
        });
        \u0275\u0275text(14, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 11);
        \u0275\u0275listener("click", function ModalFormularioComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardar.emit());
        });
        \u0275\u0275template(16, ModalFormularioComponent_app_loader_16_Template, 1, 0, "app-loader", 12);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.idTitulo);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.titulo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subtitulo);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-labelledby", ctx.idTitulo);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.faltantes.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.puedeGuardar);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.guardando);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.accion, " ");
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon, LoaderComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: hidden;\n}\n.hoja-cabecera[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 22px 24px 16px;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.14);\n}\n.hoja-titulo[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.3;\n  color: var(--default-text-color);\n}\n.hoja-subtitulo[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.875rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.hoja-cerrar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  margin: -4px -8px 0 0;\n  padding: 0;\n  color: rgba(var(--dark-rgb), 0.78);\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  border-radius: 50%;\n}\n.hoja-cerrar[_ngcontent-%COMP%]:hover {\n  color: var(--default-text-color);\n  background: rgba(var(--dark-rgb), 0.1);\n}\n.hoja-cerrar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: 1px;\n}\n.hoja-cuerpo[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 20px 24px 8px;\n  overflow-y: auto;\n}\n.hoja-pie[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px 12px;\n  padding: 14px 24px;\n  background: var(--custom-white);\n  border-top: 1px solid rgba(var(--dark-rgb), 0.14);\n}\n.hoja-aviso[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 auto 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.hoja-aviso[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(var(--warning-rgb));\n}\n.hoja-boton[_ngcontent-%COMP%] {\n  min-width: 96px;\n  min-height: 38px;\n  padding: 0 18px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.hoja-boton--secundario[_ngcontent-%COMP%] {\n  color: var(--default-text-color);\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid rgba(var(--dark-rgb), 0.3);\n}\n.hoja-boton--secundario[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.08);\n}\n.hoja-boton--secundario[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=modal-formulario.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalFormularioComponent, { className: "ModalFormularioComponent", filePath: "src\\app\\shared\\components\\modal-formulario\\modal-formulario.component.ts", lineNumber: 21 });
})();

// src/app/components/registro/mantenedor/atributo-financiero/carga-moneda/carga-moneda.component.ts
var CargaMonedaComponent = class _CargaMonedaComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
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
    this.nuevoRegistro = new Moneda();
    this.guardando = false;
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarMoneda(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert22.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La moneda ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      this.guardando = false;
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
  permitirSoloDoI(event) {
    const tecla = event.key.toUpperCase();
    if (tecla !== "D" && tecla !== "I" && tecla.length === 1) {
      event.preventDefault();
    }
  }
  static {
    this.\u0275fac = function CargaMonedaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaMonedaComponent)(\u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaMonedaComponent, selectors: [["app-carga-moneda"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 12, consts: [["titulo", "Cargar Moneda", "subtitulo", "Registre una moneda para usarla en instrumentos y reportes.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "mo-c-codMoneda", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "mo-c-codMoneda", "type", "text", "autocomplete", "off", "placeholder", "Ej. PEN", "minlength", "3", "maxlength", "3", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-c-desMoneda", 1, "form-label"], ["id", "mo-c-desMoneda", "type", "text", "autocomplete", "off", "placeholder", "Ej. Sol Peruano", "minlength", "2", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-c-desCorto", 1, "form-label"], ["id", "mo-c-desCorto", "type", "text", "autocomplete", "off", "placeholder", "Ej. Sol", "minlength", "3", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-c-codSucave", 1, "form-label"], ["id", "mo-c-codSucave", "type", "text", "autocomplete", "off", "placeholder", "Ej. 0001", "minlength", "4", "maxlength", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-c-codTipoRelacionUSD", 1, "form-label"], ["data-bs-toggle", "tooltip", "data-bs-html", "true", "data-bs-placement", "right", "title", "Ingrese la letra D (Directo) o I (Indirecto)", 1, "bi", "bi-info-circle-fill", "text-primary", "ms-2"], ["id", "mo-c-codTipoRelacionUSD", "type", "text", "autocomplete", "off", "placeholder", "D o I", "minlength", "1", "maxlength", "1", 1, "form-control", 3, "ngModelChange", "keydown", "ngModel"], ["for", "mo-c-codMonedaInt", 1, "form-label"], ["id", "mo-c-codMonedaInt", "type", "text", "autocomplete", "off", "placeholder", "Ej. USD", "minlength", "4", "maxlength", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mo-c-desTicker", 1, "form-label"], ["id", "mo-c-desTicker", "type", "text", "autocomplete", "off", "placeholder", "Ej. PEN Curncy", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-opcion"], ["type", "checkbox", "id", "mo-c-flgCargaAutom", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "mo-c-flgCargaAutom", 1, "hig-opcion__titulo"], [1, "hig-opcion__ayuda"], ["type", "checkbox", "id", "mo-c-flgVaR", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "mo-c-flgVaR", 1, "hig-opcion__titulo"]], template: function CargaMonedaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaMonedaComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaMonedaComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codMoneda, $event) || (ctx.nuevoRegistro.codMoneda = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.desMoneda, $event) || (ctx.nuevoRegistro.desMoneda = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 3)(18, "label", 9);
        \u0275\u0275text(19, "Descripci\xF3n Corta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.desCorto, $event) || (ctx.nuevoRegistro.desCorto = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 3)(22, "label", 11);
        \u0275\u0275text(23, "C\xF3d. Sucave");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codSucave, $event) || (ctx.nuevoRegistro.codSucave = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codTipoRelacionUSD, $event) || (ctx.nuevoRegistro.codTipoRelacionUSD = $event);
          return $event;
        });
        \u0275\u0275listener("keydown", function CargaMonedaComponent_Template_input_keydown_33_listener($event) {
          return ctx.permitirSoloDoI($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 3)(35, "label", 16);
        \u0275\u0275text(36, "C\xF3d. Moneda Int.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codMonedaInt, $event) || (ctx.nuevoRegistro.codMonedaInt = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 3)(39, "label", 18);
        \u0275\u0275text(40, "Ticker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.desTicker, $event) || (ctx.nuevoRegistro.desTicker = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "fieldset", 1)(43, "legend");
        \u0275\u0275text(44, "Opciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 20)(46, "div", 21)(47, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.flgCargaAutom, $event) || (ctx.nuevoRegistro.flgCargaAutom = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaMonedaComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.flgVaR, $event) || (ctx.nuevoRegistro.flgVaR = $event);
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
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codMoneda);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.desMoneda);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.desCorto);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codSucave);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codTipoRelacionUSD);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codMonedaInt);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.desTicker);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.flgCargaAutom);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.flgVaR);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-moneda.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaMonedaComponent, { className: "CargaMonedaComponent", filePath: "src\\app\\components\\registro\\mantenedor\\atributo-financiero\\carga-moneda\\carga-moneda.component.ts", lineNumber: 17 });
})();

export {
  ModalFormularioComponent,
  Moneda,
  CargaMonedaComponent
};
//# sourceMappingURL=chunk-3Z7W44IR.js.map
