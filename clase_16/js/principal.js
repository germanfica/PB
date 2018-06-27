// Declaración de variables
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

// 27

// Inicialización de variables

// Detectar tecla y ejecutar una función
document.addEventListener("keyup", dibujarTeclado);

// addEventListener almacena toda la información en 'evento'
function dibujarTeclado(evento) {
  // Arriba
  if(evento.keyCode == teclas.UP) {
    console.log(evento.key);
  }
  // Abajo
  if(evento.keyCode == teclas.DOWN) {
    console.log(evento.key);
  }
  // Izquierda
  if(evento.keyCode == teclas.LEFT) {
    console.log(evento.key);
  }
  // Derecha
  if(evento.keyCode == teclas.RIGHT) {
    console.log(evento.key);
  }
  //console.log(evento.keyCode);
}
