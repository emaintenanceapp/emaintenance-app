import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth.guard'
import { RegisterComponent } from './account/register/register.component';
import { RecoveryComponent } from './account/recovery/recovery.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'recovery' , component: RecoveryComponent },
  { path: '', component: LayoutComponent, children: [
    { path : 'home', component: HomeComponent, canActivate : [AuthGuard] },
    { path: '' , redirectTo: '/home', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
