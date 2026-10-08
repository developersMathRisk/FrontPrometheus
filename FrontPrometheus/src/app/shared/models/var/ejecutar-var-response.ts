export class ResultadoMetodoVar {
    idTipoMetodologiaVAR!: number;
    metodologia!: string;
    nivelConfianza!: number;
    varDiversificado!: number;
    varNoDiversificado?: number;
    beneficioDiversificacion?: number;
    ratioVar!: number;
    cvarDiversificado?: number | null; // expected shortfall; null en resultados guardados
}

/** Duración, convexidad y TIR de cada bono incluido en el cálculo (solo si la ejecución tuvo renta fija). */
export interface RiesgoBonoVar {
    isin: string;
    moneda: string;
    curva: string;
    mtm: number;
    duracionMacaulay: number;
    duracionModificada: number | null;
    convexidad: number | null;
    tir: number | null;
}

export interface RentaFijaVar {
    fechaValoracion: string;
    instrumentos: RiesgoBonoVar[];
}

export class ResultadoInstrumentoVar {
    idPortafolioInstrumento!: number;
    codTicker!: string;
    codISIN!: string;
    nombreTipoInstrumento!: string;
    descripcionPortafolio?: string; // solo cuando la ejecución combinó más de un portafolio
    mtm?: number;
    pesoPct?: number;
    varIndividual!: number;
    varDesagregado?: number;
}

export class EjecutarVarResponse {
    idResultadoVARDetalle!: number;
    fechaProceso!: string;
    fechaInicio!: string;
    fechaFin!: string;
    monedaReporte!: string;
    idsPortafolio!: number[];
    descripcionPortafolio!: string;
    valorPortafolio!: number;
    numEscenarios?: number;
    numInstrumentos!: number;
    ratioVarPromedio?: number;
    maxVar!: number;
    resultados!: ResultadoMetodoVar[];
    instrumentos!: ResultadoInstrumentoVar[];
    advertencias!: string[];
    esHistorico?: boolean;
    rentaFija?: RentaFijaVar | null;
}
