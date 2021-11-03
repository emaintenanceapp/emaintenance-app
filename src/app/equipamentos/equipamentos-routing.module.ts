import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';

import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component'
import { EquipamentosListaComponent } from './equipamentos-lista/equipamentos-lista.component';

const routes: Routes = [
  { path : 'equipamentos' , component: LayoutComponent, 
    canActivate: [AuthGuard] ,children: [
    { path: 'form' , component: EquipamentosFormComponent },
    { path: 'form/:id' , component: EquipamentosFormComponent },
    { path: 'lista', component: EquipamentosListaComponent },
    { path: '', redirectTo : '/equipamentos/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
