export class ResultadoMetodoVar {
    idTipoMetodologiaVAR!: number;
    metodologia!: string;
    nivelConfianza!: number;
    varDiversificado!: number;
    varNoDiversificado?: number;
    beneficioDiversificacion?: number;
    ratioVar!: number;
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
}
