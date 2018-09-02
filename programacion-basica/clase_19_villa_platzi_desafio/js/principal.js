// Declaración de variables
var vp, lienzo;

// Incicialización de variables
 vp = document.getElementById("villaplatzi");
 lienzo = vp.getContext("2d");

// Creación del fondo
var fondo = {
  url: "images/tile.png",
  cargaOK: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

// Creación de la vaca
var vaca = {
  url: "images/vaca.png",
  cargaOK: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

// Creación del cerdo
var cerdo = {
  url: "images/cerdo.png",
  cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

// Creación del pollo
var pollo = {
  url: "images/pollo.png",
  cargaOK: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if(fondo.cargaOK)
    lienzo.drawImage(fondo.imagen, 0, 0);
  if(vaca.cargaOK)
    for (var i = 0; i <= aleatorio(3,9); i++) {
      lienzo.drawImage(vaca.imagen, aleatorio(0,420), aleatorio(0,420));
    }
  // Crear personaje
  if(cerdo.cargaOK)
    lienzoPersonaje.drawImage(cerdo.imagen, x, y);
  if(pollo.cargaOK)
    for (var i = 0; i < aleatorio(3,9); i++) {
      lienzo.drawImage(pollo.imagen, aleatorio(0,420), aleatorio(0,420));
    }
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
