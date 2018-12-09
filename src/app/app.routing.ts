import { ListaComponent } from './lista/lista.component';
import { PopupAvaliacaoComponent } from './popup-avaliacao/popup-avaliacao.component';
import { BuscarMusicoComponent } from './buscar-musico/buscar-musico.component';
import { EventosContratoComponent } from './eventos-contrato/eventos-contrato.component';
import { EventosEventoComponent } from './eventos-evento/eventos-evento.component';
import { EventosEvento2Component } from './eventos-evento2/eventos-evento2.component';
import { EventosCadastroComponent } from './eventos-cadastro/eventos-cadastro.component';
import { EventosCadastro2Component } from './eventos-cadastro2/eventos-cadastro2.component';
import { EventosComponent } from './eventos/eventos.component';
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
{path:"shows", component:PerfilMusicoShowsComponent},
{path:"agenda", component:PerfilMusicoAgendaComponent},
{path:"avaliacoes", component:PerfilMusicoAvaliacoesComponent},
{path:"eventos", component:EventosComponent},
{path:"eventocad", component:EventosCadastroComponent},
{path:"eventocad2", component:EventosCadastro2Component},
{path:"eventoeve", component:EventosEventoComponent},
{path:"eventoeve2", component:EventosEvento2Component},
{path:"perfilContratante",component:PerfilContratanteComponent},
// {path:"shows", component:PerfilMusicoShowsComponent},
{path:"agenda", component:PerfilMusicoAgendaComponent},
{path:"avaliacoes", component:PerfilMusicoAvaliacoesComponent},
{path:"eventos/eventoeve/:id", component:EventosEventoComponent},
{path:"buscamusi/eventocontra/:id", component:EventosContratoComponent},
{path:"eventocontra", component:EventosContratoComponent},
{path:"buscamusi",component:BuscarMusicoComponent},
{path:"avaliar",component:PopupAvaliacaoComponent},
{path:"lista", component: ListaComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);