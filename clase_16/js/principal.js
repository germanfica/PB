// Declaración de variables
var teclas;

// Inicialización de variables
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
      console.log(evento.key);
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
