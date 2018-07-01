// Crear Pakimanes
var cauchin = new Pakiman("Cauchin", 100, 80);
cauchin.cargarImagen("images/vaca.png");
var pokacho = new Pakiman("Pokacho", 80, 50);
pokacho.cargarImagen("images/pollo.png");
var ceuro = new Pakiman("Ceuro", 120, 40);
ceuro.cargarImagen("images/cerdo.png");

document.write("Nombre: "+ cauchin.nombre + "<br/>");
document.write("Vida: "+ cauchin.vida + "<br/>");
document.write("Ataque: "+ cauchin.ataque + "<br/>");

console.log(cauchin, pokacho, ceuro);
