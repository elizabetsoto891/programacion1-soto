import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PadresComponent } from './padres/padres.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlumnoComponent,
    InicioComponent,
    ContactoComponent,
    PadresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
