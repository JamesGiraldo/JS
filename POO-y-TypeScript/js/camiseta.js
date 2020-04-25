var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador adicionar una funcionalidad extrar a cualquier clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Molde Del Objeto) Padre
var Camiseta = /** @class */ (function () {
    //Metodos (Funciones O Acciones Del Objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
//Clase Hijo
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("BUENO1", "bueno2", "bueno3", "buen4", 50000);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "NIKE", "S", 60000);
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
