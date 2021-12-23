import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanaldiretoRoutingModule } from './canaldireto-routing.module';
import { CanalDiretoComponent } from './canaldireto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CanalDiretoComponent
  ],
  imports: [
    CommonModule,
    CanaldiretoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CanalDiretoComponent
  ]
})
export class CanaldiretoModule { }

