import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { PadresComponent } from './padres/padres.component';

const routes: Routes = [
  {path:'', component: InicioComponent},

  {path:'alumno', component: AlumnoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'padres', component: PadresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
