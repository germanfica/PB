// Declaración de variables
var gTierra, gMarte, gJupiter;

// Inicialización de variables
gTierra = 9.8;
gMarte = 3.7;
gJupiter = 24.8;

function principal() {
  // Declaración de variables
  var peso, pesoFinal, opt, nombrePlaneta;

  // Inicialización de variables
  peso = parseFloat(prompt("¿Cuál es tu peso?"));
  nombrePlaneta = "";

  // Leer opción
  opt = parseInt(prompt("Elige tu planeta\n1 para Marte y 2 para Júpiter"));

  // Alternativa
  switch (opt) {
    case 1:
      // Calcular el peso del usuario en Marte
      pesoFinal = pesoPlaneta(peso, gMarte);

      // Nombre del planeta elegido
      nombrePlaneta = "Marte";
    case 2:
      // Calcular el peso del usuario en Júpiter
      pesoFinal = pesoPlaneta(peso, gJupiter);

      // Nombre del planeta elegido
      nombrePlaneta = "Júpiter";
      break;
    default:
      document.write("<strong>ERROR</strong>\n<br>La opción elegida no es correcta.</br>");
      break;
  }

  // Mostrar el peso final del usuario
  if(pesoFinal!=1 || pesoFinal!=2) {
    document.write("Tu peso en "+ nombrePlaneta + " es de <strong>" + pesoFinal + "kg" + "</strong>" + ".");
  }
}
