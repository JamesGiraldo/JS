import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html',
  providers: [ZapatillaService]
})
export class ZapatillaComponent implements OnInit{
  public titulo: string =  "Component de zapatilla";
  public marcas: String[];
  public color: string;
  public mi_marca: string;
  public zapatillas: Array<Zapatilla>;
  constructor(
    private _zapatillaService: ZapatillaService
  ){
    this.mi_marca = "Fila";
    this.color = 'red';
    this.marcas = new Array();
  }
  ngOnInit(){
    this.zapatillas = this._zapatillaService.getZapatillas();
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
