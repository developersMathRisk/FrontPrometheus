import {
  CargaMonedaComponent,
  ModalFormularioComponent
} from "./chunk-3Z7W44IR.js";
import {
  RegistroService
} from "./chunk-FSM2IJQ7.js";
import {
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  require_sweetalert2_all
} from "./chunk-XNBVOFQ5.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  NgbModal
} from "./chunk-JG564GD5.js";
import {
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
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/shared/models/portafolio/portafolio.ts
var Portafolio = class {
};

// src/app/components/registro/mantenedor/portafolio/carga-portafolio/carga-portafolio.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function CargaPortafolioComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 24);
    \u0275\u0275listener("close", function CargaPortafolioComponent_ng_template_50_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaPortafolioComponent = class _CargaPortafolioComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.descripcionPortafolio))
      f.push("Descripci\xF3n");
    if (vacio(r.idMoneda))
      f.push("Moneda Gesti\xF3n");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.listMoneda = [];
    this.listBenchmark = [];
    this.nuevoRegistro = new Portafolio();
    this.guardando = false;
  }
  ngOnInit() {
    this.obtenerListMoneda();
    this.obtenerBenchmark();
  }
  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe((response) => {
      this.listMoneda = response;
    });
  }
  obtenerBenchmark() {
    this.registroService.getListaBenchmark().subscribe((response) => {
      this.listBenchmark = response;
    });
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.guardando = true;
    this.registroService.postRegistrarPortafolio(this.nuevoRegistro).subscribe((response) => {
      this.guardando = false;
      import_sweetalert2.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El portafolio ha sido registrado correctamente.",
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
  cerrar() {
    this.close.emit();
  }
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListMoneda();
  }
  static {
    this.\u0275fac = function CargaPortafolioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaPortafolioComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaPortafolioComponent, selectors: [["app-carga-portafolio"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 12, consts: [["cargaModalMoneda", ""], ["titulo", "Cargar Portafolio", "subtitulo", "Registre un portafolio para agrupar instrumentos y hacer seguimiento de su valorizaci\xF3n y riesgo.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "po-c-descripcionPortafolio", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "po-c-descripcionPortafolio", "type", "text", "autocomplete", "off", "placeholder", "Ej. Fondo Renta Variable Global", "minlength", "3", "maxlength", "255", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-c-tipoPortafolio", 1, "form-label"], ["id", "po-c-tipoPortafolio", "type", "text", "autocomplete", "off", "placeholder", "Ej. Renta Variable", "minlength", "3", "maxlength", "150", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-c-gestor", 1, "form-label"], ["id", "po-c-gestor", "type", "text", "autocomplete", "off", "placeholder", "Ej. Juan P\xE9rez", "minlength", "3", "maxlength", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-c-limite", 1, "form-label"], ["id", "po-c-limite", "type", "number", "autocomplete", "off", "placeholder", "Ej. 1000000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-c-idMoneda", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "po-c-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "po-c-idBenchmark", 1, "form-label"], ["labelForId", "po-c-idBenchmark", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionBenchmark", "bindValue", "idBenchmark", 3, "ngModelChange", "items", "ngModel"], [1, "hig-cuadricula", "hig-columnas-1"], ["for", "po-c-notas", 1, "form-label"], ["id", "po-c-notas", "rows", "4", "minlength", "3", "maxlength", "255", "placeholder", "Notas adicionales sobre el portafolio", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "close"]], template: function CargaPortafolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function CargaPortafolioComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaPortafolioComponent_Template_app_modal_formulario_guardar_0_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.descripcionPortafolio, $event) || (ctx.nuevoRegistro.descripcionPortafolio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "Tipo Portafolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.tipoPortafolio, $event) || (ctx.nuevoRegistro.tipoPortafolio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "label", 10);
        \u0275\u0275text(17, "Gestor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.gestor, $event) || (ctx.nuevoRegistro.gestor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "fieldset", 2)(20, "legend");
        \u0275\u0275text(21, "Gesti\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 3)(23, "div", 4)(24, "label", 12);
        \u0275\u0275text(25, "L\xEDmite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.limite, $event) || (ctx.nuevoRegistro.limite = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 4)(28, "label", 14);
        \u0275\u0275text(29, "Moneda Gesti\xF3n");
        \u0275\u0275elementStart(30, "span", 6);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 15)(33, "ng-select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idMoneda, $event) || (ctx.nuevoRegistro.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 17);
        \u0275\u0275listener("click", function CargaPortafolioComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r2 = \u0275\u0275reference(51);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r2));
        });
        \u0275\u0275elementStart(35, "span", 18);
        \u0275\u0275text(36, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 4)(38, "label", 19);
        \u0275\u0275text(39, "Benchmark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 15)(41, "ng-select", 20);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_ng_select_ngModelChange_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idBenchmark, $event) || (ctx.nuevoRegistro.idBenchmark = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(42, "fieldset", 2)(43, "legend");
        \u0275\u0275text(44, "Notas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 21)(46, "div", 4)(47, "label", 22);
        \u0275\u0275text(48, "Notas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "textarea", 23);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioComponent_Template_textarea_ngModelChange_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.notas, $event) || (ctx.nuevoRegistro.notas = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(50, CargaPortafolioComponent_ng_template_50_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.descripcionPortafolio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.tipoPortafolio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.gestor);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.limite);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idMoneda);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.listBenchmark);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idBenchmark);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.notas);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, CargaMonedaComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-portafolio.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaPortafolioComponent, { className: "CargaPortafolioComponent", filePath: "src\\app\\components\\registro\\mantenedor\\portafolio\\carga-portafolio\\carga-portafolio.component.ts", lineNumber: 22 });
})();

export {
  Portafolio,
  CargaPortafolioComponent
};
//# sourceMappingURL=chunk-TAS3LWN7.js.map
