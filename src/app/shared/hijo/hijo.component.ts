import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //Definir el parámetro de entrada que me va a permitir recibir info desde el padre
  @Input() parametroEntrada: string = "Sin nombre";
  //Defino el parametro de salida, en vez de string podemos pasar lo que quieras
  @Output() parametroSalida = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPropiedad(){
    console.log('click en el button del hijo');
    this.parametroEntrada = 'Ana Belén';
    
    //Aviso al padre, Ejecutando el evento de salida y pasandole el string, ejecuto el evento de salida pasándole
    this.parametroSalida.emit(this.parametroEntrada);
  }

}
