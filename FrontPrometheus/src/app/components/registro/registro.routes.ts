import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
    {
        path: 'registro', children: [
            {
                path: 'mantenedor/producto',
                loadComponent: () =>
                    import('./productos/mantenedor-productos/mantenedor-productos.component').then((m) => m.MantenedorProductosComponent),
                title: 'Mantenedor de Productos'
            },
            {
                path: 'mantenedor/atributo-financiero',
                loadComponent: () =>
                    import('./atributo-financiero/mantenedor-atributos-financieros/mantenedor-atributos-financieros.component').then((m) => m.MantenedorAtributosFinancierosComponent),
                title: 'Mantenedor de Atributos Financieros'
            },
            {
                path: 'mantenedor/factor',
                loadComponent: () =>
                    import('./factores/mantenedor-factores/mantenedor-factores.component').then((m) => m.MantenedorFactoresComponent),
                title: 'Mantenedor de Factores'
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