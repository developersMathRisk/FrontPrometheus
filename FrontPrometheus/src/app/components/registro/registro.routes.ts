import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
    {
        path: 'registro', children: [
            {
                path: 'productos/bono',
                loadComponent: () =>
                    import('./productos/carga-bono/carga-bono.component').then((m) => m.CargaBonoComponent),
                title: 'Bono'
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