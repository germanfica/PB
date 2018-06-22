// #504ed8
function mostrarDibujo() {
  // Declaración de variables
  var d, lienzo, alturaDelDibujito, color, cantLineas, op;

  // Inicialización de variables
  d = document.getElementById("dibujito");
  lienzo = d.getContext("2d"); // Área de dibujo, el lienzo es nuestro papel
  alturaDelDibujito = d.height;
  color = document.getElementById("color").value;
  cantLineas = document.getElementById("cantLineas").value;
  op = alturaDelDibujito/cantLineas;

  for (var i = 0; i <= alturaDelDibujito/op; i=i+1) {
    dibujarLinea(color, 0, i*op, i*op, alturaDelDibujito, 0.9, lienzo);

    dibujarLinea(color, i*op, 0, 0, i*op, 0.5, lienzo);
    dibujarLinea(color, i*op, 0, alturaDelDibujito, i*op, 0.5, lienzo);
    console.log("Línea: " + i)
  }

  dibujarCaja(color, alturaDelDibujito, lienzo);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lineWidth, lienzo) {
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

function dibujarCaja(colorcito, alturaDelDibujito, lienzo) {
  dibujarLinea(colorcito, 1, 1, 1, alturaDelDibujito-1, 1, lienzo);
  dibujarLinea(colorcito, 1, 1, alturaDelDibujito-1, 1, 1, lienzo);
  dibujarLinea(colorcito, alturaDelDibujito-1, 1, alturaDelDibujito-1, alturaDelDibujito-1, 1, lienzo);
  dibujarLinea(colorcito, alturaDelDibujito-1, alturaDelDibujito-1, 1, alturaDelDibujito-1, 1, lienzo);
}
