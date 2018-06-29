// Declaración de variables
var vp, lienzo, fondoDibujado;

// Incicialización de variables
 vp = document.getElementById("villaplatzi");
 lienzo = vp.getContext("2d");
 fondoDibujado = false;

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

// Creación del fondo
var fondo = new Image();
fondo.src = "images/tile.png";
fondo.addEventListener("onload", dibujarFondo);

// Creación de la vaca
var vaca = new Image();
vaca.src = "images/vaca.png"
vaca.addEventListener("load", dibujarVaca);

// Creación del cerdo
var cerdo = new Image();
cerdo.src = "images/cerdo.png"
cerdo.addEventListener("load", dibujarCerdo);

// Creación del pollo
var pollo = new Image();
pollo.src = "images/pollo.png"
pollo.addEventListener("load", dibujarPollo);

function dibujarFondo(evento) {
  lienzo.drawImage(fondo, 0, 0);
  fondoDibujado = true;
}

function dibujarVaca() {
  lienzo.drawImage(vaca, aleatorio(0,420), aleatorio(0,420));
}

function dibujarCerdo() {
  lienzo.drawImage(cerdo, aleatorio(0,420), aleatorio(0,420));
}

function dibujarPollo() {
  lienzo.drawImage(pollo, aleatorio(0,420), aleatorio(0,420));
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
