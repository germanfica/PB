// Declaración de variables
var personaje, lienzoPersonaje;
var teclas, x, y;

// Inicialización de variables
personaje = document.getElementById("personaje");
lienzoPersonaje = personaje.getContext("2d");
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

  switch (evento.keyCode) {
    case teclas.UP:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x, y-movimiento);
      y=y-movimiento;
      break;
    case teclas.DOWN:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x, y+movimiento);
      y=y+movimiento;
      break;
    case teclas.LEFT:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x-movimiento, y);
      x=x-movimiento;
      break;
    case teclas.RIGHT:
      limpiarLienzoPersonaje();
      if(cerdo.cargaOK)
        lienzoPersonaje.drawImage(cerdo.imagen, x+movimiento, y);
      x=x+movimiento;
      break;
    default:
    break;
  }
}

/**
  * Objetivo: limpiar el canvas del personaje.
  *
*/
function limpiarLienzoPersonaje() {
  lienzoPersonaje.clearRect(0, 0, personaje.width, personaje.height);
}
