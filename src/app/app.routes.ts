import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from "./components/hero/hero.component";
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES:Routes = [
    {path:'home', component:HomeComponent },
    {path:'heroes', component:HerosComponent },
    {path:'sobre', component:AboutComponent },
    {path:'hero/:id', component:HeroComponent },
    {path:'buscar/:nombre', component:BuscarComponent },
    {path:'**', pathMatch:'full', redirectTo:'home'}
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)