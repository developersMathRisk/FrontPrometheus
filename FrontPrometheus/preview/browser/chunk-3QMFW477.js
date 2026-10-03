import {
  fadeIn,
  fadeSlideIn
} from "./chunk-7D3V4QVJ.js";
import {
  LoaderComponent,
  RegistroService
} from "./chunk-FSM2IJQ7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-BKD3PXJL.js";
import {
  Router
} from "./chunk-EXZMHBSY.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";

// src/app/shared/components/resultado-var/resultado-var.component.ts
function ResultadoVarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " del portafolio ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 5, d_r1.varDiversificado, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.resultado.monedaReporte);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" P\xE9rdida potencial m\xE1xima esperada (VaR ", \u0275\u0275pipeBind2(9, 8, d_r1.nivelConfianza * 100, "1.1-2"), "%, ", d_r1.metodologia, ") \xB7 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 11, d_r1.ratioVar * 100, "1.2-2"), "%");
  }
}
function ResultadoVarComponent_div_2_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-icon", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275classProp("rvar-ia__mensaje--usuario", m_r4.autor === "usuario");
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.autor === "usuario" ? "person" : "smart_toy");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.texto);
  }
}
function ResultadoVarComponent_div_2_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-icon", 35);
    \u0275\u0275text(2, "smart_toy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 45);
    \u0275\u0275element(4, "span")(5, "span")(6, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function ResultadoVarComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ResultadoVarComponent_div_2_div_6_div_1_Template, 5, 5, "div", 42)(2, ResultadoVarComponent_div_2_div_6_div_2_Template, 7, 1, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.mensajesIA);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pensandoIA);
  }
}
function ResultadoVarComponent_div_2_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ResultadoVarComponent_div_2_div_7_button_1_Template_button_click_0_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.usarSugerenciaIA(s_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function ResultadoVarComponent_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, ResultadoVarComponent_div_2_div_7_button_1_Template, 2, 1, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sugerenciasIA);
  }
}
function ResultadoVarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "mat-icon", 35);
    \u0275\u0275text(3, "smart_toy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ResultadoVarComponent_div_2_div_6_Template, 3, 2, "div", 36)(7, ResultadoVarComponent_div_2_div_7_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(8, "form", 38);
    \u0275\u0275listener("ngSubmit", function ResultadoVarComponent_div_2_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preguntarIA());
    });
    \u0275\u0275elementStart(9, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResultadoVarComponent_div_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preguntaIA, $event) || (ctx_r1.preguntaIA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 40)(11, "mat-icon", 35);
    \u0275\u0275text(12, "send");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.interpretacion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mensajesIA.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.mensajesIA.length);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preguntaIA);
    \u0275\u0275property("disabled", ctx_r1.pensandoIA);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.preguntaIA.trim() || ctx_r1.pensandoIA);
  }
}
function ResultadoVarComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "Escenarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultado.numEscenarios);
  }
}
function ResultadoVarComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49)(1, "mat-icon", 35);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", a_r7, " ");
  }
}
function ResultadoVarComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "No diversificado");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Beneficio divers.");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_tr_43_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, r_r8.varNoDiversificado, "1.2-2"));
  }
}
function ResultadoVarComponent_tr_43_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, r_r8.beneficioDiversificacion, "1.2-2"));
  }
}
function ResultadoVarComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 10)(7, "div", 50);
    \u0275\u0275element(8, "span", 51);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ResultadoVarComponent_tr_43_td_15_Template, 3, 4, "td", 11)(16, ResultadoVarComponent_tr_43_td_16_Template, 3, 4, "td", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rvar-fila--destacada", r_r8 === ctx_r1.destacado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.metodologia);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 10, r_r8.nivelConfianza * 100, "1.1-2"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.anchoBarra(r_r8.varDiversificado, ctx_r1.maxVarDiversificado), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 13, r_r8.varDiversificado, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 16, r_r8.ratioVar * 100, "1.2-2"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.resultado.esHistorico);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.resultado.esHistorico);
  }
}
function ResultadoVarComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Portafolio");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Exposici\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Peso");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Aporte al VaR");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_tr_62_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r9.descripcionPortafolio);
  }
}
function ResultadoVarComponent_tr_62_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, i_r9.mtm, "1.2-2"));
  }
}
function ResultadoVarComponent_tr_62_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const i_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, ((tmp_3_0 = i_r9.pesoPct) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) * 100, "1.1-1"), "%");
  }
}
function ResultadoVarComponent_tr_62_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, i_r9.varDesagregado, "1.2-2"));
  }
}
function ResultadoVarComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ResultadoVarComponent_tr_62_td_7_Template, 2, 1, "td", 53)(8, ResultadoVarComponent_tr_62_td_8_Template, 3, 4, "td", 11)(9, ResultadoVarComponent_tr_62_td_9_Template, 3, 4, "td", 11);
    \u0275\u0275elementStart(10, "td", 10)(11, "div", 50);
    \u0275\u0275element(12, "span", 54);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, ResultadoVarComponent_tr_62_td_16_Template, 3, 4, "td", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.codTicker);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.codISIN);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.nombreTipoInstrumento);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.esMultiPortafolio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mostrarColumnasInstrumento);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mostrarColumnasInstrumento);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.anchoBarra(i_r9.varIndividual, ctx_r1.maxVarIndividual), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 10, i_r9.varIndividual, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.mostrarColumnasInstrumento);
  }
}
function ResultadoVarComponent_div_68_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ResultadoVarComponent_div_68_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restablecerBinsAutomaticos());
    });
    \u0275\u0275text(1, " Auto (Sturges) ");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    \u0275\u0275listener("click", function ResultadoVarComponent_div_68_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarBins(-1));
    });
    \u0275\u0275text(2, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 58);
    \u0275\u0275listener("click", function ResultadoVarComponent_div_68_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarBins(1));
    });
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ResultadoVarComponent_div_68_button_7_Template, 2, 0, "button", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.numBinsEfectivo, " barras");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.usaBinsAutomaticos);
  }
}
function ResultadoVarComponent_p_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.usaBinsAutomaticos ? "Calculado con la regla de Sturges seg\xFAn el n\xFAmero de escenarios" : "Ajustado manualmente", " (", ctx_r1.distribucion.length, " escenarios hist\xF3ricos). ");
  }
}
function ResultadoVarComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "app-loader", 63);
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_apx_chart_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 64);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("series", ctx_r1.chartHistograma.series)("chart", ctx_r1.chartHistograma.chart)("colors", ctx_r1.chartHistograma.colors)("plotOptions", ctx_r1.chartHistograma.plotOptions)("dataLabels", ctx_r1.chartHistograma.dataLabels)("legend", ctx_r1.chartHistograma.legend)("xaxis", ctx_r1.chartHistograma.xaxis)("yaxis", ctx_r1.chartHistograma.yaxis)("grid", ctx_r1.chartHistograma.grid)("tooltip", ctx_r1.chartHistograma.tooltip);
  }
}
function ResultadoVarComponent_p_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 65);
    \u0275\u0275text(1, " Esta ejecuci\xF3n no incluy\xF3 la metodolog\xEDa Hist\xF3rica, as\xED que no hay una distribuci\xF3n real de p\xE9rdidas y ganancias para graficar. Vuelva a ejecutar incluy\xE9ndola para verla aqu\xED. ");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "app-loader", 63);
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_apx_chart_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 66);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("series", ctx_r1.chartSerie.series)("chart", ctx_r1.chartSerie.chart)("colors", ctx_r1.chartSerie.colors)("stroke", ctx_r1.chartSerie.stroke)("markers", ctx_r1.chartSerie.markers)("dataLabels", ctx_r1.chartSerie.dataLabels)("xaxis", ctx_r1.chartSerie.xaxis)("yaxis", ctx_r1.chartSerie.yaxis)("grid", ctx_r1.chartSerie.grid);
  }
}
function ResultadoVarComponent_p_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 65);
    \u0275\u0275text(1, " Todav\xEDa hay muy pocas ejecuciones guardadas de este portafolio con la misma metodolog\xEDa y nivel de confianza. Ejecute el c\xE1lculo un par de veces m\xE1s (por ejemplo, en distintas fechas) para ver c\xF3mo evoluciona el VaR. ");
    \u0275\u0275elementEnd();
  }
}
function ResultadoVarComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ResultadoVarComponent_button_80_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirAnexo9());
    });
    \u0275\u0275elementStart(1, "mat-icon", 35);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Generar Anexo N\xB0 9 (SBS) ");
    \u0275\u0275elementEnd();
  }
}
var ResultadoVarComponent = class _ResultadoVarComponent {
  constructor(registroService, router) {
    this.registroService = registroService;
    this.router = router;
    this.cargandoDistribucion = false;
    this.distribucion = [];
    this.chartHistograma = null;
    this.numBinsManual = null;
    this.cargandoSerie = false;
    this.serie = [];
    this.chartSerie = null;
    this.listMoneda = [];
    this.mensajesIA = [];
    this.preguntaIA = "";
    this.pensandoIA = false;
    this.sugerenciasIA = [
      "\xBFQu\xE9 pasa si el mercado cae 20%?",
      "\xBFQu\xE9 pasa si el d\xF3lar sube 10%?",
      "\xBFQu\xE9 tan expuesto estoy a una crisis de -35%?"
    ];
  }
  ngOnInit() {
    this.registroService.getListaMoneda().subscribe((r) => this.listMoneda = r);
  }
  abrirAnexo9() {
    if (!this.resultado?.idResultadoVARDetalle)
      return;
    this.router.navigate(["registro/var/anexo9"], { queryParams: { idResultadoVARDetalle: this.resultado.idResultadoVARDetalle } });
  }
  ngOnChanges(cambios) {
    if (cambios["resultado"]) {
      this.numBinsManual = null;
      this.mensajesIA = [];
      this.cargarDistribucion();
      this.cargarSerie();
    }
  }
  /** Interpretación automática del resultado, generada apenas termina el cálculo: ancla cada frase
   *  a números reales de esta ejecución (destacado, instrumentos, comparación con la anterior). No
   *  llama a ningún modelo de lenguaje todavía; arma la explicación con los datos ya calculados. */
  get interpretacion() {
    const d = this.destacado;
    if (!d || !this.resultado?.instrumentos?.length)
      return "";
    const varPct = Math.abs(d.varDiversificado) / this.resultado.valorPortafolio * 100;
    const top = [...this.resultado.instrumentos].sort((a, b) => Math.abs(b.varDesagregado ?? b.varIndividual) - Math.abs(a.varDesagregado ?? a.varIndividual))[0];
    let frase = `El VaR m\xE1s conservador de esta ejecuci\xF3n es ${d.metodologia} al ${(d.nivelConfianza * 100).toFixed(1)}%: una p\xE9rdida potencial de ${Math.abs(d.varDiversificado).toLocaleString("es-PE", { maximumFractionDigits: 2 })} ${this.resultado.monedaReporte} (${varPct.toFixed(2)}% del portafolio)`;
    if (top) {
      frase += `, principalmente explicada por ${top.codTicker} (${top.nombreTipoInstrumento})`;
    }
    frase += ".";
    if (this.serie.length >= 2) {
      const anterior = this.serie[this.serie.length - 2].valorVAR;
      const actual = this.serie[this.serie.length - 1].valorVAR;
      if (anterior !== 0) {
        const variacion = (Math.abs(actual) - Math.abs(anterior)) / Math.abs(anterior) * 100;
        frase += ` Esto representa un ${variacion >= 0 ? "aumento" : "disminuci\xF3n"} de ${Math.abs(variacion).toFixed(1)}% respecto a la ejecuci\xF3n anterior.`;
      }
    }
    return frase;
  }
  usarSugerenciaIA(texto) {
    this.preguntaIA = texto;
    this.preguntarIA();
  }
  preguntarIA() {
    const texto = this.preguntaIA.trim();
    if (!texto || this.pensandoIA)
      return;
    this.mensajesIA.push({ autor: "usuario", texto });
    this.preguntaIA = "";
    const escenario = this.interpretarEscenario(texto);
    if (!escenario.reconocido) {
      this.mensajesIA.push({
        autor: "asistente",
        texto: 'No reconoc\xED un porcentaje de shock en su pregunta. Pruebe algo como "\xBFqu\xE9 pasa si el mercado cae 20%?" o "\xBFqu\xE9 pasa si el d\xF3lar sube 10%?": lo simulo con el motor real de Stress Testing.'
      });
      return;
    }
    const moneda = this.listMoneda.find((m) => m.codMoneda === this.resultado.monedaReporte);
    if (!moneda || !this.resultado.idsPortafolio?.length) {
      this.mensajesIA.push({ autor: "asistente", texto: "No pude identificar el portafolio o la moneda para simular el escenario." });
      return;
    }
    this.pensandoIA = true;
    this.registroService.postEjecutarStress({
      idsPortafolio: this.resultado.idsPortafolio,
      idMoneda: moneda.idMoneda,
      shockPrecioPct: escenario.shockPrecioPct,
      shockCambiarioPct: escenario.shockCambiarioPct
    }).subscribe({
      next: (r) => {
        this.pensandoIA = false;
        this.mensajesIA.push({ autor: "asistente", texto: this.formatearRespuestaStress(r) });
      },
      error: () => {
        this.pensandoIA = false;
        this.mensajesIA.push({ autor: "asistente", texto: "El motor de Stress Testing no pudo calcular este escenario con los datos actuales." });
      }
    });
  }
  interpretarEscenario(texto) {
    const t = texto.toLowerCase();
    const match = t.match(/(-?\d+(?:\.\d+)?)\s*%/);
    if (!match)
      return { shockPrecioPct: 0, shockCambiarioPct: 0, reconocido: false };
    let magnitud = Math.abs(parseFloat(match[1])) / 100;
    const esCambiario = /(cambio|d[oó]lar|fx|devalua)/.test(t);
    const esCaida = /(cae|ca[ií]da|baja|crisis|desplome)/.test(t) || match[1].startsWith("-");
    if (esCambiario) {
      return { shockPrecioPct: 0, shockCambiarioPct: esCaida ? -magnitud : magnitud, reconocido: true };
    }
    return { shockPrecioPct: esCaida ? -magnitud : magnitud, shockCambiarioPct: 0, reconocido: true };
  }
  formatearRespuestaStress(r) {
    const impacto = r.impactoTotal.toLocaleString("es-PE", { maximumFractionDigits: 2 });
    const pct = (r.impactoPct * 100).toFixed(2);
    return `Simulaci\xF3n real (motor de Stress Testing): bajo ese escenario (shock de precio ${(r.shockPrecioPct * 100).toFixed(1)}%, shock cambiario ${(r.shockCambiarioPct * 100).toFixed(1)}%), el valor del portafolio pasar\xEDa de ${r.mtmActual.toLocaleString("es-PE", { maximumFractionDigits: 2 })} a ${r.mtmEstresado.toLocaleString("es-PE", { maximumFractionDigits: 2 })} ${r.monedaReporte} (impacto de ${impacto} ${r.monedaReporte}, ${pct}%).`;
  }
  /** Regla de Sturges: número de intervalos recomendado para un histograma según el tamaño de la muestra. */
  sturges(n) {
    if (n <= 1)
      return 1;
    return Math.max(5, Math.min(30, Math.ceil(Math.log2(n) + 1)));
  }
  get numBinsSturges() {
    return this.sturges(this.distribucion.length);
  }
  get numBinsEfectivo() {
    return this.numBinsManual ?? this.numBinsSturges;
  }
  get usaBinsAutomaticos() {
    return this.numBinsManual === null;
  }
  cambiarBins(delta) {
    const nuevo = this.numBinsEfectivo + delta;
    if (nuevo < 5 || nuevo > 30)
      return;
    this.numBinsManual = nuevo;
    if (this.distribucion.length)
      this.chartHistograma = this.armarHistograma(this.distribucion);
  }
  restablecerBinsAutomaticos() {
    this.numBinsManual = null;
    if (this.distribucion.length)
      this.chartHistograma = this.armarHistograma(this.distribucion);
  }
  get destacado() {
    if (!this.resultado?.resultados?.length)
      return null;
    return [...this.resultado.resultados].sort((a, b) => a.varDiversificado - b.varDiversificado)[0];
  }
  /** El resultado "histórico" más conservador: es el que corresponde a la distribución real graficada. */
  get destacadoHistorico() {
    const historicos = this.resultado?.resultados.filter((r) => r.metodologia.toLowerCase().includes("hist")) ?? [];
    if (!historicos.length)
      return null;
    return [...historicos].sort((a, b) => a.varDiversificado - b.varDiversificado)[0];
  }
  /** Título explícito del histograma: a qué metodología y nivel de confianza corresponde. */
  get tituloHistograma() {
    const d = this.destacadoHistorico;
    return d ? `Distribuci\xF3n hist\xF3rica de p\xE9rdidas y ganancias \u2014 VaR ${d.metodologia} ${(d.nivelConfianza * 100).toFixed(1)}%` : "Distribuci\xF3n hist\xF3rica de p\xE9rdidas y ganancias";
  }
  /** Título explícito de la serie: misma idea, para la evolución en el tiempo. */
  get tituloSerie() {
    const d = this.destacadoHistorico ?? this.destacado;
    return d ? `Evoluci\xF3n del VaR \u2014 ${d.metodologia} ${(d.nivelConfianza * 100).toFixed(1)}% (${this.esMultiPortafolio ? "portafolios combinados" : this.resultado?.descripcionPortafolio})` : "Evoluci\xF3n del VaR de este portafolio";
  }
  get mostrarColumnasInstrumento() {
    return !this.resultado.esHistorico;
  }
  get esMultiPortafolio() {
    return (this.resultado?.idsPortafolio?.length ?? 0) > 1;
  }
  anchoBarra(valor, maximo) {
    if (!maximo)
      return 0;
    return Math.min(100, Math.round(Math.abs(valor) / Math.abs(maximo) * 100));
  }
  get maxVarDiversificado() {
    return Math.max(0.01, ...this.resultado?.resultados.map((r) => Math.abs(r.varDiversificado)) ?? [0]);
  }
  get maxVarIndividual() {
    return Math.max(0.01, ...this.resultado?.instrumentos.map((i) => Math.abs(i.varIndividual)) ?? [0]);
  }
  // ---- histograma de pérdidas/ganancias --------------------------------------------
  cargarDistribucion() {
    this.distribucion = [];
    this.chartHistograma = null;
    if (!this.resultado?.idResultadoVARDetalle)
      return;
    this.cargandoDistribucion = true;
    this.registroService.getDistribucionVar(this.resultado.idResultadoVARDetalle).subscribe({
      next: (r) => {
        this.distribucion = r;
        this.cargandoDistribucion = false;
        if (r.length)
          this.chartHistograma = this.armarHistograma(r);
      },
      error: () => this.cargandoDistribucion = false
    });
  }
  armarHistograma(puntos) {
    const valores = puntos.map((p) => p.perdida);
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const numBins = this.numBinsEfectivo;
    const ancho = (max - min) / numBins || 1;
    const varUmbral = this.destacadoHistorico?.varDiversificado ?? min;
    const cuerpo = new Array(numBins).fill(0);
    const cola = new Array(numBins).fill(0);
    const categorias = [];
    for (let i = 0; i < numBins; i++) {
      const inicioBin = min + i * ancho;
      categorias.push(this.formatearMiles(inicioBin));
    }
    for (const v of valores) {
      let i = Math.floor((v - min) / ancho);
      if (i >= numBins)
        i = numBins - 1;
      if (i < 0)
        i = 0;
      const inicioBin = min + i * ancho;
      (inicioBin <= varUmbral ? cola : cuerpo)[i]++;
    }
    return {
      series: [
        { name: "Dentro del rango normal", data: cuerpo },
        { name: `Cola de p\xE9rdida (\u2265 VaR ${this.destacadoHistorico ? (this.destacadoHistorico.nivelConfianza * 100).toFixed(1) : ""}%)`, data: cola }
      ],
      chart: { type: "bar", height: 260, stacked: true, toolbar: { show: false } },
      colors: ["#4454c3", "#e7515a"],
      plotOptions: { bar: { columnWidth: "92%" } },
      dataLabels: { enabled: false },
      legend: { position: "top", horizontalAlign: "center", fontSize: "11px" },
      xaxis: {
        categories: categorias,
        title: { text: `P\xE9rdida/ganancia por escenario hist\xF3rico (${this.resultado.monedaReporte})`, style: { fontSize: "11px" } },
        labels: { rotate: -45, style: { fontSize: "9px" } }
      },
      yaxis: { title: { text: "N.\xBA de escenarios", style: { fontSize: "11px" } }, labels: { style: { fontSize: "10px" } } },
      grid: { borderColor: "rgba(128,128,128,0.15)" },
      tooltip: { y: { formatter: (v) => `${v} escenario(s)` } }
    };
  }
  // ---- evolución del VaR --------------------------------------------------------------
  cargarSerie() {
    this.serie = [];
    this.chartSerie = null;
    const d = this.destacadoHistorico ?? this.destacado;
    if (!this.resultado?.idsPortafolio?.length || !d?.idTipoMetodologiaVAR)
      return;
    this.cargandoSerie = true;
    this.registroService.getSerieVar(this.resultado.idsPortafolio, d.idTipoMetodologiaVAR, d.nivelConfianza, 30).subscribe({
      next: (r) => {
        this.serie = r;
        this.cargandoSerie = false;
        if (r.length >= 2)
          this.chartSerie = this.armarSerie(r, d);
      },
      error: () => this.cargandoSerie = false
    });
  }
  armarSerie(puntos, d) {
    return {
      series: [{ name: `VaR ${(d.nivelConfianza * 100).toFixed(1)}% (${d.metodologia})`, data: puntos.map((p) => p.valorVAR) }],
      chart: { type: "line", height: 260, toolbar: { show: false }, zoom: { enabled: false } },
      colors: ["#e7515a"],
      stroke: { curve: "straight", width: 2.5 },
      markers: { size: 4 },
      dataLabels: { enabled: false },
      xaxis: {
        categories: puntos.map((p) => p.fechaProceso),
        title: { text: "Fecha de la ejecuci\xF3n", style: { fontSize: "11px" } },
        labels: { style: { fontSize: "9px" } }
      },
      yaxis: {
        title: { text: `VaR (${this.resultado.monedaReporte})`, style: { fontSize: "11px" } },
        labels: { style: { fontSize: "10px" } }
      },
      grid: { borderColor: "rgba(128,128,128,0.15)" }
    };
  }
  formatearMiles(v) {
    return Math.round(v).toLocaleString("es-PE");
  }
  static {
    this.\u0275fac = function ResultadoVarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResultadoVarComponent)(\u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultadoVarComponent, selectors: [["app-resultado-var"]], inputs: { resultado: "resultado" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 81, vars: 33, consts: [[1, "rvar"], ["class", "rvar-hero", 4, "ngIf"], ["class", "rvar-ia", 4, "ngIf"], [1, "rvar-resumen"], [1, "rvar-resumen__item"], [1, "rvar-resumen__etiqueta"], [1, "rvar-resumen__valor"], ["class", "rvar-resumen__item", 4, "ngIf"], ["class", "rvar-nota", 4, "ngFor", "ngForOf"], [1, "rvar-tabla"], [1, "col-num"], ["class", "col-num", 4, "ngIf"], [3, "rvar-fila--destacada", 4, "ngFor", "ngForOf"], [1, "rvar-tabla", "mt-3"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "rvar-graficos"], [1, "rvar-grafico"], [1, "rvar-grafico__cabecera"], [1, "rvar-grafico__titulo"], ["class", "rvar-bins", "title", "N\xFAmero de barras del histograma", 4, "ngIf"], ["class", "rvar-grafico__ayuda", 4, "ngIf"], ["class", "rvar-grafico__cargando", 4, "ngIf"], [3, "series", "chart", "colors", "plotOptions", "dataLabels", "legend", "xaxis", "yaxis", "grid", "tooltip", 4, "ngIf"], ["class", "rvar-grafico__vacio", 4, "ngIf"], [3, "series", "chart", "colors", "stroke", "markers", "dataLabels", "xaxis", "yaxis", "grid", 4, "ngIf"], [1, "rvar-acciones"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "rvar-hero"], [1, "rvar-hero__valor"], [1, "rvar-hero__cifra"], [1, "rvar-hero__moneda"], [1, "rvar-hero__leyenda"], [1, "rvar-ia"], [1, "rvar-ia__interpretacion"], ["aria-hidden", "true"], ["class", "rvar-ia__mensajes", 4, "ngIf"], ["class", "rvar-ia__sugerencias", 4, "ngIf"], [1, "rvar-ia__entrada", 3, "ngSubmit"], ["type", "text", "placeholder", "Simule un cambio, p. ej. '\xBFqu\xE9 pasa si el mercado cae 20%?'", "name", "preguntaIA", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "disabled"], [1, "rvar-ia__mensajes"], ["class", "rvar-ia__mensaje", 3, "rvar-ia__mensaje--usuario", 4, "ngFor", "ngForOf"], ["class", "rvar-ia__mensaje", 4, "ngIf"], [1, "rvar-ia__mensaje"], [1, "rvar-ia__pensando"], [1, "rvar-ia__sugerencias"], ["type", "button", "class", "rvar-ia__sugerencia", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "rvar-ia__sugerencia", 3, "click"], [1, "rvar-nota"], [1, "rvar-barra-celda"], [1, "rvar-barra"], [1, "col-id"], ["class", "col-id", 4, "ngIf"], [1, "rvar-barra", "rvar-barra--secundaria"], ["title", "N\xFAmero de barras del histograma", 1, "rvar-bins"], ["type", "button", "aria-label", "Menos barras", 1, "rvar-bins__boton", 3, "click"], [1, "rvar-bins__valor"], ["type", "button", "aria-label", "M\xE1s barras", 1, "rvar-bins__boton", 3, "click"], ["type", "button", "class", "rvar-bins__auto", 3, "click", 4, "ngIf"], ["type", "button", 1, "rvar-bins__auto", 3, "click"], [1, "rvar-grafico__ayuda"], [1, "rvar-grafico__cargando"], ["tamano", "inline", "etiqueta", "Cargando..."], [3, "series", "chart", "colors", "plotOptions", "dataLabels", "legend", "xaxis", "yaxis", "grid", "tooltip"], [1, "rvar-grafico__vacio"], [3, "series", "chart", "colors", "stroke", "markers", "dataLabels", "xaxis", "yaxis", "grid"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"]], template: function ResultadoVarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ResultadoVarComponent_div_1_Template, 14, 14, "div", 1)(2, ResultadoVarComponent_div_2_Template, 13, 6, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "Portafolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "span", 5);
        \u0275\u0275text(11, "Valor de mercado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 6);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "span", 5);
        \u0275\u0275text(17, "Instrumentos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 6);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, ResultadoVarComponent_div_20_Template, 5, 1, "div", 7);
        \u0275\u0275elementStart(21, "div", 4)(22, "span", 5);
        \u0275\u0275text(23, "Per\xEDodo hist\xF3rico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 6);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(26, ResultadoVarComponent_p_26_Template, 4, 1, "p", 8);
        \u0275\u0275elementStart(27, "table", 9)(28, "caption");
        \u0275\u0275text(29, "VaR por metodolog\xEDa y nivel de confianza");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "thead")(31, "tr")(32, "th");
        \u0275\u0275text(33, "Metodolog\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Confianza");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 10);
        \u0275\u0275text(37, "VaR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th", 10);
        \u0275\u0275text(39, "% cartera");
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, ResultadoVarComponent_th_40_Template, 2, 0, "th", 11)(41, ResultadoVarComponent_th_41_Template, 2, 0, "th", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "tbody");
        \u0275\u0275template(43, ResultadoVarComponent_tr_43_Template, 17, 19, "tr", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "table", 13)(45, "caption");
        \u0275\u0275text(46, "Desglose por instrumento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "thead")(48, "tr")(49, "th");
        \u0275\u0275text(50, "Ticker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "ISIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Tipo");
        \u0275\u0275elementEnd();
        \u0275\u0275template(55, ResultadoVarComponent_th_55_Template, 2, 0, "th", 14)(56, ResultadoVarComponent_th_56_Template, 2, 0, "th", 11)(57, ResultadoVarComponent_th_57_Template, 2, 0, "th", 11);
        \u0275\u0275elementStart(58, "th", 10);
        \u0275\u0275text(59, "VaR individual");
        \u0275\u0275elementEnd();
        \u0275\u0275template(60, ResultadoVarComponent_th_60_Template, 2, 0, "th", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "tbody");
        \u0275\u0275template(62, ResultadoVarComponent_tr_62_Template, 17, 13, "tr", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 16)(64, "div", 17)(65, "div", 18)(66, "p", 19);
        \u0275\u0275text(67);
        \u0275\u0275elementEnd();
        \u0275\u0275template(68, ResultadoVarComponent_div_68_Template, 8, 2, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(69, ResultadoVarComponent_p_69_Template, 2, 2, "p", 21)(70, ResultadoVarComponent_div_70_Template, 2, 0, "div", 22)(71, ResultadoVarComponent_apx_chart_71_Template, 1, 10, "apx-chart", 23)(72, ResultadoVarComponent_p_72_Template, 2, 0, "p", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 17)(74, "p", 19);
        \u0275\u0275text(75);
        \u0275\u0275elementEnd();
        \u0275\u0275template(76, ResultadoVarComponent_div_76_Template, 2, 0, "div", 22)(77, ResultadoVarComponent_apx_chart_77_Template, 1, 9, "apx-chart", 25)(78, ResultadoVarComponent_p_78_Template, 2, 0, "p", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 26);
        \u0275\u0275template(80, ResultadoVarComponent_button_80_Template, 4, 0, "button", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("@fadeSlideIn", void 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.destacado);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.interpretacion);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.resultado.descripcionPortafolio);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(14, 30, ctx.resultado.valorPortafolio, "1.2-2"), " ", ctx.resultado.monedaReporte, "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.resultado.numInstrumentos);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resultado.numEscenarios);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", ctx.resultado.fechaInicio, " \u2192 ", ctx.resultado.fechaFin, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.resultado.advertencias);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", !ctx.resultado.esHistorico);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.resultado.esHistorico);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.resultado.resultados);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.esMultiPortafolio);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarColumnasInstrumento);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarColumnasInstrumento);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.mostrarColumnasInstrumento);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.resultado.instrumentos);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.tituloHistograma);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.chartHistograma);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.chartHistograma);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargandoDistribucion);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.chartHistograma);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargandoDistribucion && !ctx.chartHistograma);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.tituloSerie);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargandoSerie);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.chartSerie);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargandoSerie && !ctx.chartSerie);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.resultado.idResultadoVARDetalle);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatIconModule, MatIcon, NgApexchartsModule, ChartComponent, LoaderComponent], styles: ["\n\n.rvar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rvar-hero[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  background: rgba(var(--danger-rgb), 0.07);\n  border: 1px solid rgba(var(--danger-rgb), 0.22);\n  border-radius: 10px;\n}\n.rvar-hero__valor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.rvar-hero__cifra[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1.1;\n  color: rgb(var(--danger-rgb));\n  font-variant-numeric: tabular-nums;\n}\n.rvar-hero__moneda[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(var(--danger-rgb));\n}\n.rvar-hero__leyenda[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.rvar-ia[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px 12px;\n  background: rgba(var(--primary-rgb), 0.05);\n  border: 1px solid rgba(var(--primary-rgb), 0.18);\n  border-radius: 10px;\n}\n.rvar-ia__interpretacion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.rvar-ia__interpretacion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.4;\n}\n.rvar-ia__interpretacion[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  padding: 3px;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.12);\n  border-radius: 50%;\n}\n.rvar-ia__mensajes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rvar-ia__mensaje[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  max-width: 90%;\n}\n.rvar-ia__mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  line-height: 1.4;\n  background: rgba(var(--dark-rgb), 0.05);\n  border-radius: 8px;\n}\n.rvar-ia__mensaje[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  padding: 3px;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.1);\n  border-radius: 50%;\n}\n.rvar-ia__mensaje--usuario[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.rvar-ia__mensaje--usuario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.12);\n}\n.rvar-ia__pensando[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.rvar-ia__pensando[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  background: rgba(var(--dark-rgb), 0.5);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_rvar-ia-parpadeo 1.2s infinite ease-in-out;\n}\n.rvar-ia__pensando[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.rvar-ia__pensando[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_rvar-ia-parpadeo {\n  0%, 80%, 100% {\n    opacity: 0.25;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n.rvar-ia__sugerencias[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.rvar-ia__sugerencia[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 0.6875rem;\n  color: var(--default-text-color);\n  background: rgba(var(--dark-rgb), 0.04);\n  border: 1px solid rgba(var(--dark-rgb), 0.14);\n  border-radius: 999px;\n  cursor: pointer;\n}\n.rvar-ia__sugerencia[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--primary-rgb), 0.1);\n  border-color: rgba(var(--primary-rgb), 0.4);\n}\n.rvar-ia__entrada[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.rvar-ia__entrada[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 32px;\n  font-size: 0.75rem;\n}\n.rvar-ia__entrada[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.rvar-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 28px;\n}\n.rvar-resumen__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.rvar-resumen__etiqueta[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: rgba(var(--dark-rgb), 0.6);\n}\n.rvar-resumen__valor[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.rvar-nota[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  margin: 0;\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n  background: rgba(var(--warning-rgb), 0.12);\n  border-radius: 6px;\n}\n.rvar-nota[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  font-size: 15px;\n  color: rgb(var(--warning-rgb));\n}\n.rvar-tabla[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.8125rem;\n  border-collapse: collapse;\n}\n.rvar-tabla[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 0 0 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: left;\n  caption-side: top;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.rvar-tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.rvar-tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid rgba(var(--dark-rgb), 0.1);\n}\n.rvar-tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.01em;\n  color: rgba(var(--dark-rgb), 0.65);\n  background: rgba(var(--dark-rgb), 0.04);\n}\n.rvar-tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.rvar-tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--primary-rgb), 0.06);\n}\n.rvar-tabla[_ngcontent-%COMP%]   .rvar-fila--destacada[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: rgba(var(--danger-rgb), 0.05);\n}\n.rvar-tabla[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.rvar-tabla[_ngcontent-%COMP%]   .col-id[_ngcontent-%COMP%] {\n  color: rgba(var(--dark-rgb), 0.68);\n}\n.rvar-barra-celda[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 92px;\n}\n.rvar-barra[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  bottom: 1px;\n  right: 0;\n  z-index: 0;\n  background: rgba(var(--danger-rgb), 0.14);\n  border-radius: 3px;\n}\n.rvar-barra--secundaria[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.14);\n}\n.rvar-barra-celda[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  position: relative;\n  z-index: 1;\n  padding-inline-end: 4px;\n}\n@media (max-width: 640px) {\n  .rvar-tabla[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n.rvar-graficos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-top: 6px;\n}\n.rvar-grafico[_ngcontent-%COMP%] {\n  padding: 10px 12px 4px;\n  border: 1px solid rgba(var(--dark-rgb), 0.12);\n  border-radius: 10px;\n}\n.rvar-grafico__cabecera[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.rvar-grafico__titulo[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.rvar-grafico__ayuda[_ngcontent-%COMP%] {\n  margin: -2px 0 4px;\n  font-size: 0.6875rem;\n  color: rgba(var(--dark-rgb), 0.6);\n}\n.rvar-bins[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.rvar-bins__boton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  font-size: 0.8125rem;\n  line-height: 1;\n  color: var(--default-text-color);\n  background: rgba(var(--dark-rgb), 0.06);\n  border: 1px solid rgba(var(--dark-rgb), 0.18);\n  border-radius: 5px;\n  cursor: pointer;\n}\n.rvar-bins__boton[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--dark-rgb), 0.12);\n}\n.rvar-bins__valor[_ngcontent-%COMP%] {\n  min-width: 58px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-align: center;\n  font-variant-numeric: tabular-nums;\n}\n.rvar-bins__auto[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: rgb(var(--primary-rgb));\n  background: rgba(var(--primary-rgb), 0.1);\n  border: none;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.rvar-bins__auto[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--primary-rgb), 0.18);\n}\n.rvar-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 4px;\n}\n.rvar-acciones[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  vertical-align: text-bottom;\n}\n.rvar-grafico__cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 40px 0;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.rvar-grafico__vacio[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 24px 8px;\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.7);\n  text-align: center;\n}\n@media (max-width: 900px) {\n  .rvar-graficos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=resultado-var.component.css.map */"], data: { animation: [fadeSlideIn, fadeIn] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultadoVarComponent, { className: "ResultadoVarComponent", filePath: "src\\app\\shared\\components\\resultado-var\\resultado-var.component.ts", lineNumber: 38 });
})();

export {
  ResultadoVarComponent
};
//# sourceMappingURL=chunk-3QMFW477.js.map
