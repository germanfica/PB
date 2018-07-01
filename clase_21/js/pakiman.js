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

  hablar() {
    alert(this.nombre);
  }
}
