import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { InicioComponent } from './inicio/inicio.component';
import { HotelesComponent } from './hoteles/hoteles.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CiudadComponent,
    InicioComponent,
    HotelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
