export class AnexoNueveFila {
    tipoRiesgo!: string;
    var!: number;
    cvar?: number;
    svar?: number;
    scvar?: number;
    nota?: string;
}

export class AnexoNueve {
    idResultadoVARDetalle!: number;
    descripcionPortafolio!: string;
    fechaCorte!: string;
    fechaGeneracion!: string;
    moneda!: string;
    metodologiaBase!: string;
    nivelConfianza!: number;
    filas!: AnexoNueveFila[];
    notaMetodologica!: string;
}
