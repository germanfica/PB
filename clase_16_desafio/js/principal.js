// Declaración de variables
var oprimido; // Almacena si el click del mouse del usuario está siendo presionado en este momento
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
aux = false;

// Detectar tecla y ejecutar una función
dibujo.addEventListener("mousedown", hacerClick);  // Cuando se hace click
dibujo.addEventListener("mouseup", soltarClick);       // Cuando se suelta el click
dibujo.addEventListener("mousemove", dibujarTeclado);

function hacerClick(evento) {
  oprimido = true;
  x = evento.clientX;
  y = evento.clientY;
}

function soltarClick(evento) {
  oprimido = false;
}

// addEventListener almacena toda la información en 'evento'
function dibujarTeclado(evento) {
  // Declaración de variables
  var mouseX, mouseY;
  var color;

  // Inicialización de variables
  color = "brown";

  if(oprimido) {
    mouseX = evento.clientX;
    mouseY = evento.clientY;

    dibujarLinea(color, x, y, mouseX, mouseY, 3);
    x = mouseX;
    y = mouseY;
  }
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
