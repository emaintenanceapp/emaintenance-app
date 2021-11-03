import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanaldiretoRoutingModule } from './canaldireto-routing.module';
import { CanalDiretoComponent } from './canaldireto.component';


@NgModule({
  declarations: [
    CanalDiretoComponent
  ],
  imports: [
    CommonModule,
    CanaldiretoRoutingModule
  ],
  exports: [
    CanalDiretoComponent
  ]
})
export class CanaldiretoModule { }

