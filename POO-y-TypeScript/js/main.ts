// import { Camiseta } from './camiseta';
class Main{
  constructor(){
    console.log("Aplicacion JS Cargada");
  }
  getCamiseta(){
    return new Camiseta("Rojo","Manga Corta","ADIDA","S",50000);
  }
}
var main = new Main();
