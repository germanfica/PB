// Abrir un cajero
var cajero = new Cajero();

var button = document.getElementById('id_boton');
button.addEventListener('click', botonClick);

function botonClick(evento) {
  var monto = document.getElementById('id_monto');
  cajero.retirar(monto.value);
}
