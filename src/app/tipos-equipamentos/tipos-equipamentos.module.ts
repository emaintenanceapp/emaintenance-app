import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposEquipamentosRoutingModule } from './tipos-equipamentos-routing.module';
import { TiposEquipamentosFormComponent } from './tipos-equipamentos-form/tipos-equipamentos-form.component';
import { TiposEquipamentosListaComponent } from './tipos-equipamentos-lista/tipos-equipamentos-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    TiposEquipamentosFormComponent,
    TiposEquipamentosListaComponent
  ],
  imports: [
    CommonModule,
    TiposEquipamentosRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  exports: [
    TiposEquipamentosFormComponent,
    TiposEquipamentosListaComponent
  ]
})
export class TiposEquipamentosModule { }
