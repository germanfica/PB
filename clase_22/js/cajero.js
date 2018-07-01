var billetes = [
  [50, 3],
  [20, 2],
  [10, 2]
]; // Billete con sus respectivas cantidades

// Tengo que manejar las cantidades


// input
150%50

// output
50+50+50;

function resto(dividendo, divisor) {
  return (dividendo%divisor);
}

function retirar(monto) {
  // Declaración de variables
  var aux, i;

  // Inicialización de variables
  i=0;
  aux = false;

  while (i<=billetes.length-1 && !aux) {
    var billete = billetes[i][0];
    var cantidadDeBilletes = billetes[i][1];
    var resto = billete%cantidadDeBilletes;

    console.log("Billete: " + billete + "; Cantidad: " + cantidadDeBilletes + "; Resto: " + resto + ".");

    if(resto==0 && cantidadDeBilletes>=resto) {
      billetes[i][1] = 0; // Ya no hay billetes
      //aux=true;
    }
    i++;
  }
}

}
