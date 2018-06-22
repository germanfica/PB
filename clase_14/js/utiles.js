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

function dibujarCaja(colorcito, alturaDelDibujito) {
  dibujarLinea(colorcito, 1, 1, 1, alturaDelDibujito-1, 1);
  dibujarLinea(colorcito, 1, 1, alturaDelDibujito-1, 1, 1);
  dibujarLinea(colorcito, alturaDelDibujito-1, 1, alturaDelDibujito-1, alturaDelDibujito-1, 1);
  dibujarLinea(colorcito, alturaDelDibujito-1, alturaDelDibujito-1, 1, alturaDelDibujito-1, 1);
}
