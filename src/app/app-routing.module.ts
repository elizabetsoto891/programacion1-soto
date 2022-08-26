import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './ciudad/ciudad.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},

  {path:'ciudad', component: CiudadComponent},
  {path:'hoteles', component: HotelesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
