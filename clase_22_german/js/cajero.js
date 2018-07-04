class Cajero {
  constructor() {
    // Billetes: Valor del billete, Cantidad de billetes
    var cincuenta = new Billete(50, 3);
    var veinte = new Billete(20, 2);
    var diez = new Billete(10, 2);

    this.billetes = [
      [cincuenta.valor, cincuenta.cantidad],
      [veinte.valor, veinte.cantidad],
      [diez.valor, diez.cantidad]
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
    var cantidadNecesaria, papeles;
    var billetes = [];

    for (var i = 0; i <= this.billetes.length-1; i++) {
      if(monto>0) {
        cantidadNecesaria = (monto-(monto%this.billetes[i][0]))/this.billetes[i][0]; // Catidad de billetes requeridos
        if(cantidadNecesaria>this.billetes[i][1]) {
          papeles = this.billetes[i][1]; // Cantidad de billetes necesarios para darle al cliente
        }else {
          papeles = cantidadNecesaria; // Cantidad de billetes necesarios para darle al cliente
        }
        billetes.push(papeles); // Cantidad de billetes necesarios para darle al cliente
        monto = monto - (this.billetes[i][0] * papeles);
      }
    }

    return billetes;
  }

  /**
   * Determina si hay suficientes billetes en el cajero
   */
  hayBilletes(billetes, monto) {
    // Declaración de variables
    var i, respuesta, dineroActual, dineroNecesario;

    // Inicialización de variables
    dineroActual = 0;
    dineroNecesario = 0;
    respuesta = true;
    i = 0;

    for (var i = 0; i <= billetes.length-1; i++) {
      dineroActual = dineroActual + this.billetes[i][0]*this.billetes[i][1];
      dineroNecesario = dineroNecesario + billetes[i];
    }

    if(monto>dineroActual || dineroNecesario==0) {
      respuesta = false;
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
    billetes = this.seNecesitan(monto); // No funciona cuando hay que retirar 210. 4,0,1. Debería 3, 2, 2. Hcaer un diagrama de flujo primero.
    //console.log(this.billetes);
    console.log(billetes);

    if(this.hayBilletes(billetes, monto)) {
      console.log("EXCELENTE :D tenga su dinero.");
      this.darBilletes(billetes, monto);
      this.mostrarBilletes(billetes);
    }else {
      document.getElementById('id_mostrar_billetes').innerHTML = document.getElementById('id_mostrar_billetes').innerHTML + "No puedo darte la cantidad que me estas pidiendo." + "<br/>" + "<hr/>";
      console.log("No puedo darte la cantidad que me estas pidiendo.");
    }
  }

  mostrarBilletes(billetes) {
    var texto;

    texto = "";

    for (var i = 0; i <= billetes.length-1; i++) {
      var texto = texto + billetes[i] + " billetes de " + this.billetes[i][0]  + "<br/>";
    }
    document.getElementById('id_mostrar_billetes').innerHTML = document.getElementById('id_mostrar_billetes').innerHTML + texto + "<hr/>";
    //document.write(texto);
  }
}
