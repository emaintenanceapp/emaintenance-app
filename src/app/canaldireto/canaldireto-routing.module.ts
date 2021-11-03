import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { CanalDiretoComponent } from './canaldireto.component';

const routes: Routes = [
  { path: 'canal-direto' , component: CanalDiretoComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanaldiretoRoutingModule { }
