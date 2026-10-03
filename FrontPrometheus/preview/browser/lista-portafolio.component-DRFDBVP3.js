import {
  TablaToolbarComponent
} from "./chunk-GNUHOFZQ.js";
import {
  TablaEstadoComponent,
  mensajeDeError
} from "./chunk-MBO6WKBF.js";
import {
  CargaPortafolioComponent,
  Portafolio
} from "./chunk-TAS3LWN7.js";
import {
  CargaMonedaComponent,
  ModalFormularioComponent
} from "./chunk-3Z7W44IR.js";
import {
  RegistroService
} from "./chunk-FSM2IJQ7.js";
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

// src/app/components/registro/mantenedor/portafolio/lista-portafolio/lista-portafolio.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());

// src/app/components/registro/mantenedor/portafolio/editar-portafolio/editar-portafolio.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function EditarPortafolioComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 24);
    \u0275\u0275listener("close", function EditarPortafolioComponent_ng_template_50_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarPortafolioComponent = class _EditarPortafolioComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
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
    this.objRegistroEditado = new Portafolio();
    this.guardando = false;
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
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
        this.registroService.putModificarPortafolio(this.objRegistroEditado.idPortafolio, this.objRegistroEditado).subscribe((response) => {
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
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListMoneda();
  }
  static {
    this.\u0275fac = function EditarPortafolioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarPortafolioComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarPortafolioComponent, selectors: [["app-editar-portafolio"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 12, consts: [["cargaModalMoneda", ""], ["titulo", "Editar Portafolio", "subtitulo", "Modifique los datos del portafolio.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos", "guardando"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "po-e-descripcionPortafolio", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "po-e-descripcionPortafolio", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "255", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-e-tipoPortafolio", 1, "form-label"], ["id", "po-e-tipoPortafolio", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "150", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-e-gestor", 1, "form-label"], ["id", "po-e-gestor", "type", "text", "autocomplete", "off", "minlength", "3", "maxlength", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-e-limite", 1, "form-label"], ["id", "po-e-limite", "type", "number", "autocomplete", "off", "minlength", "1", "maxlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "po-e-idMoneda", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "po-e-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "po-e-idBenchmark", 1, "form-label"], ["labelForId", "po-e-idBenchmark", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionBenchmark", "bindValue", "idBenchmark", 3, "ngModelChange", "items", "ngModel"], [1, "hig-cuadricula", "hig-columnas-1"], ["for", "po-e-notas", 1, "form-label"], ["id", "po-e-notas", "rows", "4", "minlength", "3", "maxlength", "255", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "close"]], template: function EditarPortafolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function EditarPortafolioComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarPortafolioComponent_Template_app_modal_formulario_guardar_0_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.descripcionPortafolio, $event) || (ctx.objRegistroEditado.descripcionPortafolio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "Tipo Portafolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.tipoPortafolio, $event) || (ctx.objRegistroEditado.tipoPortafolio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "label", 10);
        \u0275\u0275text(17, "Gestor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.gestor, $event) || (ctx.objRegistroEditado.gestor = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.limite, $event) || (ctx.objRegistroEditado.limite = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 4)(28, "label", 14);
        \u0275\u0275text(29, "Moneda Gesti\xF3n");
        \u0275\u0275elementStart(30, "span", 6);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 15)(33, "ng-select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_ng_select_ngModelChange_33_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idMoneda, $event) || (ctx.objRegistroEditado.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 17);
        \u0275\u0275listener("click", function EditarPortafolioComponent_Template_button_click_34_listener() {
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
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_ng_select_ngModelChange_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idBenchmark, $event) || (ctx.objRegistroEditado.idBenchmark = $event);
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
        \u0275\u0275twoWayListener("ngModelChange", function EditarPortafolioComponent_Template_textarea_ngModelChange_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.notas, $event) || (ctx.objRegistroEditado.notas = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(50, EditarPortafolioComponent_ng_template_50_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado)("guardando", ctx.guardando);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.descripcionPortafolio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.tipoPortafolio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.gestor);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.limite);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idMoneda);
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.listBenchmark);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idBenchmark);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.notas);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgModel, MatIconModule, CargaMonedaComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-portafolio.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarPortafolioComponent, { className: "EditarPortafolioComponent", filePath: "src\\app\\components\\registro\\mantenedor\\portafolio\\editar-portafolio\\editar-portafolio.component.ts", lineNumber: 22 });
})();

