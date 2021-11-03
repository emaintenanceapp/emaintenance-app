import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { CriticidadesFormComponent } from './criticidades-form/criticidades-form.component';
import { CriticidadesListaComponent } from './criticidades-lista/criticidades-lista.component';

const routes: Routes = [
  { path : 'criticidades' , component: LayoutComponent, 
    canActivate: [AuthGuard] ,children: [
    { path: 'form' , component: CriticidadesFormComponent },
    { path: 'form/:id' , component: CriticidadesFormComponent },
    { path: 'lista', component: CriticidadesListaComponent },
    { path: '', redirectTo : '/criticidades/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticidadesRoutingModule { }
