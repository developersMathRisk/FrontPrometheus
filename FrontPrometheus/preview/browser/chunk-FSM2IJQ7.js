import {
  environment
} from "./chunk-BG5S72EG.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";

// src/app/shared/components/loader/loader.component.ts
function LoaderComponent_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.etiqueta);
  }
}
function LoaderComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275template(2, LoaderComponent_span_0_span_2_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.etiqueta);
  }
}
function LoaderComponent_div_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.etiqueta);
  }
}
function LoaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7)(2, "defs")(3, "linearGradient", 8);
    \u0275\u0275element(4, "stop", 9)(5, "stop", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "radialGradient", 11);
    \u0275\u0275element(7, "stop", 12)(8, "stop", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "ellipse", 14)(10, "path", 15);
    \u0275\u0275elementStart(11, "g", 16);
    \u0275\u0275element(12, "polygon", 17)(13, "polygon", 18)(14, "polygon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "g", 20);
    \u0275\u0275element(16, "polygon", 17)(17, "polygon", 18)(18, "polygon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, LoaderComponent_div_1_span_19_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ldr--grande", ctx_r0.tamano === "grande");
    \u0275\u0275advance(15);
    \u0275\u0275styleProp("--ldr-escala", ctx_r0.progreso !== null ? ctx_r0.escala : null);
    \u0275\u0275classProp("ldr-relleno--determinado", ctx_r0.progreso !== null);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.etiqueta);
  }
}
var LoaderComponent = class _LoaderComponent {
  constructor() {
    this.tamano = "normal";
    this.progreso = null;
  }
  get escala() {
    return Math.min(1, Math.max(0, (this.progreso ?? 0) / 100));
  }
  static {
    this.\u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], inputs: { tamano: "tamano", etiqueta: "etiqueta", progreso: "progreso" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "ldr ldr--inline", "role", "status", "aria-label", "Cargando", 4, "ngIf"], ["class", "ldr", "role", "status", "aria-label", "Cargando", 3, "ldr--grande", 4, "ngIf"], ["role", "status", "aria-label", "Cargando", 1, "ldr", "ldr--inline"], ["aria-hidden", "true", 1, "ldr-anillo"], ["class", "ldr-etiqueta ldr-etiqueta--inline", 4, "ngIf"], [1, "ldr-etiqueta", "ldr-etiqueta--inline"], ["role", "status", "aria-label", "Cargando", 1, "ldr"], ["viewBox", "0 0 200 160", "aria-hidden", "true", 1, "ldr-icono"], ["id", "ldrGrad", "x1", "0", "y1", "1", "x2", "0", "y2", "0"], ["offset", "0%", "stop-color", "rgb(var(--primary-rgb))"], ["offset", "100%", "stop-color", "#9fb0ff"], ["id", "ldrGlow", "cx", "50%", "cy", "100%", "r", "65%"], ["offset", "0%", "stop-color", "#ffffff", "stop-opacity", "0.85"], ["offset", "100%", "stop-color", "#ffffff", "stop-opacity", "0"], ["cx", "100", "cy", "140", "rx", "78", "ry", "16", "fill", "url(#ldrGlow)", 1, "ldr-brillo"], ["d", "M14,146 Q100,122 186,146", 1, "ldr-arco"], [1, "ldr-silueta"], ["points", "46,70 62,85 62,140 30,140 30,85"], ["points", "100,30 124,55 124,140 76,140 76,55"], ["points", "154,70 170,85 170,140 138,140 138,85"], [1, "ldr-relleno"], ["class", "ldr-etiqueta", 4, "ngIf"], [1, "ldr-etiqueta"]], template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LoaderComponent_span_0_Template, 3, 1, "span", 0)(1, LoaderComponent_div_1_Template, 20, 7, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.tamano === "inline");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tamano !== "inline");
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.ldr--inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  vertical-align: middle;\n}\n.ldr-anillo[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2px solid rgba(var(--primary-rgb), 0.22);\n  border-top-color: rgb(var(--primary-rgb));\n  animation: _ngcontent-%COMP%_ldr-girar 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ldr-girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ldr-etiqueta--inline[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(var(--dark-rgb), 0.78);\n}\n.ldr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 0;\n}\n.ldr-icono[_ngcontent-%COMP%] {\n  width: 56px;\n  height: auto;\n  overflow: visible;\n}\n.ldr--grande[_ngcontent-%COMP%]   .ldr-icono[_ngcontent-%COMP%] {\n  width: 92px;\n}\n.ldr-silueta[_ngcontent-%COMP%] {\n  fill: rgba(var(--dark-rgb), 0.1);\n  stroke: rgba(var(--dark-rgb), 0.22);\n  stroke-width: 1.5;\n  stroke-linejoin: round;\n}\n.ldr-relleno[_ngcontent-%COMP%] {\n  fill: url(#ldrGrad);\n  stroke: rgb(var(--primary-rgb));\n  stroke-width: 1;\n  stroke-linejoin: round;\n  transform-box: fill-box;\n  transform-origin: bottom center;\n  animation: _ngcontent-%COMP%_ldr-llenado 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;\n}\n.ldr-relleno--determinado[_ngcontent-%COMP%] {\n  animation: none;\n  transform: scaleY(var(--ldr-escala, 0));\n  transition: transform 0.35s ease;\n}\n@keyframes _ngcontent-%COMP%_ldr-llenado {\n  0% {\n    transform: scaleY(0.06);\n    opacity: 0.85;\n  }\n  50% {\n    transform: scaleY(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scaleY(0.06);\n    opacity: 0.85;\n  }\n}\n.ldr-brillo[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ldr-brillar 1.8s ease-in-out infinite;\n}\n.ldr-arco[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(var(--primary-rgb), 0.35);\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  animation: _ngcontent-%COMP%_ldr-brillar 1.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ldr-brillar {\n  0%, 100% {\n    opacity: 0.35;\n  }\n  50% {\n    opacity: 0.9;\n  }\n}\n.ldr-etiqueta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(var(--dark-rgb), 0.7);\n}\n@media (prefers-reduced-motion: reduce) {\n  .ldr-anillo[_ngcontent-%COMP%], \n   .ldr-relleno[_ngcontent-%COMP%], \n   .ldr-brillo[_ngcontent-%COMP%], \n   .ldr-arco[_ngcontent-%COMP%] {\n    animation-duration: 2.6s;\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src\\app\\shared\\components\\loader\\loader.component.ts", lineNumber: 20 });
})();

