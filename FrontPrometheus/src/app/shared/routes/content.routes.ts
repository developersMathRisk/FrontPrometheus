import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registroRoutingModule } from '../../components/registro/registro.routes';

export const content: Routes = [
  { path: '', children: [...registroRoutingModule.routes] },
];

@NgModule({
    imports: [RouterModule.forRoot(content, {
      scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
