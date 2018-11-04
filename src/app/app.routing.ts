import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
{path:"", redirectTo:"login", pathMatch:"full"},
{path:"login", component:LoginComponent},
{path:"menu", component:MenuComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);