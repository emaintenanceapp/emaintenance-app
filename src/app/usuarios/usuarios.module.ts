import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ], 
  exports: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ]
})
export class UsuariosModule { }
