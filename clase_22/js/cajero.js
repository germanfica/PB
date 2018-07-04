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
      if(this.billetes[i][1]>0)
        this.billetes[i][1] = (this.billetes[i][1]) - (billetes[i]);
    }
  }

  /**
   * Determina la cantidad de billetes necesarios para darle al cliente
   * en base a los billetes que hay en el cajero
   * Cambiar nombre a seNecesitan
   */
  seNecesitan(monto) {
    // Declaración de variables
    var cantidadNecesaria;
    var billetes = [];

    for (var i = 0; i <= this.billetes.length-1; i++) {
      cantidadNecesaria = (monto-(monto%this.billetes[i][0]))/this.billetes[i][0]; // Catidad de billetes requeridos
      billetes.push(cantidadNecesaria); // Cantidad de billetes necesarios para dar al cliente
      monto = monto%this.billetes[i][0]; // Monto restante para completar el monto que solicitó el cliente
    }

    return billetes;
  }

  hayBilletes(billetes) {
    var respuesta;

    for (var i = 0; i <= billetes.length-1; i++) {
      if(this.billetes[i][1]>=billetes[i]) {
        respuesta = true;
      }else {
        respuesta = false;
      }
    }
    return respuesta;
  }

  retirar(monto) {
    // Declaración de variables
    var billetes;

    // Inicialización de variables
    billetes = this.seNecesitan(monto);

    if(this.hayBilletes(billetes)) {
      console.log("EXCELENTE :D tenga su dinero.");
      this.darBilletes(billetes);
    }else {
      console.log("No puedo darte la cantidad que me estas pidiendo.");
    }
  }
}
