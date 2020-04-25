//Interfas
interface CamisetaBase{
  setColor(color);
  getColor();
}
//Decorador adicionar una funcionalidad extrar a cualquier clase
function estampar(logo:string){
  return function(target: Function){
    target.prototype.estampacion = function():void{
      console.log("Camiseta estampada con el logo de: " + logo);
    }
  }
}
// Clase (Molde Del Objeto) Padre
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase {
  //Propiedades (Caracteristicas Del Objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;
  //Metodos (Funciones O Acciones Del Objeto)
  constructor(color, modelo, marca, talla, precio){
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }
  public setColor(color){
    this.color = color;
  }
  public getColor(){
    return this.color
  }
}
//Clase Hijo
class Sudadera extends Camiseta {
  public capucha: boolean;
  setCapucha(capucha: boolean){
    this.capucha = capucha;
  }
  getCapucha(){
    return this.capucha;
  }
}
var camiseta = new Camiseta("BUENO1","bueno2","bueno3","buen4",50000);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("Rojo", "Manga Larga" , "NIKE" , "S" , 60000);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Blanco Con Rojo");
console.log(sudadera_nike);

// var camiseta = new Camiseta("Rojo","Manga Corta","NIKE","S",50000);
// camiseta.setColor("Rojo");
// //camiseta.getColor();
// // camiseta.color = "Rojo";
// // camiseta.modelo = "Manga corta";
// // camiseta.marca = "NIKE";
// // camiseta.talla = "S";
// // camiseta.precio = 50000;

// // var pantaloneta = new Camiseta();
// // pantaloneta.setColor("Blanco");
// // pantaloneta.color = "Blanco";
// // pantaloneta.modelo = "Pantaloneta";
// // pantaloneta.marca = "NIKE";
// // pantaloneta.talla = "S";
// // pantaloneta.precio = 50000;

// console.log(camiseta);
