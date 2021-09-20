import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoManutencoesRoutingModule } from './historico-manutencoes-routing.module';
import { HistoricoManutencoesFormComponent } from './historico-manutencoes-form/historico-manutencoes-form.component';
import { HistoricoManutencoesListaComponent } from './historico-manutencoes-lista/historico-manutencoes-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoricoManutencoesFormComponent,
    HistoricoManutencoesListaComponent
  ],
  imports: [
    CommonModule,
    HistoricoManutencoesRoutingModule,
    FormsModule
  ],
  exports: [
    HistoricoManutencoesFormComponent,
    HistoricoManutencoesListaComponent
  ]
})
export class HistoricoManutencoesModule { }
