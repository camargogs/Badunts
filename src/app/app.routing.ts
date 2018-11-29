import { PerfilContratanteComponent } from './perfil-contratante/perfil-contratante.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from "@angular/router";
import { PerfilMusicoComponent } from './perfil-musico/perfil-musico.component';
import { PerfilMusicoShowsComponent } from './perfil-musico-shows/perfil-musico-shows.component';
import { PerfilMusicoAgendaComponent } from './perfil-musico-agenda/perfil-musico-agenda.component';
import { PerfilMusicoAvaliacoesComponent } from './perfil-musico-avaliacoes/perfil-musico-avaliacoes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Cadastro3ContratanteComponent } from './cadastro3-contratante/cadastro3-contratante.component';
import { Cadastro2Component } from './cadastro2/cadastro2.component';
import { Cadastro4MusicoComponent } from './cadastro4-musico/cadastro4-musico.component';
import { Cadastro4ContratanteComponent } from './cadastro4-contratante/cadastro4-contratante.component';
import { Cadastro3MusicoComponent } from './cadastro3-musico/cadastro3-musico.component';

const APP_ROUTES: Routes = [
{path:"", redirectTo:"login", pathMatch:"full"},
{path:"login", component:LoginComponent},
{path:"cadastrar", component: CadastroComponent },
{path:"cadastrar2", component: Cadastro2Component},
{path:"cadastrar3contra", component: Cadastro3ContratanteComponent},
{path:"cadastrar3musi", component: Cadastro3MusicoComponent},
{path:"cadastrar4contra", component: Cadastro4ContratanteComponent},
{path:"cadastrar4musi", component: Cadastro4MusicoComponent},
{path:"menu", component:MenuComponent},
{path:"perfilMusico",component:PerfilMusicoComponent},
{path:"perfilContratante",component:PerfilContratanteComponent},
{path:"shows", component:PerfilMusicoShowsComponent},
{path:"agenda", component:PerfilMusicoAgendaComponent},
{path:"avaliacoes", component:PerfilMusicoAvaliacoesComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);