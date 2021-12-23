import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosFormComponent } from './equipamentos-form/equipamentos-form.component';
import { EquipamentosListaComponent } from './equipamentos-lista/equipamentos-lista.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    EquipamentosFormComponent,
    EquipamentosListaComponent
  ],
  imports: [
    CommonModule,
    EquipamentosRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  exports: [
    EquipamentosFormComponent,
    EquipamentosListaComponent
  ]
})
export class EquipamentosModule { }
