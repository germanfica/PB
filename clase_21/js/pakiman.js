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
    document.body.appendChild(this.imagen);
    document.write("<br/>" + "Nombre: "+ cauchin.nombre + "<br/>");
    document.write("Vida: "+ cauchin.vida + "<br/>");
    document.write("Ataque: "+ cauchin.ataque + "<br/>");
  }

  hablar() {
    alert(this.nombre);
  }
}
