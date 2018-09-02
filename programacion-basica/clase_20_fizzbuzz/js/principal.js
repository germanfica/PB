// Declaración de variables
var max;

// Inicialización de variables
max=100;

for (var i = 1; i < max; i++) {

  if(esDivisible(i,3)==true && esDivisible(i,5)==true) {
    document.write("FizzBuzz");
  }else if (esDivisible(i,3)==true) {
    document.write("Fizz");
  }else if (esDivisible(i,5)==true) {
    document.write("Buzz");
  }else {
    document.write(i);
  }
  document.write("<br/>");
}

function esDivisible(numero, divisor) {
  // Declaración de variables
  var resultado;

  // Inicialización de variables
  resultado = false;

  if(numero%divisor==0) {
    resultado=true;
  }

  return resultado;
}
