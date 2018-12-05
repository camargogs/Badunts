import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Cadastro2Component } from './cadastro2/cadastro2.component';
import { Cadastro3ContratanteComponent } from './cadastro3-contratante/cadastro3-contratante.component';
import { Cadastro4ContratanteComponent } from './cadastro4-contratante/cadastro4-contratante.component';
import { Cadastro3MusicoComponent } from './cadastro3-musico/cadastro3-musico.component';
import { Cadastro4MusicoComponent } from './cadastro4-musico/cadastro4-musico.component';
import { PerfilMusicoComponent } from './perfil-musico/perfil-musico.component';
import { PerfilMusicoShowsComponent } from './perfil-musico-shows/perfil-musico-shows.component';
import { PerfilMusicoAgendaComponent } from './perfil-musico-agenda/perfil-musico-agenda.component';
import { PerfilMusicoAvaliacoesComponent } from './perfil-musico-avaliacoes/perfil-musico-avaliacoes.component';
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './eventos/eventos.component';
import { EventosCadastroComponent } from './eventos-cadastro/eventos-cadastro.component';
import { EventosCadastro2Component } from './eventos-cadastro2/eventos-cadastro2.component';
import { EventosEventoComponent } from './eventos-evento/eventos-evento.component';
import { EventosEvento2Component } from './eventos-evento2/eventos-evento2.component';
import { EventosContratoComponent } from './eventos-contrato/eventos-contrato.component';
import { PopupAvaliacaoComponent } from './popup-avaliacao/popup-avaliacao.component';
import { PerfilContratanteComponent } from './perfil-contratante/perfil-contratante.component';
import { BuscarMusicoComponent } from './buscar-musico/buscar-musico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    MenuComponent,
    CadastroComponent,
    Cadastro2Component,
    Cadastro3ContratanteComponent,
    Cadastro4ContratanteComponent,
    Cadastro3MusicoComponent,
    Cadastro4MusicoComponent,
    PerfilMusicoComponent,
    PerfilMusicoShowsComponent,
    PerfilMusicoAgendaComponent,
    PerfilMusicoAvaliacoesComponent,
    EventosComponent,
    EventosCadastroComponent,
    EventosCadastro2Component,
    EventosEventoComponent,
    EventosEvento2Component,
    EventosContratoComponent,
    PopupAvaliacaoComponent,
    PerfilContratanteComponent,
    BuscarMusicoComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
