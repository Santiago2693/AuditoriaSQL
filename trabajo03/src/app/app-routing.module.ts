import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaPrincipalComponent} from "./rutas/ruta-principal/ruta-principal.component";

const routes: Routes = [
  {
    path: 'home',
    component: RutaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
