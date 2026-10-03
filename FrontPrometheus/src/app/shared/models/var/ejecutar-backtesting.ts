export class EjecutarBacktestingRequest {
    idsPortafolio!: number[];
    idMoneda!: number;
    nivelConfianza!: number;
    ventana = 100;
    numObservacionesTotal = 500;
}

export class PuntoBacktesting {
    fecha!: string;
    varEstimado!: number;
    pnlReal!: number;
    esExcepcion!: boolean;
}

export class EjecutarBacktestingResponse {
    fechaProceso!: string;
    idsPortafolio!: number[];
    descripcionPortafolio!: string;
    monedaReporte!: string;
    nivelConfianza!: number;
    ventana!: number;
    diasEvaluados!: number;
    excepciones!: number;
    tasaObservada!: number;
    tasaEsperada!: number;
    estadisticoLR!: number;
    valorCriticoChi2!: number;
    modeloAdecuado!: boolean;
    serie!: PuntoBacktesting[];
    advertencias!: string[];
}
