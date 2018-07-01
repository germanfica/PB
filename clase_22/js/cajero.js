var billetes = [];

var cincuenta = new Billete(50);
var veinte = new Billete(20);
var diez = new Billete(20);

billetes[cincuenta] = 3;
billetes[veinte] = 2;
billetes[diez] = 2;

// Tengo que manejar las cantidades


// input
150%50

// output
50+50+50;

function contar() {

}

function retirar() {
  for(billete in billetes) {
    console.log("Billete de: " + billete + "; Cantidad: ");
  }
}

function retirar2(cantidad) {
  for(billete of billetes) {
    console.log(billete);
    if(cantidad%billete==0) {
      cantidad = cantidad/billete;
    }
    console.log(cantidad);
    if(cantidad==1) {
      console.log("Éxito.");
    }
  }
  if(cantidad==1) {
    console.log("Éxito.");
  }else {
    console.log("Error.");
  }
}
