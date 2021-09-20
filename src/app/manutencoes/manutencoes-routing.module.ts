import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListaComponent } from './manutencoes-lista/manutencoes-lista.component';

const routes: Routes = [
  {path : 'manutencoes-form', component : ManutencoesFormComponent},
  {path : 'manutencoes-lista', component : ManutencoesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }
