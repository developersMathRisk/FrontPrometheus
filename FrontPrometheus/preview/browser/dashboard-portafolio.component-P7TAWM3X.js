import {
  CargaAccionComponent,
  CargaBonoComponent,
  CargaFondoInversionComponent
} from "./chunk-YV4HKCPW.js";
import "./chunk-7UUZPDQ6.js";
import {
  CargaPortafolioComponent
} from "./chunk-TAS3LWN7.js";
import "./chunk-3Z7W44IR.js";
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
  FilePondComponent,
  FilePondModule
} from "./chunk-NJNQMACQ.js";
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
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  SharedModule
} from "./chunk-RADZCKPS.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
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
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/shared/models/portafolio/portafolio-instrumento.ts
var PortafolioInstrumento = class {
};

// src/app/components/registro/portafolio/carga-portafolio-producto/carga-portafolio-producto.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/shared/models/portafolio/benchmark.ts
var Benchmark = class {
};

// src/app/components/registro/portafolio/carga-portafolio-producto/carga-portafolio-producto.component.ts
var _c0 = ["cargaModalPortafolio"];
var _c1 = ["cargaModalBono"];
var _c2 = ["cargaModalAccion"];
var _c3 = ["cargaModalFondoInversion"];
var _c4 = ["paginator"];
var _c5 = ["sort"];
var _c6 = () => [8];
var _c7 = (a0) => ({ "active": a0 });
var _c8 = (a0) => ({ "selected": a0 });
function CargaPortafolioProductoComponent_ng_template_20_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("click", function CargaPortafolioProductoComponent_ng_template_20_a_18_Template_a_click_0_listener() {
      const portafolio_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionarPortafolio(portafolio_r5.idPortafolio));
    });
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const portafolio_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c7, portafolio_r5.idPortafolio === ctx_r2.idPortafolioSeleccionado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(portafolio_r5.descripcionPortafolio);
  }
}
function CargaPortafolioProductoComponent_ng_template_20_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function CargaPortafolioProductoComponent_ng_template_20_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirModalSecundario("instrumento"));
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd()();
  }
}
function CargaPortafolioProductoComponent_ng_template_20_a_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275listener("click", function CargaPortafolioProductoComponent_ng_template_20_a_30_Template_a_click_0_listener() {
      const instrumento_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionarInstrumento(instrumento_r8.codBenchmark));
    });
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const instrumento_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c8, instrumento_r8.codBenchmark === ctx_r2.idInstrumentoSeleccionado));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(instrumento_r8.descripcionBenchmark);
  }
}
function CargaPortafolioProductoComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3, " Relaci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 41)(6, "div", 42)(7, "div", 16)(8, "div", 24)(9, "div", 43)(10, "div", 44);
    \u0275\u0275text(11, " Portafolio ");
    \u0275\u0275elementStart(12, "button", 45);
    \u0275\u0275listener("click", function CargaPortafolioProductoComponent_ng_template_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirModalSecundario("portafolio"));
    });
    \u0275\u0275elementStart(13, "span", 46);
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_ng_template_20_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.txtFiltroNombrePortafolio, $event) || (ctx_r2.txtFiltroNombrePortafolio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CargaPortafolioProductoComponent_ng_template_20_Template_input_input_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtrarPortafolios());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 48);
    \u0275\u0275template(18, CargaPortafolioProductoComponent_ng_template_20_a_18_Template, 3, 4, "a", 49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 42)(20, "div", 16)(21, "div", 24)(22, "div", 43)(23, "div", 44);
    \u0275\u0275text(24, " Instrumento ");
    \u0275\u0275elementStart(25, "ng-select", 50);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_ng_template_20_Template_ng_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.idTipoInstrumentoSeleccionado, $event) || (ctx_r2.idTipoInstrumentoSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CargaPortafolioProductoComponent_ng_template_20_Template_ng_select_change_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtrarInstrumentos());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CargaPortafolioProductoComponent_ng_template_20_button_26_Template, 3, 0, "button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_ng_template_20_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.txtFiltroNombreInstrumento, $event) || (ctx_r2.txtFiltroNombreInstrumento = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CargaPortafolioProductoComponent_ng_template_20_Template_input_input_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtrarInstrumentos());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 17)(29, "div", 53);
    \u0275\u0275template(30, CargaPortafolioProductoComponent_ng_template_20_a_30_Template, 3, 4, "a", 54);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(31, "div", 16)(32, "div", 24)(33, "div", 25);
    \u0275\u0275text(34, " Atributos de la relaci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 17)(36, "div", 41)(37, "div", 55)(38, "label", 56);
    \u0275\u0275text(39, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_ng_template_20_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.objPortafolioInstrumento.cantidad, $event) || (ctx_r2.objPortafolioInstrumento.cantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 55)(42, "label", 56);
    \u0275\u0275text(43, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_ng_template_20_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.objPortafolioInstrumento.precio, $event) || (ctx_r2.objPortafolioInstrumento.precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 55)(46, "label", 56);
    \u0275\u0275text(47, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_ng_template_20_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.objPortafolioInstrumento.fechaValor, $event) || (ctx_r2.objPortafolioInstrumento.fechaValor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(49, "br");
    \u0275\u0275elementStart(50, "button", 40);
    \u0275\u0275listener("click", function CargaPortafolioProductoComponent_ng_template_20_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarRelacion());
    });
    \u0275\u0275text(51, "Agregar");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.txtFiltroNombrePortafolio);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.listPortafolioFiltrado);
    \u0275\u0275advance(7);
    \u0275\u0275property("items", ctx_r2.listTipoInstrumento)("searchable", false);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.idTipoInstrumentoSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.idTipoInstrumentoSeleccionado != 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.txtFiltroNombreInstrumento);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.listBenchmarkFiltrado);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.objPortafolioInstrumento.cantidad);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.objPortafolioInstrumento.precio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.objPortafolioInstrumento.fechaValor);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(ctx_r2.idInstrumentoSeleccionado != "" && ctx_r2.idPortafolioSeleccionado != 0 && ctx_r2.objPortafolioInstrumento.cantidad && ctx_r2.objPortafolioInstrumento.precio && ctx_r2.objPortafolioInstrumento.fechaValor));
  }
}
function CargaPortafolioProductoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "file-pond", 62, 7);
    \u0275\u0275listener("oninit", function CargaPortafolioProductoComponent_ng_template_25_Template_file_pond_oninit_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pondHandleInit());
    })("onaddfile", function CargaPortafolioProductoComponent_ng_template_25_Template_file_pond_onaddfile_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pondHandleAddFile($event));
    })("onactivatefile", function CargaPortafolioProductoComponent_ng_template_25_Template_file_pond_onactivatefile_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pondHandleActivateFile($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.singlepondOptions)("files", ctx_r2.pondFiles);
  }
}
function CargaPortafolioProductoComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 64)(1, "button", 65);
    \u0275\u0275listener("click", function CargaPortafolioProductoComponent_td_39_Template_button_click_1_listener() {
      const element_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminarRelacion(element_r11));
    });
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementEnd()();
  }
}
function CargaPortafolioProductoComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Portafolio");
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r12.descripcionPortafolio);
  }
}
function CargaPortafolioProductoComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Instrumento");
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r13.codticker);
  }
}
function CargaPortafolioProductoComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Cantidad");
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 64)(1, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_td_48_Template_input_ngModelChange_1_listener($event) {
      const element_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(element_r15.cantidad, $event) || (element_r15.cantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r15.cantidad);
  }
}
function CargaPortafolioProductoComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Precio");
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 64)(1, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_td_51_Template_input_ngModelChange_1_listener($event) {
      const element_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(element_r17.precio, $event) || (element_r17.precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r17.precio);
  }
}
function CargaPortafolioProductoComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 64)(1, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function CargaPortafolioProductoComponent_td_54_Template_input_ngModelChange_1_listener($event) {
      const element_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(element_r19.fechaValor, $event) || (element_r19.fechaValor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", element_r19.fechaValor);
  }
}
function CargaPortafolioProductoComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 69);
  }
}
function CargaPortafolioProductoComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 70);
  }
}
function CargaPortafolioProductoComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-portafolio", 71);
    \u0275\u0275listener("close", function CargaPortafolioProductoComponent_ng_template_63_Template_app_carga_portafolio_close_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-bono", 71);
    \u0275\u0275listener("close", function CargaPortafolioProductoComponent_ng_template_65_Template_app_carga_bono_close_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-accion", 71);
    \u0275\u0275listener("close", function CargaPortafolioProductoComponent_ng_template_67_Template_app_carga_accion_close_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CargaPortafolioProductoComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-fondo-inversion", 71);
    \u0275\u0275listener("close", function CargaPortafolioProductoComponent_ng_template_69_Template_app_carga_fondo_inversion_close_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalSecundario($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CargaPortafolioProductoComponent = class _CargaPortafolioProductoComponent {
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.close = new EventEmitter();
    this.dsResumen = new MatTableDataSource();
    this.displayedColumns = [
      "accion",
      "fechaValor",
      "descripcionPortafolio",
      // 'codISIN',
      "codticker",
      "cantidad",
      "precio"
    ];
    this.listPortafolio = [];
    this.listPortafolioFiltrado = [];
    this.listBenchmark = [];
    this.listBenchmarkFiltrado = [];
    this.listTipoInstrumento = [];
    this.listPortafolioInstrumento = [];
    this.objPortafolioInstrumento = new PortafolioInstrumento();
    this.idPortafolio = "";
    this.idInstrumentoSeleccionado = "";
    this.idPortafolioSeleccionado = 0;
    this.idTipoInstrumentoSeleccionado = 0;
    this.objBenchmark = new Benchmark();
    this.txtFiltroNombrePortafolio = "";
    this.txtFiltroNombreInstrumento = "";
    this.txtDesPortafolioSeleccionado = "";
    this.singlepondOptions = {
      allowMultiple: false,
      labelIdle: "Seleccione un archivo o arr\xE1stelo aqu\xED..."
    };
    this.pondFiles = [];
  }
  ngOnInit() {
    this.obtenerListPortafolio();
    this.obtenerListBenchmark();
    this.obtenerListTipoInstrumento();
  }
  obtenerListPortafolio() {
    this.registroService.getListaPortafolio().subscribe((response) => {
      this.listPortafolio = response;
      this.listPortafolioFiltrado = this.listPortafolio;
    });
  }
  obtenerListBenchmark() {
    this.registroService.getListaBenchmark().subscribe((response) => {
      this.listBenchmark = response.filter((i) => i.idTipoInstrumento != null);
      this.listBenchmarkFiltrado = this.listBenchmark;
      this.filtrarInstrumentos();
    });
  }
  obtenerListTipoInstrumento() {
    this.registroService.getListaTipoInstrumento().subscribe((response) => {
      this.listTipoInstrumento = [
        { idTipoInstrumento: 0, descripcionTipoInstrumento: "Todos" },
        ...response
      ];
    });
  }
  nuevoPortafolio() {
  }
  cerrar() {
    this.close.emit();
  }
  abrirModalSecundario(tipoModal) {
    let modal;
    if (tipoModal == "portafolio") {
      modal = this.cargaModalPortafolio;
    } else if (tipoModal == "instrumento") {
      switch (this.idTipoInstrumentoSeleccionado) {
        case 1:
          modal = this.cargaModalAccion;
          break;
        case 2:
          modal = this.cargaModalBono;
          break;
        case 3:
          modal = this.cargaModalFondoInversion;
          break;
      }
    }
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario(event) {
    this.modalRef.close();
    this.obtenerListPortafolio();
    this.obtenerListBenchmark();
    this.obtenerListTipoInstrumento();
  }
  pondHandleInit() {
  }
  pondHandleAddFile(event) {
  }
  pondHandleActivateFile(event) {
  }
  seleccionarPortafolio(id) {
    this.idPortafolioSeleccionado = id;
  }
  seleccionarInstrumento(id) {
    this.idInstrumentoSeleccionado = id;
    this.objBenchmark = this.listBenchmarkFiltrado.filter((e) => e.codBenchmark == this.idInstrumentoSeleccionado)[0];
  }
  agregarRelacion() {
    this.objPortafolioInstrumento.idPortafolio = this.idPortafolioSeleccionado;
    this.objPortafolioInstrumento.idTipoInstrumento = this.objBenchmark.idTipoInstrumento;
    this.objPortafolioInstrumento.codISIN = this.objBenchmark.codBenchmark;
    this.objPortafolioInstrumento.codticker = this.objBenchmark.descripcionBenchmark;
    this.objPortafolioInstrumento.descripcionPortafolio = this.listPortafolio.filter((e) => e.idPortafolio == this.idPortafolioSeleccionado)[0].descripcionPortafolio;
    this.listPortafolioInstrumento.push(this.objPortafolioInstrumento);
    this.dsResumen = new MatTableDataSource(this.listPortafolioInstrumento);
    this.dsResumen.paginator = this.paginator;
    this.dsResumen.sort = this.sort;
    this.objPortafolioInstrumento = new PortafolioInstrumento();
    this.idPortafolioSeleccionado = 0;
    this.idInstrumentoSeleccionado = "";
  }
  eliminarRelacion(element) {
    this.listPortafolioInstrumento = this.listPortafolioInstrumento.filter((obj) => obj !== element);
    this.dsResumen = new MatTableDataSource(this.listPortafolioInstrumento);
    this.dsResumen.paginator = this.paginator;
    this.dsResumen.sort = this.sort;
    this.objPortafolioInstrumento = new PortafolioInstrumento();
  }
  registrar() {
    this.listPortafolioInstrumento.map((e) => e.descripcionPortafolio = "");
    this.registroService.postRegistrarPortafolioInstrumentoMasivo(this.listPortafolioInstrumento).subscribe((response) => {
      import_sweetalert2.default.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "La asignaci\xF3n ha sido registrada correctamente.",
        confirmButtonText: "Aceptar"
      });
      this.idPortafolioSeleccionado = 0;
      this.idInstrumentoSeleccionado = "";
      this.listPortafolioInstrumento = [];
      this.dsResumen = new MatTableDataSource(this.listPortafolioInstrumento);
      this.dsResumen.paginator = this.paginator;
      this.dsResumen.sort = this.sort;
      this.objPortafolioInstrumento = new PortafolioInstrumento();
    }, (error) => {
      import_sweetalert2.default.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        confirmButtonText: "Aceptar"
      });
    });
  }
  filtrarInstrumentos() {
    const filtro = this.txtFiltroNombreInstrumento.toLowerCase();
    this.listBenchmarkFiltrado = this.listBenchmark.filter((i) => (this.idTipoInstrumentoSeleccionado == 0 || i.idTipoInstrumento == this.idTipoInstrumentoSeleccionado) && i.descripcionBenchmark?.toLowerCase().includes(filtro));
  }
  filtrarPortafolios() {
    const filtro = this.txtFiltroNombrePortafolio.toLowerCase();
    this.listPortafolioFiltrado = this.listPortafolio.filter((p) => p.descripcionPortafolio?.toLowerCase().includes(filtro));
  }
  static {
    this.\u0275fac = function CargaPortafolioProductoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CargaPortafolioProductoComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaPortafolioProductoComponent, selectors: [["app-carga-portafolio-producto"]], viewQuery: function CargaPortafolioProductoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cargaModalPortafolio = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cargaModalBono = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cargaModalAccion = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cargaModalFondoInversion = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 9, consts: [["nav", "ngbNav"], ["sort", "matSort"], ["paginator", ""], ["cargaModalPortafolio", ""], ["cargaModalBono", ""], ["cargaModalAccion", ""], ["cargaModalFondoInversion", ""], ["myPond", ""], ["id", "myModal", "tabindex", "-1", "data-keyboard", "false", "role", "dialog"], ["role", "document", 1, "msg_card_body", 2, "width", "100%"], [1, "modal-header"], [2, "width", "100%"], [2, "text-align", "left", "padding", "0% 0% 0.5% 1%"], [1, "modal-title"], [2, "text-align", "right", "padding-right", "1.3%"], ["type", "button", 1, "icon-close", 3, "click"], [1, "card"], [1, "card-body"], ["ngbNav", "", 1, "nav", "nav-tabs", "nav-justified", "mb-4", "tab-style-6", "p-0", "d-block", "d-sm-flex"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "data-toggle", "tab", 1, "nav-link", "icon-btn", "d-flex", "align-items-center", "justify-content-center", "gap-1", "text-nowrap"], [1, "d-sm-inline"], ["ngbNavContent", ""], [1, "tab-content", "customtab", 3, "ngbNavOutlet"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title", "d-flex", "align-items-center", "gap-2"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "demo-table", "mt-3", 3, "dataSource"], ["matColumnDef", "accion"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcionPortafolio"], ["matColumnDef", "codticker"], ["matColumnDef", "cantidad"], ["matColumnDef", "precio"], ["matColumnDef", "fechaValor"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Seleccione la p\xE1gina", 3, "pageSizeOptions"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "row"], [1, "col-xl-6"], [1, "card-title", "d-flex", "flex-column", "gap-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "icon"], ["type", "text", "placeholder", "Buscar Portafolio", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "list-group"], ["href", "javascript:void(0);", "aria-current", "true", "class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Seleccione una opci\xF3n...", "bindLabel", "descripcionTipoInstrumento", "bindValue", "idTipoInstrumento", 1, "me-2", 2, "min-width", "200px", 3, "ngModelChange", "change", "items", "searchable", "ngModel"], ["class", "btn btn-outline-primary btn-wave btn-agregar", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Buscar Instrumento", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "list-group", "grid-columns"], ["href", "javascript:void(0);", "class", "custom-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "form-label"], ["type", "number", "placeholder", "Cantidad", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Precio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", "aria-current", "true", 1, "list-group-item", "list-group-item-action", 3, "click", "ngClass"], ["href", "javascript:void(0);", 1, "custom-item", 3, "click", "ngClass"], [1, "multiple-fileupload", 3, "oninit", "onaddfile", "onactivatefile", "options", "files"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-trash"], ["type", "number", "placeholder", "Cantidad", 1, "form-control", 2, "width", "100px", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Precio", 1, "form-control", 2, "width", "100px", 3, "ngModelChange", "ngModel"], ["mat-header-row", ""], ["mat-row", ""], [3, "close"]], template: function CargaPortafolioProductoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "table", 11)(4, "tr", 11)(5, "td", 12)(6, "h3", 13);
        \u0275\u0275text(7, "Asignar Portafolio con Producto");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "td", 14)(9, "button", 15);
        \u0275\u0275listener("click", function CargaPortafolioProductoComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrar());
        });
        \u0275\u0275elementStart(10, "mat-icon");
        \u0275\u0275text(11, "close");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(12, "div", 16)(13, "div", 17)(14, "ul", 18, 0)(16, "li", 19)(17, "a", 20)(18, "span", 21);
        \u0275\u0275text(19, "Cargar manualmente");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, CargaPortafolioProductoComponent_ng_template_20_Template, 52, 12, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li", 19)(22, "a", 20)(23, "span", 21);
        \u0275\u0275text(24, "Cargar desde archivo");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, CargaPortafolioProductoComponent_ng_template_25_Template, 3, 2, "ng-template", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "div", 23)(27, "br");
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 24)(30, "div", 25);
        \u0275\u0275text(31, " Resumen ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 17)(33, "div")(34, "div", 26)(35, "table", 27, 1);
        \u0275\u0275elementContainerStart(37, 28);
        \u0275\u0275template(38, CargaPortafolioProductoComponent_th_38_Template, 2, 0, "th", 29)(39, CargaPortafolioProductoComponent_td_39_Template, 3, 0, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(40, 31);
        \u0275\u0275template(41, CargaPortafolioProductoComponent_th_41_Template, 2, 0, "th", 29)(42, CargaPortafolioProductoComponent_td_42_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(43, 32);
        \u0275\u0275template(44, CargaPortafolioProductoComponent_th_44_Template, 2, 0, "th", 29)(45, CargaPortafolioProductoComponent_td_45_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(46, 33);
        \u0275\u0275template(47, CargaPortafolioProductoComponent_th_47_Template, 2, 0, "th", 29)(48, CargaPortafolioProductoComponent_td_48_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(49, 34);
        \u0275\u0275template(50, CargaPortafolioProductoComponent_th_50_Template, 2, 0, "th", 29)(51, CargaPortafolioProductoComponent_td_51_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(52, 35);
        \u0275\u0275template(53, CargaPortafolioProductoComponent_th_53_Template, 2, 0, "th", 29)(54, CargaPortafolioProductoComponent_td_54_Template, 2, 1, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(55, CargaPortafolioProductoComponent_tr_55_Template, 1, 0, "tr", 36)(56, CargaPortafolioProductoComponent_tr_56_Template, 1, 0, "tr", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(57, "mat-paginator", 38, 2);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(59, "div", 39)(60, "button", 40);
        \u0275\u0275listener("click", function CargaPortafolioProductoComponent_Template_button_click_60_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.registrar());
        });
        \u0275\u0275text(61, "Registrar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "br");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(63, CargaPortafolioProductoComponent_ng_template_63_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(65, CargaPortafolioProductoComponent_ng_template_65_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(67, CargaPortafolioProductoComponent_ng_template_67_Template, 1, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(69, CargaPortafolioProductoComponent_ng_template_69_Template, 1, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const nav_r24 = \u0275\u0275reference(15);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngbNavItem", 1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngbNavOutlet", nav_r24);
        \u0275\u0275advance(9);
        \u0275\u0275property("dataSource", ctx.dsResumen);
        \u0275\u0275advance(20);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(8, _c6));
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !(ctx.listPortafolioInstrumento.length > 0));
      }
    }, dependencies: [MatIconModule, MatIcon, NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, FilePondModule, FilePondComponent, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, CommonModule, NgClass, NgForOf, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, CargaPortafolioComponent, CargaBonoComponent, CargaAccionComponent, CargaFondoInversionComponent], styles: ['@charset "UTF-8";\n\n\n\n.icon-close[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n  outline: none !important;\n}\n.combo-contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nng-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 50%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.grid-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.custom-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  background-color: #fff;\n  text-decoration: none;\n  color: inherit;\n  transition: background-color 0.2s, border-color 0.2s;\n}\n.custom-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.custom-item.selected[_ngcontent-%COMP%] {\n  border-color: rgb(68, 84, 195);\n  background-color: rgb(68, 84, 195);\n  color: #fff;\n}\n/*# sourceMappingURL=carga-portafolio-producto.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaPortafolioProductoComponent, { className: "CargaPortafolioProductoComponent", filePath: "src\\app\\components\\registro\\portafolio\\carga-portafolio-producto\\carga-portafolio-producto.component.ts", lineNumber: 31 });
})();

// src/app/components/registro/portafolio/dashboard-portafolio/dashboard-portafolio.component.ts
var _c02 = ["chart"];
var _c12 = ["paginatorResumen"];
var _c22 = ["sortResumen"];
var _c32 = () => [10, 20, 50];
function DashboardPortafolioComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, element_r3.fechaValor, "dd/MM/yyyy"), " ");
  }
}
function DashboardPortafolioComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Portafolio");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r4.descripcionPortafolio, " ");
  }
}
function DashboardPortafolioComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Tipo Instrumento");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r5.descripcionTipoInstrumento, " ");
  }
}
function DashboardPortafolioComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "ISIN");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r6.codISIN, " ");
  }
}
function DashboardPortafolioComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Ticker");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r7.codticker, " ");
  }
}
function DashboardPortafolioComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Cantidad");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r8.cantidad, " ");
  }
}
function DashboardPortafolioComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Precio");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r9.precio, " ");
  }
}
function DashboardPortafolioComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Total");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, element_r10.cantidad * element_r10.precio, "1.2-2"), " ");
  }
}
function DashboardPortafolioComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 52);
  }
}
function DashboardPortafolioComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function DashboardPortafolioComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "apx-chart", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r10.chartOptions2.series)("chart", ctx_r10.chartOptions2.chart)("labels", ctx_r10.chartOptions2.labels)("legend", ctx_r10.chartOptions2.legend)("colors", ctx_r10.chartOptions2.colors)("dataLabels", ctx_r10.chartOptions2.dataLabels);
  }
}
function DashboardPortafolioComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1, "Seleccione un portafolio con posiciones para ver la distribuci\xF3n por tipo de instrumento.");
    \u0275\u0275elementEnd();
  }
}
function DashboardPortafolioComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-portafolio-producto", 56);
    \u0275\u0275listener("close", function DashboardPortafolioComponent_ng_template_107_Template_app_carga_portafolio_producto_close_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.cerrarModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
var COLORES_DISTRIBUCION = ["rgb(68,84,195)", "rgb(247,45,102)", "rgb(45,206,137)", "rgb(240,165,30)", "rgb(90,90,90)"];
var DashboardPortafolioComponent = class _DashboardPortafolioComponent {
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.fechaConsulta = (/* @__PURE__ */ new Date()).toLocaleDateString("sv-SE");
    this.listaPortafolio = [];
    this.idPortafolioSeleccionado = 0;
    this.chartOptions2 = { series: [], labels: [] };
    this.valorMercadoTotal = 0;
    this.listDataResumen = [];
    this.listDataResumenFiltrado = [];
    this.displayedColumnsResumen = [
      "fechaValor",
      "descripcionPortafolio",
      "descripcionTipoInstrumento",
      "codISIN",
      "codticker",
      "cantidad",
      "precio",
      "total"
    ];
  }
  ngOnInit() {
    this.obtenerListPortafolio();
    this.obtenerListPortafolioInstrumento();
  }
  obtenerListPortafolio() {
    this.registroService.getListaPortafolio().subscribe((response) => {
      this.listaPortafolio = response;
      this.listaPortafolio = [
        { idPortafolio: 0, descripcionPortafolio: "Todos" },
        ...response
      ];
    });
  }
  obtenerListPortafolioInstrumento() {
    this.registroService.getListaPortafolioInstrumento().subscribe((response) => {
      this.listDataResumen = response;
      this.listDataResumenFiltrado = this.listDataResumen;
      this.dsResumen = new MatTableDataSource(this.listDataResumenFiltrado);
      this.dsResumen.paginator = this.paginatorResumen;
      this.dsResumen.sort = this.sortResumen;
      this.filtrarPortafolioInstrumentoResumen();
    });
  }
  cerrarModal(event) {
    this.modalRef.close();
    this.obtenerListPortafolio();
    this.obtenerListPortafolioInstrumento();
  }
  registrar(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  filtrarPortafolioInstrumentoResumen() {
    this.listDataResumenFiltrado = this.listDataResumen.filter((e) => (this.idPortafolioSeleccionado == 0 || e.idPortafolio == this.idPortafolioSeleccionado) && (this.fechaConsulta ? new Date(e.fechaValor).toISOString().slice(0, 10) === this.fechaConsulta : true));
    this.dsResumen = new MatTableDataSource(this.listDataResumenFiltrado);
    this.dsResumen.paginator = this.paginatorResumen;
    this.dsResumen.sort = this.sortResumen;
    this.recalcularIndicadores();
  }
  // Valor de mercado total y distribución por tipo de instrumento, calculados a partir de las
  // posiciones reales ya filtradas (nada de cifras de ejemplo).
  recalcularIndicadores() {
    this.valorMercadoTotal = this.listDataResumenFiltrado.reduce((acc, p) => acc + (p.cantidad ?? 0) * (p.precio ?? 0), 0);
    const valorPorTipo = /* @__PURE__ */ new Map();
    for (const p of this.listDataResumenFiltrado) {
      const tipo = p.descripcionTipoInstrumento || "Sin clasificar";
      valorPorTipo.set(tipo, (valorPorTipo.get(tipo) ?? 0) + (p.cantidad ?? 0) * (p.precio ?? 0));
    }
    const etiquetas = Array.from(valorPorTipo.keys());
    this.chartOptions2 = {
      series: Array.from(valorPorTipo.values()),
      labels: etiquetas,
      chart: { height: 200, type: "donut" },
      dataLabels: { enabled: true },
      legend: { show: true, customLegendItems: etiquetas },
      colors: COLORES_DISTRIBUCION
    };
  }
  static {
    this.\u0275fac = function DashboardPortafolioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardPortafolioComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPortafolioComponent, selectors: [["app-dashboard-portafolio"]], viewQuery: function DashboardPortafolioComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginatorResumen = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sortResumen = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 109, vars: 14, consts: [["sortResumen", "matSort"], ["paginatorResumen", ""], ["sinDistribucion", ""], ["cargaPortafolioModal", ""], [1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "page-title", "my-auto", 2, "white-space", "nowrap"], ["placeholder", "Seleccione un portafolio..", "name", "select-producto", "bindLabel", "descripcionPortafolio", "bindValue", "idPortafolio", 2, "margin-left", "10px", "width", "250px", 3, "change", "ngModelChange", "items", "ngModel"], [1, "page-title", "my-auto"], ["type", "date", 1, "form-control", 2, "width", "200px", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "px-4", "py-2", 3, "click"], [1, "row"], [1, "col-xl-8", "col-md-12"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "card-body"], ["id", "mat-sorting"], [1, "mat-elevation-z8"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "fechaValor"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcionPortafolio"], ["matColumnDef", "descripcionTipoInstrumento"], ["matColumnDef", "codISIN"], ["matColumnDef", "codticker"], ["matColumnDef", "cantidad"], ["matColumnDef", "precio"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "col-xl-4", "col-md-12"], [1, "col-xl-6", "col-lg-6", "col-md-12"], [1, "mb-1", "fw-bold"], [1, "mb-1"], [1, "card-body", "hig-kpi-pendiente"], [1, "hig-kpi-pendiente__nota"], [1, "col-xl-6", "col-md-12"], [1, "card", "overflow-hidden"], [1, "card-header"], [1, "card-title"], [1, "card-body", "mx-auto", "text-center"], ["class", "chart-container2", 4, "ngIf", "ngIfElse"], [1, "card", "hig-placeholder"], ["aria-hidden", "true"], [1, "hig-placeholder__titulo"], [1, "hig-placeholder__texto"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "chart-container2"], ["height", "260", "width", "320", "id", "Statistics", 1, "canvasDoughnut2", 3, "series", "chart", "labels", "legend", "colors", "dataLabels"], [3, "close"]], template: function DashboardPortafolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h1", 6);
        \u0275\u0275text(3, "Portafolio: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ng-select", 7);
        \u0275\u0275listener("change", function DashboardPortafolioComponent_Template_ng_select_change_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filtrarPortafolioInstrumentoResumen());
        });
        \u0275\u0275twoWayListener("ngModelChange", function DashboardPortafolioComponent_Template_ng_select_ngModelChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.idPortafolioSeleccionado, $event) || (ctx.idPortafolioSeleccionado = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 8);
        \u0275\u0275text(6, "al");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DashboardPortafolioComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.fechaConsulta, $event) || (ctx.fechaConsulta = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function DashboardPortafolioComponent_Template_input_ngModelChange_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filtrarPortafolioInstrumentoResumen());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div")(9, "button", 10);
        \u0275\u0275listener("click", function DashboardPortafolioComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaPortafolioModal_r2 = \u0275\u0275reference(108);
          return \u0275\u0275resetView(ctx.registrar(cargaPortafolioModal_r2));
        });
        \u0275\u0275text(10, "Cargar Portafolio");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "h5", 15);
        \u0275\u0275text(16, "Posiciones");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "table", 20, 0);
        \u0275\u0275elementContainerStart(23, 21);
        \u0275\u0275template(24, DashboardPortafolioComponent_th_24_Template, 2, 0, "th", 22)(25, DashboardPortafolioComponent_td_25_Template, 3, 4, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(26, 24);
        \u0275\u0275template(27, DashboardPortafolioComponent_th_27_Template, 2, 0, "th", 22)(28, DashboardPortafolioComponent_td_28_Template, 2, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(29, 25);
        \u0275\u0275template(30, DashboardPortafolioComponent_th_30_Template, 2, 0, "th", 22)(31, DashboardPortafolioComponent_td_31_Template, 2, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 26);
        \u0275\u0275template(33, DashboardPortafolioComponent_th_33_Template, 2, 0, "th", 22)(34, DashboardPortafolioComponent_td_34_Template, 2, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 27);
        \u0275\u0275template(36, DashboardPortafolioComponent_th_36_Template, 2, 0, "th", 22)(37, DashboardPortafolioComponent_td_37_Template, 2, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 28);
        \u0275\u0275template(39, DashboardPortafolioComponent_th_39_Template, 2, 0, "th", 22)(40, DashboardPortafolioComponent_td_40_Template, 2, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(41, 29);
        \u0275\u0275template(42, DashboardPortafolioComponent_th_42_Template, 2, 0, "th", 22)(43, DashboardPortafolioComponent_td_43_Template, 2, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(44, 30);
        \u0275\u0275template(45, DashboardPortafolioComponent_th_45_Template, 2, 0, "th", 22)(46, DashboardPortafolioComponent_td_46_Template, 3, 4, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(47, DashboardPortafolioComponent_tr_47_Template, 1, 0, "tr", 31)(48, DashboardPortafolioComponent_tr_48_Template, 1, 0, "tr", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(49, "mat-paginator", 33, 1);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(51, "div", 34)(52, "div", 11)(53, "div", 35)(54, "div", 13)(55, "div", 16)(56, "h2", 36);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 37);
        \u0275\u0275text(60, "Valor de Mercado Total");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(61, "div", 35)(62, "div", 13)(63, "div", 38)(64, "h2", 36);
        \u0275\u0275text(65, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p", 37);
        \u0275\u0275text(67, "PnL Portafolio ");
        \u0275\u0275elementStart(68, "span", 39);
        \u0275\u0275text(69, "(pendiente)");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(70, "div", 11)(71, "div", 35)(72, "div", 13)(73, "div", 38)(74, "h2", 36);
        \u0275\u0275text(75, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 37);
        \u0275\u0275text(77, "Rendimiento ");
        \u0275\u0275elementStart(78, "span", 39);
        \u0275\u0275text(79, "(pendiente)");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "div", 35)(81, "div", 13)(82, "div", 38)(83, "h2", 36);
        \u0275\u0275text(84, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 37);
        \u0275\u0275text(86, "Duraci\xF3n ");
        \u0275\u0275elementStart(87, "span", 39);
        \u0275\u0275text(88, "(pendiente)");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(89, "div", 11)(90, "div", 40)(91, "div", 41)(92, "div", 42)(93, "h3", 43);
        \u0275\u0275text(94, "Distribuci\xF3n por Instrumento");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 44);
        \u0275\u0275template(96, DashboardPortafolioComponent_div_96_Template, 2, 6, "div", 45)(97, DashboardPortafolioComponent_ng_template_97_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(99, "div", 40)(100, "div", 46)(101, "mat-icon", 47);
        \u0275\u0275text(102, "construction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "h3", 48);
        \u0275\u0275text(104, "Madurez del portafolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "p", 49);
        \u0275\u0275text(106, " Requiere datos de vencimiento y duraci\xF3n de los instrumentos de renta fija, que este motor todav\xEDa no modela. Pr\xF3ximamente. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(107, DashboardPortafolioComponent_ng_template_107_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const sinDistribucion_r13 = \u0275\u0275reference(98);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.listaPortafolio);
        \u0275\u0275twoWayProperty("ngModel", ctx.idPortafolioSeleccionado);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.fechaConsulta);
        \u0275\u0275advance(14);
        \u0275\u0275property("dataSource", ctx.dsResumen);
        \u0275\u0275advance(26);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumnsResumen);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumnsResumen);
        \u0275\u0275advance();
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(13, _c32));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 10, ctx.valorMercadoTotal, "1.2-2"));
        \u0275\u0275advance(39);
        \u0275\u0275property("ngIf", ctx.chartOptions2.series == null ? null : ctx.chartOptions2.series.length)("ngIfElse", sinDistribucion_r13);
      }
    }, dependencies: [SharedModule, NgApexchartsModule, ChartComponent, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatIconModule, MatIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent, CommonModule, NgIf, DecimalPipe, DatePipe, CargaPortafolioProductoComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPortafolioComponent, { className: "DashboardPortafolioComponent", filePath: "src\\app\\components\\registro\\portafolio\\dashboard-portafolio\\dashboard-portafolio.component.ts", lineNumber: 27 });
})();
export {
  DashboardPortafolioComponent
};
//# sourceMappingURL=dashboard-portafolio.component-P7TAWM3X.js.map
