// Declaración de variables
var imagenes = [];

// Inicialización de variables

// Crear Pakimanes
var cauchin = new Pakiman("Cauchin", 100, 80);
imagenes["Cauchin"] = "images/vaca.png";

var pokacho = new Pakiman("Pokacho", 80, 50);
imagenes["Pokacho"] = "images/pollo.png";

var ceuro = new Pakiman("Ceuro", 120, 40);
imagenes["Ceuro"] = "images/cerdo.png";

document.write("Nombre: "+ cauchin.nombre + "<br/>");
document.write("Vida: "+ cauchin.vida + "<br/>");
document.write("Ataque: "+ cauchin.ataque + "<br/>");

console.log(cauchin, pokacho, ceuro);
