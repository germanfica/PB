// Declaración de variables
var d, lienzo, alturaDelDibujito, colorcito;

// Inicialización de variables
d = document.getElementById("dibujito");
lienzo = d.getContext("2d"); // Área de dibujo, el lienzo es nuestro papel
alturaDelDibujito = d.height;
colorcito = "black"

for (var i = 0; i <= alturaDelDibujito/10; i=i+1) {
  dibujarLinea("#504ed8", 0, i*10, i*10, alturaDelDibujito, 0.9);
  dibujarLinea("red", i*10, 0, 0, i*10, 0.5);
  dibujarLinea("red", i*10, 0, alturaDelDibujito, i*10, 0.5);
  console.log("Línea: " + i)
}

dibujarCaja(colorcito, alturaDelDibujito);
