var billetes = [
  [50, 3],
  [20, 2],
  [10, 2]
];

function retirar(monto) {
  // Declaración de variables
  var i, billete, cantBilletes, cantBilletesReq, dineroRestante, todoOK;

  // Inicialización de variables
  i=0;
  todoOK = false;

  while (i<=billetes.length-1 && !todoOK) {
    billete = billetes[i][0]; // Billete actual del cajero
    cantBilletes = billetes[i][1]; // Cantidad de billetes del cajero
    cantBilletesReq = monto/billete; // Catidad de billetes requeridos
    dineroRestante = monto%billete; // Dinero restante por dar al cliente

    console.log(monto); // Monto que seleccionó el cliente para retirar
    console.log(cantBilletesReq);
    console.log(dineroRestante);

    // Si la cantidad de biletes requeridos
    // es menor a la
    // cantidad de billetes en el cajero,
    // entonces ahora el monto será el dinero restante para completar el
    // monto seleccionado
    if(cantBilletes>=cantBilletesReq) {
      monto = dineroRestante; // Dinero restante por dar al cliente
    }

    if (monto == 0) {
      todoOK = true;
    }

    //console.log(cantBilletes + " billetes de " + billete + ".")
    i++;
  }

  if(todoOK) {
    console.log("EXCELENTE :D tenga su dinero");
  }else {
    console.log("ERROR");
  }
}
