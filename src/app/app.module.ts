import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
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
