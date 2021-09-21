import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticidadesRoutingModule } from './criticidades-routing.module';
import { CriticidadesListaComponent } from './criticidades-lista/criticidades-lista.component';
import { CriticidadesFormComponent } from './criticidades-form/criticidades-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CriticidadesListaComponent,
    CriticidadesFormComponent
  ],
  imports: [
    CommonModule,
    CriticidadesRoutingModule,
    FormsModule
  ],
  exports: [
    CriticidadesListaComponent,
    CriticidadesFormComponent
  ]
})
export class CriticidadesModule { }
