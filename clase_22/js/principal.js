var billetes = [
  50, 50, 50,
  20, 20,
  10, 10
]; // Billete con sus respectivas cantidades

// Tengo que manejar las cantidades


// input
150%50

// output
50+50+50;

function retirar(monto) {
  // Declaración de variables
  var i, todoOK;

  // Inicialización de variables
  i=0;
  todoOK = true;

  while (i<=billetes.length-1 && todoOK) {
    var billete = billetes[i];

    monto = monto - billete;

    console.log("Billete: " + billete);

    i++;
  }
}
