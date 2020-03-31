class Carro {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  MoverCarro(direccion, Imagen) {
    switch (direccion) {
      case "ArrowUp":
        if (this.posicionY <= 0) return;
        Imagen.src = "./../ASSETS/norte.jpeg";
        Imagen.style.top = `${(this.posicionY -= 10)}px`;
        break;

      case "ArrowLeft":
        if (this.posicionX <= 0) return;
        Imagen.src = "./../ASSETS/izquierda.jpeg";
        Imagen.style.left = `${(this.posicionX -= 10)}px`;
        break;

      case "ArrowRight":
        if (this.posicionX >= 924) return;
        Imagen.src = "./../ASSETS/derecha.jpeg";
        Imagen.style.left = `${(this.posicionX += 10)}px`;
        break;

      case "ArrowDown":
        if (this.posicionY >= 556) return;
        Imagen.src = "./../ASSETS/sur.jpeg";
        Imagen.style.top = `${(this.posicionY += 10)}px`;
        break;
    }
  }

  VerificarColision(PosicionCaquitas = []) {
    for (let i = 0; i < PosicionCaquitas.length; i++) {
      if (
        this.posicionX >=PosicionCaquitas[i].StyleLeft &&
        this.posicionX <=PosicionCaquitas[i].StyleLeftMax &&
        this.posicionY >=PosicionCaquitas[i].StyleTop &&
        this.posicionY <=PosicionCaquitas[i].StyleTopMax
      ) {
        return i;
      }
    }
    return null;
  }
}
