class Cajero {
  constructor() {
    this.billetes = [
      [50, 3],
      [20, 2],
      [10, 2]
    ];
  }

  /**
    * Reducir la cantidad de billetes en el cajero
    */
  modificarCantBilletes(cantUsada) {
    for (var i = 0; i <= cantUsada.length-1; i++) {
      this.billetes[i][1] = (this.billetes[i][1]) - (cantUsada[i]);
    }
    //this.billetes[i][1] = this.billetes[i][1] - cantidadUsada;
  }

  retirar(monto) {
    // Declaración de variables
    var i, billete, cantBilletes, cantBilletesReq, dineroRestante, todoOK;
    var cantBilletesUsad = [];

    // Inicialización de variables
    i=0;
    dineroRestante = monto;
    todoOK = false;

    while (i<=this.billetes.length-1 && !todoOK) {
      billete = this.billetes[i][0]; // Billete del cajero
      cantBilletes = this.billetes[i][1]; // Cantidad de billetes del cajero
      cantBilletesReq = (dineroRestante-(dineroRestante%billete))/billete; // Catidad de billetes requeridos

      if(cantBilletes>0) {
        cantBilletesUsad.push(cantBilletesReq); // Almacena las cantidades de billetes usados para concretar la operación
        dineroRestante = dineroRestante%billete; // Dinero restante por dar al cliente
        if (dineroRestante == 0) {
          todoOK = true;
          this.modificarCantBilletes(cantBilletesUsad);
        }
      }
      i++;
    }
    // Cuando da todo OK AHí TENGO QUE CAMBIAR LA CANTIDAD DE BILLETES.
    this.mostrarMsj(todoOK);
  }

  mostrarMsj(todoOK) {
    if(todoOK) {
      console.log("EXCELENTE :D tenga su dinero");
    }else {
      console.log("No puedo darte la cantidad que me estas pidiendo.");
    }
  }
}
