export class EjecutarStressRequest {
    idsPortafolio!: number[];
    idMoneda!: number;
    shockPrecioPct = 0;
    shockCambiarioPct = 0;
    shockPrecioPorActivo?: { [isin: string]: number };
}

export class ImpactoInstrumentoStress {
    codISIN!: string;
    codTicker!: string;
    mtmActual!: number;
    mtmEstresado!: number;
    impacto!: number;
}

export class EjecutarStressResponse {
    fechaProceso!: string;
    idsPortafolio!: number[];
    descripcionPortafolio!: string;
    monedaReporte!: string;
    shockPrecioPct!: number;
    shockCambiarioPct!: number;
    mtmActual!: number;
    mtmEstresado!: number;
    impactoTotal!: number;
    impactoPct!: number;
    instrumentos!: ImpactoInstrumentoStress[];
    advertencias!: string[];
}
