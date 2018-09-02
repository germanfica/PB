// Declaración de variables
var d, lienzo;

// Inicialización de variables
d = document.getElementById("dibujito");
lienzo = d.getContext("2d"); // Área de dibujo, el lienzo es nuestro papel
console.log(lienzo);

lienzo.beginPath();
  // Comienzo
  lienzo.strokeStyle = "#64DD17";
  lienzo.lineWidth = 50; // Define el grosor de la línea.
  lienzo.moveTo(280, 320); // x, y
	lienzo.lineTo(380, 220);
	lienzo.arcTo(400, 200, 380, 180, 30); // x1_Tangente, y1_Tangente, x2_Tangente, y2_Tangente, radio
	lienzo.lineTo(270, 70);
	lienzo.arcTo(250, 50, 230, 70, 30);
	lienzo.lineTo(70, 230);
	lienzo.arcTo(50, 250, 70, 270, 30);
	lienzo.lineTo(210, 410);
	lienzo.arcTo(235, 435, 260, 410, 30);
	lienzo.lineTo(315, 355);
	lienzo.stroke();
  // Cierre
lienzo.closePath();
