import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticidadesRoutingModule } from './criticidades-routing.module';
import { CriticidadesListaComponent } from './criticidades-lista/criticidades-lista.component';
import { CriticidadesFormComponent } from './criticidades-form/criticidades-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    CriticidadesListaComponent,
    CriticidadesFormComponent
  ],
  imports: [
    CommonModule,
    CriticidadesRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  exports: [
    CriticidadesListaComponent,
    CriticidadesFormComponent
  ]
})
export class CriticidadesModule { }
