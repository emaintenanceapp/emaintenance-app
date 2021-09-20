import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component'
import { EquipamentosListaComponent } from './equipamentos-lista/equipamentos-lista.component';

const routes: Routes = [
  {path : 'equipamentos-form', component : EquipamentosFormComponent},
  {path : 'equipamentos-lista', component : EquipamentosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
