import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Servicios
import { HeroesService } from "./servicios/heroes.service";
//RUTAS
import { APP_ROUTING } from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroComponent,
    BuscarComponent,
    HeroesTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
