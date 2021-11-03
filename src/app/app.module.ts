import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service'
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module'
import { ServicoPrestadoService } from './servico-prestado.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { UsuarioService } from './usuario.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { FabricantesModule } from './fabricantes/fabricantes.module';
import { TiposEquipamentosModule } from './tipos-equipamentos/tipos-equipamentos.module';
import { EquipamentosService } from './equipamentos.service';
import { FabricantesService } from './fabricantes.service';
import { TiposEquipamentosService } from './tipos-equipamentos.service';
import { CriticidadesModule } from './criticidades/criticidades.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { TiposManutencoesModule } from './tipos-manutencoes/tipos-manutencoes.module';
import { HistoricoEquipamentosModule } from './historico-equipamentos/historico-equipamentos.module';
import { HistoricoManutencoesModule } from './historico-manutencoes/historico-manutencoes.module';
import { ManutencoesService } from './manutencoes.service';
import { HistoricoManutencoesService } from './historico-manutencoes.service';
import { HistoricoEquipamentosService } from './historico-equipamentos.service';
import { TiposManutencoesService } from './tipos-manutencoes.service';
import { CriticidadesService } from './criticidades.service';
import { RecoveryComponent } from './account/recovery/recovery.component';
import { RegisterComponent } from './account/register/register.component';
import { CanaldiretoModule } from './canaldireto/canaldireto.module';
import { CanaldiretoService } from './canaldireto.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    RecoveryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    UsuariosModule,
    CriticidadesModule,
    EquipamentosModule,
    ManutencoesModule,
    FabricantesModule,
    TiposEquipamentosModule,
    TiposManutencoesModule,
    HistoricoEquipamentosModule,
    HistoricoManutencoesModule,
    CanaldiretoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    UsuarioService,
    EquipamentosService,
    ManutencoesService,
    HistoricoManutencoesService,
    HistoricoEquipamentosService,
    TiposManutencoesService,
    TiposEquipamentosService,
    FabricantesService,
    CriticidadesService,
    CanaldiretoService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
