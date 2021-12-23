import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoManutencoesRoutingModule } from './historico-manutencoes-routing.module';
import { HistoricoManutencoesFormComponent } from './historico-manutencoes-form/historico-manutencoes-form.component';
import { HistoricoManutencoesListaComponent } from './historico-manutencoes-lista/historico-manutencoes-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    HistoricoManutencoesFormComponent,
    HistoricoManutencoesListaComponent
  ],
  imports: [
    CommonModule,
    HistoricoManutencoesRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  exports: [
    HistoricoManutencoesFormComponent,
    HistoricoManutencoesListaComponent
  ]
})
export class HistoricoManutencoesModule { }
