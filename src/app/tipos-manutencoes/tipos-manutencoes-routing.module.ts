import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';

import { TiposManutencoesFormComponent } from './tipos-manutencoes-form/tipos-manutencoes-form.component'
import { TiposManutencoesListaComponent } from './tipos-manutencoes-lista/tipos-manutencoes-lista.component';

const routes: Routes = [
  { path : 'tipos-manutencoes' , component: LayoutComponent, 
    canActivate: [AuthGuard] ,children: [
    { path: 'form' , component: TiposManutencoesFormComponent },
    { path: 'form/:id' , component: TiposManutencoesFormComponent },
    { path: 'lista', component: TiposManutencoesListaComponent },
    { path: '', redirectTo : '/tipos-manutencoes/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposManutencoesRoutingModule { }
