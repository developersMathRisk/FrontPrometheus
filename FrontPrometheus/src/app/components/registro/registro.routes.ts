import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
    {
        path: 'registro', children: [
            {
                path: 'inicio',
                loadComponent: () =>
                    import('./inicio/inicio.component').then((m) => m.InicioComponent),
                title: 'Inicio'
            },
            // ---- Tesorería: Front Office ----
            {
                path: 'front/operacion',
                loadComponent: () => import('./tesoreria/registro-operacion/registro-operacion.component').then((m) => m.RegistroOperacionComponent),
                title: 'Registro de operación'
            },
            {
                path: 'front/blotter',
                loadComponent: () => import('./tesoreria/blotter/blotter.component').then((m) => m.BlotterComponent),
                data: { modo: 'consulta' },
                title: 'Blotter de operaciones'
            },
            {
                path: 'front/saldos',
                loadComponent: () => import('./tesoreria/saldos/saldos.component').then((m) => m.SaldosComponent),
                title: 'Saldos bancarios'
            },
            // ---- Tesorería: Back Office ----
            {
                path: 'back/liquidacion',
                loadComponent: () => import('./tesoreria/blotter/blotter.component').then((m) => m.BlotterComponent),
                data: { modo: 'back' },
                title: 'Liquidación'
            },
            {
                path: 'back/custodia',
                loadComponent: () => import('./tesoreria/custodia/custodia.component').then((m) => m.CustodiaComponent),
                title: 'Custodia'
            },
            {
                path: 'back/contabilidad',
                loadComponent: () => import('./tesoreria/contabilidad/contabilidad.component').then((m) => m.ContabilidadComponent),
                title: 'Contabilidad'
            },
            {
                path: 'back/maestros',
                loadComponent: () => import('./tesoreria/maestros/maestros-tesoreria.component').then((m) => m.MaestrosTesoreriaComponent),
                title: 'Maestros de tesorería'
            },
            {
                path: 'mantenedor/producto',
                loadComponent: () =>
                    import('./mantenedor/productos/mantenedor-productos/mantenedor-productos.component').then((m) => m.MantenedorProductosComponent),
                title: 'Mantenedor de Productos'
            },
            {
                path: 'mantenedor/atributo-financiero',
                loadComponent: () =>
                    import('./mantenedor/atributo-financiero/mantenedor-atributos-financieros/mantenedor-atributos-financieros.component').then((m) => m.MantenedorAtributosFinancierosComponent),
                title: 'Mantenedor de Atributos Financieros'
            },
            {
                path: 'mantenedor/factor',
                loadComponent: () =>
                    import('./mantenedor/factores/mantenedor-factores/mantenedor-factores.component').then((m) => m.MantenedorFactoresComponent),
                title: 'Mantenedor de Factores'
            },
            {
                path: 'mantenedor/portafolio',
                loadComponent: () =>
                    import('./mantenedor/portafolio/lista-portafolio/lista-portafolio.component').then((m) => m.ListaPortafolioComponent),
                title: 'Mantenedor de Portafolios'
            },

            {
                path: 'portafolio/dashboard-portafolio',
                loadComponent: () =>
                    import('./portafolio/dashboard-portafolio/dashboard-portafolio.component').then((m) => m.DashboardPortafolioComponent),
                title: 'Portafolio'
            },

            {
                path: 'cargas/factores',
                loadComponent: () =>
                    import('./en-desarrollo/en-desarrollo.component').then((m) => m.EnDesarrolloComponent),
                data: {
                    titulo: 'Cargas diarias de Factores de Riesgo',
                    detalle: 'La carga automática de curvas SBS y tipo de cambio aún no está disponible. Por ahora registre los factores desde Mantenedores > Factores de Riesgo.'
                },
                title: 'Cargas diarias de Factores de Riesgo'
            },
            {
                path: 'valorizacion/ejecucion',
                loadComponent: () =>
                    import('./en-desarrollo/en-desarrollo.component').then((m) => m.EnDesarrolloComponent),
                data: {
                    titulo: 'Ejecución de valorizaciones',
                    detalle: 'La ejecución de valorizaciones aún no está conectada al motor de cálculo.'
                },
                title: 'Ejecución de valorizaciones'
            },
            {
                path: 'valorizacion/consulta',
                loadComponent: () =>
                    import('./en-desarrollo/en-desarrollo.component').then((m) => m.EnDesarrolloComponent),
                data: {
                    titulo: 'Consulta de valorizaciones',
                    detalle: 'La consulta de valorizaciones aún no está conectada al motor de cálculo.'
                },
                title: 'Consulta de valorizaciones'
            },
            {
                path: 'var/ejecutar',
                loadComponent: () =>
                    import('./var/ejecutar-var/ejecutar-var.component').then((m) => m.EjecutarVarComponent),
                title: 'Ejecutar VaR'
            },
            {
                path: 'var/consulta',
                loadComponent: () =>
                    import('./var/consulta-var/consulta-var.component').then((m) => m.ConsultaVarComponent),
                title: 'Consultar VaR'
            },
            {
                path: 'var/anexo9',
                loadComponent: () =>
                    import('./var/anexo9/anexo9.component').then((m) => m.Anexo9Component),
                title: 'Anexo N° 9 SBS'
            },
            {
                path: 'stress-testing/consulta',
                loadComponent: () =>
                    import('./var/consulta-stress-testing/consulta-stress-testing.component').then((m) => m.ConsultaStressTestingComponent),
                title: 'Consultar Stress Testing'
            },
            {
                path: 'stress-testing/ejecutar',
                loadComponent: () =>
                    import('./var/ejecutar-stress-testing/ejecutar-stress-testing.component').then((m) => m.EjecutarStressTestingComponent),
                title: 'Ejecutar Stress Testing'
            },
            { path: 'var/renta-fija', redirectTo: 'var/ejecutar', pathMatch: 'full' },
            {
                path: 'var/backtesting',
                loadComponent: () =>
                    import('./var/backtesting/backtesting.component').then((m) => m.BacktestingComponent),
                title: 'Backtesting del VaR'
            },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(admin)],
    exports: [RouterModule],
})
export class registroRoutingModule {
    static routes = admin;
}