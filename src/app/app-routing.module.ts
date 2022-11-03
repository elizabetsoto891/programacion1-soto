import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AlquileresDeAutosComponent } from './alquileres-de-autos/alquileres-de-autos.component';
import { SupermercadosComponent } from './supermercados/supermercados.component';

const routes: Routes = [
  {path:'', component: InicioComponent},

  {path:'Provincias', component: ProvinciaComponent},
  {path:'hoteles', component: HotelesComponent},
  {path:'restaurantes', component: RestaurantesComponent},
  {path:'alquileres_de_autos',component: AlquileresDeAutosComponent},
  {path:'supermercados', component: SupermercadosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
