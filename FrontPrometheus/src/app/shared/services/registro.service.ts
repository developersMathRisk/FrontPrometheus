import { HttpClient } from '@angular/common/http';
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
import { TipoBonoSBS } from '../models/atributo-financiero/tipo-bono-sbs';

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
  public postRegistrarBono(objBono: Bono){
    return this.http.post<Bono>(`${this.apiServeURL}/mantenedores/crearBono`, objBono);
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

  //Tipo Bono SBS
  public postRegistrarTipoBonoSBS(objTipoBonoSBS: TipoBonoSBS){
    return this.http.post<TipoBonoSBS>(`${this.apiServeURL}/mantenedores/crearTipoBonoSBS`, objTipoBonoSBS);
  }

  public getListaTipoBonoSBS(): Observable<TipoBonoSBS[]>{
    return this.http.get<TipoBonoSBS[]>(`${this.apiServeURL}/mantenedores/tipoBonoSBS/list`);
  }

  public putModificarTipoBonoSBS(id: number, objTipoBonoSBS: TipoBonoSBS): Observable<TipoBonoSBS> {
    return this.http.put<TipoBonoSBS>(`${this.apiServeURL}/mantenedores/modificarTipoBonoSBS/${id}`, objTipoBonoSBS);
  }

  public eiminarTipoBonoSBS(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoBonoSBS/${id}`);
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
    return this.http.post<TipoTasa>(`${this.apiServeURL}/mantenedores/crearTipoTasa`, objTipoTasa);
  }

  public getListaTipoTasa(): Observable<TipoTasa[]>{
    return this.http.get<TipoTasa[]>(`${this.apiServeURL}/mantenedores/tipoTasa/list`);
  }

  public putModificarTipoTasa(id: number, objTipoTasa: TipoTasa): Observable<TipoTasa> {
    return this.http.put<TipoTasa>(`${this.apiServeURL}/mantenedores/modificarTipoTasa/${id}`, objTipoTasa);
  }

  public eiminarTipoTasa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeURL}/mantenedores/eliminarTipoTasa/${id}`);
  }
  
}