// src/app/components/registro/mantenedor/portafolio/lista-portafolio/lista-portafolio.component.ts
var _c0 = ["paginator"];
var _c1 = ["sort"];
var _c2 = () => [10, 20, 50, 100];
function ListaPortafolioComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idPortafolio);
  }
}
function ListaPortafolioComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codPortafolio);
  }
}
function ListaPortafolioComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.descripcionPortafolio);
  }
}
function ListaPortafolioComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r6.tipoPortafolio);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.tipoPortafolio || "\u2014");
  }
}
function ListaPortafolioComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Gestor");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r7.gestor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.gestor || "\u2014");
  }
}
function ListaPortafolioComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "L\xEDmite");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const element_r8 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", element_r8.limite === null || element_r8.limite === void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_8_0 = element_r8.limite) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "\u2014");
  }
}
function ListaPortafolioComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Moneda");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.desMoneda);
  }
}
function ListaPortafolioComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Benchmark");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r10.descripcionBenchmark);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.descripcionBenchmark || "\u2014");
  }
}
function ListaPortafolioComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Notas");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r11.notas);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.notas || "\u2014");
  }
}
function ListaPortafolioComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39)(1, "span", 40);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaPortafolioComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 41)(1, "button", 42);
    \u0275\u0275listener("click", function ListaPortafolioComponent_td_40_Template_button_click_1_listener($event) {
      const element_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.abrirMenuFila($event, element_r13));
    });
    \u0275\u0275elementStart(2, "mat-icon", 43);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaPortafolioComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 44);
  }
}
function ListaPortafolioComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45);
    \u0275\u0275listener("contextmenu", function ListaPortafolioComponent_tr_42_Template_tr_contextmenu_0_listener($event) {
      const row_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.onContextMenu($event, row_r16));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ListaPortafolioComponent_ng_template_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r13 = \u0275\u0275nextContext();
      const editarModal_r18 = \u0275\u0275reference(53);
      return \u0275\u0275resetView(ctx_r13.editar(ctx_r13.selectedRow, editarModal_r18));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function ListaPortafolioComponent_ng_template_49_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.eliminar(ctx_r13.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-portafolio", 47);
    \u0275\u0275listener("close", function ListaPortafolioComponent_ng_template_50_Template_app_carga_portafolio_close_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPortafolioComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-portafolio", 48);
    \u0275\u0275listener("close", function ListaPortafolioComponent_ng_template_52_Template_app_editar_portafolio_close_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r13.filaEditar);
  }
}
var ListaPortafolioComponent = class _ListaPortafolioComponent {
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
    this.filaEditar = new Portafolio();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.displayedColumns = [
      "idPortafolio",
      "codPortafolio",
      "descripcionPortafolio",
      "tipoPortafolio",
      "gestor",
      "limite",
      "desMoneda",
      "descripcionBenchmark",
      "notas",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaPortafolio().subscribe((response) => {
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
        this.registroService.eiminarPortafolio(row.idPortafolio).subscribe((response) => {
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
    this.\u0275fac = function ListaPortafolioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaPortafolioComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPortafolioComponent, selectors: [["app-lista-portafolio"]], viewQuery: function ListaPortafolioComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "hig-subtitulo"], [1, "hig-tabla"], ["placeholder", "Buscar c\xF3digo o descripci\xF3n\u2026", "accion", "Agregar Portafolio", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "codPortafolio", "matSortDirection", "asc", "aria-label", "Listado de portafolios", 3, "dataSource"], ["matColumnDef", "idPortafolio"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codPortafolio"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcionPortafolio"], ["matColumnDef", "tipoPortafolio"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "gestor"], ["matColumnDef", "limite"], ["matColumnDef", "desMoneda"], ["matColumnDef", "descripcionBenchmark"], ["matColumnDef", "notas"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay portafolios registrados", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Portafolio\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de portafolios", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaPortafolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h1", 7);
        \u0275\u0275text(3, "Portafolios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 8);
        \u0275\u0275text(5, "Agrupan instrumentos bajo una misma estrategia para valorizarlos y hacer seguimiento conjunto de su riesgo.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 9)(7, "app-tabla-toolbar", 10);
        \u0275\u0275listener("buscar", function ListaPortafolioComponent_Template_app_tabla_toolbar_buscar_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaPortafolioComponent_Template_app_tabla_toolbar_agregar_7_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(51);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 11)(9, "table", 12, 0);
        \u0275\u0275elementContainerStart(11, 13);
        \u0275\u0275template(12, ListaPortafolioComponent_th_12_Template, 2, 0, "th", 14)(13, ListaPortafolioComponent_td_13_Template, 2, 1, "td", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 16);
        \u0275\u0275template(15, ListaPortafolioComponent_th_15_Template, 2, 0, "th", 14)(16, ListaPortafolioComponent_td_16_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 18);
        \u0275\u0275template(18, ListaPortafolioComponent_th_18_Template, 2, 0, "th", 14)(19, ListaPortafolioComponent_td_19_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 19);
        \u0275\u0275template(21, ListaPortafolioComponent_th_21_Template, 2, 0, "th", 14)(22, ListaPortafolioComponent_td_22_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(23, 21);
        \u0275\u0275template(24, ListaPortafolioComponent_th_24_Template, 2, 0, "th", 14)(25, ListaPortafolioComponent_td_25_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(26, 22);
        \u0275\u0275template(27, ListaPortafolioComponent_th_27_Template, 2, 0, "th", 14)(28, ListaPortafolioComponent_td_28_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(29, 23);
        \u0275\u0275template(30, ListaPortafolioComponent_th_30_Template, 2, 0, "th", 14)(31, ListaPortafolioComponent_td_31_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 24);
        \u0275\u0275template(33, ListaPortafolioComponent_th_33_Template, 2, 0, "th", 14)(34, ListaPortafolioComponent_td_34_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 25);
        \u0275\u0275template(36, ListaPortafolioComponent_th_36_Template, 2, 0, "th", 14)(37, ListaPortafolioComponent_td_37_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 26);
        \u0275\u0275template(39, ListaPortafolioComponent_th_39_Template, 3, 0, "th", 27)(40, ListaPortafolioComponent_td_40_Template, 4, 0, "td", 28);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(41, ListaPortafolioComponent_tr_41_Template, 1, 0, "tr", 29)(42, ListaPortafolioComponent_tr_42_Template, 1, 0, "tr", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "app-tabla-estado", 31);
        \u0275\u0275listener("reintentar", function ListaPortafolioComponent_Template_app_tabla_estado_reintentar_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaPortafolioComponent_Template_app_tabla_estado_limpiar_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(44, "mat-paginator", 32, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "div", 33);
        \u0275\u0275elementStart(47, "mat-menu", null, 2);
        \u0275\u0275template(49, ListaPortafolioComponent_ng_template_49_Template, 8, 0, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, ListaPortafolioComponent_ng_template_50_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(52, ListaPortafolioComponent_ng_template_52_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r21 = \u0275\u0275reference(48);
        \u0275\u0275advance(7);
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
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(19, _c2))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r21);
      }
    }, dependencies: [CommonModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaPortafolioComponent, EditarPortafolioComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPortafolioComponent, { className: "ListaPortafolioComponent", filePath: "src\\app\\components\\registro\\mantenedor\\portafolio\\lista-portafolio\\lista-portafolio.component.ts", lineNumber: 25 });
})();
export {
  ListaPortafolioComponent
};
//# sourceMappingURL=lista-portafolio.component-DRFDBVP3.js.map
