// Mostrar por pantalla la nueva posición
for (var i = 0; i <= 10; i++) {
  document.write("La nueva posición generada es: " + aleatorio(0, 500) + "<br/>");
}

/**
 * Devuelve una posición aleatoria dentro de
 * un rango determinado, establecido por
 * parámetro.
 */
function aleatorio(min, max) {
  // Declaración de variables
  var pos;

  // Generar una nueva posición de manera aleatoria
  //
  pos=Math.floor(Math.random()/(1/(max-min)))+min;

  // Retorna la nueva posición
  return pos;
}
