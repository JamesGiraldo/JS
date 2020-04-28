import { Component, OnInit, DoCheck,OnDestroy } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;
  public listado: string;
    constructor(){
      this.titulo = "Componente de videojuegos";
      this.listado = "listado de videojuegos";      
    }

  ngOnInit(){
    // console.log("OnInit ejecutado");
  }
  ngDoCheck(){
    // console.log("DoCheck Ejecutado");
  }
  ngOnDestroy(){
    // console.log("Destrulle ejcutada");
  }
  cambiarTitulo(){
    this.titulo = "Nuevo Titulo del component";
  }
}
