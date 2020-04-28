import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
  public zapatillas: Array<Zapatilla>;
  constructor(){
    this.zapatillas = [
      new Zapatilla("Reebook Classic" , 80 , "Blanco", "Reebook", true),
      new Zapatilla("Nike" , 190 , "Rojo", "Nike", true),
      new Zapatilla("Nike" , 60 , "Negro", "Nike", false)
    ];
  }
  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }
}