// src/app/shared/services/registro.service.ts
var RegistroService = class _RegistroService {
  // private http!: HttpClient;
  constructor(http) {
    this.http = http;
    this.apiServeURL = environment.apiBaseURL;
  }
  hello() {
    return this.http.get(`${this.apiServeURL}/mantenedores/hello`, { responseType: "text" });
  }
  monedas() {
    return this.http.get(`${this.apiServeURL}/mantenedores/monedas`);
  }
  //INSTRUMENTOS
  //Acción
  postRegistrarAccion(objAccion) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearAccion`, objAccion);
  }
  getListaAccion() {
    return this.http.get(`${this.apiServeURL}/mantenedores/accion/list`);
  }
  putModificarAccion(id, objAccion) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarAccion/${id}`, objAccion);
  }
  eiminarAccion(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarAccion/${id}`);
  }
  //Bono
  postRegistrarBono(objBono, flagAutomatico) {
    const params = new HttpParams().set("flagAutomatico", flagAutomatico.toString());
    return this.http.post(`${this.apiServeURL}/mantenedores/crearBono`, objBono, { params });
  }
  postRegistrarCuponerXBono(listBonoCupon) {
    return this.http.post(`${this.apiServeURL}/mantenedores/guardarCuponeraxBono`, listBonoCupon);
  }
  getListaBono() {
    return this.http.get(`${this.apiServeURL}/mantenedores/bono/list`);
  }
  putModificarBono(id, objBono) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarBono/${id}`, objBono);
  }
  eiminarBono(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarBono/${id}`);
  }
  //Fondo de inversión
  postRegistrarFondoInversion(objFondoInversion) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearFondo`, objFondoInversion);
  }
  getListaFondoInversion() {
    return this.http.get(`${this.apiServeURL}/mantenedores/fondo/list`);
  }
  putModificarFondoInversion(id, objFondoInversion) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarFondo/${id}`, objFondoInversion);
  }
  eiminarFondoInversion(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarFondo/${id}`);
  }
  //ATRIBUTOS
  //Calculo Base Interes
  postRegistrarCalculoBaseInteres(objCalculoBaseInteres) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearCalculoBaseInteres`, objCalculoBaseInteres);
  }
  getListaCalculoBaseInteres() {
    return this.http.get(`${this.apiServeURL}/mantenedores/calculoBaseInteres/list`);
  }
  putModificarCalculoBaseInteres(id, objCalculoBaseInteres) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarCalculoBaseInteres/${id}`, objCalculoBaseInteres);
  }
  eiminarCalculoBaseInteres(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarCalculoBaseInteres/${id}`);
  }
  //Corporacion
  postRegistrarCorporacion(objCorporacion) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearCorporacion`, objCorporacion);
  }
  getListaCorporacion() {
    return this.http.get(`${this.apiServeURL}/mantenedores/corporacion/list`);
  }
  putModificarCorporacion(id, objCorporacion) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarCorporacion/${id}`, objCorporacion);
  }
  eiminarCorporacion(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarCorporacion/${id}`);
  }
  //Curva Referencia
  postRegistrarCurvaReferencia(objCurvaReferencia) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearCurvaReferencia`, objCurvaReferencia);
  }
  getListaCurvaReferencia() {
    return this.http.get(`${this.apiServeURL}/mantenedores/curvaReferencia/list`);
  }
  putModificarCurvaReferencia(id, objCurvaReferencia) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarCurvaReferencia/${id}`, objCurvaReferencia);
  }
  eiminarCurvaReferencia(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarCurvaReferencia/${id}`);
  }
  //Emisor
  postRegistrarEmisor(objEmisor) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearEmisor`, objEmisor);
  }
  getListaEmisor() {
    return this.http.get(`${this.apiServeURL}/mantenedores/emisor/list`);
  }
  putModificarEmisor(id, objEmisor) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarEmisor/${id}`, objEmisor);
  }
  eiminarEmisor(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarEmisor/${id}`);
  }
  //Formula Tasa
  postRegistrarFormulaTasa(objFormulaTasa) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearFormulaTasa`, objFormulaTasa);
  }
  getListaFormulaTasa() {
    return this.http.get(`${this.apiServeURL}/mantenedores/formulaTasa/list`);
  }
  putModificarFormulaTasa(id, objFormulaTasa) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarFormulaTasa/${id}`, objFormulaTasa);
  }
  eiminarFormulaTasa(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarFormulaTasa/${id}`);
  }
  //Frecuencia Pago
  postRegistrarFrecuenciaPago(objFrecuenciaPago) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearFrecuenciaPago`, objFrecuenciaPago);
  }
  getListaFrecuenciaPago() {
    return this.http.get(`${this.apiServeURL}/mantenedores/frecuenciaPago/list`);
  }
  putModificarFrecuenciaPago(id, objFrecuenciaPago) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarFrecuenciaPago/${id}`, objFrecuenciaPago);
  }
  eiminarFrecuenciaPago(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarFrecuenciaPago/${id}`);
  }
  //Fuente Información
  postRegistrarFuenteInformacion(objFuenteInformacion) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearFuenteInformacion`, objFuenteInformacion);
  }
  getListaFuenteInformacion() {
    return this.http.get(`${this.apiServeURL}/mantenedores/fuenteInformacion/list`);
  }
  putModificarFuenteInformacion(id, objFuenteInformacion) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarFuenteInformacion/${id}`, objFuenteInformacion);
  }
  eiminarFuenteInformacion(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarFuenteInformacion/${id}`);
  }
  //Grupo Económico
  postRegistrarGrupoEconomico(objGrupoEconomico) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearGrupoEconomico`, objGrupoEconomico);
  }
  getListaGrupoEconomico() {
    return this.http.get(`${this.apiServeURL}/mantenedores/grupoEconomico/list`);
  }
  putModificarGrupoEconomico(id, objGrupoEconomico) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarGrupoEconomico/${id}`, objGrupoEconomico);
  }
  eiminarGrupoEconomico(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarGrupoEconomico/${id}`);
  }
  //Metodo Amortizacion
  postRegistrarMetodoAmortizacion(objMetodoAmortizacion) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearMetodoAmortizacion`, objMetodoAmortizacion);
  }
  getListaMetodoAmortizacion() {
    return this.http.get(`${this.apiServeURL}/mantenedores/metodoAmortizacion/list`);
  }
  putModificarMetodoAmortizacion(id, objMetodoAmortizacion) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarMetodoAmortizacion/${id}`, objMetodoAmortizacion);
  }
  eiminarMetodoAmortizacion(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarMetodoAmortizacion/${id}`);
  }
  //Moneda
  postRegistrarMoneda(objMoneda) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearMoneda`, objMoneda);
  }
  getListaMoneda() {
    return this.http.get(`${this.apiServeURL}/mantenedores/moneda/list`);
  }
  putModificarMoneda(id, objMoneda) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarMoneda/${id}`, objMoneda);
  }
  eiminarMoneda(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarMoneda/${id}`);
  }
  //País
  postRegistrarPais(objPais) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearPais`, objPais);
  }
  getListaPais() {
    return this.http.get(`${this.apiServeURL}/mantenedores/pais/list`);
  }
  putModificarPais(id, objPais) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarPais/${id}`, objPais);
  }
  eiminarPais(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarPais/${id}`);
  }
  //Plaza
  postRegistrarPlaza(objPlaza) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearPlaza`, objPlaza);
  }
  getListaPlaza() {
    return this.http.get(`${this.apiServeURL}/mantenedores/plaza/list`);
  }
  putModificarPlaza(id, objPlaza) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarPlaza/${id}`, objPlaza);
  }
  eiminarPlaza(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarPlaza/${id}`);
  }
  //Sector
  postRegistrarSector(objSector) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearSector`, objSector);
  }
  getListaSector() {
    return this.http.get(`${this.apiServeURL}/mantenedores/sector/list`);
  }
  putModificarSector(id, objSector) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarSector/${id}`, objSector);
  }
  eiminarSector(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarSector/${id}`);
  }
  //Subsidiaria
  postRegistrarSubsidiaria(objSubsidiaria) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearSubsidiaria`, objSubsidiaria);
  }
  getListaSubsidiaria() {
    return this.http.get(`${this.apiServeURL}/mantenedores/subsidiaria/list`);
  }
  putModificarSubsidiaria(id, objSubsidiaria) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarSubsidiaria/${id}`, objSubsidiaria);
  }
  eiminarSubsidiaria(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarSubsidiaria/${id}`);
  }
  //Tasa RJTE
  postRegistrarTasaRJTE(objTasaRJTE) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTasaRJTE`, objTasaRJTE);
  }
  getListaTasaRJTE() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tasaRJTE/list`);
  }
  putModificarTasaRJTE(id, objTasaRJTE) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTasaRJTE/${id}`, objTasaRJTE);
  }
  eiminarTasaRJTE(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTasaRJTE/${id}`);
  }
  //Tipo Accion
  postRegistrarTipoAccion(objTipoAccion) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoAccion`, objTipoAccion);
  }
  getListaTipoAccion() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoAccion/list`);
  }
  putModificarTipoAccion(id, objTipoAccion) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoAccion/${id}`, objTipoAccion);
  }
  eiminarTipoAccion(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoAccion/${id}`);
  }
  //Tipo Bono
  postRegistrarTipoBono(objTipoBono) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoBono`, objTipoBono);
  }
  getListaTipoBono() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoBono/list`);
  }
  putModificarTipoBono(id, objTipoBono) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoBono/${id}`, objTipoBono);
  }
  eiminarTipoBono(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoBono/${id}`);
  }
  //Tipo Fondo
  postRegistrarTipoFondo(objTipoFondo) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoFondo`, objTipoFondo);
  }
  getListaTipoFondo() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoFondo/list`);
  }
  putModificarTipoFondo(id, objTipoFondo) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoFondo/${id}`, objTipoFondo);
  }
  eiminarTipoFondo(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoFondo/${id}`);
  }
  //Tipo Instrumento
  postRegistrarTipoInstrumento(objTipoInstrumento) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoInstrumento`, objTipoInstrumento);
  }
  getListaTipoInstrumento() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoInstrumento/list`);
  }
  putModificarTipoInstrumento(id, objTipoInstrumento) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoInstrumento/${id}`, objTipoInstrumento);
  }
  eiminarTipoInstrumento(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoInstrumento/${id}`);
  }
  //Tipo Tasa
  postRegistrarTipoEmision(objTipoEmision) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoEmision`, objTipoEmision);
  }
  getListaTipoEmision() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoEmision/list`);
  }
  putModificarTipoEmision(id, objTipoEmision) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoEmision/${id}`, objTipoEmision);
  }
  eiminarTipoEmision(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoEmision/${id}`);
  }
  //Tipo Tasa
  postRegistrarTipoTasa(objTipoTasa) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoTasaInteres`, objTipoTasa);
  }
  getListaTipoTasa() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoTasaInteres/list`);
  }
  putModificarTipoTasa(id, objTipoTasa) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoTasaInteres/${id}`, objTipoTasa);
  }
  eiminarTipoTasa(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoTasaInteres/${id}`);
  }
  //Tipo Sector
  postRegistrarTipoSector(objTipoSector) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoSector`, objTipoSector);
  }
  getListaTipoSector() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoSector/list`);
  }
  putModificarTipoSector(id, objTipoSector) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoSector/${id}`, objTipoSector);
  }
  eiminarTipoSector(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoSector/${id}`);
  }
  //Term. Volatilidad
  postRegistrarTermVolatilidad(objTermVolatilidad) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTermVolatililty`, objTermVolatilidad);
  }
  getListaTermVolatilidad() {
    return this.http.get(`${this.apiServeURL}/mantenedores/termVolatililty/list`);
  }
  putModificarTermVolatilidad(id, objTermVolatilidad) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTermVolatililty/${id}`, objTermVolatilidad);
  }
  eiminarTermVolatilidad(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTermVolatililty/${id}`);
  }
  //Skew Point
  postRegistrarSkewPoint(objSkewPoint) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearSkewPoint`, objSkewPoint);
  }
  getListaSkewPoint() {
    return this.http.get(`${this.apiServeURL}/mantenedores/skewPoint/list`);
  }
  putModificarSkewPoint(id, objSkewPoint) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarSkewPoint/${id}`, objSkewPoint);
  }
  eiminarSkewPoint(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarSkewPoint/${id}`);
  }
  //Tipo Cambio
  postRegistrarTipoCambio(objTipoCambio) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearTipoCambio`, objTipoCambio);
  }
  getListaTipoCambio() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoCambio/list`);
  }
  putModificarTipoCambio(id, objTipoCambio) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarTipoCambio/${id}`, objTipoCambio);
  }
  eiminarTipoCambio(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarTipoCambio/${id}`);
  }
  //FACTOR
  //índice Mercado
  postRegistrarIndiceMercado(objIndiceMercado) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearIndiceMercado`, objIndiceMercado);
  }
  getListaIndiceMercado() {
    return this.http.get(`${this.apiServeURL}/mantenedores/indiceMercado/list`);
  }
  putModificarIndiceMercado(id, objIndiceMercado) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarIndiceMercado/${id}`, objIndiceMercado);
  }
  eiminarIndiceMercado(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarIndiceMercado/${id}`);
  }
  //Precio Mercado
  postRegistrarPrecioMercado(objPrecioMercado) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearVectorPrecio`, objPrecioMercado);
  }
  getListaPrecioMercado() {
    return this.http.get(`${this.apiServeURL}/mantenedores/vectorPrecio/list`);
  }
  putModificarPrecioMercado(id, objPrecioMercado) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarVectorPrecio/${id}`, objPrecioMercado);
  }
  eiminarPrecioMercado(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarVectorPrecio/${id}`);
  }
  //Tasa Interés
  postRegistrarTasaInteres(objTasaInteres) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearCurvaReferenciaPuntos`, objTasaInteres);
  }
  getListaTasaInteres() {
    return this.http.get(`${this.apiServeURL}/mantenedores/curvaReferenciaPuntos/list`);
  }
  putModificarTasaInteres(id, objTasaInteres) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarCurvaReferenciaPuntos/${id}`, objTasaInteres);
  }
  eiminarTasaInteres(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarCurvaReferenciaPuntos/${id}`);
  }
  //Volatilidad
  postRegistrarVolatilidad(objVolatilidad) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearVolatilitySurfacePoint`, objVolatilidad);
  }
  getListaVolatilidad() {
    return this.http.get(`${this.apiServeURL}/mantenedores/volatilitySurfacePoint/list`);
  }
  putModificarVolatilidad(id, objVolatilidad) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarVolatilitySurfacePoint/${id}`, objVolatilidad);
  }
  eiminarVolatilidad(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarVolatilitySurfacePoint/${id}`);
  }
  //PORTAFOLIO
  //Portafolio
  postRegistrarPortafolio(objPortafolio) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearPortafolio`, objPortafolio);
  }
  getListaPortafolio() {
    return this.http.get(`${this.apiServeURL}/mantenedores/portafolio/list`);
  }
  putModificarPortafolio(id, objPortafolio) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarPortafolio/${id}`, objPortafolio);
  }
  eiminarPortafolio(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarPortafolio/${id}`);
  }
  //PortafolioInstrumento
  postRegistrarPortafolioInstrumento(objPortafolioInstrumento) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearPortafolioInstrumento`, objPortafolioInstrumento);
  }
  postRegistrarPortafolioInstrumentoMasivo(listPortafolioInstrumento) {
    return this.http.post(`${this.apiServeURL}/mantenedores/crearPortafolioInstrumentoMasivo`, listPortafolioInstrumento);
  }
  getListaPortafolioInstrumento() {
    return this.http.get(`${this.apiServeURL}/mantenedores/portafolioInstrumento/list`);
  }
  putModificarPortafolioInstrumento(id, objPortafolioInstrumento) {
    return this.http.put(`${this.apiServeURL}/mantenedores/modificarPortafolioInstrumento/${id}`, objPortafolioInstrumento);
  }
  eiminarPortafolioInstrumento(id) {
    return this.http.delete(`${this.apiServeURL}/mantenedores/eliminarPortafolioInstrumento/${id}`);
  }
  //Benchmark
  getListaBenchmark() {
    return this.http.get(`${this.apiServeURL}/mantenedores/benchmark/list`);
  }
  //VaR
  getListaNivelConfianza() {
    return this.http.get(`${this.apiServeURL}/mantenedores/nivelConfianza/list`);
  }
  getListaTipoMetodologiaVAR() {
    return this.http.get(`${this.apiServeURL}/mantenedores/tipoMetodologiaVAR/list`);
  }
  postEjecutarVar(objEjecutarVar) {
    return this.http.post(`${this.apiServeURL}/var/ejecutar`, objEjecutarVar);
  }
  getListaResultadosVar(idPortafolio) {
    let params = new HttpParams();
    if (idPortafolio) {
      params = params.set("idPortafolio", idPortafolio);
    }
    return this.http.get(`${this.apiServeURL}/var/resultado/list`, { params });
  }
  getResultadoVar(id) {
    return this.http.get(`${this.apiServeURL}/var/resultado/${id}`);
  }
  getDistribucionVar(id) {
    return this.http.get(`${this.apiServeURL}/var/resultado/${id}/distribucion`);
  }
  getSerieVar(idsPortafolio, idTipoMetodologiaVAR, nivelConfianza, limite = 30) {
    const params = new HttpParams({ fromObject: { idsPortafolio: idsPortafolio.map(String) } }).set("idTipoMetodologiaVAR", idTipoMetodologiaVAR).set("nivelConfianza", nivelConfianza).set("limite", limite);
    return this.http.get(`${this.apiServeURL}/var/resultado/serie`, { params });
  }
  getInstrumentosPortafolio(idsPortafolio) {
    const params = new HttpParams({ fromObject: { idsPortafolio: idsPortafolio.map(String) } });
    return this.http.get(`${this.apiServeURL}/var/portafolio/instrumentos`, { params });
  }
  getAnexo9(idResultadoVARDetalle, idTipoMetodologiaVAR) {
    let params = new HttpParams();
    if (idTipoMetodologiaVAR) {
      params = params.set("idTipoMetodologiaVAR", idTipoMetodologiaVAR);
    }
    return this.http.get(`${this.apiServeURL}/var/resultado/${idResultadoVARDetalle}/anexo9`, { params });
  }
  // Stress Testing (motor real: revaluación del portafolio bajo un escenario de shock)
  postEjecutarStress(objStress) {
    return this.http.post(`${this.apiServeURL}/stress/ejecutar`, objStress);
  }
  // Backtesting (motor real: prueba retrospectiva walk-forward fuera de muestra + prueba de Kupiec)
  postEjecutarBacktesting(objBacktesting) {
    return this.http.post(`${this.apiServeURL}/backtesting/ejecutar`, objBacktesting);
  }
  static {
    this.\u0275fac = function RegistroService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistroService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegistroService, factory: _RegistroService.\u0275fac, providedIn: "root" });
  }
};

export {
  LoaderComponent,
  RegistroService
};
//# sourceMappingURL=chunk-FSM2IJQ7.js.map
