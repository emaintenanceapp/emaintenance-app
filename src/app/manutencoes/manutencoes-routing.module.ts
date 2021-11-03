import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';

import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListaComponent } from './manutencoes-lista/manutencoes-lista.component';

const routes: Routes = [
  { path : 'manutencoes' , component: LayoutComponent, 
    canActivate: [AuthGuard] ,children: [
    { path: 'form' , component: ManutencoesFormComponent },
    { path: 'form/:id' , component: ManutencoesFormComponent },
    { path: 'lista', component: ManutencoesListaComponent },
    { path: '', redirectTo : '/manutencoes/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }
