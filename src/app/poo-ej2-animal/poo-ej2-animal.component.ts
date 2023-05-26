import { Component } from '@angular/core';
import { Animal } from '../_modelo/animal';

@Component({
  selector: 'app-poo-ej2-animal',
  templateUrl: './poo-ej2-animal.component.html',
  styleUrls: ['./poo-ej2-animal.component.css']
})
export class PooEj2AnimalComponent {

  mostrarResultado(): void{

    //Crear los objetos
    let perro: Animal = new Animal()
    let pez: Animal = new Animal()
    let cocodrilo: Animal = new Animal()

    //Inicializar los atributos de la clase
    perro.habitad = "casa"
    perro.tipoPiel = "pelo"
    perro.tamaño = "mediano"

    pez.habitad = "agua"
    pez.tipoPiel = "escamas"
    pez.tamaño = "pequeño"

    cocodrilo.habitad = "agua"
    cocodrilo.tipoPiel = "escamas"
    cocodrilo.tamaño = "grande"

    //Sacar resultado por consola llamando a los atributos
    console.log(`El perro vive en ${perro.habitad}, tiene ${perro.tipoPiel} y es de tamaño ${perro.tamaño}.`)
    console.log(`El pez vive en ${pez.habitad}, tiene ${pez.tipoPiel} y es de tamaño ${pez.tamaño}.`)
    console.log(`El cocodrilo vive en ${cocodrilo.habitad}, tiene ${cocodrilo.tipoPiel} y es de tamaño ${cocodrilo.tamaño}.`)

    //Sacar resultado por consola llamando a los métodos de la clase
    console.log(`${perro.comer()}`)
    console.log(`${perro.correr()}`)

  }

}
