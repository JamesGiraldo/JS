import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public title = 'ANGULAR';
  public mostrar_videjuegos: boolean = true;
  public descripcion: string;
  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }
  ocultarVidejuegos(value){
    this.mostrar_videjuegos = value;
  }
}
