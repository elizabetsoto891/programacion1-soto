import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './ciudad/ciudad.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { InicioComponent } from './inicio/inicio.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AlquileresDeAutosComponent } from './alquileres-de-autos/alquileres-de-autos.component';


const routes: Routes = [
  {path:'', component: InicioComponent},

  {path:'ciudad', component: CiudadComponent},
  {path:'hoteles', component: HotelesComponent},
  {path:'restaurantes', component: RestaurantesComponent},
  {path:'alquileres_de_autos', component: AlquileresDeAutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
