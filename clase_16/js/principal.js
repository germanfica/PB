// Declaración de variables
var dibujo, lienzo, teclas, alturaDibujo, x, y;

// Inicialización de variables
dibujo = document.getElementById("area_de_dibujo");
lienzo = dibujo.getContext("2d"); // Área de dibujo, el lienzo es nuestro papel
alturaDibujo = dibujo.height;
teclas = {
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39
};
x = 150;
y = 150;

// Detectar tecla y ejecutar una función
document.addEventListener("keyup", dibujarTeclado);

// addEventListener almacena toda la información en 'evento'
function dibujarTeclado(evento) {
  var color = "own";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      //console.log(evento.key);
      dibujarLinea(color, x, y, x, y-movimiento, 3);
      y=y-movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y+movimiento, 3);
      y=y+movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(color, x, y, x-movimiento, y, 3);
      x=x-movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x+movimiento, y, 3);
      x=x+movimiento;
      break;
    default:
    break;
  }
  //console.log(evento.keyCode);
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
