import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiposEquipamentosFormComponent } from './tipos-equipamentos-form/tipos-equipamentos-form.component'
import { TiposEquipamentosListaComponent } from './tipos-equipamentos-lista/tipos-equipamentos-lista.component';

const routes: Routes = [
  {path : 'tipos-equipamentos-form', component : TiposEquipamentosFormComponent},
  {path : 'tipos-equipamentos-lista', component : TiposEquipamentosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposEquipamentosRoutingModule { }
