import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RutaPrincipalComponent } from './rutas/ruta-principal/ruta-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { TablaAudSDComponent } from './componentes/tabla-aud-sd/tabla-aud-sd.component';
import { TablaAudCDComponent } from './componentes/tabla-aud-cd/tabla-aud-cd.component';
import { TablaAudREComponent } from './componentes/tabla-aud-re/tabla-aud-re.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaPrincipalComponent,
    TablaAudSDComponent,
    TablaAudCDComponent,
    TablaAudREComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
