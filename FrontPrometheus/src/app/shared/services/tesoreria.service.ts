import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type TipoOperacion = 'ACCION' | 'FONDO' | 'BONO' | 'FX_SPOT';
export type EstadoOperacion = 'Pendiente' | 'Pre liquidado' | 'Confirmado' | 'Liquidado' | 'Anulado';

export interface InstrumentoTesoreria {
  tipo: TipoOperacion; codIsin: string | null; ticker: string; nombre: string; emisor: string | null; moneda: string;
  vencimiento: string | null; nominalUnitario: number | null; tasaCupon: number | null;
  precioReferencia: number | null; fechaPrecio: string | null;
}

export interface Contraparte { id: number; nombre: string; tipo: string; exigeSubasta: boolean; activo: boolean; }
export interface Custodia { id: number; nombre: string; cuenta: string | null; activo: boolean; }
export interface CuentaBancaria { id: number; banco: string; moneda: string; numero: string; saldo: number; activo: boolean; }
export interface PortafolioRef { idPortafolio: number; codigo: string; descripcion: string; moneda: string; }

export interface CatalogosTesoreria {
  contrapartes: Contraparte[]; custodias: Custodia[]; bancos: string[]; portafolios: PortafolioRef[];
}

export interface SolicitudOperacion {
  tipo: TipoOperacion; codIsin: string | null; lado: 'COMPRA' | 'VENTA'; nominal: number | null; precio: number | null;
  rendimiento: number | null; fechaOperacion: string | null; fechaLiquidacion: string | null; mercado: string;
  idSubasta: string | null; idPortafolio: number | null; idContraparte: number | null;
  referenciaExterna: string | null; broker: string | null; observaciones: string | null;
}

export interface CalculoOperacion {
  montoLimpio: number | null; interesCorrido: number | null; montoTotal: number | null; monedaLiquidacion: string | null;
  unidades: number | null; errores: string[]; avisos: string[];
}

export interface Operacion {
  id: number; codigo: string; tipo: TipoOperacion; codIsin: string | null; ticker: string; nombreInstrumento: string;
  emisor: string | null; moneda: string; lado: 'COMPRA' | 'VENTA'; nominal: number; precio: number;
  rendimiento: number | null; unidades: number | null; montoLimpio: number; interesCorrido: number; montoTotal: number;
  monedaLiquidacion: string; fechaOperacion: string; fechaLiquidacion: string; mercado: string; idSubasta: string | null;
  idPortafolio: number | null; portafolio: string | null; idContraparte: number; contraparte: string;
  idCustodia: number | null; custodia: string | null; bancoPagador: string | null; tipoLiquidacion: string;
  referenciaExterna: string | null; broker: string | null; observaciones: string | null; trader: string;
  estado: EstadoOperacion; cajaAplicada: boolean; posicionAplicada: boolean; siguienteEstado: EstadoOperacion | null;
}

export interface FlujoCaja { moneda: string; monto: number; disponible: number | null; suficiente: boolean; }
export interface LineaAsiento { cuenta: string; descripcion: string; moneda: string; debe: number; haber: number; }
export interface EventoOperacion { estado: EstadoOperacion; fechaHora: string; usuario: string; detalle: string | null; }

export interface DetalleOperacion {
  operacion: Operacion; historial: EventoOperacion[]; flujos: FlujoCaja[]; asiento: LineaAsiento[]; asientoRegistrado: boolean;
}

export interface Tenencia {
  custodia: string; codIsin: string; ticker: string; nombre: string; tipo: TipoOperacion; moneda: string;
  unidadesLiquidadas: number; unidadesPorLiquidar: number; ultimaLiquidacion: string | null; operaciones: number;
}

export interface Contabilidad {
  plan: { codigo: string; nombre: string }[];
  asientos: { operacion: Operacion; lineas: LineaAsiento[] }[];
}

export const ETIQUETA_TIPO: Record<TipoOperacion, string> = {
  ACCION: 'Acción', FONDO: 'Fondo', BONO: 'Bono / CD', FX_SPOT: 'FX spot',
};

/** API de Tesorería (Front y Back Office). */
@Injectable({ providedIn: 'root' })
export class TesoreriaService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiBaseURL}/tesoreria`;

  instrumentos(tipo?: TipoOperacion): Observable<InstrumentoTesoreria[]> {
    const params = tipo ? new HttpParams().set('tipo', tipo) : undefined;
    return this.http.get<InstrumentoTesoreria[]>(`${this.url}/instrumentos`, { params });
  }

  catalogos(): Observable<CatalogosTesoreria> {
    return this.http.get<CatalogosTesoreria>(`${this.url}/catalogos`);
  }

  simular(s: SolicitudOperacion): Observable<CalculoOperacion> {
    return this.http.post<CalculoOperacion>(`${this.url}/operaciones/simular`, s);
  }

  registrar(s: SolicitudOperacion): Observable<Operacion> {
    return this.http.post<Operacion>(`${this.url}/operaciones`, s);
  }

  operaciones(desde?: string | null, hasta?: string | null): Observable<Operacion[]> {
    let params = new HttpParams();
    if (desde) params = params.set('desde', desde);
    if (hasta) params = params.set('hasta', hasta);
    return this.http.get<Operacion[]>(`${this.url}/operaciones`, { params });
  }

  detalle(id: number): Observable<DetalleOperacion> {
    return this.http.get<DetalleOperacion>(`${this.url}/operaciones/${id}`);
  }

  asignar(id: number, a: { idPortafolio: number | null; idCustodia: number | null; bancoPagador: string | null; tipoLiquidacion: string }): Observable<Operacion> {
    return this.http.post<Operacion>(`${this.url}/operaciones/${id}/asignar`, a);
  }

  avanzar(id: number): Observable<Operacion> {
    return this.http.post<Operacion>(`${this.url}/operaciones/${id}/avanzar`, {});
  }

  anular(id: number, motivo: string): Observable<Operacion> {
    return this.http.post<Operacion>(`${this.url}/operaciones/${id}/anular`, { motivo });
  }

  cuentas(): Observable<CuentaBancaria[]> {
    return this.http.get<CuentaBancaria[]>(`${this.url}/cuentas`);
  }

  custodia(): Observable<Tenencia[]> {
    return this.http.get<Tenencia[]>(`${this.url}/custodia`);
  }

  contabilidad(desde?: string | null, hasta?: string | null): Observable<Contabilidad> {
    let params = new HttpParams();
    if (desde) params = params.set('desde', desde);
    if (hasta) params = params.set('hasta', hasta);
    return this.http.get<Contabilidad>(`${this.url}/contabilidad`, { params });
  }

  maestros<T>(tipo: 'contrapartes' | 'custodias' | 'cuentas'): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/maestros/${tipo}`);
  }

  guardarMaestro<T>(tipo: 'contrapartes' | 'custodias' | 'cuentas', registro: T): Observable<T> {
    return this.http.post<T>(`${this.url}/maestros/${tipo}`, registro);
  }
}

/** Siguiente día hábil (lunes a viernes) sumando `dias` hábiles a la fecha ISO. */
export function sumarDiasHabiles(iso: string, dias: number): string {
  const d = new Date(iso + 'T00:00:00');
  let n = 0;
  while (n < dias) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) n++;
  }
  return d.toISOString().slice(0, 10);
}

export function hoyIso(): string {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
