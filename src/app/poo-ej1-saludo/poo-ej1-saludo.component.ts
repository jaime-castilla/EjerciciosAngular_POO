import { Component } from '@angular/core';
import { Saludo } from '../_modelo/saludo';

@Component({
  selector: 'app-poo-ej1-saludo',
  templateUrl: './poo-ej1-saludo.component.html',
  styleUrls: ['./poo-ej1-saludo.component.css']
})
export class PooEj1SaludoComponent {

  sacarMensaje(): void{

    //Crear objeto (instanciar)
    let saludoObj: Saludo = new Saludo()

    //Inicializar el atributo de la clase
    saludoObj.saludoAtrib = "Bienvenido, que tal estás?"

    //Saco el resultado por consola
    console.log(`${saludoObj.saludoAtrib}`)   //--> Llama al atributo
    console.log(`${saludoObj.saludar()}`)     //--> Llama al método de la clase

  }
}
//APUNTE: Tambien se podría haber hecho inicializando el atributo en el return de la clase y en esta (la main) simplemente sacar la respuesta llamando al método de la clase(linea 21), y no habría que haber inicializado el atributo en la main(linea 17). Lo que pasa que así no podría haber sacado el resultado llamando al atributo, solo al método. De esta manera se puede sacar el resultado llamando al atributo y al método.