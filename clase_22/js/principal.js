var billetes = [
  [50, 3],
  [20, 2],
  [10, 2]
];

function retirar(monto) {
  // Declaración de variables
  var i;

  // Inicialización de variables
  i=0;

  while (i<=billetes.length-1) {
    var billete = billetes[i][0];
    var cantBilletes = billetes[i][1];
    var cantBilletesNec = monto/billete; // Catidad de billetes necesarios

    console.log(monto); // Monto que seleccionó el cliente para retirar
    console.log(monto/billete);
    console.log(monto%billete); // Dinero restante por dar al cliente

    // Si la cantidad de biletes necesarios es menos a la cantidad de billetes actuales, entonces esta ecuación determina el residuo de lo que falta para completar el monto seleccionado

    if(cantBilletes>=cantBilletesNec) {
      monto = monto%billete; // Dinero restante por dar al cliente
    }

    //console.log(cantBilletes + " billetes de " + billete + ".")
    i++;
  }
}
