// import { Camiseta } from './camiseta';
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS Cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Rojo", "Manga Corta", "ADIDA", "S", 50000);
    };
    return Main;
}());
var main = new Main();
