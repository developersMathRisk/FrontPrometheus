import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registroRoutingModule } from '../../components/registro/registro.routes';

export const content: Routes = [
  { path: '', children: [...registroRoutingModule.routes] },
  {
    path: 'admin',
    children: [
      {
        path: 'usuarios',
        title: 'Usuarios',
        loadComponent: () => import('../../components/admin/usuarios/usuarios.component').then((m) => m.UsuariosComponent),
      },
      {
        path: 'roles',
        title: 'Roles y accesos',
        loadComponent: () => import('../../components/admin/roles/roles.component').then((m) => m.RolesComponent),
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forRoot(content, {
      scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
