class Cajero {
  constructor() {
    this.billetes = [
      [50, 3],
      [20, 2],
      [10, 2]
    ];
  }

  retirar(monto) {
    // Declaración de variables
    var i, billete, cantBilletes, cantBilletesReq, dineroRestante, todoOK;

    // Inicialización de variables
    i=0;
    dineroRestante = monto;
    todoOK = false;

    while (i<=this.billetes.length-1 && !todoOK) {
      billete = this.billetes[i][0]; // Billete del cajero
      cantBilletes = this.billetes[i][1]; // Cantidad de billetes del cajero
      cantBilletesReq = dineroRestante/billete; // Catidad de billetes requeridos
      dineroRestante = dineroRestante%billete; // Dinero restante por dar al cliente

      if (dineroRestante == 0) {
        todoOK = true;
      }
      i++;
    }
    mostrarMsj(todoOK);
  }

  mostrarMsj(todoOK) {
    if(todoOK) {
      console.log("EXCELENTE :D tenga su dinero");
    }else {
      console.log("ERROR");
    }
  }
}
