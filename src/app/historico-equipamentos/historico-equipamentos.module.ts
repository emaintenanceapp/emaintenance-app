import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoEquipamentosRoutingModule } from './historico-equipamentos-routing.module';
import { HistoricoEquipamentosFormComponent } from './historico-equipamentos-form/historico-equipamentos-form.component';
import { HistoricoEquipamentosListaComponent } from './historico-equipamentos-lista/historico-equipamentos-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoricoEquipamentosFormComponent,
    HistoricoEquipamentosListaComponent
  ],
  imports: [
    CommonModule,
    HistoricoEquipamentosRoutingModule,
    FormsModule
  ],
  exports: [
    HistoricoEquipamentosFormComponent,
    HistoricoEquipamentosListaComponent
  ]
})
export class HistoricoEquipamentosModule { }
