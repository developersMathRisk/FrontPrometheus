import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
    {
        path: 'registro', children: [
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
                path: 'stress-testing/consulta',
                loadComponent: () =>
                    import('./var/consulta-stress-testing/consulta-stress-testing.component').then((m) => m.ConsultaStressTestingComponent),
                title: 'Consultar VaR'
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