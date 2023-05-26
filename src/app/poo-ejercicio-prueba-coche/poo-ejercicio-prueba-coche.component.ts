import { Component } from '@angular/core';
import { Coche } from '../_modelo/coche';

@Component({
  selector: 'app-poo-ejercicio-prueba-coche',
  templateUrl: './poo-ejercicio-prueba-coche.component.html',
  styleUrls: ['./poo-ejercicio-prueba-coche.component.css']
})
export class PooEjercicioPruebaCocheComponent {

  comprobar(): void{

    //Crear objetos
  let cocheGrande: Coche = new Coche()
  let cochePequeño: Coche = new Coche()

  //Inicializar los atributos declarados en la clase
  cocheGrande.color = "Rojo"
  cocheGrande.potencia = 180
  cocheGrande.anio = 2016

  cochePequeño.color = "Negro"
  cochePequeño.potencia = 150
  cochePequeño.anio = 2020

  //Sacar resultado por consola
  console.log(`La potencia del coche grande es de ${cocheGrande.potencia} cv.`)
  console.log(`El coche pequeño es del año ${cochePequeño.anio}.`)

  }
  
}
