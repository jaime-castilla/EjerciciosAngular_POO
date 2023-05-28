import { Component } from '@angular/core';
import { Areas } from '../_modelo/areas';

@Component({
  selector: 'app-poo-ej3-areas',
  templateUrl: './poo-ej3-areas.component.html',
  styleUrls: ['./poo-ej3-areas.component.css']
})
export class PooEj3AreasComponent {

  radio: number = 0
  base: number = 0
  altura: number = 0

  mostrarResultado(): void{

    //Crear objetos
    let circuloObj: Areas = new Areas()
    let rectanguloObj: Areas = new Areas()


    //Sacar resultado por consola llamando a los métodos de la clase
    console.log(`El area del CIRCULO es: ${circuloObj.areaCirculo(this.radio)}`)
    console.log(`El area del RECTÁNGULO es: ${rectanguloObj.areaRectangulo(this.base, this.altura)}`)

  }

}

//APUNTE: Tambien se puede hacer declarando los atributos en la clase y no en la main, de esta manera dentro
//de los parentesis de los métodos de la clase, no tendría que poner nada y en la main tendría que inicializar los
//atributos, dandoles el valor con el que quiero que haga las operaciones. Sería en la inicializacióon de los
//atributos de la main donde debería cambiar los valores con los que operar, y no me haría falta los inputs
//en el html porque ya no le metería los valores por ahí, los metería como he dicho antes inicializando los atributos
//en la main.
