import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposManutencoesRoutingModule } from './tipos-manutencoes-routing.module';
import { TiposManutencoesFormComponent } from './tipos-manutencoes-form/tipos-manutencoes-form.component';
import { TiposManutencoesListaComponent } from './tipos-manutencoes-lista/tipos-manutencoes-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TiposManutencoesFormComponent,
    TiposManutencoesListaComponent
  ],
  imports: [
    CommonModule,
    TiposManutencoesRoutingModule,
    FormsModule
  ],
  exports: [
    TiposManutencoesFormComponent,
    TiposManutencoesListaComponent
  ]
})
export class TiposManutencoesModule { }
