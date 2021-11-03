import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManutencoesRoutingModule } from './manutencoes-routing.module';
import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListaComponent } from './manutencoes-lista/manutencoes-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManutencoesFormComponent,
    ManutencoesListaComponent
  ],
  imports: [
    CommonModule,
    ManutencoesRoutingModule,
    FormsModule
  ],
  exports: [
    ManutencoesFormComponent,
    ManutencoesListaComponent
  ]
})
export class ManutencoesModule { }
