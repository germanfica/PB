// Declaración de variables
var d, lienzo;

// Inicialización de variables
d = document.getElementById("dibujito");
lienzo = d.getContext("2d"); // Área de dibujo, el lienzo es nuestro papel

for (var i = 1; i <= d.height; i=i+13) {
  dibujarLinea("#504ed8", 0, i, i, d.height, 0.9);
  dibujarLinea("red", i, 0, 0, i, 0.5);
  dibujarLinea("red", i, 0, d.height, i, 0.5);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lineWidth) {
  lienzo.beginPath();
    // Comienzo
    lienzo.lineWidth = lineWidth; // Define el grosor de la línea.
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial); // x, y
  	lienzo.lineTo(xFinal, yFinal);
  	lienzo.stroke();
    // Cierre
  lienzo.closePath();
}
