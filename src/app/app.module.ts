import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { EquipamentosService } from './equipamentos.service';
import { FabricantesModule } from './fabricantes/fabricantes.module';
import { TiposEquipamentosModule } from './tipos-equipamentos/tipos-equipamentos.module';
import { TiposManutencoesModule } from './tipos-manutencoes/tipos-manutencoes.module';
import { HistoricoEquipamentosModule } from './historico-equipamentos/historico-equipamentos.module';
import { HistoricoManutencoesModule } from './historico-manutencoes/historico-manutencoes.module';
import { ManutencoesService } from './manutencoes.service';
import { HistoricoManutencoesService } from './historico-manutencoes.service';
import { HistoricoEquipamentosService } from './historico-equipamentos.service';
import { TiposManutencoesService } from './tipos-manutencoes.service';
import { TiposEquipamentosService } from './tipos-equipamentos.service';
import { FabricantesService } from './fabricantes.service';
import { CriticidadesService } from './criticidades.service';
import { UsuarioService } from './usuario.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CriticidadesListaComponent } from './criticidades/criticidades-lista/criticidades-lista.component';
import { CriticidadesFormComponent } from './criticidades/criticidades-form/criticidades-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CriticidadesListaComponent,
    CriticidadesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule, 
    EquipamentosModule,
    ManutencoesModule,
    FabricantesModule,
    TiposEquipamentosModule,
    TiposManutencoesModule,
    HistoricoEquipamentosModule,
    HistoricoManutencoesModule,
    UsuariosModule
  ],
  providers: [
    EquipamentosService,
    ManutencoesService,
    HistoricoManutencoesService,
    HistoricoEquipamentosService,
    TiposManutencoesService,
    TiposEquipamentosService,
    FabricantesService,
    CriticidadesService,
    UsuarioService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
