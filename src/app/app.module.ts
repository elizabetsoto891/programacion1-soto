import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AlquileresDeAutosComponent } from './alquileres-de-autos/alquileres-de-autos.component';
import { SupermercadosComponent } from './supermercados/supermercados.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ProvinciaComponent,
    HotelesComponent,
    RestaurantesComponent,
    AlquileresDeAutosComponent,
    SupermercadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
