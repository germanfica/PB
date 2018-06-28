// Mostrar por consola la nueva posición generada
console.log(aleatorio(0, 500));

/**
 * Devuelve una posición aleatoria dentro de
 * un rango determinado, establecido por
 * parámetro.
 */
function aleatorio(min, max) {
  // Declaración de variables
  var random, posicionNueva;

  // Inicialización de variables
  random = Math.random();

  // Generar una nueva posición de manera aleatoria
  posicionNueva=Math.floor(random/(1/(max-min)))+min;

  // Retorna la nueva posición
  return posicionNueva;
}
