import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiposManutencoesFormComponent } from './tipos-manutencoes-form/tipos-manutencoes-form.component'
import { TiposManutencoesListaComponent } from './tipos-manutencoes-lista/tipos-manutencoes-lista.component';

const routes: Routes = [
  {path : 'tipos-manutencoes-form', component : TiposManutencoesFormComponent},
  {path : 'tipos-manutencoes-lista', component : TiposManutencoesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposManutencoesRoutingModule { }
