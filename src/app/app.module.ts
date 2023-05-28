import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PooEjercicioPruebaCocheComponent } from './poo-ejercicio-prueba-coche/poo-ejercicio-prueba-coche.component';
import { PooEj1SaludoComponent } from './poo-ej1-saludo/poo-ej1-saludo.component';
import { PooEj2AnimalComponent } from './poo-ej2-animal/poo-ej2-animal.component';
import { PooEj3AreasComponent } from './poo-ej3-areas/poo-ej3-areas.component';
import { FormsModule } from '@angular/forms';
import { PooEj4CamposComponent } from './poo-ej4-campos/poo-ej4-campos.component';

@NgModule({
  declarations: [
    AppComponent,
    PooEjercicioPruebaCocheComponent,
    PooEj1SaludoComponent,
    PooEj2AnimalComponent,
    PooEj3AreasComponent,
    PooEj4CamposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
