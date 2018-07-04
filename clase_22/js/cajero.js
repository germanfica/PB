class Cajero {
  constructor() {
    // Billetes: Valor del billete, Cantidad de billetes
    this.billetes = [
      [50, 3],
      [20, 2],
      [10, 2]
    ];
  }

  /**
   * Dar al cliente el monto que solicitó en billetes
   * ADVERTENCIA: este módulo no verifica si hay billetes en el cajero
   */
  darBilletes(billetes) {
    for (var i = 0; i <= billetes.length-1; i++) {
      this.billetes[i][1] = (this.billetes[i][1]) - (billetes[i]);
    }
  }

  /**
   * Determina la cantidad de billetes que se necesitan
   * para darle al cliente
   */
  seNecesitan(monto) {
    // Declaración de variables
    var cantidadNecesaria;
    var billetes = [];

    for (var i = 0; i <= this.billetes.length-1; i++) {
      cantidadNecesaria = (monto-(monto%this.billetes[i][0]))/this.billetes[i][0]; // Catidad de billetes requeridos
      billetes.push(cantidadNecesaria); // Cantidad de billetes necesarios para darle al cliente
      monto = monto%this.billetes[i][0]; // Monto restante para completar el monto total solicitado por el cliente
    }

    return billetes;
  }

  /**
   * Determina si hay billetes en el cajero
   */
  hayBilletes(billetes) {
    // Declaración de variables
    var i, respuesta;

    // Inicialización de variables
    respuesta = true;
    i = 0;

    while(i<= billetes.length-1 && respuesta) {
      if((this.billetes[i][1] - billetes[i])<0) {
        respuesta = false;
      }
      i++;
    }

    return respuesta;
  }

  /**
   * Permite que el cliente retire su dinero del cajero
   * (se da por hecho que el banco autoriza esta transacción)
   */
  retirar(monto) {
    // Declaración de variables
    var billetes;

    // Inicialización de variables
    billetes = this.seNecesitan(monto);
    console.log(this.billetes);
    //console.log(billetes);

    if(this.hayBilletes(billetes)) {
      console.log("EXCELENTE :D tenga su dinero.");
      this.darBilletes(billetes);
    }else {
      console.log("No puedo darte la cantidad que me estas pidiendo.");
    }
  }
}
