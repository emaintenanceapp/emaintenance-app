import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FabricantesFormComponent } from './fabricantes-form/fabricantes-form.component'
import { FabricantesListaComponent } from './fabricantes-lista/fabricantes-lista.component';

const routes: Routes = [
  {path : 'fabricantes-form', component : FabricantesFormComponent},
  {path : 'fabricantes-lista', component : FabricantesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricantesRoutingModule { }
