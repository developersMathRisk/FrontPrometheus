import {
  CargaSkewPointComponent,
  CargaTermVolatilidadComponent,
  CargaTipoCambioComponent
} from "./chunk-5CDLZWUB.js";
import {
  TablaToolbarComponent
} from "./chunk-GNUHOFZQ.js";
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

// src/app/components/registro/mantenedor/factores/lista-tasa-interes/lista-tasa-interes.component.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());

// src/app/shared/models/factor/tasa-interes.ts
var TasaInteres = class {
};

// src/app/components/registro/mantenedor/factores/carga-tasa-interes/carga-tasa-interes.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var CargaTasaInteresComponent = class _CargaTasaInteresComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codVertice))
      f.push("Cod. V\xE9rtice");
    if (vacio(r.codCurvaProveedor))
      f.push("Curva Proveedor");
    if (vacio(r.numPlazo))
      f.push("Plazo");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new TasaInteres();
  }
  ngOnInit() {
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarTasaInteres(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert2.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La tasa de inter\xE9s ha sido registrada correctamente.",
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
  static {
    this.\u0275fac = function CargaTasaInteresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaTasaInteresComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaTasaInteresComponent, selectors: [["app-carga-tasa-interes"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 7, consts: [["titulo", "Cargar Tasa Inter\xE9s", "subtitulo", "Registre un v\xE9rtice de una curva de tasas de referencia.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ti-c-codVertice", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ti-c-codVertice", "type", "text", "autocomplete", "off", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-c-desVertice", 1, "form-label"], ["id", "ti-c-desVertice", "type", "text", "autocomplete", "off", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-c-numPlazo", 1, "form-label"], ["id", "ti-c-numPlazo", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula"], ["for", "ti-c-codCurvaProveedor", 1, "form-label"], ["id", "ti-c-codCurvaProveedor", "type", "text", "autocomplete", "off", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-c-codVerticeRef", 1, "form-label"], ["id", "ti-c-codVerticeRef", "type", "text", "autocomplete", "off", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-campo__ayuda"]], template: function CargaTasaInteresComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaTasaInteresComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaTasaInteresComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "V\xE9rtice de la curva");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Cod. V\xE9rtice");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaInteresComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codVertice, $event) || (ctx.nuevoRegistro.codVertice = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Desc. V\xE9rtice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaInteresComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.desVertice, $event) || (ctx.nuevoRegistro.desVertice = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Plazo (d\xEDas)");
        \u0275\u0275elementStart(18, "span", 5);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaInteresComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numPlazo, $event) || (ctx.nuevoRegistro.numPlazo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "fieldset", 1)(22, "legend");
        \u0275\u0275text(23, "Curva y referencia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11)(25, "div", 3)(26, "label", 12);
        \u0275\u0275text(27, "Curva Proveedor");
        \u0275\u0275elementStart(28, "span", 5);
        \u0275\u0275text(29, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaInteresComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codCurvaProveedor, $event) || (ctx.nuevoRegistro.codCurvaProveedor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 3)(32, "label", 14);
        \u0275\u0275text(33, "Cod. V\xE9rtice Ref.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function CargaTasaInteresComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codVerticeRef, $event) || (ctx.nuevoRegistro.codVerticeRef = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 16);
        \u0275\u0275text(36, "C\xF3digo externo del v\xE9rtice, por ejemplo un ticker de Bloomberg.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codVertice);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.desVertice);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numPlazo);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codCurvaProveedor);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codVerticeRef);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-tasa-interes.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaTasaInteresComponent, { className: "CargaTasaInteresComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\carga-tasa-interes\\carga-tasa-interes.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/factores/editar-tasa-interes/editar-tasa-interes.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());
var EditarTasaInteresComponent = class _EditarTasaInteresComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codVertice))
      f.push("Cod. V\xE9rtice");
    if (vacio(r.codCurvaProveedor))
      f.push("Curva Proveedor");
    if (vacio(r.numPlazo))
      f.push("Plazo");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new TasaInteres();
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
  }
  guardarCambios() {
    if (this.faltantes.length > 0)
      return;
    import_sweetalert22.default.fire({
      title: "\xBFEst\xE1 seguro de realizar el cambio?",
      text: "Este cambio no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "S\xED",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.putModificarTasaInteres(this.objRegistroEditado.idCurvaReferenciaPuntos, this.objRegistroEditado).subscribe((response) => {
          import_sweetalert22.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
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
    });
  }
  cerrar() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function EditarTasaInteresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarTasaInteresComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTasaInteresComponent, selectors: [["app-editar-tasa-interes"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 7, consts: [["titulo", "Editar Tasa de Inter\xE9s", "subtitulo", "Modifique los datos y guarde los cambios.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-3"], [1, "hig-campo"], ["for", "ti-e-codVertice", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "ti-e-codVertice", "type", "text", "autocomplete", "off", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-e-desVertice", 1, "form-label"], ["id", "ti-e-desVertice", "type", "text", "autocomplete", "off", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-e-numPlazo", 1, "form-label"], ["id", "ti-e-numPlazo", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula"], ["for", "ti-e-codCurvaProveedor", 1, "form-label"], ["id", "ti-e-codCurvaProveedor", "type", "text", "autocomplete", "off", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ti-e-codVerticeRef", 1, "form-label"], ["id", "ti-e-codVerticeRef", "type", "text", "autocomplete", "off", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-campo__ayuda"]], template: function EditarTasaInteresComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarTasaInteresComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarTasaInteresComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "V\xE9rtice de la curva");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Cod. V\xE9rtice");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaInteresComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codVertice, $event) || (ctx.objRegistroEditado.codVertice = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Desc. V\xE9rtice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaInteresComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.desVertice, $event) || (ctx.objRegistroEditado.desVertice = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
        \u0275\u0275text(17, "Plazo (d\xEDas)");
        \u0275\u0275elementStart(18, "span", 5);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaInteresComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numPlazo, $event) || (ctx.objRegistroEditado.numPlazo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "fieldset", 1)(22, "legend");
        \u0275\u0275text(23, "Curva y referencia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11)(25, "div", 3)(26, "label", 12);
        \u0275\u0275text(27, "Curva Proveedor");
        \u0275\u0275elementStart(28, "span", 5);
        \u0275\u0275text(29, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaInteresComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codCurvaProveedor, $event) || (ctx.objRegistroEditado.codCurvaProveedor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 3)(32, "label", 14);
        \u0275\u0275text(33, "Cod. V\xE9rtice Ref.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EditarTasaInteresComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codVerticeRef, $event) || (ctx.objRegistroEditado.codVerticeRef = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 16);
        \u0275\u0275text(36, "C\xF3digo externo del v\xE9rtice, por ejemplo un ticker de Bloomberg.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codVertice);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.desVertice);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numPlazo);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codCurvaProveedor);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codVerticeRef);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-tasa-interes.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTasaInteresComponent, { className: "EditarTasaInteresComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\editar-tasa-interes\\editar-tasa-interes.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/factores/lista-tasa-interes/lista-tasa-interes.component.ts
var _c0 = ["paginator"];
var _c1 = ["sort"];
var _c2 = () => [10, 20, 50, 100];
function ListaTasaInteresComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idCurvaReferenciaPuntos);
  }
}
function ListaTasaInteresComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Cod. V\xE9rtice");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.codVertice);
  }
}
function ListaTasaInteresComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Cod. Curva Proveedor");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.codCurvaProveedor);
  }
}
function ListaTasaInteresComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Des. V\xE9rtice");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.desVertice);
  }
}
function ListaTasaInteresComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Plazo");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.numPlazo);
  }
}
function ListaTasaInteresComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Cod. V\xE9rtice Ref.");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r8.codVerticeRef);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.codVerticeRef || "\u2014");
  }
}
function ListaTasaInteresComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36)(1, "span", 37);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaTasaInteresComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 38)(1, "button", 39);
    \u0275\u0275listener("click", function ListaTasaInteresComponent_td_25_Template_button_click_1_listener($event) {
      const element_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.abrirMenuFila($event, element_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 40);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTasaInteresComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function ListaTasaInteresComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42);
    \u0275\u0275listener("contextmenu", function ListaTasaInteresComponent_tr_27_Template_tr_contextmenu_0_listener($event) {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.onContextMenu($event, row_r13));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ListaTasaInteresComponent_ng_template_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r10 = \u0275\u0275nextContext();
      const editarModal_r15 = \u0275\u0275reference(38);
      return \u0275\u0275resetView(ctx_r10.editar(ctx_r10.selectedRow, editarModal_r15));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ListaTasaInteresComponent_ng_template_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.eliminar(ctx_r10.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tasa-interes", 44);
    \u0275\u0275listener("close", function ListaTasaInteresComponent_ng_template_35_Template_app_carga_tasa_interes_close_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaTasaInteresComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-tasa-interes", 45);
    \u0275\u0275listener("close", function ListaTasaInteresComponent_ng_template_37_Template_app_editar_tasa_interes_close_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r10.filaEditar);
  }
}
var ListaTasaInteresComponent = class _ListaTasaInteresComponent {
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
    this.filaEditar = new TasaInteres();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.displayedColumns = [
      "idCurvaReferenciaPuntos",
      "codVertice",
      "codCurvaProveedor",
      "desVertice",
      "numPlazo",
      "codVerticeRef",
      "acciones"
    ];
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaTasaInteres().subscribe((response) => {
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
    import_sweetalert23.default.fire({
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
        this.registroService.eiminarTasaInteres(row.idCurvaReferenciaPuntos).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert23.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
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
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaTasaInteresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaTasaInteresComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTasaInteresComponent, selectors: [["app-lista-tasa-interes"]], viewQuery: function ListaTasaInteresComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar por v\xE9rtice o curva\u2026", "accion", "Agregar Tasa Inter\xE9s", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "aria-label", "Tasas de inter\xE9s", 3, "dataSource"], ["matColumnDef", "idCurvaReferenciaPuntos"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "codVertice"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codCurvaProveedor"], ["matColumnDef", "desVertice"], ["matColumnDef", "numPlazo"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-num", 4, "matCellDef"], ["matColumnDef", "codVerticeRef"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay tasas de inter\xE9s", "detalleVacio", "Agregue el primer v\xE9rtice con el bot\xF3n \xABAgregar Tasa Inter\xE9s\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de tasas de inter\xE9s", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-num"], ["mat-cell", "", 1, "col-num"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaTasaInteresComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaTasaInteresComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaTasaInteresComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(36);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaTasaInteresComponent_th_6_Template, 2, 0, "th", 10)(7, ListaTasaInteresComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaTasaInteresComponent_th_9_Template, 2, 0, "th", 10)(10, ListaTasaInteresComponent_td_10_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaTasaInteresComponent_th_12_Template, 2, 0, "th", 10)(13, ListaTasaInteresComponent_td_13_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaTasaInteresComponent_th_15_Template, 2, 0, "th", 10)(16, ListaTasaInteresComponent_td_16_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 16);
        \u0275\u0275template(18, ListaTasaInteresComponent_th_18_Template, 2, 0, "th", 17)(19, ListaTasaInteresComponent_td_19_Template, 2, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 19);
        \u0275\u0275template(21, ListaTasaInteresComponent_th_21_Template, 2, 0, "th", 10)(22, ListaTasaInteresComponent_td_22_Template, 2, 3, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(23, 21);
        \u0275\u0275template(24, ListaTasaInteresComponent_th_24_Template, 3, 0, "th", 22)(25, ListaTasaInteresComponent_td_25_Template, 4, 0, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(26, ListaTasaInteresComponent_tr_26_Template, 1, 0, "tr", 24)(27, ListaTasaInteresComponent_tr_27_Template, 1, 0, "tr", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "app-tabla-estado", 26);
        \u0275\u0275listener("reintentar", function ListaTasaInteresComponent_Template_app_tabla_estado_reintentar_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaTasaInteresComponent_Template_app_tabla_estado_limpiar_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "mat-paginator", 27, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "div", 28);
        \u0275\u0275elementStart(32, "mat-menu", null, 2);
        \u0275\u0275template(34, ListaTasaInteresComponent_ng_template_34_Template, 8, 0, "ng-template", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, ListaTasaInteresComponent_ng_template_35_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(37, ListaTasaInteresComponent_ng_template_37_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r18 = \u0275\u0275reference(33);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(23);
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
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r18);
      }
    }, dependencies: [MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaTasaInteresComponent, EditarTasaInteresComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTasaInteresComponent, { className: "ListaTasaInteresComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\lista-tasa-interes\\lista-tasa-interes.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/factores/lista-indice-mercado/lista-indice-mercado.component.ts
var import_sweetalert26 = __toESM(require_sweetalert2_all());

// src/app/shared/models/factor/indice-mercado.ts
var IndiceMercado = class {
};

// src/app/components/registro/mantenedor/factores/carga-indice-mercado/carga-indice-mercado.component.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());
var CargaIndiceMercadoComponent = class _CargaIndiceMercadoComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codigo))
      f.push("C\xF3digo");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.nuevoRegistro = new IndiceMercado();
  }
  ngOnInit() {
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarIndiceMercado(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert24.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El \xEDndice de mercado ha sido registrado correctamente.",
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
  static {
    this.\u0275fac = function CargaIndiceMercadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaIndiceMercadoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaIndiceMercadoComponent, selectors: [["app-carga-indice-mercado"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [["titulo", "Cargar \xCDndice de Mercado", "subtitulo", "Registre un \xEDndice de referencia del mercado.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-campo"], ["for", "im-c-codigo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "im-c-codigo", "type", "text", "autocomplete", "off", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CargaIndiceMercadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function CargaIndiceMercadoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function CargaIndiceMercadoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "\xCDndice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CargaIndiceMercadoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codigo, $event) || (ctx.nuevoRegistro.codigo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codigo);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=carga-indice-mercado.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaIndiceMercadoComponent, { className: "CargaIndiceMercadoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\carga-indice-mercado\\carga-indice-mercado.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/factores/editar-indice-mercado/editar-indice-mercado.component.ts
var import_sweetalert25 = __toESM(require_sweetalert2_all());
var EditarIndiceMercadoComponent = class _EditarIndiceMercadoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.codigo))
      f.push("C\xF3digo");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.objRegistroEditado = new IndiceMercado();
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
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
        this.registroService.putModificarIndiceMercado(this.objRegistroEditado.codigo, this.objRegistroEditado).subscribe((response) => {
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
  static {
    this.\u0275fac = function EditarIndiceMercadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarIndiceMercadoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarIndiceMercadoComponent, selectors: [["app-editar-indice-mercado"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [["titulo", "Editar \xCDndice de Mercado", "subtitulo", "Modifique los datos y guarde los cambios.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula", "hig-columnas-1"], [1, "hig-campo"], ["for", "im-e-codigo", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "im-e-codigo", "type", "text", "autocomplete", "off", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function EditarIndiceMercadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal-formulario", 0);
        \u0275\u0275listener("cerrar", function EditarIndiceMercadoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          return ctx.cerrar();
        })("guardar", function EditarIndiceMercadoComponent_Template_app_modal_formulario_guardar_0_listener() {
          return ctx.guardarCambios();
        });
        \u0275\u0275elementStart(1, "fieldset", 1)(2, "legend");
        \u0275\u0275text(3, "\xCDndice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "C\xF3digo");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function EditarIndiceMercadoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codigo, $event) || (ctx.objRegistroEditado.codigo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codigo);
      }
    }, dependencies: [NgSelectModule, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, ModalFormularioComponent], styles: ["\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=editar-indice-mercado.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarIndiceMercadoComponent, { className: "EditarIndiceMercadoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\editar-indice-mercado\\editar-indice-mercado.component.ts", lineNumber: 19 });
})();

// src/app/components/registro/mantenedor/factores/lista-indice-mercado/lista-indice-mercado.component.ts
var _c02 = ["paginator"];
var _c12 = ["sort"];
var _c22 = () => [10, 20, 50, 100];
function ListaIndiceMercadoComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaIndiceMercadoComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r3.codigo);
  }
}
function ListaIndiceMercadoComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24)(1, "span", 25);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaIndiceMercadoComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 27);
    \u0275\u0275listener("click", function ListaIndiceMercadoComponent_td_10_Template_button_click_1_listener($event) {
      const element_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.abrirMenuFila($event, element_r5));
    });
    \u0275\u0275elementStart(2, "mat-icon", 28);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaIndiceMercadoComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function ListaIndiceMercadoComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("contextmenu", function ListaIndiceMercadoComponent_tr_12_Template_tr_contextmenu_0_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onContextMenu($event, row_r8));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaIndiceMercadoComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ListaIndiceMercadoComponent_ng_template_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      const editarModal_r10 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(ctx_r5.editar(ctx_r5.selectedRow, editarModal_r10));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function ListaIndiceMercadoComponent_ng_template_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.eliminar(ctx_r5.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaIndiceMercadoComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-indice-mercado", 32);
    \u0275\u0275listener("close", function ListaIndiceMercadoComponent_ng_template_20_Template_app_carga_indice_mercado_close_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaIndiceMercadoComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-indice-mercado", 33);
    \u0275\u0275listener("close", function ListaIndiceMercadoComponent_ng_template_22_Template_app_editar_indice_mercado_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r5.filaEditar);
  }
}
var ListaIndiceMercadoComponent = class _ListaIndiceMercadoComponent {
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
    this.filaEditar = new IndiceMercado();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.displayedColumns = [
      "codigo",
      "acciones"
    ];
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaIndiceMercado().subscribe((response) => {
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
        this.registroService.eiminarIndiceMercado(row.codigo).subscribe((response) => {
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
    this.\u0275fac = function ListaIndiceMercadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaIndiceMercadoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaIndiceMercadoComponent, selectors: [["app-lista-indice-mercado"]], viewQuery: function ListaIndiceMercadoComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar por c\xF3digo\u2026", "accion", "Agregar \xCDndice de Mercado", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "aria-label", "\xCDndices de mercado", 3, "dataSource"], ["matColumnDef", "codigo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay \xEDndices de mercado", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar \xCDndice de Mercado\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de \xEDndices de mercado", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaIndiceMercadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaIndiceMercadoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaIndiceMercadoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(21);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaIndiceMercadoComponent_th_6_Template, 2, 0, "th", 10)(7, ListaIndiceMercadoComponent_td_7_Template, 3, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaIndiceMercadoComponent_th_9_Template, 3, 0, "th", 13)(10, ListaIndiceMercadoComponent_td_10_Template, 4, 0, "td", 14);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(11, ListaIndiceMercadoComponent_tr_11_Template, 1, 0, "tr", 15)(12, ListaIndiceMercadoComponent_tr_12_Template, 1, 0, "tr", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "app-tabla-estado", 17);
        \u0275\u0275listener("reintentar", function ListaIndiceMercadoComponent_Template_app_tabla_estado_reintentar_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaIndiceMercadoComponent_Template_app_tabla_estado_limpiar_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "mat-paginator", 18, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "div", 19);
        \u0275\u0275elementStart(17, "mat-menu", null, 2);
        \u0275\u0275template(19, ListaIndiceMercadoComponent_ng_template_19_Template, 8, 0, "ng-template", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, ListaIndiceMercadoComponent_ng_template_20_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, ListaIndiceMercadoComponent_ng_template_22_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r13 = \u0275\u0275reference(18);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(8);
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
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r13);
      }
    }, dependencies: [MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaIndiceMercadoComponent, EditarIndiceMercadoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaIndiceMercadoComponent, { className: "ListaIndiceMercadoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\lista-indice-mercado\\lista-indice-mercado.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/factores/lista-precio-mercado/lista-precio-mercado.component.ts
var import_sweetalert29 = __toESM(require_sweetalert2_all());

// src/app/shared/models/factor/precio-mercado.ts
var PrecioMercado = class {
};

// src/app/components/registro/mantenedor/factores/carga-precio-mercado/carga-precio-mercado.component.ts
var import_sweetalert27 = __toESM(require_sweetalert2_all());
function CargaPrecioMercadoComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 41);
    \u0275\u0275listener("close", function CargaPrecioMercadoComponent_ng_template_85_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaPrecioMercadoComponent = class _CargaPrecioMercadoComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.fecProceso))
      f.push("Fecha Proceso");
    if (vacio(r.nemonico))
      f.push("Nem\xF3nico");
    if (vacio(r.idMoneda))
      f.push("Moneda");
    if (vacio(r.numPrecioLimpio))
      f.push("Precio Limpio");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.listMoneda = [];
    this.nuevoRegistro = new PrecioMercado();
  }
  ngOnInit() {
    this.obtenerListMoneda();
  }
  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe((response) => {
      this.listMoneda = response;
    });
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarPrecioMercado(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert27.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El precio de mercado ha sido registrado correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      import_sweetalert27.default.fire({
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
    this.\u0275fac = function CargaPrecioMercadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaPrecioMercadoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaPrecioMercadoComponent, selectors: [["app-carga-precio-mercado"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 87, vars: 17, consts: [["cargaModalMoneda", ""], ["titulo", "Cargar Precio de Mercado", "subtitulo", "Registre el precio de un instrumento en una fecha determinada.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "pm-c-fecProceso", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "pm-c-fecProceso", "type", "date", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-idMoneda", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "pm-c-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "pm-c-nemonico", 1, "form-label"], ["id", "pm-c-nemonico", "type", "text", "autocomplete", "off", "placeholder", "Ej. AMZN", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-codISIN", 1, "form-label"], ["id", "pm-c-codISIN", "type", "text", "autocomplete", "off", "placeholder", "Ej. US0231351067", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "pm-c-numPrecioLimpio", 1, "form-label"], ["id", "pm-c-numPrecioLimpio", "type", "number", "autocomplete", "off", "placeholder", "0.00", "step", "any", "inputmode", "decimal", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numPrecioSucio", 1, "form-label"], ["id", "pm-c-numPrecioSucio", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numInteresCorrido", 1, "form-label"], ["id", "pm-c-numInteresCorrido", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-detalles"], [1, "hig-detalles__nota"], [1, "hig-seccion__ayuda"], ["for", "pm-c-numTIR", 1, "form-label"], ["id", "pm-c-numTIR", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numDurMacaulay", 1, "form-label"], ["id", "pm-c-numDurMacaulay", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numDurModified", 1, "form-label"], ["id", "pm-c-numDurModified", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numConvexidad", 1, "form-label"], ["id", "pm-c-numConvexidad", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numValorFacial", 1, "form-label"], ["id", "pm-c-numValorFacial", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-numTasaCupon", 1, "form-label"], ["id", "pm-c-numTasaCupon", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-c-maturity", 1, "form-label"], ["id", "pm-c-maturity", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "close"]], template: function CargaPrecioMercadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function CargaPrecioMercadoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaPrecioMercadoComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
        });
        \u0275\u0275elementStart(1, "fieldset", 2)(2, "legend");
        \u0275\u0275text(3, "Instrumento y fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Fecha Proceso");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.fecProceso, $event) || (ctx.nuevoRegistro.fecProceso = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "Moneda");
        \u0275\u0275elementStart(14, "span", 6);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "ng-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_ng_select_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idMoneda, $event) || (ctx.nuevoRegistro.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function CargaPrecioMercadoComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r2 = \u0275\u0275reference(86);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r2));
        });
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 4)(22, "label", 13);
        \u0275\u0275text(23, "Nem\xF3nico");
        \u0275\u0275elementStart(24, "span", 6);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.nemonico, $event) || (ctx.nuevoRegistro.nemonico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 4)(28, "label", 15);
        \u0275\u0275text(29, "ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.codISIN, $event) || (ctx.nuevoRegistro.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "fieldset", 2)(32, "legend");
        \u0275\u0275text(33, "Precio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17)(35, "div", 4)(36, "label", 18);
        \u0275\u0275text(37, "Precio Limpio");
        \u0275\u0275elementStart(38, "span", 6);
        \u0275\u0275text(39, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numPrecioLimpio, $event) || (ctx.nuevoRegistro.numPrecioLimpio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 4)(42, "label", 20);
        \u0275\u0275text(43, "Precio Sucio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numPrecioSucio, $event) || (ctx.nuevoRegistro.numPrecioSucio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 4)(46, "label", 22);
        \u0275\u0275text(47, "Inter\xE9s Corrido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numInteresCorrido, $event) || (ctx.nuevoRegistro.numInteresCorrido = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "details", 24)(50, "summary");
        \u0275\u0275text(51, "Datos de renta fija");
        \u0275\u0275elementStart(52, "span", 25);
        \u0275\u0275text(53, "Opcional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "p", 26);
        \u0275\u0275text(55, "Solo aplican a bonos y otros instrumentos de deuda.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 17)(57, "div", 4)(58, "label", 27);
        \u0275\u0275text(59, "TIR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numTIR, $event) || (ctx.nuevoRegistro.numTIR = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 4)(62, "label", 29);
        \u0275\u0275text(63, "Dur. Macaulay");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numDurMacaulay, $event) || (ctx.nuevoRegistro.numDurMacaulay = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 4)(66, "label", 31);
        \u0275\u0275text(67, "Dur. Modificada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 32);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numDurModified, $event) || (ctx.nuevoRegistro.numDurModified = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 4)(70, "label", 33);
        \u0275\u0275text(71, "Convexidad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "input", 34);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numConvexidad, $event) || (ctx.nuevoRegistro.numConvexidad = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 4)(74, "label", 35);
        \u0275\u0275text(75, "Valor Facial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "input", 36);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_76_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numValorFacial, $event) || (ctx.nuevoRegistro.numValorFacial = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 4)(78, "label", 37);
        \u0275\u0275text(79, "Tasa Cup\xF3n (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "input", 38);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_80_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.numTasaCupon, $event) || (ctx.nuevoRegistro.numTasaCupon = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 4)(82, "label", 39);
        \u0275\u0275text(83, "Fecha Vencimiento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "input", 40);
        \u0275\u0275twoWayListener("ngModelChange", function CargaPrecioMercadoComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.maturity, $event) || (ctx.nuevoRegistro.maturity = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(85, CargaPrecioMercadoComponent_ng_template_85_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.fecProceso);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idMoneda);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.nemonico);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.codISIN);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numPrecioLimpio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numPrecioSucio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numInteresCorrido);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numTIR);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numDurMacaulay);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numDurModified);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numConvexidad);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numValorFacial);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.numTasaCupon);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.maturity);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CargaMonedaComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-precio-mercado.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaPrecioMercadoComponent, { className: "CargaPrecioMercadoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\carga-precio-mercado\\carga-precio-mercado.component.ts", lineNumber: 21 });
})();

// src/app/components/registro/mantenedor/factores/editar-precio-mercado/editar-precio-mercado.component.ts
var import_sweetalert28 = __toESM(require_sweetalert2_all());
function EditarPrecioMercadoComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 41);
    \u0275\u0275listener("close", function EditarPrecioMercadoComponent_ng_template_85_Template_app_carga_moneda_close_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarPrecioMercadoComponent = class _EditarPrecioMercadoComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.fecProceso))
      f.push("Fecha Proceso");
    if (vacio(r.nemonico))
      f.push("Nem\xF3nico");
    if (vacio(r.idMoneda))
      f.push("Moneda");
    if (vacio(r.numPrecioLimpio))
      f.push("Precio Limpio");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.listMoneda = [];
    this.objRegistroEditado = new PrecioMercado();
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerListMoneda();
  }
  obtenerListMoneda() {
    this.registroService.getListaMoneda().subscribe((response) => {
      this.listMoneda = response;
    });
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
        this.registroService.putModificarPrecioMercado(this.objRegistroEditado.idVectorPrecio, this.objRegistroEditado).subscribe((response) => {
          import_sweetalert28.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
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
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListMoneda();
  }
  static {
    this.\u0275fac = function EditarPrecioMercadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarPrecioMercadoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarPrecioMercadoComponent, selectors: [["app-editar-precio-mercado"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 87, vars: 18, consts: [["cargaModalMoneda", ""], ["titulo", "Editar Precio de Mercado", "subtitulo", "Modifique los datos y guarde los cambios.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "pm-e-fecProceso", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "pm-e-fecProceso", "type", "date", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-idMoneda", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "pm-e-idMoneda", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desMoneda", "bindValue", "idMoneda", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar moneda", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "pm-e-nemonico", 1, "form-label"], ["id", "pm-e-nemonico", "type", "text", "autocomplete", "off", "placeholder", "Ej. AMZN", "maxlength", "60", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-codISIN", 1, "form-label"], ["id", "pm-e-codISIN", "type", "text", "autocomplete", "off", "placeholder", "Ej. US0231351067", "maxlength", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "pm-e-numPrecioLimpio", 1, "form-label"], ["id", "pm-e-numPrecioLimpio", "type", "number", "autocomplete", "off", "placeholder", "0.00", "step", "any", "inputmode", "decimal", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numPrecioSucio", 1, "form-label"], ["id", "pm-e-numPrecioSucio", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numInteresCorrido", 1, "form-label"], ["id", "pm-e-numInteresCorrido", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-detalles", 3, "open"], [1, "hig-detalles__nota"], [1, "hig-seccion__ayuda"], ["for", "pm-e-numTIR", 1, "form-label"], ["id", "pm-e-numTIR", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numDurMacaulay", 1, "form-label"], ["id", "pm-e-numDurMacaulay", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numDurModified", 1, "form-label"], ["id", "pm-e-numDurModified", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numConvexidad", 1, "form-label"], ["id", "pm-e-numConvexidad", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numValorFacial", 1, "form-label"], ["id", "pm-e-numValorFacial", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-numTasaCupon", 1, "form-label"], ["id", "pm-e-numTasaCupon", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pm-e-maturity", 1, "form-label"], ["id", "pm-e-maturity", "type", "date", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "close"]], template: function EditarPrecioMercadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 1);
        \u0275\u0275listener("cerrar", function EditarPrecioMercadoComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarPrecioMercadoComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 2)(2, "legend");
        \u0275\u0275text(3, "Instrumento y fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "label", 5);
        \u0275\u0275text(7, "Fecha Proceso");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.fecProceso, $event) || (ctx.objRegistroEditado.fecProceso = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
        \u0275\u0275text(13, "Moneda");
        \u0275\u0275elementStart(14, "span", 6);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "ng-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_ng_select_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idMoneda, $event) || (ctx.objRegistroEditado.idMoneda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function EditarPrecioMercadoComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r2 = \u0275\u0275reference(86);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r2));
        });
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 4)(22, "label", 13);
        \u0275\u0275text(23, "Nem\xF3nico");
        \u0275\u0275elementStart(24, "span", 6);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.nemonico, $event) || (ctx.objRegistroEditado.nemonico = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 4)(28, "label", 15);
        \u0275\u0275text(29, "ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.codISIN, $event) || (ctx.objRegistroEditado.codISIN = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "fieldset", 2)(32, "legend");
        \u0275\u0275text(33, "Precio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17)(35, "div", 4)(36, "label", 18);
        \u0275\u0275text(37, "Precio Limpio");
        \u0275\u0275elementStart(38, "span", 6);
        \u0275\u0275text(39, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numPrecioLimpio, $event) || (ctx.objRegistroEditado.numPrecioLimpio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 4)(42, "label", 20);
        \u0275\u0275text(43, "Precio Sucio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numPrecioSucio, $event) || (ctx.objRegistroEditado.numPrecioSucio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 4)(46, "label", 22);
        \u0275\u0275text(47, "Inter\xE9s Corrido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numInteresCorrido, $event) || (ctx.objRegistroEditado.numInteresCorrido = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "details", 24)(50, "summary");
        \u0275\u0275text(51, "Datos de renta fija");
        \u0275\u0275elementStart(52, "span", 25);
        \u0275\u0275text(53, "Opcional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "p", 26);
        \u0275\u0275text(55, "Solo aplican a bonos y otros instrumentos de deuda.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 17)(57, "div", 4)(58, "label", 27);
        \u0275\u0275text(59, "TIR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numTIR, $event) || (ctx.objRegistroEditado.numTIR = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 4)(62, "label", 29);
        \u0275\u0275text(63, "Dur. Macaulay");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numDurMacaulay, $event) || (ctx.objRegistroEditado.numDurMacaulay = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 4)(66, "label", 31);
        \u0275\u0275text(67, "Dur. Modificada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 32);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numDurModified, $event) || (ctx.objRegistroEditado.numDurModified = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 4)(70, "label", 33);
        \u0275\u0275text(71, "Convexidad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "input", 34);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numConvexidad, $event) || (ctx.objRegistroEditado.numConvexidad = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 4)(74, "label", 35);
        \u0275\u0275text(75, "Valor Facial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "input", 36);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_76_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numValorFacial, $event) || (ctx.objRegistroEditado.numValorFacial = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 4)(78, "label", 37);
        \u0275\u0275text(79, "Tasa Cup\xF3n (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "input", 38);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_80_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.numTasaCupon, $event) || (ctx.objRegistroEditado.numTasaCupon = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 4)(82, "label", 39);
        \u0275\u0275text(83, "Fecha Vencimiento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "input", 40);
        \u0275\u0275twoWayListener("ngModelChange", function EditarPrecioMercadoComponent_Template_input_ngModelChange_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.maturity, $event) || (ctx.objRegistroEditado.maturity = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(85, EditarPrecioMercadoComponent_ng_template_85_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.fecProceso);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idMoneda);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.nemonico);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.codISIN);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numPrecioLimpio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numPrecioSucio);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numInteresCorrido);
        \u0275\u0275advance();
        \u0275\u0275property("open", ctx.objRegistroEditado.numPrecioSucio != null || ctx.objRegistroEditado.numInteresCorrido != null || ctx.objRegistroEditado.numTIR != null || ctx.objRegistroEditado.numDurMacaulay != null || ctx.objRegistroEditado.numDurModified != null || ctx.objRegistroEditado.numConvexidad != null || ctx.objRegistroEditado.numValorFacial != null || ctx.objRegistroEditado.numTasaCupon != null || !!ctx.objRegistroEditado.maturity);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numTIR);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numDurMacaulay);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numDurModified);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numConvexidad);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numValorFacial);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.numTasaCupon);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.maturity);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, NgModel, MatIconModule, CargaMonedaComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-precio-mercado.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarPrecioMercadoComponent, { className: "EditarPrecioMercadoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\editar-precio-mercado\\editar-precio-mercado.component.ts", lineNumber: 21 });
})();

// src/app/components/registro/mantenedor/factores/lista-precio-mercado/lista-precio-mercado.component.ts
var _c03 = ["paginator"];
var _c13 = ["sort"];
var _c23 = () => [10, 20, 50, 100];
function ListaPrecioMercadoComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idVectorPrecio);
  }
}
function ListaPrecioMercadoComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, element_r4.fecProceso, "dd/MM/yyyy"));
  }
}
function ListaPrecioMercadoComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Nem\xF3nico");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.nemonico);
  }
}
function ListaPrecioMercadoComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "ISIN");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
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
function ListaPrecioMercadoComponent_ng_container_28_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.titulo);
  }
}
function ListaPrecioMercadoComponent_ng_container_28_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const c_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("celda-vacia", element_r8[c_r7.campo] == null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r8[c_r7.campo] != null ? \u0275\u0275pipeBind2(2, 3, element_r8[c_r7.campo], c_r7.formato) : "\u2014", " ");
  }
}
function ListaPrecioMercadoComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 39);
    \u0275\u0275template(1, ListaPrecioMercadoComponent_ng_container_28_th_1_Template, 2, 1, "th", 40)(2, ListaPrecioMercadoComponent_ng_container_28_td_2_Template, 3, 6, "td", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("matColumnDef", c_r7.campo);
  }
}
function ListaPrecioMercadoComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Vencimiento");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275classProp("celda-vacia", !element_r9.maturity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r9.maturity ? \u0275\u0275pipeBind2(2, 3, element_r9.maturity, "dd/MM/yyyy") : "\u2014", " ");
  }
}
function ListaPrecioMercadoComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Moneda");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.desMoneda || element_r10.idMoneda);
  }
}
function ListaPrecioMercadoComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Fuente de Datos");
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.codFuenteDatos);
  }
}
function ListaPrecioMercadoComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44)(1, "span", 45);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaPrecioMercadoComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 46)(1, "button", 47);
    \u0275\u0275listener("click", function ListaPrecioMercadoComponent_td_40_Template_button_click_1_listener($event) {
      const element_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.abrirMenuFila($event, element_r13));
    });
    \u0275\u0275elementStart(2, "mat-icon", 48);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaPrecioMercadoComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function ListaPrecioMercadoComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50);
    \u0275\u0275listener("contextmenu", function ListaPrecioMercadoComponent_tr_42_Template_tr_contextmenu_0_listener($event) {
      const row_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.onContextMenu($event, row_r16));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ListaPrecioMercadoComponent_ng_template_49_Template_button_click_0_listener() {
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
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function ListaPrecioMercadoComponent_ng_template_49_Template_button_click_4_listener() {
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
function ListaPrecioMercadoComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-precio-mercado", 52);
    \u0275\u0275listener("close", function ListaPrecioMercadoComponent_ng_template_50_Template_app_carga_precio_mercado_close_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaPrecioMercadoComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-precio-mercado", 53);
    \u0275\u0275listener("close", function ListaPrecioMercadoComponent_ng_template_52_Template_app_editar_precio_mercado_close_0_listener($event) {
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
var ListaPrecioMercadoComponent = class _ListaPrecioMercadoComponent {
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
    this.filaEditar = new PrecioMercado();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
    this.desde = "";
    this.hasta = "";
    this.verTodasLasColumnas = false;
    this.columnasNumericas = [
      { campo: "numPrecioLimpio", titulo: "Precio Limpio", formato: "1.2-6" },
      { campo: "numPrecioSucio", titulo: "Precio Sucio", formato: "1.2-6" },
      { campo: "numInteresCorrido", titulo: "Inter\xE9s Corrido", formato: "1.2-6" },
      { campo: "numTIR", titulo: "TIR", formato: "1.2-6" },
      { campo: "numDurMacaulay", titulo: "Dur. Macaulay", formato: "1.2-6" },
      { campo: "numDurModified", titulo: "Dur. Modificada", formato: "1.2-6" },
      { campo: "numConvexidad", titulo: "Convexidad", formato: "1.2-6" },
      { campo: "numValorFacial", titulo: "Valor Facial", formato: "1.2-6" },
      { campo: "numTasaCupon", titulo: "Tasa Cup\xF3n (%)", formato: "1.2-6" }
    ];
    this.columnasBasicas = [
      "fecProceso",
      "nemonico",
      "codISIN",
      "numPrecioLimpio",
      "moneda",
      "codFuenteDatos",
      "acciones"
    ];
    this.columnasCompletas = [
      "idVectorPrecio",
      "fecProceso",
      "nemonico",
      "codISIN",
      "numPrecioLimpio",
      "numPrecioSucio",
      "numInteresCorrido",
      "numTIR",
      "numDurMacaulay",
      "numDurModified",
      "numConvexidad",
      "numValorFacial",
      "numTasaCupon",
      "maturity",
      "moneda",
      "codFuenteDatos",
      "acciones"
    ];
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaPrecioMercado().subscribe((response) => {
      const ordenados = [...response].sort((a, b) => (a.nemonico ?? "").localeCompare(b.nemonico ?? ""));
      this.dataSource = new MatTableDataSource(ordenados);
      this.dataSource.filterPredicate = (fila, filtro) => this.coincide(fila, filtro);
      this.dataSource.sortingDataAccessor = (fila, columna) => columna === "moneda" ? fila.desMoneda ?? fila.idMoneda ?? "" : fila[columna];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total = response.length;
      this.cargando = false;
      this.aplicarFiltros();
    }, (error) => {
      this.cargando = false;
      this.mensajeError = mensajeDeError(error);
    });
  }
  // ---- búsqueda y filtros -------------------------------------------------
  buscar(texto) {
    this.busqueda = texto;
    this.aplicarFiltros();
  }
  cambiarRango(campo, valor) {
    this[campo] = valor;
    this.aplicarFiltros();
  }
  limpiarFiltros() {
    this.busqueda = "";
    this.desde = "";
    this.hasta = "";
    this.aplicarFiltros();
  }
  aplicarFiltros() {
    if (!this.dataSource)
      return;
    this.dataSource.filter = JSON.stringify({ texto: this.normalizar(this.busqueda.trim()), desde: this.desde, hasta: this.hasta });
    this.dataSource.paginator?.firstPage();
  }
  coincide(fila, filtro) {
    const { texto, desde, hasta } = JSON.parse(filtro);
    const fecha = String(fila.fecProceso ?? "").slice(0, 10);
    if (desde && fecha < desde)
      return false;
    if (hasta && fecha > hasta)
      return false;
    if (!texto)
      return true;
    const [anio, mes, dia] = fecha.split("-");
    const enDdMmYyyy = `${dia}/${mes}/${anio}`;
    const contenido = [fila.nemonico, fila.codISIN, fila.codFuenteDatos, fila.desMoneda, fecha, enDdMmYyyy].join(" ");
    return this.normalizar(contenido).includes(texto);
  }
  normalizar(valor) {
    return (valor ?? "").toString().toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}", "gu"), "");
  }
  // ---- acciones de fila ---------------------------------------------------
  onContextMenu(event, item) {
    event.preventDefault();
    this.selectedRow = item;
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { "item": item };
    this.contextMenu.menu?.focusFirstItem("mouse");
    this.contextMenu.openMenu();
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
        this.registroService.eiminarPrecioMercado(row.idVectorPrecio).subscribe((response) => {
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
    this.\u0275fac = function ListaPrecioMercadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaPrecioMercadoComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPrecioMercadoComponent, selectors: [["app-lista-precio-mercado"]], viewQuery: function ListaPrecioMercadoComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 26, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar nem\xF3nico, ISIN o fecha\u2026", "accion", "Agregar Precio de Mercado", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], ["filtros", "", "role", "group", "aria-label", "Rango de fechas", 1, "rango-fechas"], ["type", "date", 3, "input", "value"], ["opciones", "", "title", "Incluye precio sucio, TIR, duraci\xF3n, convexidad, valor facial y vencimiento", 1, "form-check", "form-switch", "interruptor-columnas"], ["type", "checkbox", "role", "switch", "id", "precio-todas-columnas", 1, "form-check-input", 3, "change", "checked"], ["for", "precio-todas-columnas", 1, "form-check-label"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "matSortActive", "fecProceso", "matSortDirection", "desc", "aria-label", "Precios de mercado", 3, "dataSource"], ["matColumnDef", "idVectorPrecio"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "fecProceso"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nemonico"], ["matColumnDef", "codISIN"], ["mat-cell", "", 3, "celda-vacia", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "maturity"], ["matColumnDef", "moneda"], ["matColumnDef", "codFuenteDatos"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay precios de mercado", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Precio de Mercado\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de precios de mercado", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-num", 3, "celda-vacia", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-num"], ["mat-cell", "", 1, "col-num"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaPrecioMercadoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaPrecioMercadoComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaPrecioMercadoComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(51);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementStart(2, "div", 7)(3, "label");
        \u0275\u0275text(4, "Desde ");
        \u0275\u0275elementStart(5, "input", 8);
        \u0275\u0275listener("input", function ListaPrecioMercadoComponent_Template_input_input_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cambiarRango("desde", $event.target.value));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "label");
        \u0275\u0275text(7, "Hasta ");
        \u0275\u0275elementStart(8, "input", 8);
        \u0275\u0275listener("input", function ListaPrecioMercadoComponent_Template_input_input_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cambiarRango("hasta", $event.target.value));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 9)(10, "input", 10);
        \u0275\u0275listener("change", function ListaPrecioMercadoComponent_Template_input_change_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.verTodasLasColumnas = $event.target.checked);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275text(12, "Todas las columnas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 12)(14, "table", 13, 0);
        \u0275\u0275elementContainerStart(16, 14);
        \u0275\u0275template(17, ListaPrecioMercadoComponent_th_17_Template, 2, 0, "th", 15)(18, ListaPrecioMercadoComponent_td_18_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(19, 17);
        \u0275\u0275template(20, ListaPrecioMercadoComponent_th_20_Template, 2, 0, "th", 15)(21, ListaPrecioMercadoComponent_td_21_Template, 3, 4, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(22, 19);
        \u0275\u0275template(23, ListaPrecioMercadoComponent_th_23_Template, 2, 0, "th", 15)(24, ListaPrecioMercadoComponent_td_24_Template, 3, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(25, 20);
        \u0275\u0275template(26, ListaPrecioMercadoComponent_th_26_Template, 2, 0, "th", 15)(27, ListaPrecioMercadoComponent_td_27_Template, 2, 3, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(28, ListaPrecioMercadoComponent_ng_container_28_Template, 3, 1, "ng-container", 22);
        \u0275\u0275elementContainerStart(29, 23);
        \u0275\u0275template(30, ListaPrecioMercadoComponent_th_30_Template, 2, 0, "th", 15)(31, ListaPrecioMercadoComponent_td_31_Template, 3, 6, "td", 21);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 24);
        \u0275\u0275template(33, ListaPrecioMercadoComponent_th_33_Template, 2, 0, "th", 15)(34, ListaPrecioMercadoComponent_td_34_Template, 2, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 25);
        \u0275\u0275template(36, ListaPrecioMercadoComponent_th_36_Template, 2, 0, "th", 15)(37, ListaPrecioMercadoComponent_td_37_Template, 2, 1, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 26);
        \u0275\u0275template(39, ListaPrecioMercadoComponent_th_39_Template, 3, 0, "th", 27)(40, ListaPrecioMercadoComponent_td_40_Template, 4, 0, "td", 28);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(41, ListaPrecioMercadoComponent_tr_41_Template, 1, 0, "tr", 29)(42, ListaPrecioMercadoComponent_tr_42_Template, 1, 0, "tr", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "app-tabla-estado", 31);
        \u0275\u0275listener("reintentar", function ListaPrecioMercadoComponent_Template_app_tabla_estado_reintentar_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaPrecioMercadoComponent_Template_app_tabla_estado_limpiar_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.limpiarFiltros());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(44, "mat-paginator", 32, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "div", 33);
        \u0275\u0275elementStart(47, "mat-menu", null, 2);
        \u0275\u0275template(49, ListaPrecioMercadoComponent_ng_template_49_Template, 8, 0, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, ListaPrecioMercadoComponent_ng_template_50_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(52, ListaPrecioMercadoComponent_ng_template_52_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r21 = \u0275\u0275reference(48);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.desde);
        \u0275\u0275attribute("max", ctx.hasta || null);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.hasta);
        \u0275\u0275attribute("min", ctx.desde || null);
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.verTodasLasColumnas);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.columnasNumericas);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("estado", ctx.estadoTabla)("busqueda", ctx.busqueda)("mensajeError", ctx.mensajeError);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.estadoTabla ? "none" : null);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(25, _c23))("pageSize", 20);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r21);
      }
    }, dependencies: [CommonModule, NgForOf, DecimalPipe, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, CargaPrecioMercadoComponent, EditarPrecioMercadoComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPrecioMercadoComponent, { className: "ListaPrecioMercadoComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\lista-precio-mercado\\lista-precio-mercado.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/factores/lista-volatilidad/lista-volatilidad.component.ts
var import_sweetalert212 = __toESM(require_sweetalert2_all());

// src/app/shared/models/factor/volatilidad.ts
var Volatilidad = class {
};

// src/app/components/registro/mantenedor/factores/editar-volatilidad/editar-volatilidad.component.ts
var import_sweetalert210 = __toESM(require_sweetalert2_all());
function EditarVolatilidadComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-term-volatilidad", 24);
    \u0275\u0275listener("close", function EditarVolatilidadComponent_ng_template_51_Template_app_carga_term_volatilidad_close_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarVolatilidadComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-skew-point", 24);
    \u0275\u0275listener("close", function EditarVolatilidadComponent_ng_template_53_Template_app_carga_skew_point_close_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EditarVolatilidadComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-cambio", 24);
    \u0275\u0275listener("close", function EditarVolatilidadComponent_ng_template_55_Template_app_carga_tipo_cambio_close_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var EditarVolatilidadComponent = class _EditarVolatilidadComponent {
  get faltantes() {
    const r = this.objRegistroEditado;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.fecProceso))
      f.push("Fecha Proceso");
    if (vacio(r.valor))
      f.push("Valor");
    if (vacio(r.idTermVolatility))
      f.push("Term. Volatilidad");
    if (vacio(r.idSwekPoint))
      f.push("Skew Point");
    if (vacio(r.idTipoCambio))
      f.push("Tipo de Cambio");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.listTermVolatilidad = [];
    this.listSkewPoint = [];
    this.listTipoCambio = [];
    this.objRegistroEditado = new Volatilidad();
  }
  ngOnInit() {
    this.objRegistroEditado = __spreadValues({}, this.data);
    this.obtenerListTermVolatilidad();
    this.obtenerListSkewPoint();
    this.obtenerListTipoCambio();
  }
  obtenerListTermVolatilidad() {
    this.registroService.getListaTermVolatilidad().subscribe((response) => {
      this.listTermVolatilidad = response;
    });
  }
  obtenerListSkewPoint() {
    this.registroService.getListaSkewPoint().subscribe((response) => {
      this.listSkewPoint = response;
    });
  }
  obtenerListTipoCambio() {
    this.registroService.getListaTipoCambio().subscribe((response) => {
      this.listTipoCambio = response;
    });
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
        this.registroService.putModificarVolatilidad(this.objRegistroEditado.idVolatilitySurfacePoint, this.objRegistroEditado).subscribe((response) => {
          import_sweetalert210.default.fire({
            icon: "success",
            title: "Modificaci\xF3n exitosa",
            text: "El registro ha sido modificado correctamente.",
            confirmButtonText: "Aceptar"
          });
          this.cerrar();
        }, (error) => {
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
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListTermVolatilidad();
    this.obtenerListSkewPoint();
    this.obtenerListTipoCambio();
  }
  static {
    this.\u0275fac = function EditarVolatilidadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditarVolatilidadComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarVolatilidadComponent, selectors: [["app-editar-volatilidad"]], inputs: { data: "data" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 10, consts: [["cargaModalTermVolatility", ""], ["cargaModalSwekPoint", ""], ["cargaModalTipoCambio", ""], ["titulo", "Editar Volatilidad", "subtitulo", "Modifique los datos y guarde los cambios.", "accion", "Guardar Cambios", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "vo-e-fecProceso", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "vo-e-fecProceso", "type", "date", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "vo-e-valor", 1, "form-label"], ["id", "vo-e-valor", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "vo-e-idTermVolatility", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "vo-e-idTermVolatility", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTermVolatility", "bindValue", "idTermVolatility", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar term. volatilidad", "aria-label", "Agregar term. volatilidad", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "vo-e-idSwekPoint", 1, "form-label"], ["labelForId", "vo-e-idSwekPoint", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "point", "bindValue", "idSwekPoint", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar skew point", "aria-label", "Agregar skew point", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "vo-e-idTipoCambio", 1, "form-label"], ["labelForId", "vo-e-idTipoCambio", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desTicker", "bindValue", "idTipoCambio", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo de cambio", "aria-label", "Agregar tipo de cambio", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [3, "close"]], template: function EditarVolatilidadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 3);
        \u0275\u0275listener("cerrar", function EditarVolatilidadComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function EditarVolatilidadComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarCambios());
        });
        \u0275\u0275elementStart(1, "fieldset", 4)(2, "legend");
        \u0275\u0275text(3, "Observaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "label", 7);
        \u0275\u0275text(7, "Fecha Proceso");
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function EditarVolatilidadComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.fecProceso, $event) || (ctx.objRegistroEditado.fecProceso = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "label", 10);
        \u0275\u0275text(13, "Valor");
        \u0275\u0275elementStart(14, "span", 8);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function EditarVolatilidadComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.valor, $event) || (ctx.objRegistroEditado.valor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "fieldset", 4)(18, "legend");
        \u0275\u0275text(19, "Ubicaci\xF3n en la superficie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 6)(22, "label", 13);
        \u0275\u0275text(23, "Term. Volatilidad");
        \u0275\u0275elementStart(24, "span", 8);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14)(27, "ng-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EditarVolatilidadComponent_Template_ng_select_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTermVolatility, $event) || (ctx.objRegistroEditado.idTermVolatility = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275listener("click", function EditarVolatilidadComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTermVolatility_r2 = \u0275\u0275reference(52);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTermVolatility_r2));
        });
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 6)(32, "label", 18);
        \u0275\u0275text(33, "Skew Point");
        \u0275\u0275elementStart(34, "span", 8);
        \u0275\u0275text(35, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 14)(37, "ng-select", 19);
        \u0275\u0275twoWayListener("ngModelChange", function EditarVolatilidadComponent_Template_ng_select_ngModelChange_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idSwekPoint, $event) || (ctx.objRegistroEditado.idSwekPoint = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 20);
        \u0275\u0275listener("click", function EditarVolatilidadComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalSwekPoint_r3 = \u0275\u0275reference(54);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalSwekPoint_r3));
        });
        \u0275\u0275elementStart(39, "span", 17);
        \u0275\u0275text(40, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 6)(42, "label", 21);
        \u0275\u0275text(43, "Tipo de Cambio");
        \u0275\u0275elementStart(44, "span", 8);
        \u0275\u0275text(45, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 14)(47, "ng-select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function EditarVolatilidadComponent_Template_ng_select_ngModelChange_47_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.objRegistroEditado.idTipoCambio, $event) || (ctx.objRegistroEditado.idTipoCambio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 23);
        \u0275\u0275listener("click", function EditarVolatilidadComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoCambio_r4 = \u0275\u0275reference(56);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoCambio_r4));
        });
        \u0275\u0275elementStart(49, "span", 17);
        \u0275\u0275text(50, "+");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(51, EditarVolatilidadComponent_ng_template_51_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(53, EditarVolatilidadComponent_ng_template_53_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(55, EditarVolatilidadComponent_ng_template_55_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.objRegistroEditado);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.fecProceso);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.valor);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listTermVolatilidad);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTermVolatility);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listSkewPoint);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idSwekPoint);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoCambio);
        \u0275\u0275twoWayProperty("ngModel", ctx.objRegistroEditado.idTipoCambio);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatIconModule, CargaTermVolatilidadComponent, CargaSkewPointComponent, CargaTipoCambioComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=editar-volatilidad.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarVolatilidadComponent, { className: "EditarVolatilidadComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\editar-volatilidad\\editar-volatilidad.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/factores/carga-volatilidad/carga-volatilidad.component.ts
var import_sweetalert211 = __toESM(require_sweetalert2_all());
function CargaVolatilidadComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-term-volatilidad", 24);
    \u0275\u0275listener("close", function CargaVolatilidadComponent_ng_template_51_Template_app_carga_term_volatilidad_close_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaVolatilidadComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-skew-point", 24);
    \u0275\u0275listener("close", function CargaVolatilidadComponent_ng_template_53_Template_app_carga_skew_point_close_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaVolatilidadComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-tipo-cambio", 24);
    \u0275\u0275listener("close", function CargaVolatilidadComponent_ng_template_55_Template_app_carga_tipo_cambio_close_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaVolatilidadComponent = class _CargaVolatilidadComponent {
  get faltantes() {
    const r = this.nuevoRegistro;
    const vacio = (valor) => valor === null || valor === void 0 || valor === "";
    const f = [];
    if (vacio(r.fecProceso))
      f.push("Fecha Proceso");
    if (vacio(r.valor))
      f.push("Valor");
    if (vacio(r.idTermVolatility))
      f.push("Term. Volatilidad");
    if (vacio(r.idSwekPoint))
      f.push("Skew Point");
    if (vacio(r.idTipoCambio))
      f.push("Tipo de Cambio");
    return f;
  }
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.listTermVolatilidad = [];
    this.listSkewPoint = [];
    this.listTipoCambio = [];
    this.nuevoRegistro = new Volatilidad();
  }
  ngOnInit() {
    this.obtenerListTermVolatilidad();
    this.obtenerListSkewPoint();
    this.obtenerListTipoCambio();
  }
  obtenerListTermVolatilidad() {
    this.registroService.getListaTermVolatilidad().subscribe((response) => {
      this.listTermVolatilidad = response;
    });
  }
  obtenerListSkewPoint() {
    this.registroService.getListaSkewPoint().subscribe((response) => {
      this.listSkewPoint = response;
    });
  }
  obtenerListTipoCambio() {
    this.registroService.getListaTipoCambio().subscribe((response) => {
      this.listTipoCambio = response;
    });
  }
  registrar() {
    if (this.faltantes.length > 0)
      return;
    this.registroService.postRegistrarVolatilidad(this.nuevoRegistro).subscribe((response) => {
      import_sweetalert211.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La volatilidad ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.cerrar();
    }, (error) => {
      import_sweetalert211.default.fire({
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
    this.obtenerListTermVolatilidad();
    this.obtenerListSkewPoint();
    this.obtenerListTipoCambio();
  }
  static {
    this.\u0275fac = function CargaVolatilidadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaVolatilidadComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaVolatilidadComponent, selectors: [["app-carga-volatilidad"]], outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 10, consts: [["cargaModalTermVolatility", ""], ["cargaModalSwekPoint", ""], ["cargaModalTipoCambio", ""], ["titulo", "Cargar Volatilidad", "subtitulo", "Registre un punto de la superficie de volatilidad.", "accion", "Registrar", 3, "cerrar", "guardar", "faltantes", "datos"], [1, "hig-seccion"], [1, "hig-cuadricula"], [1, "hig-campo"], ["for", "vo-c-fecProceso", 1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], ["id", "vo-c-fecProceso", "type", "date", "autocomplete", "off", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "vo-c-valor", 1, "form-label"], ["id", "vo-c-valor", "type", "number", "autocomplete", "off", "step", "any", "inputmode", "decimal", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hig-cuadricula", "hig-columnas-3"], ["for", "vo-c-idTermVolatility", 1, "form-label"], [1, "combo-contenedor"], ["labelForId", "vo-c-idTermVolatility", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "descripcionTermVolatility", "bindValue", "idTermVolatility", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar term. volatilidad", "aria-label", "Agregar term. volatilidad", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["aria-hidden", "true", 1, "icon"], ["for", "vo-c-idSwekPoint", 1, "form-label"], ["labelForId", "vo-c-idSwekPoint", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "point", "bindValue", "idSwekPoint", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar skew point", "aria-label", "Agregar skew point", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], ["for", "vo-c-idTipoCambio", 1, "form-label"], ["labelForId", "vo-c-idTipoCambio", "placeholder", "Seleccione una opci\xF3n\u2026", "bindLabel", "desTicker", "bindValue", "idTipoCambio", "required", "", 3, "ngModelChange", "items", "ngModel"], ["type", "button", "title", "Agregar tipo de cambio", "aria-label", "Agregar tipo de cambio", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [3, "close"]], template: function CargaVolatilidadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-modal-formulario", 3);
        \u0275\u0275listener("cerrar", function CargaVolatilidadComponent_Template_app_modal_formulario_cerrar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        })("guardar", function CargaVolatilidadComponent_Template_app_modal_formulario_guardar_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
        });
        \u0275\u0275elementStart(1, "fieldset", 4)(2, "legend");
        \u0275\u0275text(3, "Observaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "label", 7);
        \u0275\u0275text(7, "Fecha Proceso");
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function CargaVolatilidadComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.fecProceso, $event) || (ctx.nuevoRegistro.fecProceso = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "label", 10);
        \u0275\u0275text(13, "Valor");
        \u0275\u0275elementStart(14, "span", 8);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function CargaVolatilidadComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.valor, $event) || (ctx.nuevoRegistro.valor = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "fieldset", 4)(18, "legend");
        \u0275\u0275text(19, "Ubicaci\xF3n en la superficie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 6)(22, "label", 13);
        \u0275\u0275text(23, "Term. Volatilidad");
        \u0275\u0275elementStart(24, "span", 8);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14)(27, "ng-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function CargaVolatilidadComponent_Template_ng_select_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTermVolatility, $event) || (ctx.nuevoRegistro.idTermVolatility = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275listener("click", function CargaVolatilidadComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTermVolatility_r2 = \u0275\u0275reference(52);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTermVolatility_r2));
        });
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 6)(32, "label", 18);
        \u0275\u0275text(33, "Skew Point");
        \u0275\u0275elementStart(34, "span", 8);
        \u0275\u0275text(35, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 14)(37, "ng-select", 19);
        \u0275\u0275twoWayListener("ngModelChange", function CargaVolatilidadComponent_Template_ng_select_ngModelChange_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idSwekPoint, $event) || (ctx.nuevoRegistro.idSwekPoint = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 20);
        \u0275\u0275listener("click", function CargaVolatilidadComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalSwekPoint_r3 = \u0275\u0275reference(54);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalSwekPoint_r3));
        });
        \u0275\u0275elementStart(39, "span", 17);
        \u0275\u0275text(40, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 6)(42, "label", 21);
        \u0275\u0275text(43, "Tipo de Cambio");
        \u0275\u0275elementStart(44, "span", 8);
        \u0275\u0275text(45, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 14)(47, "ng-select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function CargaVolatilidadComponent_Template_ng_select_ngModelChange_47_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nuevoRegistro.idTipoCambio, $event) || (ctx.nuevoRegistro.idTipoCambio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 23);
        \u0275\u0275listener("click", function CargaVolatilidadComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalTipoCambio_r4 = \u0275\u0275reference(56);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalTipoCambio_r4));
        });
        \u0275\u0275elementStart(49, "span", 17);
        \u0275\u0275text(50, "+");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(51, CargaVolatilidadComponent_ng_template_51_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(53, CargaVolatilidadComponent_ng_template_53_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(55, CargaVolatilidadComponent_ng_template_55_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("faltantes", ctx.faltantes)("datos", ctx.nuevoRegistro);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.fecProceso);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.valor);
        \u0275\u0275advance(11);
        \u0275\u0275property("items", ctx.listTermVolatilidad);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTermVolatility);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listSkewPoint);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idSwekPoint);
        \u0275\u0275advance(10);
        \u0275\u0275property("items", ctx.listTipoCambio);
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevoRegistro.idTipoCambio);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, NgModel, MatIconModule, CargaTermVolatilidadComponent, CargaSkewPointComponent, CargaTipoCambioComponent, ModalFormularioComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=carga-volatilidad.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaVolatilidadComponent, { className: "CargaVolatilidadComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\carga-volatilidad\\carga-volatilidad.component.ts", lineNumber: 25 });
})();

// src/app/components/registro/mantenedor/factores/lista-volatilidad/lista-volatilidad.component.ts
var _c04 = ["paginator"];
var _c14 = ["sort"];
var _c24 = () => [10, 20, 50, 100];
function ListaVolatilidadComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.idVolatilitySurfacePoint);
  }
}
function ListaVolatilidadComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Fecha de Proceso");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, element_r4.fecProceso, "dd/MM/yyyy"));
  }
}
function ListaVolatilidadComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Tipo de Cambio");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.desTicker);
  }
}
function ListaVolatilidadComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Valor");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, element_r6.valor, "1.2-6"));
  }
}
function ListaVolatilidadComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Skew Point");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.point);
  }
}
function ListaVolatilidadComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Term Volatilidad");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.descripcionTermVolatility);
  }
}
function ListaVolatilidadComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35)(1, "span", 36);
    \u0275\u0275text(2, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function ListaVolatilidadComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 37)(1, "button", 38);
    \u0275\u0275listener("click", function ListaVolatilidadComponent_td_25_Template_button_click_1_listener($event) {
      const element_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.abrirMenuFila($event, element_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon", 39);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
}
function ListaVolatilidadComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function ListaVolatilidadComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41);
    \u0275\u0275listener("contextmenu", function ListaVolatilidadComponent_tr_27_Template_tr_contextmenu_0_listener($event) {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.onContextMenu($event, row_r13));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ListaVolatilidadComponent_ng_template_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r10 = \u0275\u0275nextContext();
      const editarModal_r15 = \u0275\u0275reference(38);
      return \u0275\u0275resetView(ctx_r10.editar(ctx_r10.selectedRow, editarModal_r15));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function ListaVolatilidadComponent_ng_template_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.eliminar(ctx_r10.selectedRow));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Eliminar ");
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-volatilidad", 43);
    \u0275\u0275listener("close", function ListaVolatilidadComponent_ng_template_35_Template_app_carga_volatilidad_close_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ListaVolatilidadComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-volatilidad", 44);
    \u0275\u0275listener("close", function ListaVolatilidadComponent_ng_template_37_Template_app_editar_volatilidad_close_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r10.filaEditar);
  }
}
var ListaVolatilidadComponent = class _ListaVolatilidadComponent {
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
    this.filaEditar = new Volatilidad();
    this.contextMenuPosition = { x: "0px", y: "0px" };
    this.displayedColumns = [
      "idVolatilitySurfacePoint",
      "fecProceso",
      "desTicker",
      "valor",
      "point",
      "descripcionTermVolatility",
      "acciones"
    ];
    this.cargando = true;
    this.mensajeError = "";
    this.total = 0;
    this.busqueda = "";
  }
  ngOnInit() {
    this.listarRegistros();
  }
  listarRegistros() {
    this.cargando = true;
    this.mensajeError = "";
    this.registroService.getListaVolatilidad().subscribe((response) => {
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
    import_sweetalert212.default.fire({
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
        this.registroService.eiminarVolatilidad(row.idVolatilitySurfacePoint).subscribe((response) => {
          this.listarRegistros();
          import_sweetalert212.default.fire({
            icon: "success",
            title: "Eliminaci\xF3n exitosa",
            text: "El registro ha sido eliminado correctamente.",
            confirmButtonText: "Aceptar"
          });
        }, (error) => {
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
  cerrarModal(event) {
    this.modalRef.close();
    this.listarRegistros();
  }
  static {
    this.\u0275fac = function ListaVolatilidadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListaVolatilidadComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RegistroService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaVolatilidadComponent, selectors: [["app-lista-volatilidad"]], viewQuery: function ListaVolatilidadComponent_Query(rf, ctx) {
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
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 20, consts: [["sort", "matSort"], ["paginator", ""], ["contextMenu", "matMenu"], ["cargaModal", ""], ["editarModal", ""], [1, "hig-tabla"], ["placeholder", "Buscar ticker, skew o plazo\u2026", "accion", "Agregar Volatilidad", 3, "buscar", "agregar", "total", "filtrados", "ocultarResumen", "texto"], [1, "tabla-contenedor"], ["mat-table", "", "matSort", "", "aria-label", "Superficie de volatilidad", 3, "dataSource"], ["matColumnDef", "idVolatilitySurfacePoint"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-id", 4, "matCellDef"], ["matColumnDef", "fecProceso"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desTicker"], ["matColumnDef", "valor"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col-num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-num", 4, "matCellDef"], ["matColumnDef", "point"], ["matColumnDef", "descripcionTermVolatility"], ["matColumnDef", "acciones", "stickyEnd", ""], ["mat-header-cell", "", "class", "col-acciones", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-acciones", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["tituloVacio", "No hay puntos de volatilidad", "detalleVacio", "Agregue el primero con el bot\xF3n \xABAgregar Volatilidad\xBB.", 3, "reintentar", "limpiar", "estado", "busqueda", "mensajeError"], ["showFirstLastButtons", "", "aria-label", "Paginaci\xF3n de volatilidad", 3, "pageSizeOptions", "pageSize"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["matMenuContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-id"], ["mat-cell", ""], [1, "fw-semibold"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-num"], ["mat-cell", "", 1, "col-num"], ["mat-header-cell", "", 1, "col-acciones"], [1, "solo-lector"], ["mat-cell", "", 1, "col-acciones"], ["type", "button", "aria-label", "Acciones del registro", 1, "btn-fila", 3, "click"], ["aria-hidden", "true"], ["mat-header-row", ""], ["mat-row", "", 3, "contextmenu"], ["mat-menu-item", "", 3, "click"], [3, "close"], [3, "close", "data"]], template: function ListaVolatilidadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "app-tabla-toolbar", 6);
        \u0275\u0275listener("buscar", function ListaVolatilidadComponent_Template_app_tabla_toolbar_buscar_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar($event));
        })("agregar", function ListaVolatilidadComponent_Template_app_tabla_toolbar_agregar_1_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModal_r2 = \u0275\u0275reference(36);
          return \u0275\u0275resetView(ctx.registrar(cargaModal_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 7)(3, "table", 8, 0);
        \u0275\u0275elementContainerStart(5, 9);
        \u0275\u0275template(6, ListaVolatilidadComponent_th_6_Template, 2, 0, "th", 10)(7, ListaVolatilidadComponent_td_7_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(8, 12);
        \u0275\u0275template(9, ListaVolatilidadComponent_th_9_Template, 2, 0, "th", 10)(10, ListaVolatilidadComponent_td_10_Template, 3, 4, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(11, 14);
        \u0275\u0275template(12, ListaVolatilidadComponent_th_12_Template, 2, 0, "th", 10)(13, ListaVolatilidadComponent_td_13_Template, 3, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(14, 15);
        \u0275\u0275template(15, ListaVolatilidadComponent_th_15_Template, 2, 0, "th", 16)(16, ListaVolatilidadComponent_td_16_Template, 3, 4, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(17, 18);
        \u0275\u0275template(18, ListaVolatilidadComponent_th_18_Template, 2, 0, "th", 10)(19, ListaVolatilidadComponent_td_19_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(20, 19);
        \u0275\u0275template(21, ListaVolatilidadComponent_th_21_Template, 2, 0, "th", 10)(22, ListaVolatilidadComponent_td_22_Template, 2, 1, "td", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(23, 20);
        \u0275\u0275template(24, ListaVolatilidadComponent_th_24_Template, 3, 0, "th", 21)(25, ListaVolatilidadComponent_td_25_Template, 4, 0, "td", 22);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(26, ListaVolatilidadComponent_tr_26_Template, 1, 0, "tr", 23)(27, ListaVolatilidadComponent_tr_27_Template, 1, 0, "tr", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "app-tabla-estado", 25);
        \u0275\u0275listener("reintentar", function ListaVolatilidadComponent_Template_app_tabla_estado_reintentar_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.listarRegistros());
        })("limpiar", function ListaVolatilidadComponent_Template_app_tabla_estado_limpiar_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.buscar(""));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "mat-paginator", 26, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "div", 27);
        \u0275\u0275elementStart(32, "mat-menu", null, 2);
        \u0275\u0275template(34, ListaVolatilidadComponent_ng_template_34_Template, 8, 0, "ng-template", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, ListaVolatilidadComponent_ng_template_35_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(37, ListaVolatilidadComponent_ng_template_37_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const contextMenu_r18 = \u0275\u0275reference(33);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total)("filtrados", ctx.filtrados)("ocultarResumen", ctx.cargando || !!ctx.mensajeError)("texto", ctx.busqueda);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(23);
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
        \u0275\u0275property("matMenuTriggerFor", contextMenu_r18);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, MatCheckboxModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, EditarVolatilidadComponent, CargaVolatilidadComponent, TablaToolbarComponent, TablaEstadoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaVolatilidadComponent, { className: "ListaVolatilidadComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\lista-volatilidad\\lista-volatilidad.component.ts", lineNumber: 26 });
})();

// src/app/components/registro/mantenedor/factores/mantenedor-factores/mantenedor-factores.component.ts
var _c05 = ["segmento"];
function MantenedorFactoresComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11, 0);
    \u0275\u0275listener("click", function MantenedorFactoresComponent_button_7_Template_button_click_0_listener() {
      const factor_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionar(factor_r2.id));
    })("keydown", function MantenedorFactoresComponent_button_7_Template_button_keydown_0_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.alTeclear($event, i_r4));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const factor_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("activo", factor_r2.id === ctx_r2.factorSeleccionado);
    \u0275\u0275property("id", "factor-tab-" + factor_r2.id);
    \u0275\u0275attribute("aria-selected", factor_r2.id === ctx_r2.factorSeleccionado)("tabindex", factor_r2.id === ctx_r2.factorSeleccionado ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", factor_r2.etiqueta, " ");
  }
}
function MantenedorFactoresComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var MantenedorFactoresComponent = class _MantenedorFactoresComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.factores = [
      { id: 1, etiqueta: "Tasa de Inter\xE9s", descripcion: "V\xE9rtices de las curvas de tasas de referencia.", componente: ListaTasaInteresComponent },
      { id: 2, etiqueta: "\xCDndice de Mercado", descripcion: "\xCDndices de referencia del mercado.", componente: ListaIndiceMercadoComponent },
      { id: 3, etiqueta: "Precio de Mercado", descripcion: "Precios hist\xF3ricos por instrumento y fecha; son la base del c\xE1lculo de VaR.", componente: ListaPrecioMercadoComponent },
      { id: 4, etiqueta: "Volatilidad", descripcion: "Superficie de volatilidad por plazo y punto de skew.", componente: ListaVolatilidadComponent }
    ];
    this.factorSeleccionado = 1;
  }
  ngOnInit() {
    const pedido = Number(this.route.snapshot.queryParamMap.get("factor"));
    if (this.factores.some((f) => f.id === pedido)) {
      this.factorSeleccionado = pedido;
    }
  }
  get actual() {
    return this.factores.find((f) => f.id === this.factorSeleccionado) ?? this.factores[0];
  }
  seleccionar(id) {
    if (id === this.factorSeleccionado) {
      return;
    }
    this.factorSeleccionado = id;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { factor: id },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  // Navegación con teclado del control segmentado: ← → Inicio Fin
  alTeclear(evento, indice) {
    const ultimo = this.factores.length - 1;
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
    this.seleccionar(this.factores[destino].id);
    this.segmentos.get(destino)?.nativeElement.focus();
  }
  static {
    this.\u0275fac = function MantenedorFactoresComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MantenedorFactoresComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MantenedorFactoresComponent, selectors: [["app-mantenedor-factores"]], viewQuery: function MantenedorFactoresComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.segmentos = _t);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [["segmento", ""], [1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "factores-subtitulo"], ["role", "tablist", "aria-label", "Tipo de factor", 1, "factores-segmentado"], ["type", "button", "role", "tab", "class", "factores-segmento", "aria-controls", "factor-panel", 3, "activo", "id", "click", "keydown", 4, "ngFor", "ngForOf"], ["id", "factor-panel", "role", "tabpanel", 1, "card", "factores-panel"], [1, "card-body"], [1, "factores-descripcion"], [4, "ngComponentOutlet"], ["type", "button", "role", "tab", "aria-controls", "factor-panel", 1, "factores-segmento", 3, "click", "keydown", "id"]], template: function MantenedorFactoresComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
        \u0275\u0275text(3, "Factores de Riesgo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, "Series de mercado que alimentan la valorizaci\xF3n y el c\xE1lculo de VaR.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, MantenedorFactoresComponent_button_7_Template, 3, 6, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "section", 7)(9, "div", 8)(10, "p", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, MantenedorFactoresComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.factores);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-labelledby", "factor-tab-" + ctx.factorSeleccionado);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.actual.descripcion);
        \u0275\u0275advance();
        \u0275\u0275property("ngComponentOutlet", ctx.actual.componente);
      }
    }, dependencies: [CommonModule, NgComponentOutlet, NgForOf], styles: ["\n\n.factores-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.875rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.factores-segmentado[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  max-width: 100%;\n  margin-bottom: 20px;\n  padding: 3px;\n  gap: 2px;\n  overflow-x: auto;\n  background: rgba(var(--dark-rgb), 0.07);\n  border-radius: 11px;\n}\n.factores-segmento[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 0 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  white-space: nowrap;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  transition: background-color 0.15s, box-shadow 0.15s;\n}\n.factores-segmento[_ngcontent-%COMP%]:hover:not(.activo) {\n  background: rgba(var(--dark-rgb), 0.08);\n}\n.factores-segmento.activo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: var(--custom-white);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(var(--dark-rgb), 0.1);\n}\n.factores-segmento[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--primary-rgb));\n  outline-offset: 2px;\n}\n[data-theme-mode=dark][_nghost-%COMP%]   .factores-segmento.activo[_ngcontent-%COMP%], [data-theme-mode=dark]   [_nghost-%COMP%]   .factores-segmento.activo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.16);\n}\n.factores-panel[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.factores-descripcion[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 0.875rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n@media (prefers-reduced-motion: reduce) {\n  .factores-segmento[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=mantenedor-factores.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MantenedorFactoresComponent, { className: "MantenedorFactoresComponent", filePath: "src\\app\\components\\registro\\mantenedor\\factores\\mantenedor-factores\\mantenedor-factores.component.ts", lineNumber: 23 });
})();
export {
  MantenedorFactoresComponent
};
//# sourceMappingURL=mantenedor-factores.component-ORKRSBND.js.map
