import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Moneda } from '../models/atributo-financiero/moneda';
import { Accion } from '../models/producto/accion';
import { Bono } from '../models/producto/bono';
import { FondoInversion } from '../models/producto/fondo-inversion';
import { Pais } from '../models/atributo-financiero/pais';
import { Corporacion } from '../models/atributo-financiero/corporacion';
import { FuenteInformacion } from '../models/atributo-financiero/fuente-informacion';
import { Plaza } from '../models/atributo-financiero/plaza';
import { TipoAccion } from '../models/atributo-financiero/tipo-accion';
import { Emisor } from '../models/atributo-financiero/emisor';
import { CalculoBaseInteres } from '../models/atributo-financiero/calculo-base-interes';
import { CurvaReferencia } from '../models/atributo-financiero/curva-referencia';
import { FormulaTasa } from '../models/atributo-financiero/formula-tasa';
import { FrecuenciaPago } from '../models/atributo-financiero/frecuencia-pago';
import { MetodoAmortizacion } from '../models/atributo-financiero/metodo-amortizacion';
import { Subsidiaria } from '../models/atributo-financiero/subsidiaria';
import { TipoTasa } from '../models/atributo-financiero/tipo-tasa';
import { TasaRJTE } from '../models/atributo-financiero/tasa-rjte';
import { TipoEmision } from '../models/atributo-financiero/tipo-emision';
import { TipoFondo } from '../models/atributo-financiero/tipo-fondo';
import { Sector } from '../models/atributo-financiero/sector';
import { GrupoEconomico } from '../models/atributo-financiero/grupo-economico';
import { TipoBono } from '../models/atributo-financiero/tipo-bono-sbs';
import { IndiceMercado } from '../models/factor/indice-mercado';
import { PrecioMercado } from '../models/factor/precio-mercado';
import { TasaInteres } from '../models/factor/tasa-interes';
import { Volatilidad } from '../models/factor/volatilidad';
import { BonoCupon } from '../models/producto/bono-cupon';
import { TermVolatilidad } from '../models/atributo-financiero/term-volatilidad';
import { SkewPoint } from '../models/atributo-financiero/skew-point';
import { TipoCambio } from '../models/atributo-financiero/tipo-cambio';
import { Portafolio } from '../models/portafolio/portafolio';
import { PortafolioInstrumento } from '../models/portafolio/portafolio-instrumento';
import { Benchmark } from '../models/portafolio/benchmark';
import { TipoInstrumento } from '../models/atributo-financiero/tipo-instrumento';
import { TipoSector } from '../models/atributo-financiero/tipo-sector';
import { NivelConfianza } from '../models/var/nivel-confianza';
import { TipoMetodologiaVar } from '../models/var/tipo-metodologia-var';
import { EjecutarVarRequest } from '../models/var/ejecutar-var-request';
import { EjecutarVarResponse } from '../models/var/ejecutar-var-response';
import { VarEjecucionResumen } from '../models/var/var-ejecucion-resumen';
import { PuntoDistribucionVar, PuntoSerieVar } from '../models/var/punto-var';
import { InstrumentoElegibilidad } from '../models/var/instrumento-elegibilidad';
import { AnexoNueve } from '../models/var/anexo-nueve';
import { EjecutarStressRequest, EjecutarStressResponse } from '../models/var/ejecutar-stress';
import { EjecutarBacktestingRequest, EjecutarBacktestingResponse } from '../models/var/ejecutar-backtesting';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private apiServeURL = environment.apiBaseURL;
  // private http!: HttpClient;

  constructor(private http: HttpClient) { }

  public hello(): Observable<string>{
    return this.http.get(`${this.apiServeURL}/mantenedores/hello`, { responseType: 'text' });
  }

  public monedas(): Observable<Moneda[]>{
    return this.http.get<Moneda[]>(`${this.apiServeURL}/mantenedores/monedas`);
  }

  //INSTRUMENTOS

  //Acción
  public postRegistrarAccion(objAccion: Accion){
    return this.http.post<Accion>(`${this.apiServeURL}/mantenedores/crearAccion`, objAccion);
  }

  public getListaAccion(): Observable<Accion[]>{
    return this.http.get<Accion[]>(`${this.apiServeURL}/mantenedores/accion/list`);
  }

  public putModificarAccion(id: number, objAccion: Accion): Observable<Accion> {
    return this.http.put<Accion>(`${this.apiServeURL}/mantenedores/modificarAccion/${id}`, objAccion);
  }

  public eiminarAccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarAccion/${id}`);
  }
  
  //Bono

  public postRegistrarBono(objBono: Bono, flagAutomatico: boolean) {
    const params = new HttpParams().set('flagAutomatico', flagAutomatico.toString());
  
    return this.http.post<Bono>(`${this.apiServeURL}/mantenedores/crearBono`, objBono, { params });
  }
  
  public postRegistrarCuponerXBono(listBonoCupon: BonoCupon[]){
    return this.http.post<Bono>(`${this.apiServeURL}/mantenedores/guardarCuponeraxBono`, listBonoCupon);
  }

  public getListaBono(): Observable<Bono[]>{
    return this.http.get<Bono[]>(`${this.apiServeURL}/mantenedores/bono/list`);
  }

  public putModificarBono(id: number, objBono: Bono): Observable<Bono> {
    return this.http.put<Bono>(`${this.apiServeURL}/mantenedores/modificarBono/${id}`, objBono);
  }

  public eiminarBono(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarBono/${id}`);
  }

  //Fondo de inversión
  public postRegistrarFondoInversion(objFondoInversion: FondoInversion){
    return this.http.post<FondoInversion>(`${this.apiServeURL}/mantenedores/crearFondo`, objFondoInversion);
  }

  public getListaFondoInversion(): Observable<FondoInversion[]>{
    return this.http.get<FondoInversion[]>(`${this.apiServeURL}/mantenedores/fondo/list`);
  }

  public putModificarFondoInversion(id: number, objFondoInversion: FondoInversion): Observable<FondoInversion> {
    return this.http.put<FondoInversion>(`${this.apiServeURL}/mantenedores/modificarFondo/${id}`, objFondoInversion);
  }

  public eiminarFondoInversion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarFondo/${id}`);
  }


  //ATRIBUTOS

  //Calculo Base Interes
  public postRegistrarCalculoBaseInteres(objCalculoBaseInteres: CalculoBaseInteres){
    return this.http.post<CalculoBaseInteres>(`${this.apiServeURL}/mantenedores/crearCalculoBaseInteres`, objCalculoBaseInteres);
  }

  public getListaCalculoBaseInteres(): Observable<CalculoBaseInteres[]>{
    return this.http.get<CalculoBaseInteres[]>(`${this.apiServeURL}/mantenedores/calculoBaseInteres/list`);
  }

  public putModificarCalculoBaseInteres(id: number, objCalculoBaseInteres: CalculoBaseInteres): Observable<CalculoBaseInteres> {
    return this.http.put<CalculoBaseInteres>(`${this.apiServeURL}/mantenedores/modificarCalculoBaseInteres/${id}`, objCalculoBaseInteres);
  }

  public eiminarCalculoBaseInteres(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarCalculoBaseInteres/${id}`);
  }

  //Corporacion
  public postRegistrarCorporacion(objCorporacion: Corporacion){
    return this.http.post<Corporacion>(`${this.apiServeURL}/mantenedores/crearCorporacion`, objCorporacion);
  }

  public getListaCorporacion(): Observable<Corporacion[]>{
    return this.http.get<Corporacion[]>(`${this.apiServeURL}/mantenedores/corporacion/list`);
  }

  public putModificarCorporacion(id: number, objCorporacion: Corporacion): Observable<Corporacion> {
    return this.http.put<Corporacion>(`${this.apiServeURL}/mantenedores/modificarCorporacion/${id}`, objCorporacion);
  }

  public eiminarCorporacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarCorporacion/${id}`);
  }

  //Curva Referencia
  public postRegistrarCurvaReferencia(objCurvaReferencia: CurvaReferencia){
    return this.http.post<CurvaReferencia>(`${this.apiServeURL}/mantenedores/crearCurvaReferencia`, objCurvaReferencia);
  }

  public getListaCurvaReferencia(): Observable<CurvaReferencia[]>{
    return this.http.get<CurvaReferencia[]>(`${this.apiServeURL}/mantenedores/curvaReferencia/list`);
  }

  public putModificarCurvaReferencia(id: number, objCurvaReferencia: CurvaReferencia): Observable<CurvaReferencia> {
    return this.http.put<CurvaReferencia>(`${this.apiServeURL}/mantenedores/modificarCurvaReferencia/${id}`, objCurvaReferencia);
  }

  public eiminarCurvaReferencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarCurvaReferencia/${id}`);
  }

  //Emisor
  public postRegistrarEmisor(objEmisor: Emisor){
    return this.http.post<Emisor>(`${this.apiServeURL}/mantenedores/crearEmisor`, objEmisor);
  }

  public getListaEmisor(): Observable<Emisor[]>{
    return this.http.get<Emisor[]>(`${this.apiServeURL}/mantenedores/emisor/list`);
  }

  public putModificarEmisor(id: number, objEmisor: Emisor): Observable<Emisor> {
    return this.http.put<Emisor>(`${this.apiServeURL}/mantenedores/modificarEmisor/${id}`, objEmisor);
  }

  public eiminarEmisor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarEmisor/${id}`);
  }

  //Formula Tasa
  public postRegistrarFormulaTasa(objFormulaTasa: FormulaTasa){
    return this.http.post<FormulaTasa>(`${this.apiServeURL}/mantenedores/crearFormulaTasa`, objFormulaTasa);
  }

  public getListaFormulaTasa(): Observable<FormulaTasa[]>{
    return this.http.get<FormulaTasa[]>(`${this.apiServeURL}/mantenedores/formulaTasa/list`);
  }

  public putModificarFormulaTasa(id: number, objFormulaTasa: FormulaTasa): Observable<FormulaTasa> {
    return this.http.put<FormulaTasa>(`${this.apiServeURL}/mantenedores/modificarFormulaTasa/${id}`, objFormulaTasa);
  }

  public eiminarFormulaTasa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarFormulaTasa/${id}`);
  }

  //Frecuencia Pago
  public postRegistrarFrecuenciaPago(objFrecuenciaPago: FrecuenciaPago){
    return this.http.post<FrecuenciaPago>(`${this.apiServeURL}/mantenedores/crearFrecuenciaPago`, objFrecuenciaPago);
  }

  public getListaFrecuenciaPago(): Observable<FrecuenciaPago[]>{
    return this.http.get<FrecuenciaPago[]>(`${this.apiServeURL}/mantenedores/frecuenciaPago/list`);
  }

  public putModificarFrecuenciaPago(id: number, objFrecuenciaPago: FrecuenciaPago): Observable<FrecuenciaPago> {
    return this.http.put<FrecuenciaPago>(`${this.apiServeURL}/mantenedores/modificarFrecuenciaPago/${id}`, objFrecuenciaPago);
  }

  public eiminarFrecuenciaPago(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarFrecuenciaPago/${id}`);
  }

  //Fuente Información
  public postRegistrarFuenteInformacion(objFuenteInformacion: FuenteInformacion){
    return this.http.post<FuenteInformacion>(`${this.apiServeURL}/mantenedores/crearFuenteInformacion`, objFuenteInformacion);
  }

  public getListaFuenteInformacion(): Observable<FuenteInformacion[]>{
    return this.http.get<FuenteInformacion[]>(`${this.apiServeURL}/mantenedores/fuenteInformacion/list`);
  }

  public putModificarFuenteInformacion(id: number, objFuenteInformacion: FuenteInformacion): Observable<FuenteInformacion> {
    return this.http.put<FuenteInformacion>(`${this.apiServeURL}/mantenedores/modificarFuenteInformacion/${id}`, objFuenteInformacion);
  }

  public eiminarFuenteInformacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarFuenteInformacion/${id}`);
  }

  //Grupo Económico
  public postRegistrarGrupoEconomico(objGrupoEconomico: GrupoEconomico){
    return this.http.post<GrupoEconomico>(`${this.apiServeURL}/mantenedores/crearGrupoEconomico`, objGrupoEconomico);
  }

  public getListaGrupoEconomico(): Observable<GrupoEconomico[]>{
    return this.http.get<GrupoEconomico[]>(`${this.apiServeURL}/mantenedores/grupoEconomico/list`);
  }

  public putModificarGrupoEconomico(id: number, objGrupoEconomico: GrupoEconomico): Observable<GrupoEconomico> {
    return this.http.put<GrupoEconomico>(`${this.apiServeURL}/mantenedores/modificarGrupoEconomico/${id}`, objGrupoEconomico);
  }

  public eiminarGrupoEconomico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarGrupoEconomico/${id}`);
  }

  //Metodo Amortizacion
  public postRegistrarMetodoAmortizacion(objMetodoAmortizacion: MetodoAmortizacion){
    return this.http.post<MetodoAmortizacion>(`${this.apiServeURL}/mantenedores/crearMetodoAmortizacion`, objMetodoAmortizacion);
  }

  public getListaMetodoAmortizacion(): Observable<MetodoAmortizacion[]>{
    return this.http.get<MetodoAmortizacion[]>(`${this.apiServeURL}/mantenedores/metodoAmortizacion/list`);
  }

  public putModificarMetodoAmortizacion(id: number, objMetodoAmortizacion: MetodoAmortizacion): Observable<MetodoAmortizacion> {
    return this.http.put<MetodoAmortizacion>(`${this.apiServeURL}/mantenedores/modificarMetodoAmortizacion/${id}`, objMetodoAmortizacion);
  }

  public eiminarMetodoAmortizacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarMetodoAmortizacion/${id}`);
  }

  //Moneda
  public postRegistrarMoneda(objMoneda: Moneda){
    return this.http.post<Emisor>(`${this.apiServeURL}/mantenedores/crearMoneda`, objMoneda);
  }

  public getListaMoneda(): Observable<Moneda[]>{
    return this.http.get<Moneda[]>(`${this.apiServeURL}/mantenedores/moneda/list`);
  }

  public putModificarMoneda(id: number, objMoneda: Moneda): Observable<Moneda> {
    return this.http.put<Moneda>(`${this.apiServeURL}/mantenedores/modificarMoneda/${id}`, objMoneda);
  }

  public eiminarMoneda(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarMoneda/${id}`);
  }

  //País
  public postRegistrarPais(objPais: Pais){
    return this.http.post<Pais>(`${this.apiServeURL}/mantenedores/crearPais`, objPais);
  }

  public getListaPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.apiServeURL}/mantenedores/pais/list`);
  }

  public putModificarPais(id: number, objPais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.apiServeURL}/mantenedores/modificarPais/${id}`, objPais);
  }

  public eiminarPais(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarPais/${id}`);
  }

  //Plaza
  public postRegistrarPlaza(objPlaza: Plaza){
    return this.http.post<Plaza>(`${this.apiServeURL}/mantenedores/crearPlaza`, objPlaza);
  }

  public getListaPlaza(): Observable<Plaza[]>{
    return this.http.get<Plaza[]>(`${this.apiServeURL}/mantenedores/plaza/list`);
  }

  public putModificarPlaza(id: number, objPlaza: Plaza): Observable<Plaza> {
    return this.http.put<Plaza>(`${this.apiServeURL}/mantenedores/modificarPlaza/${id}`, objPlaza);
  }

  public eiminarPlaza(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarPlaza/${id}`);
  }

  //Sector
  public postRegistrarSector(objSector: Sector){
    return this.http.post<Sector>(`${this.apiServeURL}/mantenedores/crearSector`, objSector);
  }

  public getListaSector(): Observable<Sector[]>{
    return this.http.get<Sector[]>(`${this.apiServeURL}/mantenedores/sector/list`);
  }

  public putModificarSector(id: number, objSector: Sector): Observable<Sector> {
    return this.http.put<Sector>(`${this.apiServeURL}/mantenedores/modificarSector/${id}`, objSector);
  }

  public eiminarSector(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarSector/${id}`);
  }

  //Subsidiaria
  public postRegistrarSubsidiaria(objSubsidiaria: Subsidiaria){
    return this.http.post<Subsidiaria>(`${this.apiServeURL}/mantenedores/crearSubsidiaria`, objSubsidiaria);
  }

  public getListaSubsidiaria(): Observable<Subsidiaria[]>{
    return this.http.get<Subsidiaria[]>(`${this.apiServeURL}/mantenedores/subsidiaria/list`);
  }

  public putModificarSubsidiaria(id: number, objSubsidiaria: Subsidiaria): Observable<Subsidiaria> {
    return this.http.put<Subsidiaria>(`${this.apiServeURL}/mantenedores/modificarSubsidiaria/${id}`, objSubsidiaria);
  }

  public eiminarSubsidiaria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarSubsidiaria/${id}`);
  }

  //Tasa RJTE
  public postRegistrarTasaRJTE(objTasaRJTE: TasaRJTE){
    return this.http.post<TipoTasa>(`${this.apiServeURL}/mantenedores/crearTasaRJTE`, objTasaRJTE);
  }

  public getListaTasaRJTE(): Observable<TasaRJTE[]>{
    return this.http.get<TasaRJTE[]>(`${this.apiServeURL}/mantenedores/tasaRJTE/list`);
  }

  public putModificarTasaRJTE(id: number, objTasaRJTE: TasaRJTE): Observable<TasaRJTE> {
    return this.http.put<TasaRJTE>(`${this.apiServeURL}/mantenedores/modificarTasaRJTE/${id}`, objTasaRJTE);
  }

  public eiminarTasaRJTE(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTasaRJTE/${id}`);
  }

  //Tipo Accion
  public postRegistrarTipoAccion(objTipoAccion: TipoAccion){
    return this.http.post<TipoAccion>(`${this.apiServeURL}/mantenedores/crearTipoAccion`, objTipoAccion);
  }

  public getListaTipoAccion(): Observable<TipoAccion[]>{
    return this.http.get<TipoAccion[]>(`${this.apiServeURL}/mantenedores/tipoAccion/list`);
  }

  public putModificarTipoAccion(id: number, objTipoAccion: TipoAccion): Observable<TipoAccion> {
    return this.http.put<TipoAccion>(`${this.apiServeURL}/mantenedores/modificarTipoAccion/${id}`, objTipoAccion);
  }

  public eiminarTipoAccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoAccion/${id}`);
  }

  //Tipo Bono
  public postRegistrarTipoBono(objTipoBono: TipoBono){
    return this.http.post<TipoBono>(`${this.apiServeURL}/mantenedores/crearTipoBono`, objTipoBono);
  }

  public getListaTipoBono(): Observable<TipoBono[]>{
    return this.http.get<TipoBono[]>(`${this.apiServeURL}/mantenedores/tipoBono/list`);
  }

  public putModificarTipoBono(id: number, objTipoBono: TipoBono): Observable<TipoBono> {
    return this.http.put<TipoBono>(`${this.apiServeURL}/mantenedores/modificarTipoBono/${id}`, objTipoBono);
  }

  public eiminarTipoBono(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoBono/${id}`);
  }

  //Tipo Fondo
  public postRegistrarTipoFondo(objTipoFondo: TipoFondo){
    return this.http.post<TipoFondo>(`${this.apiServeURL}/mantenedores/crearTipoFondo`, objTipoFondo);
  }

  public getListaTipoFondo(): Observable<TipoFondo[]>{
    return this.http.get<TipoFondo[]>(`${this.apiServeURL}/mantenedores/tipoFondo/list`);
  }

  public putModificarTipoFondo(id: number, objTipoFondo: TipoFondo): Observable<TipoFondo> {
    return this.http.put<TipoFondo>(`${this.apiServeURL}/mantenedores/modificarTipoFondo/${id}`, objTipoFondo);
  }

  public eiminarTipoFondo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoFondo/${id}`);
  }

  //Tipo Instrumento
  public postRegistrarTipoInstrumento(objTipoInstrumento: TipoInstrumento){
    return this.http.post<TipoInstrumento>(`${this.apiServeURL}/mantenedores/crearTipoInstrumento`, objTipoInstrumento);
  }

  public getListaTipoInstrumento(): Observable<TipoInstrumento[]>{
    return this.http.get<TipoInstrumento[]>(`${this.apiServeURL}/mantenedores/tipoInstrumento/list`);
  }

  public putModificarTipoInstrumento(id: number, objTipoInstrumento: TipoInstrumento): Observable<TipoInstrumento> {
    return this.http.put<TipoInstrumento>(`${this.apiServeURL}/mantenedores/modificarTipoInstrumento/${id}`, objTipoInstrumento);
  }

  public eiminarTipoInstrumento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoInstrumento/${id}`);
  }

  //Tipo Tasa
  public postRegistrarTipoEmision(objTipoEmision: TipoEmision){
    return this.http.post<TipoEmision>(`${this.apiServeURL}/mantenedores/crearTipoEmision`, objTipoEmision);
  }

  public getListaTipoEmision(): Observable<TipoEmision[]>{
    return this.http.get<TipoEmision[]>(`${this.apiServeURL}/mantenedores/tipoEmision/list`);
  }

  public putModificarTipoEmision(id: number, objTipoEmision: TipoEmision): Observable<TipoEmision> {
    return this.http.put<TipoEmision>(`${this.apiServeURL}/mantenedores/modificarTipoEmision/${id}`, objTipoEmision);
  }

  public eiminarTipoEmision(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoEmision/${id}`);
  }

  //Tipo Tasa
  public postRegistrarTipoTasa(objTipoTasa: TipoTasa){
    return this.http.post<TipoTasa>(`${this.apiServeURL}/mantenedores/crearTipoTasaInteres`, objTipoTasa);
  }

  public getListaTipoTasa(): Observable<TipoTasa[]>{
    return this.http.get<TipoTasa[]>(`${this.apiServeURL}/mantenedores/tipoTasaInteres/list`);
  }

  public putModificarTipoTasa(id: number, objTipoTasa: TipoTasa): Observable<TipoTasa> {
    return this.http.put<TipoTasa>(`${this.apiServeURL}/mantenedores/modificarTipoTasaInteres/${id}`, objTipoTasa);
  }

  public eiminarTipoTasa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoTasaInteres/${id}`);
  }

  //Tipo Sector
  public postRegistrarTipoSector(objTipoSector: TipoSector){
    return this.http.post<TipoSector>(`${this.apiServeURL}/mantenedores/crearTipoSector`, objTipoSector);
  }

  public getListaTipoSector(): Observable<TipoSector[]>{
    return this.http.get<TipoSector[]>(`${this.apiServeURL}/mantenedores/tipoSector/list`);
  }

  public putModificarTipoSector(id: number, objTipoSector: TipoSector): Observable<TipoSector> {
    return this.http.put<TipoSector>(`${this.apiServeURL}/mantenedores/modificarTipoSector/${id}`, objTipoSector);
  }

  public eiminarTipoSector(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoSector/${id}`);
  }

  //Term. Volatilidad
  public postRegistrarTermVolatilidad(objTermVolatilidad: TermVolatilidad){
    return this.http.post<TermVolatilidad>(`${this.apiServeURL}/mantenedores/crearTermVolatililty`, objTermVolatilidad);
  }

  public getListaTermVolatilidad(): Observable<TermVolatilidad[]>{
    return this.http.get<TermVolatilidad[]>(`${this.apiServeURL}/mantenedores/termVolatililty/list`);
  }

  public putModificarTermVolatilidad(id: number, objTermVolatilidad: TermVolatilidad): Observable<TermVolatilidad> {
    return this.http.put<TermVolatilidad>(`${this.apiServeURL}/mantenedores/modificarTermVolatililty/${id}`, objTermVolatilidad);
  }

  public eiminarTermVolatilidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTermVolatililty/${id}`);
  }

  //Skew Point
  public postRegistrarSkewPoint(objSkewPoint: SkewPoint){
    return this.http.post<SkewPoint>(`${this.apiServeURL}/mantenedores/crearSkewPoint`, objSkewPoint);
  }

  public getListaSkewPoint(): Observable<SkewPoint[]>{
    return this.http.get<SkewPoint[]>(`${this.apiServeURL}/mantenedores/skewPoint/list`);
  }

  public putModificarSkewPoint(id: number, objSkewPoint: SkewPoint): Observable<SkewPoint> {
    return this.http.put<SkewPoint>(`${this.apiServeURL}/mantenedores/modificarSkewPoint/${id}`, objSkewPoint);
  }

  public eiminarSkewPoint(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarSkewPoint/${id}`);
  }

  //Tipo Cambio
  public postRegistrarTipoCambio(objTipoCambio: TipoCambio){
    return this.http.post<TipoCambio>(`${this.apiServeURL}/mantenedores/crearTipoCambio`, objTipoCambio);
  }

  // Serie diaria: las vistas piden un rango para no traer la tabla completa.
  // Sin rango se mantiene el comportamiento anterior (lo usan los combos).
  public getListaTipoCambio(desde?: string | null, hasta?: string | null): Observable<TipoCambio[]>{
    const params = desde && hasta ? new HttpParams().set('desde', desde).set('hasta', hasta) : undefined;
    return this.http.get<TipoCambio[]>(`${this.apiServeURL}/mantenedores/tipoCambio/list`, { params });
  }

  public putModificarTipoCambio(id: number, objTipoCambio: TipoCambio): Observable<TipoCambio> {
    return this.http.put<TipoCambio>(`${this.apiServeURL}/mantenedores/modificarTipoCambio/${id}`, objTipoCambio);
  }

  public eiminarTipoCambio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoCambio/${id}`);
  }


  //FACTOR

  //índice Mercado
  public postRegistrarIndiceMercado(objIndiceMercado: IndiceMercado){
    return this.http.post<IndiceMercado>(`${this.apiServeURL}/mantenedores/crearIndiceMercado`, objIndiceMercado);
  }

  public getListaIndiceMercado(): Observable<IndiceMercado[]>{
    return this.http.get<IndiceMercado[]>(`${this.apiServeURL}/mantenedores/indiceMercado/list`);
  }

  public putModificarIndiceMercado(id: number, objIndiceMercado: IndiceMercado): Observable<IndiceMercado> {
    return this.http.put<IndiceMercado>(`${this.apiServeURL}/mantenedores/modificarIndiceMercado/${id}`, objIndiceMercado);
  }

  public eiminarIndiceMercado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarIndiceMercado/${id}`);
  }

  //Precio Mercado
  public postRegistrarPrecioMercado(objPrecioMercado: PrecioMercado){
    return this.http.post<PrecioMercado>(`${this.apiServeURL}/mantenedores/crearVectorPrecio`, objPrecioMercado);
  }

  // Serie diaria: las vistas piden un rango para no traer la tabla completa.
  // Sin rango se mantiene el comportamiento anterior (lo usan los combos).
  public getListaPrecioMercado(desde?: string | null, hasta?: string | null): Observable<PrecioMercado[]>{
    const params = desde && hasta ? new HttpParams().set('desde', desde).set('hasta', hasta) : undefined;
    return this.http.get<PrecioMercado[]>(`${this.apiServeURL}/mantenedores/vectorPrecio/list`, { params });
  }

  public putModificarPrecioMercado(id: number, objPrecioMercado: PrecioMercado): Observable<PrecioMercado> {
    return this.http.put<PrecioMercado>(`${this.apiServeURL}/mantenedores/modificarVectorPrecio/${id}`, objPrecioMercado);
  }

  public eiminarPrecioMercado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarVectorPrecio/${id}`);
  }

  //Tasa Interés
  public postRegistrarTasaInteres(objTasaInteres: TasaInteres){
    return this.http.post<TasaInteres>(`${this.apiServeURL}/mantenedores/crearCurvaReferenciaPuntos`, objTasaInteres);
  }

  public getListaTasaInteres(): Observable<TasaInteres[]>{
    return this.http.get<TasaInteres[]>(`${this.apiServeURL}/mantenedores/curvaReferenciaPuntos/list`);
  }

  public putModificarTasaInteres(id: number, objTasaInteres: TasaInteres): Observable<TasaInteres> {
    return this.http.put<TasaInteres>(`${this.apiServeURL}/mantenedores/modificarCurvaReferenciaPuntos/${id}`, objTasaInteres);
  }

  public eiminarTasaInteres(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarCurvaReferenciaPuntos/${id}`);
  }

  //Volatilidad
  public postRegistrarVolatilidad(objVolatilidad: Volatilidad){
    return this.http.post<Volatilidad>(`${this.apiServeURL}/mantenedores/crearVolatilitySurfacePoint`, objVolatilidad);
  }

  // Serie diaria: las vistas piden un rango para no traer la tabla completa.
  // Sin rango se mantiene el comportamiento anterior (lo usan los combos).
  public getListaVolatilidad(desde?: string | null, hasta?: string | null): Observable<Volatilidad[]>{
    const params = desde && hasta ? new HttpParams().set('desde', desde).set('hasta', hasta) : undefined;
    return this.http.get<Volatilidad[]>(`${this.apiServeURL}/mantenedores/volatilitySurfacePoint/list`, { params });
  }

  public putModificarVolatilidad(id: number, objVolatilidad: Volatilidad): Observable<Volatilidad> {
    return this.http.put<Volatilidad>(`${this.apiServeURL}/mantenedores/modificarVolatilitySurfacePoint/${id}`, objVolatilidad);
  }

  public eiminarVolatilidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarVolatilitySurfacePoint/${id}`);
  }

  //PORTAFOLIO

  //Portafolio
  public postRegistrarPortafolio(objPortafolio: Portafolio){
    return this.http.post<Portafolio>(`${this.apiServeURL}/mantenedores/crearPortafolio`, objPortafolio);
  }

  public getListaPortafolio(): Observable<Portafolio[]>{
    return this.http.get<Portafolio[]>(`${this.apiServeURL}/mantenedores/portafolio/list`);
  }

  public putModificarPortafolio(id: number, objPortafolio: Portafolio): Observable<Portafolio> {
    return this.http.put<Portafolio>(`${this.apiServeURL}/mantenedores/modificarPortafolio/${id}`, objPortafolio);
  }

  public eiminarPortafolio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarPortafolio/${id}`);
  }

  //PortafolioInstrumento
  public postRegistrarPortafolioInstrumento(objPortafolioInstrumento: PortafolioInstrumento){
    return this.http.post<PortafolioInstrumento>(`${this.apiServeURL}/mantenedores/crearPortafolioInstrumento`, objPortafolioInstrumento);
  }

  public postRegistrarPortafolioInstrumentoMasivo(listPortafolioInstrumento: PortafolioInstrumento[]){
    return this.http.post<PortafolioInstrumento[]>(`${this.apiServeURL}/mantenedores/crearPortafolioInstrumentoMasivo`, listPortafolioInstrumento);
  }

  public getListaPortafolioInstrumento(): Observable<PortafolioInstrumento[]>{
    return this.http.get<PortafolioInstrumento[]>(`${this.apiServeURL}/mantenedores/portafolioInstrumento/list`);
  }

  public putModificarPortafolioInstrumento(id: number, objPortafolioInstrumento: PortafolioInstrumento): Observable<PortafolioInstrumento> {
    return this.http.put<PortafolioInstrumento>(`${this.apiServeURL}/mantenedores/modificarPortafolioInstrumento/${id}`, objPortafolioInstrumento);
  }

  public eiminarPortafolioInstrumento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarPortafolioInstrumento/${id}`);
  }

  //Benchmark
  public getListaBenchmark(): Observable<Benchmark[]>{
    return this.http.get<Benchmark[]>(`${this.apiServeURL}/mantenedores/benchmark/list`);
  }

  //VaR
  public getListaNivelConfianza(): Observable<NivelConfianza[]>{
    return this.http.get<NivelConfianza[]>(`${this.apiServeURL}/mantenedores/nivelConfianza/list`);
  }

  public getListaTipoMetodologiaVAR(): Observable<TipoMetodologiaVar[]>{
    return this.http.get<TipoMetodologiaVar[]>(`${this.apiServeURL}/mantenedores/tipoMetodologiaVAR/list`);
  }

  public postEjecutarVar(objEjecutarVar: EjecutarVarRequest): Observable<EjecutarVarResponse>{
    return this.http.post<EjecutarVarResponse>(`${this.apiServeURL}/var/ejecutar`, objEjecutarVar);
  }

  public getListaResultadosVar(idPortafolio?: number | null): Observable<VarEjecucionResumen[]>{
    let params = new HttpParams();
    if (idPortafolio) { params = params.set('idPortafolio', idPortafolio); }
    return this.http.get<VarEjecucionResumen[]>(`${this.apiServeURL}/var/resultado/list`, { params });
  }

  public getResultadoVar(id: number): Observable<EjecutarVarResponse>{
    return this.http.get<EjecutarVarResponse>(`${this.apiServeURL}/var/resultado/${id}`);
  }

  public getDistribucionVar(id: number): Observable<PuntoDistribucionVar[]>{
    return this.http.get<PuntoDistribucionVar[]>(`${this.apiServeURL}/var/resultado/${id}/distribucion`);
  }

  public getSerieVar(idsPortafolio: number[], idTipoMetodologiaVAR: number, nivelConfianza: number, limite = 30): Observable<PuntoSerieVar[]>{
    const params = new HttpParams({ fromObject: { idsPortafolio: idsPortafolio.map(String) } })
      .set('idTipoMetodologiaVAR', idTipoMetodologiaVAR).set('nivelConfianza', nivelConfianza).set('limite', limite);
    return this.http.get<PuntoSerieVar[]>(`${this.apiServeURL}/var/resultado/serie`, { params });
  }

  public getInstrumentosPortafolio(idsPortafolio: number[]): Observable<InstrumentoElegibilidad[]>{
    const params = new HttpParams({ fromObject: { idsPortafolio: idsPortafolio.map(String) } });
    return this.http.get<InstrumentoElegibilidad[]>(`${this.apiServeURL}/var/portafolio/instrumentos`, { params });
  }

  public getAnexo9(idResultadoVARDetalle: number, idTipoMetodologiaVAR?: number | null): Observable<AnexoNueve>{
    let params = new HttpParams();
    if (idTipoMetodologiaVAR) { params = params.set('idTipoMetodologiaVAR', idTipoMetodologiaVAR); }
    return this.http.get<AnexoNueve>(`${this.apiServeURL}/var/resultado/${idResultadoVARDetalle}/anexo9`, { params });
  }

  // Stress Testing (motor real: revaluación del portafolio bajo un escenario de shock)
  public postEjecutarStress(objStress: EjecutarStressRequest): Observable<EjecutarStressResponse>{
    return this.http.post<EjecutarStressResponse>(`${this.apiServeURL}/stress/ejecutar`, objStress);
  }

  // Backtesting (motor real: prueba retrospectiva walk-forward fuera de muestra + prueba de Kupiec)
  public postEjecutarBacktesting(objBacktesting: EjecutarBacktestingRequest): Observable<EjecutarBacktestingResponse>{
    return this.http.post<EjecutarBacktestingResponse>(`${this.apiServeURL}/backtesting/ejecutar`, objBacktesting);
  }

}
