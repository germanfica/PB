// Declaración de variables
var teclas, alturaDibujo, x, y, personaje, lienzoPersonaje;

// Inicialización de variables
personaje = document.getElementById("personaje");
lienzoPersonaje = personaje.getContext("2d");
alturaDibujo = personaje.height;
teclas = {
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39
};
x = aleatorio(0,420);
y = aleatorio(0,420);

// Dibujar al personaje
document.addEventListener("keyup", dibujarPersonaje);

function dibujarPersonaje(evento) {
  var color = "brown";
  var movimiento = 10;

  // Crear personaje
  if(cerdo.cargaOK)
    lienzoPersonaje.drawImage(cerdo.imagen, x, y);

  switch (evento.keyCode) {
    case teclas.UP:
      //console.log(evento.key);
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x, y-movimiento);
      //dibujarLinea(color, x, y, x, y-movimiento, 3);
      y=y-movimiento;
      break;
    case teclas.DOWN:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x, y+movimiento);
      //dibujarLinea(color, x, y, x, y+movimiento, 3);
      y=y+movimiento;
      break;
    case teclas.LEFT:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x-movimiento, y);
      //dibujarLinea(color, x, y, x-movimiento, y, 3);
      x=x-movimiento;
      break;
    case teclas.RIGHT:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x+movimiento, y);
      //dibujarLinea(color, x, y, x+movimiento, y, 3);
      x=x+movimiento;
      break;
    default:
    break;
  }
  //console.log(evento.keyCode);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lineWidth) {
  lienzoPersonaje.beginPath();
    // Comienzo
    lienzoPersonaje.lineWidth = lineWidth; // Define el grosor de la línea.
    lienzoPersonaje.strokeStyle = color;
    lienzoPersonaje.moveTo(xInicial, yInicial); // x, y
  	lienzoPersonaje.lineTo(xFinal, yFinal);
  	lienzoPersonaje.stroke();
    // Cierre
  lienzoPersonaje.closePath();
}

/**
  * Objetivo: limpiar el canvas del personaje.
  *
*/
function limpiarLienzoPersonaje() {
  lienzoPersonaje.clearRect(0, 0, personaje.width, personaje.height);
}
