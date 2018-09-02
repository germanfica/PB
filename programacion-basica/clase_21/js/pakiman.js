//var imagenes = [];
//imagenes["Cauchin"] = "images/vaca.png";
//imagenes["Pokacho"] = "images/pollo.png";
//imagenes["Ceuro"] = "images/cerdo.png";

class Pakiman {
  constructor(nombre, vida, ataque) {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    //this.imagen.src = imagenes[this.nombre];
  }

  cargarImagen(url) {
    this.imagen.src = url;
  }

  mostrar() {
    //document.write("<image " + 'src="' + this.imagen.src + '""');
    document.write("<br/>" + "<strong>"+ this.nombre + "</strong>"  + "<br/>");
    document.body.appendChild(this.imagen);
    document.write("<br/>" + "<strong>" + "Vida: " + "</strong>"+ cauchin.vida);
    document.write("<br/>" + "<strong>Ataque: </strong>"+ cauchin.ataque + "<br/>");
  }

  hablar() {
    alert(this.nombre);
  }
}
