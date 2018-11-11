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
