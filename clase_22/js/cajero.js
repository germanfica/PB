class Cajero {
  constructor() {
    this.billetes = [
      [50, 3],
      [20, 2],
      [10, 2]
    ];
  }

  /**
   * Dar al cliente el monto solicitado
   */
  darBilletes(billetes) {
    for (var i = 0; i <= billetes.length-1; i++) {
      this.billetes[i][1] = (this.billetes[i][1]) - (billetes[i]);
    }
  }

  hayBilletes() {

  }

  cantidadNecesaria() {
    
  }

  retirar(monto) {
    // Declaración de variables
    var i, cantidadNecesaria, todoOK;
    var billetes = [];

    // Inicialización de variables
    i=0;
    todoOK = false;

    while (i<=this.billetes.length-1 && !todoOK) {
      cantidadNecesaria = (monto-(monto%this.billetes[i][0]))/this.billetes[i][0]; // Catidad de billetes requeridos

      // Si hay billetes en el cajero entonces
      if(this.billetes[i][1]>0) {
        billetes.push(cantidadNecesaria); // Cantidad de billetes necesarios para dar al cliente
        monto = monto%this.billetes[i][0]; // Monto restante para completar el monto que solicitó el cliente
        // Si todo salió bien entonces dar los billetes al cliente
        if (monto == 0) {
          todoOK = true;
          this.darBilletes(billetes);
        }
      }
      i++;
    }
    // Cuando da todo OK AHí TENGO QUE CAMBIAR LA CANTIDAD DE BILLETES.
    this.mostrarMsj(todoOK);
  }

  mostrarMsj(todoOK) {
    if(todoOK) {
      console.log("EXCELENTE :D tenga su dinero.");
    }else {
      console.log("No puedo darte la cantidad que me estas pidiendo.");
    }
  }
}
