import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManutencoesRoutingModule } from './manutencoes-routing.module';
import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListaComponent } from './manutencoes-lista/manutencoes-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ManutencoesFormComponent,
    ManutencoesListaComponent
  ],
  imports: [
    CommonModule,
    ManutencoesRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  exports: [
    ManutencoesFormComponent,
    ManutencoesListaComponent
  ]
})
export class ManutencoesModule { }
