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

    console.log(cantBilletes + " billetes de " + billete + ".")
    
    i++;
  }
}
