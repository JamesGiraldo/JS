import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html'
})
export class ZapatillaComponent implements OnInit{
  public titulo: string =  "Component de zapatilla";
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;
  constructor(){
    this.mi_marca = "Fila";
    this.color = 'red';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla("Reebook Classic" , 80 , "Blanco", "Reebook", true),
      new Zapatilla("Nike" , 190 , "Rojo", "Nike", true),
      new Zapatilla("Nike" , 60 , "Negro", "Nike", false)
    ];
  }
  ngOnInit(){
    console.log(this.zapatillas);
    this.getmarcas();
  }
  getmarcas(){
    this.zapatillas.forEach((zapatilla , index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0){
          this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }
  getMarca(){
    alert(this.mi_marca);
  }
  addMarca(){
    this.marcas.push(this.mi_marca);
  }
  deleteMarca(indice){
    // delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }
  onBlur(){
    console.log("Salistes de ese input wey");
  }
  mostrarPalabra(){
    alert(this.mi_marca);
  }
}
