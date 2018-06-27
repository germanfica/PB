// Declaración de variables
var dibujo, lienzo, teclas, alturaDibujo;

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

// Detectar tecla y ejecutar una función
document.addEventListener("keyup", dibujarTeclado);

// addEventListener almacena toda la información en 'evento'
function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      //console.log(evento.key);
      dibujarLinea("black", 1, 1, 1, 80, 1);
      //dibujarLinea("black", 1, 1, alturaDibujo-1, 1, 1);
      //dibujarLinea("black", alturaDibujo-1, 1, alturaDibujo-1, alturaDibujo-1, 1);
      //dibujarLinea("black", alturaDibujo-1, alturaDibujo-1, 1, alturaDibujo-1, 1);
      break;
    case teclas.DOWN:
      console.log(evento.key);
      break;
    case teclas.LEFT:
      console.log(evento.key);
      break;
    case teclas.RIGHT:
      console.log(evento.key);
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
