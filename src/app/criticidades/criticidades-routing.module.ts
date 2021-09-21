import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriticidadesFormComponent } from './criticidades-form/criticidades-form.component';
import { CriticidadesListaComponent } from './criticidades-lista/criticidades-lista.component';

const routes: Routes = [
  {path : 'criticidades-form', component : CriticidadesFormComponent},
  {path : 'criticidades-lista', component : CriticidadesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticidadesRoutingModule { }
