export class InstrumentoElegibilidad {
    idPortafolioInstrumento!: number;
    codTicker!: string;
    codISIN!: string;
    nombreTipoInstrumento!: string;
    descripcionPortafolio!: string;
    moneda!: string;
    elegible!: boolean;
    motivo?: string;
}
