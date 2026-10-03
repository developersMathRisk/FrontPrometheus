import {
  ResultadoVarComponent
} from "./chunk-3QMFW477.js";
import {
  fadeIn,
  fadeSlideIn
} from "./chunk-7D3V4QVJ.js";
import {
  mensajeDeError
} from "./chunk-MBO6WKBF.js";
import {
  CargaPortafolioComponent
} from "./chunk-TAS3LWN7.js";
import {
  CargaMonedaComponent
} from "./chunk-3Z7W44IR.js";
import {
  LoaderComponent,
  RegistroService
} from "./chunk-FSM2IJQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import "./chunk-XNBVOFQ5.js";
import "./chunk-BG5S72EG.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-GSML466W.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import "./chunk-CJCV5ZLP.js";
import {
  NgbModal
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/registro/var/ejecutar-var/ejecutar-var.component.ts
var _c0 = ["duplicadoModal"];
function EjecutarVarComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " Se combinan en un solo c\xE1lculo consolidado (si un instrumento se repite, se suman sus posiciones). ");
    \u0275\u0275elementEnd();
  }
}
function EjecutarVarComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function EjecutarVarComponent_button_41_Template_button_click_0_listener() {
      const v_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.elegirVentana(v_r5.dias));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("var-chip--activo", ctx_r5.ventanaActivaDias === v_r5.dias);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r5.etiqueta, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", v_r5.dias, " d.)");
  }
}
function EjecutarVarComponent_input_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function EjecutarVarComponent_input_44_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.numObservaciones, $event) || (ctx_r5.numObservaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.numObservaciones);
  }
}
function EjecutarVarComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "app-loader", 47);
    \u0275\u0275elementEnd();
  }
}
function EjecutarVarComponent_div_47_ng_container_2_span_10_em_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", i_r8.descripcionPortafolio, "");
  }
}
function EjecutarVarComponent_div_47_ng_container_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275template(2, EjecutarVarComponent_div_47_ng_container_2_span_10_em_2_Template, 2, 1, "em", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r5.esMultiPortafolio ? i_r8.codISIN + " \xB7 " + i_r8.descripcionPortafolio : i_r8.codISIN);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r8.codTicker, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.esMultiPortafolio);
  }
}
function EjecutarVarComponent_div_47_ng_container_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 49);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    \u0275\u0275property("title", i_r9.motivo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r9.codTicker, " ");
  }
}
function EjecutarVarComponent_div_47_ng_container_2_ul_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", i_r10.codTicker, " (", i_r10.nombreTipoInstrumento, "): ", i_r10.motivo, "");
  }
}
function EjecutarVarComponent_div_47_ng_container_2_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 55);
    \u0275\u0275template(1, EjecutarVarComponent_div_47_ng_container_2_ul_12_li_1_Template, 2, 3, "li", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.instrumentosExcluidos);
  }
}
function EjecutarVarComponent_div_47_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 48)(2, "mat-icon", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, " Se calcular\xE1 con ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275template(10, EjecutarVarComponent_div_47_ng_container_2_span_10_Template, 3, 3, "span", 50)(11, EjecutarVarComponent_div_47_ng_container_2_span_11_Template, 4, 2, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EjecutarVarComponent_div_47_ng_container_2_ul_12_Template, 2, 1, "ul", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("var-cobertura__icono--alerta", ctx_r5.instrumentosElegibles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.instrumentosElegibles.length === 0 ? "error_outline" : "check_circle", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r5.instrumentosElegibles.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" de ", ctx_r5.instrumentos.length, " posiciones", ctx_r5.esMultiPortafolio ? " (de los portafolios elegidos)" : " del portafolio", ". ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.instrumentosElegibles);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.instrumentosExcluidos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.instrumentosExcluidos.length);
  }
}
function EjecutarVarComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, EjecutarVarComponent_div_47_div_1_Template, 2, 0, "div", 44)(2, EjecutarVarComponent_div_47_ng_container_2_Template, 13, 9, "ng-container", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.cargandoInstrumentos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r5.cargandoInstrumentos && ctx_r5.instrumentos.length);
  }
}
function EjecutarVarComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function EjecutarVarComponent_button_54_Template_button_click_0_listener() {
      const m_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleMetodologia(m_r12.idTipoMetodologiaVAR));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("var-chip--activo", ctx_r5.idsTipoMetodologiaSeleccionados.includes(m_r12.idTipoMetodologiaVAR));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r12.nombreTipoMetodologiaVAR, " ");
  }
}
function EjecutarVarComponent_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function EjecutarVarComponent_button_61_Template_button_click_0_listener() {
      const nc_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleNivelConfianza(nc_r14.idNivelConfianza));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nc_r14 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("var-chip--activo", ctx_r5.idsNivelConfianzaSeleccionados.includes(nc_r14.idNivelConfianza));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, nc_r14.valorNivelConfianza * 100, "1.1-2"), "% ");
  }
}
function EjecutarVarComponent_app_loader_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 58);
  }
}
function EjecutarVarComponent_p_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59)(1, "mat-icon", 49);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Falta seleccionar: ", ctx_r5.faltantes.join(", "), "");
  }
}
function EjecutarVarComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon", 49);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r5.mensajeError);
  }
}
function EjecutarVarComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275element(2, "app-loader", 63);
    \u0275\u0275elementStart(3, "h3", 64);
    \u0275\u0275text(4, "Configure y ejecute el c\xE1lculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 65);
    \u0275\u0275text(6, " Elija portafolio, moneda, ventana hist\xF3rica, metodolog\xEDa y nivel de confianza a la izquierda. El resultado aparecer\xE1 aqu\xED mismo, sin perder de vista la configuraci\xF3n. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function EjecutarVarComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "app-loader", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function EjecutarVarComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "div", 71);
    \u0275\u0275text(3, "Resultado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 73);
    \u0275\u0275element(7, "app-resultado-var", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeSlideIn", void 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r5.resultado.fechaProceso);
    \u0275\u0275advance(2);
    \u0275\u0275property("resultado", ctx_r5.resultado);
  }
}
function EjecutarVarComponent_ng_template_72_app_loader_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 58);
  }
}
function EjecutarVarComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "mat-icon", 49);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 77);
    \u0275\u0275text(5, "Ya existe un c\xE1lculo para hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 79)(9, "button", 80);
    \u0275\u0275listener("click", function EjecutarVarComponent_ng_template_72_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cancelarReemplazo());
    });
    \u0275\u0275text(10, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 81);
    \u0275\u0275listener("click", function EjecutarVarComponent_ng_template_72_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.confirmarYReemplazar());
    });
    \u0275\u0275template(12, EjecutarVarComponent_ng_template_72_app_loader_12_Template, 1, 0, "app-loader", 34);
    \u0275\u0275text(13, " Reemplazar \xFAltimo valor ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r5.duplicado == null ? null : ctx_r5.duplicado.mensaje);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r5.ejecutando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.ejecutando);
  }
}
function EjecutarVarComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-portafolio", 82);
    \u0275\u0275listener("close", function EjecutarVarComponent_ng_template_74_Template_app_carga_portafolio_close_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario());
    });
    \u0275\u0275elementEnd();
  }
}
function EjecutarVarComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carga-moneda", 82);
    \u0275\u0275listener("close", function EjecutarVarComponent_ng_template_76_Template_app_carga_moneda_close_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cerrarModalSecundario());
    });
    \u0275\u0275elementEnd();
  }
}
var EjecutarVarComponent = class _EjecutarVarComponent {
  constructor(registroService, modalService) {
    this.registroService = registroService;
    this.modalService = modalService;
    this.idsPortafolioSeleccionados = [];
    this.idMonedaSeleccionada = null;
    this.monedaTocadaManualmente = false;
    this.horizonteDias = 1;
    this.numObservaciones = 100;
    this.numSimulacionesMonteCarlo = 1e4;
    this.ventanaPersonalizada = false;
    this.ventanasHistoricas = [
      { dias: 250, etiqueta: "1 a\xF1o" },
      { dias: 500, etiqueta: "2 a\xF1os" },
      { dias: 750, etiqueta: "3 a\xF1os" }
    ];
    this.idsNivelConfianzaSeleccionados = [];
    this.idsTipoMetodologiaSeleccionados = [];
    this.listaPortafolio = [];
    this.listMoneda = [];
    this.listNivelConfianza = [];
    this.listTipoMetodologiaVAR = [];
    this.cargandoCatalogos = true;
    this.instrumentos = [];
    this.cargandoInstrumentos = false;
    this.ejecutando = false;
    this.mensajeError = "";
    this.resultado = null;
    this.duplicado = null;
  }
  ngOnInit() {
    this.cargarCatalogos();
  }
  cargarCatalogos() {
    this.cargandoCatalogos = true;
    this.registroService.getListaPortafolio().subscribe((r) => this.listaPortafolio = r);
    this.registroService.getListaMoneda().subscribe((r) => this.listMoneda = r);
    this.registroService.getListaTipoMetodologiaVAR().subscribe((r) => {
      this.listTipoMetodologiaVAR = r;
      this.idsTipoMetodologiaSeleccionados = r.map((m) => m.idTipoMetodologiaVAR);
    });
    this.registroService.getListaNivelConfianza().subscribe({
      next: (r) => {
        this.listNivelConfianza = r.sort((a, b) => a.valorNivelConfianza - b.valorNivelConfianza);
        this.idsNivelConfianzaSeleccionados = r.map((n) => n.idNivelConfianza);
        this.cargandoCatalogos = false;
      },
      error: () => this.cargandoCatalogos = false
    });
  }
  // ---- estado del formulario -------------------------------------------------------
  get faltantes() {
    const faltan = [];
    if (this.idsPortafolioSeleccionados.length === 0)
      faltan.push("Al menos un portafolio");
    if (!this.idMonedaSeleccionada)
      faltan.push("Moneda de reporte");
    if (this.idsTipoMetodologiaSeleccionados.length === 0)
      faltan.push("al menos una metodolog\xEDa");
    if (this.idsNivelConfianzaSeleccionados.length === 0)
      faltan.push("al menos un nivel de confianza");
    if (this.idsPortafolioSeleccionados.length && !this.cargandoInstrumentos && this.instrumentosElegibles.length === 0) {
      faltan.push("portafolios con instrumentos que el motor pueda calcular");
    }
    return faltan;
  }
  get esMultiPortafolio() {
    return this.idsPortafolioSeleccionados.length > 1;
  }
  get instrumentosElegibles() {
    return this.instrumentos.filter((i) => i.elegible);
  }
  get instrumentosExcluidos() {
    return this.instrumentos.filter((i) => !i.elegible);
  }
  // Elegir portafolio(s): si es el primero, sugiere su propia moneda (si el usuario no tocó ya el
  // combo) y muestra de inmediato qué posiciones tienen (combinadas) y cuáles puede calcular el motor.
  alCambiarPortafolio() {
    this.instrumentos = [];
    if (this.idsPortafolioSeleccionados.length === 0)
      return;
    if (!this.monedaTocadaManualmente) {
      const p = this.listaPortafolio.find((x) => x.idPortafolio === this.idsPortafolioSeleccionados[0]);
      if (p)
        this.idMonedaSeleccionada = p.idMoneda;
    }
    this.cargandoInstrumentos = true;
    this.registroService.getInstrumentosPortafolio(this.idsPortafolioSeleccionados).subscribe({
      next: (r) => {
        this.instrumentos = r;
        this.cargandoInstrumentos = false;
      },
      error: () => {
        this.cargandoInstrumentos = false;
      }
    });
  }
  alCambiarMoneda() {
    this.monedaTocadaManualmente = true;
  }
  get ventanaActivaDias() {
    return this.ventanaPersonalizada ? null : this.numObservaciones;
  }
  elegirVentana(dias) {
    this.ventanaPersonalizada = false;
    this.numObservaciones = dias;
  }
  elegirVentanaPersonalizada() {
    this.ventanaPersonalizada = true;
  }
  toggleMetodologia(id) {
    this.alternar(this.idsTipoMetodologiaSeleccionados, id);
  }
  toggleNivelConfianza(id) {
    this.alternar(this.idsNivelConfianzaSeleccionados, id);
  }
  alternar(lista, id) {
    const i = lista.indexOf(id);
    i >= 0 ? lista.splice(i, 1) : lista.push(id);
  }
  // ---- ejecución -----------------------------------------------------------------
  ejecutar(confirmarReemplazo = false) {
    if (this.faltantes.length > 0 || this.ejecutando)
      return;
    const cuerpo = {
      idsPortafolio: this.idsPortafolioSeleccionados,
      idMoneda: this.idMonedaSeleccionada,
      idsNivelConfianza: this.idsNivelConfianzaSeleccionados,
      idsTipoMetodologiaVAR: this.idsTipoMetodologiaSeleccionados,
      horizonteDias: this.horizonteDias || 1,
      numObservaciones: this.numObservaciones || 100,
      numSimulacionesMonteCarlo: this.numSimulacionesMonteCarlo || 1e4,
      confirmarReemplazo
    };
    this.ejecutando = true;
    this.mensajeError = "";
    this.duplicado = null;
    if (!confirmarReemplazo)
      this.resultado = null;
    this.registroService.postEjecutarVar(cuerpo).subscribe({
      next: (respuesta) => {
        this.resultado = respuesta;
        this.ejecutando = false;
        setTimeout(() => document.getElementById("var-resultados")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      },
      error: (error) => {
        this.ejecutando = false;
        if (error.status === 409 && error.error) {
          this.duplicado = error.error;
          this.duplicadoModalRef = this.modalService.open(this.duplicadoModalTpl, {
            backdrop: "static",
            keyboard: false,
            centered: true,
            windowClass: "var-modal-duplicado"
          });
          return;
        }
        this.mensajeError = mensajeDeError(error);
      }
    });
  }
  confirmarYReemplazar() {
    this.duplicadoModalRef?.close();
    this.ejecutar(true);
  }
  cancelarReemplazo() {
    this.duplicadoModalRef?.close();
    this.duplicado = null;
  }
  abrirModalSecundario(modal) {
    this.modalRef = this.modalService.open(modal, { windowClass: "my-classModal", backdrop: "static", keyboard: false, size: "xl" });
  }
  cerrarModalSecundario() {
    this.modalRef.close();
    this.cargarCatalogos();
    if (this.idsPortafolioSeleccionados.length)
      this.alCambiarPortafolio();
  }
  static {
    this.\u0275fac = function EjecutarVarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EjecutarVarComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EjecutarVarComponent, selectors: [["app-ejecutar-var"]], viewQuery: function EjecutarVarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.duplicadoModalTpl = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 22, consts: [["duplicadoModal", ""], ["cargaModalPortafolio", ""], ["cargaModalMoneda", ""], [1, "page-header", "dashboard-pageheader", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-column"], [1, "page-title", "my-auto"], [1, "var-subtitulo"], [1, "var-layout"], [1, "var-layout__config", "card"], [1, "card-body", "var-config"], [1, "var-config__grid"], [1, "var-campo", "var-campo--ancho"], [1, "form-label"], ["aria-hidden", "true", 1, "hig-requerido"], [1, "combo-contenedor"], ["placeholder", "Seleccione uno o varios...", "bindLabel", "descripcionPortafolio", "bindValue", "idPortafolio", 3, "ngModelChange", "change", "items", "multiple", "ngModel"], ["type", "button", "aria-label", "Agregar portafolio", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "icon"], ["class", "var-config__ayuda", 4, "ngIf"], ["placeholder", "Seleccione...", "bindLabel", "desMoneda", "bindValue", "idMoneda", 3, "ngModelChange", "change", "items", "ngModel"], ["type", "button", "aria-label", "Agregar moneda", 1, "btn", "btn-outline-primary", "btn-wave", "btn-agregar", 3, "click"], [1, "var-campo"], ["type", "number", "min", "1", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "var-config__fila"], [1, "var-config__etiqueta"], [1, "var-chips"], ["type", "button", "class", "var-chip", 3, "var-chip--activo", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "var-chip", 3, "click"], ["type", "number", "min", "31", "step", "1", "class", "form-control var-config__input-inline", "placeholder", "D\xEDas", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "var-config__ayuda"], ["class", "var-cobertura", 4, "ngIf"], ["type", "button", "class", "var-chip var-chip--num", 3, "var-chip--activo", "click", 4, "ngFor", "ngForOf"], [1, "var-accion"], ["type", "button", 1, "btn", "btn-primary", "var-accion__boton", 3, "click", "disabled"], ["tamano", "inline", "class", "me-2", 4, "ngIf"], ["class", "var-accion__aviso", "role", "status", 4, "ngIf"], ["class", "alert alert-danger d-flex align-items-center gap-2 var-error mb-0", "role", "alert", 4, "ngIf"], ["id", "var-resultados", 1, "var-layout__resultado"], ["class", "card var-placeholder", 4, "ngIf"], ["class", "card var-calculando", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "var-chip__detalle"], ["type", "number", "min", "31", "step", "1", "placeholder", "D\xEDas", 1, "form-control", "var-config__input-inline", 3, "ngModelChange", "ngModel"], [1, "var-cobertura"], ["class", "var-cobertura__cargando", 4, "ngIf"], [4, "ngIf"], [1, "var-cobertura__cargando"], ["tamano", "inline", "etiqueta", "Revisando posiciones de los portafolios..."], [1, "var-cobertura__resumen"], ["aria-hidden", "true"], ["class", "var-chip var-chip--elegible", 3, "title", 4, "ngFor", "ngForOf"], ["class", "var-chip var-chip--excluido", 3, "title", 4, "ngFor", "ngForOf"], ["class", "var-cobertura__motivos", 4, "ngIf"], [1, "var-chip", "var-chip--elegible", 3, "title"], [1, "var-chip", "var-chip--excluido", 3, "title"], [1, "var-cobertura__motivos"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "var-chip", "var-chip--num", 3, "click"], ["tamano", "inline", 1, "me-2"], ["role", "status", 1, "var-accion__aviso"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "var-error", "mb-0"], [1, "card", "var-placeholder"], [1, "card-body", "var-placeholder__cuerpo"], ["tamano", "grande"], [1, "var-placeholder__titulo"], [1, "var-placeholder__texto"], [1, "card", "var-calculando"], [1, "card-body", "var-calculando__cuerpo"], ["tamano", "grande", "etiqueta", "Calculando el VaR con el motor real..."], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "var-resultados__fecha"], [1, "card-body"], [3, "resultado"], [1, "var-modal-duplicado__cuerpo"], [1, "var-modal-duplicado__icono"], [1, "var-modal-duplicado__titulo"], [1, "var-modal-duplicado__texto"], [1, "var-modal-duplicado__acciones"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "close"]], template: function EjecutarVarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1", 5);
        \u0275\u0275text(3, "Ejecuci\xF3n de VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 6);
        \u0275\u0275text(5, "Calcule el Valor en Riesgo de un portafolio con datos y precios reales.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "label", 12);
        \u0275\u0275text(12, "Portafolio(s) ");
        \u0275\u0275elementStart(13, "span", 13);
        \u0275\u0275text(14, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 14)(16, "ng-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EjecutarVarComponent_Template_ng_select_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.idsPortafolioSeleccionados, $event) || (ctx.idsPortafolioSeleccionados = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function EjecutarVarComponent_Template_ng_select_change_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alCambiarPortafolio());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 16);
        \u0275\u0275listener("click", function EjecutarVarComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalPortafolio_r2 = \u0275\u0275reference(75);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalPortafolio_r2));
        });
        \u0275\u0275elementStart(18, "span", 17);
        \u0275\u0275text(19, "+");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, EjecutarVarComponent_p_20_Template, 2, 0, "p", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "label", 12);
        \u0275\u0275text(23, "Moneda de reporte ");
        \u0275\u0275elementStart(24, "span", 13);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14)(27, "ng-select", 19);
        \u0275\u0275twoWayListener("ngModelChange", function EjecutarVarComponent_Template_ng_select_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.idMonedaSeleccionada, $event) || (ctx.idMonedaSeleccionada = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function EjecutarVarComponent_Template_ng_select_change_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alCambiarMoneda());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 20);
        \u0275\u0275listener("click", function EjecutarVarComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          const cargaModalMoneda_r3 = \u0275\u0275reference(77);
          return \u0275\u0275resetView(ctx.abrirModalSecundario(cargaModalMoneda_r3));
        });
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30, "+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 21)(32, "label", 12);
        \u0275\u0275text(33, "Horizonte (d\xEDas)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function EjecutarVarComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.horizonteDias, $event) || (ctx.horizonteDias = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 23)(36, "span", 24);
        \u0275\u0275text(37, "Ventana hist\xF3rica ");
        \u0275\u0275elementStart(38, "span", 13);
        \u0275\u0275text(39, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 25);
        \u0275\u0275template(41, EjecutarVarComponent_button_41_Template, 4, 4, "button", 26);
        \u0275\u0275elementStart(42, "button", 27);
        \u0275\u0275listener("click", function EjecutarVarComponent_Template_button_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.elegirVentanaPersonalizada());
        });
        \u0275\u0275text(43, " Personalizada ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, EjecutarVarComponent_input_44_Template, 1, 1, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p", 29);
        \u0275\u0275text(46, " D\xEDas h\xE1biles de precios usados para calcular el VaR (1 a\xF1o \u2248 250 d\xEDas de mercado). Puede cambiarse: m\xE1s a\xF1os suavizan la estimaci\xF3n pero reaccionan m\xE1s lento a cambios recientes. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(47, EjecutarVarComponent_div_47_Template, 3, 2, "div", 30);
        \u0275\u0275elementStart(48, "div", 23)(49, "span", 24);
        \u0275\u0275text(50, "Metodolog\xEDa ");
        \u0275\u0275elementStart(51, "span", 13);
        \u0275\u0275text(52, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 25);
        \u0275\u0275template(54, EjecutarVarComponent_button_54_Template, 2, 3, "button", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 23)(56, "span", 24);
        \u0275\u0275text(57, "Confianza ");
        \u0275\u0275elementStart(58, "span", 13);
        \u0275\u0275text(59, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 25);
        \u0275\u0275template(61, EjecutarVarComponent_button_61_Template, 3, 6, "button", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 32)(63, "button", 33);
        \u0275\u0275listener("click", function EjecutarVarComponent_Template_button_click_63_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ejecutar());
        });
        \u0275\u0275template(64, EjecutarVarComponent_app_loader_64_Template, 1, 0, "app-loader", 34);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275template(66, EjecutarVarComponent_p_66_Template, 5, 1, "p", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275template(67, EjecutarVarComponent_div_67_Template, 5, 1, "div", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 37);
        \u0275\u0275template(69, EjecutarVarComponent_div_69_Template, 7, 1, "div", 38)(70, EjecutarVarComponent_div_70_Template, 3, 1, "div", 39)(71, EjecutarVarComponent_div_71_Template, 8, 3, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(72, EjecutarVarComponent_ng_template_72_Template, 14, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(74, EjecutarVarComponent_ng_template_74_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(76, EjecutarVarComponent_ng_template_76_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("items", ctx.listaPortafolio)("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.idsPortafolioSeleccionados);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.esMultiPortafolio);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.listMoneda);
        \u0275\u0275twoWayProperty("ngModel", ctx.idMonedaSeleccionada);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.horizonteDias);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.ventanasHistoricas);
        \u0275\u0275advance();
        \u0275\u0275classProp("var-chip--activo", ctx.ventanaPersonalizada);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.ventanaPersonalizada);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.idsPortafolioSeleccionados.length);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.listTipoMetodologiaVAR);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.listNivelConfianza);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.faltantes.length > 0 || ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.ejecutando ? "Calculando..." : "Ejecutar c\xE1lculo de VaR", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.faltantes.length && !ctx.cargandoCatalogos);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mensajeError);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.resultado && !ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ejecutando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resultado && !ctx.ejecutando);
      }
    }, dependencies: [NgSelectModule, NgSelectComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, MatIconModule, MatIcon, CargaMonedaComponent, CargaPortafolioComponent, CommonModule, NgForOf, NgIf, DecimalPipe, ResultadoVarComponent, LoaderComponent], styles: ["\n\n.var-subtitulo[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.hig-requerido[_ngcontent-%COMP%] {\n  margin-inline-start: 2px;\n  color: rgb(var(--danger-rgb));\n}\n.var-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(340px, 400px) 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.var-layout__config[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 82px;\n  max-height: calc(100vh - 98px);\n  overflow-y: auto;\n}\n.var-layout__resultado[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 1199px) {\n  .var-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .var-layout__config[_ngcontent-%COMP%] {\n    position: static;\n    max-height: none;\n  }\n}\n.var-placeholder__cuerpo[_ngcontent-%COMP%], \n.var-calculando__cuerpo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 6px;\n  padding: 56px 24px;\n}\n.var-placeholder__titulo[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.var-placeholder__texto[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 360px;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.68);\n}\n.var-config[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px 18px;\n}\n.var-config__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.var-config__input-inline[_ngcontent-%COMP%] {\n  width: 90px;\n  min-height: 28px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n}\n.var-chip__detalle[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-weight: 400;\n}\n.var-campo[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.var-campo[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.var-campo[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.var-campo[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%] {\n  min-height: 34px;\n  font-size: 0.8125rem;\n}\n.var-config__fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(var(--dark-rgb), 0.1);\n}\n.var-config__etiqueta[_ngcontent-%COMP%] {\n  flex: none;\n  min-width: 84px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.var-config__ayuda[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: rgba(var(--dark-rgb), 0.6);\n}\n.var-cobertura[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px 12px;\n  background: rgba(var(--dark-rgb), 0.03);\n  border: 1px solid rgba(var(--dark-rgb), 0.12);\n  border-radius: 8px;\n}\n.var-cobertura__cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.var-cobertura__resumen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n}\n.var-cobertura__resumen[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  color: rgb(var(--success-rgb, 40, 167, 69));\n}\n.var-cobertura__resumen[_ngcontent-%COMP%]   .var-cobertura__icono--alerta[_ngcontent-%COMP%] {\n  color: rgb(var(--danger-rgb));\n}\n.var-cobertura__motivos[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-inline-start: 18px;\n  font-size: 0.6875rem;\n  color: rgba(var(--dark-rgb), 0.7);\n}\n.var-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.var-chip[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--default-text-color);\n  cursor: pointer;\n  background: transparent;\n  border: 1px solid rgba(var(--dark-rgb), 0.28);\n  border-radius: 999px;\n  transition: background-color 0.12s, border-color 0.12s;\n}\n.var-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.06);\n}\n.var-chip.var-chip--activo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.12);\n  border-color: rgb(var(--primary-rgb));\n}\n.var-chip--num[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n.var-chip--elegible[_ngcontent-%COMP%], \n.var-chip--excluido[_ngcontent-%COMP%] {\n  cursor: default;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.var-chip--elegible[_ngcontent-%COMP%] {\n  color: rgb(var(--success-rgb, 40, 167, 69));\n  background: rgba(var(--success-rgb, 40, 167, 69), 0.1);\n  border-color: rgba(var(--success-rgb, 40, 167, 69), 0.35);\n}\n.var-chip--elegible[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  opacity: 0.75;\n}\n.var-chip--excluido[_ngcontent-%COMP%] {\n  color: rgba(var(--dark-rgb), 0.6);\n  text-decoration: line-through;\n  background: rgba(var(--dark-rgb), 0.04);\n}\n.var-chip--excluido[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n  text-decoration: none;\n}\n.var-accion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  padding-top: 4px;\n}\n.var-accion__boton[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 20px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.var-accion__aviso[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.var-accion__aviso[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  color: rgb(var(--warning-rgb));\n}\n.var-error[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  padding: 8px 12px;\n}\n.var-modal-duplicado__cuerpo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 28px 24px;\n  text-align: center;\n}\n.var-modal-duplicado__icono[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(var(--warning-rgb), 0.14);\n}\n.var-modal-duplicado__icono[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n  color: rgb(var(--warning-rgb));\n}\n.var-modal-duplicado__titulo[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 700;\n}\n.var-modal-duplicado__texto[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 420px;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.var-modal-duplicado__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n}\n.var-resultados__fecha[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n/*# sourceMappingURL=ejecutar-var.component.css.map */"], data: { animation: [fadeIn, fadeSlideIn] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EjecutarVarComponent, { className: "EjecutarVarComponent", filePath: "src\\app\\components\\registro\\var\\ejecutar-var\\ejecutar-var.component.ts", lineNumber: 32 });
})();
export {
  EjecutarVarComponent
};
//# sourceMappingURL=ejecutar-var.component-WFLJFT7D.js.map
