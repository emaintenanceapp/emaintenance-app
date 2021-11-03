import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';

import { TiposEquipamentosFormComponent } from './tipos-equipamentos-form/tipos-equipamentos-form.component'
import { TiposEquipamentosListaComponent } from './tipos-equipamentos-lista/tipos-equipamentos-lista.component';

const routes: Routes = [
  { path : 'tipos-equipamentos' , component: LayoutComponent, 
    canActivate: [AuthGuard] ,children: [
    { path: 'form' , component: TiposEquipamentosFormComponent },
    { path: 'form/:id' , component: TiposEquipamentosFormComponent },
    { path: 'lista', component: TiposEquipamentosListaComponent },
    { path: '', redirectTo : '/tipos-equipamentos/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposEquipamentosRoutingModule { }
