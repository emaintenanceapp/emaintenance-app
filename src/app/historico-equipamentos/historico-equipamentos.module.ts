import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoEquipamentosRoutingModule } from './historico-equipamentos-routing.module';
import { HistoricoEquipamentosFormComponent } from './historico-equipamentos-form/historico-equipamentos-form.component';
import { HistoricoEquipamentosListaComponent } from './historico-equipamentos-lista/historico-equipamentos-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    HistoricoEquipamentosFormComponent,
    HistoricoEquipamentosListaComponent
  ],
  imports: [
    CommonModule,
    HistoricoEquipamentosRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  exports: [
    HistoricoEquipamentosFormComponent,
    HistoricoEquipamentosListaComponent
  ]
})
export class HistoricoEquipamentosModule { }
