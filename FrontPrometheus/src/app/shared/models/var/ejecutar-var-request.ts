export class EjecutarVarRequest {
    idsPortafolio!: number[];
    idMoneda!: number;
    idsNivelConfianza!: number[];
    idsTipoMetodologiaVAR!: number[];
    horizonteDias: number = 1;
    // 100, no 252: es la ventana que reproduce la plantilla Excel de referencia.
    numObservaciones: number = 100;
    numSimulacionesMonteCarlo: number = 10000;
    confirmarReemplazo: boolean = false;
}
