import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //Definir el parámetro de entrada que me va a permitir recibir info desde el padre
  @Input() parametroEntrada: string = "Sin nombre";

  constructor() { }

  ngOnInit(): void {
  }

}
