// Declaración de variables
var boton;

// Inicialización de variables
boton = document.getElementById("id_boton");

// Generar un escuchador de eventos para el boton
boton.addEventListener("click", mostrarDibujo);

function mostrarDibujo() {
  // Declaración de variables
  var dibujo, lienzo, alturaDelDibujito, color, cantLineas, op;

  // Inicialización de variables
  dibujo = document.getElementById("id_dibujo");
  alturaDelDibujito = dibujo.height;
  lienzo = dibujo.getContext("2d"); // Área de dibujo, el lienzo es nuestro papel

  // Leer los datos de los campos de textos ingresados por el usuario
  color = document.getElementById("id_color").value;
  cantLineas = document.getElementById("id_cantLineas").value;

  // Calcular la cantidad de lineas a dibujar
  op = alturaDelDibujito/cantLineas;

  // Limpieza del lienzo
  lienzo.clearRect(0, 0, dibujo.width, dibujo.height);

  // Dibujar, me gusta este color: #504ed8
  for (var i = 0; i <= alturaDelDibujito/op; i=i+1) {
    dibujarLinea(color, 0, i*op, i*op, alturaDelDibujito, 0.9, lienzo);

    dibujarLinea(color, i*op, 0, 0, i*op, 0.5, lienzo);
    dibujarLinea(color, i*op, 0, alturaDelDibujito, i*op, 0.5, lienzo);
    console.log("Línea: " + i)
  }

  dibujarCaja(color, alturaDelDibujito, lienzo);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lineWidth, lienzo) {
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

function dibujarCaja(colorcito, alturaDelDibujito, lienzo) {
  dibujarLinea(colorcito, 1, 1, 1, alturaDelDibujito-1, 1, lienzo);
  dibujarLinea(colorcito, 1, 1, alturaDelDibujito-1, 1, 1, lienzo);
  dibujarLinea(colorcito, alturaDelDibujito-1, 1, alturaDelDibujito-1, alturaDelDibujito-1, 1, lienzo);
  dibujarLinea(colorcito, alturaDelDibujito-1, alturaDelDibujito-1, 1, alturaDelDibujito-1, 1, lienzo);
}
