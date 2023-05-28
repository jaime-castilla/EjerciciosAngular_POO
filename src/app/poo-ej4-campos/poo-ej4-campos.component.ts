import { Component } from '@angular/core';
import { Campos } from '../_modelo/campos';

@Component({
  selector: 'app-poo-ej4-campos',
  templateUrl: './poo-ej4-campos.component.html',
  styleUrls: ['./poo-ej4-campos.component.css']
})
export class PooEj4CamposComponent {

  numero1: number = 0
  numero2: number = 0

  mostrarResultado(): void{
     
    //Crear objeto
    let camposObj: Campos =new Campos()

    //Sacar el resultado por consola llamando a los métodos de la clase
    console.log(`El resultado de la función es X = ${camposObj.muestra(this.numero1, this.numero2)}`)
    console.log(`El resultado de incrementar X es: ${camposObj.incrementa()}`)

  }

}
