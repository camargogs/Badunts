import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from "@angular/router";
import { PerfilMusicoComponent } from './perfil-musico/perfil-musico.component';
import { PerfilMusicoShowsComponent } from './perfil-musico-shows/perfil-musico-shows.component';
import { PerfilMusicoAgendaComponent } from './perfil-musico-agenda/perfil-musico-agenda.component';
import { PerfilMusicoAvaliacoesComponent } from './perfil-musico-avaliacoes/perfil-musico-avaliacoes.component';


const APP_ROUTES: Routes = [
{path:"", redirectTo:"login", pathMatch:"full"},
{path:"login", component:LoginComponent},
{path:"menu", component:MenuComponent},
{path:"perfil",component:PerfilMusicoComponent},
{path:"shows", component:PerfilMusicoShowsComponent},
{path:"agenda", component:PerfilMusicoAgendaComponent},
{path:"avaliacoes", component:PerfilMusicoAvaliacoesComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);