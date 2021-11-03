import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';

const routes: Routes = [
  { path : 'users' , component: LayoutComponent, 
    canActivate: [AuthGuard] ,children: [
    
    { path: 'form' , component: UsuarioFormComponent },
    { path: 'form/:id' , component: UsuarioFormComponent },
    { path: 'lista', component: UsuarioListaComponent },
    { path: '', redirectTo : '/users/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
