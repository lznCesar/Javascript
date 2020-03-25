class Proyectil {
  velocidadInicial = 0;
  Angulo = 0;

  constructor(velocidadInicial, Angulo) {
    this.velocidadInicial = velocidadInicial;
    this.Angulo = Angulo;

    console.log(this.Angulo, this.velocidadInicial);
  }

  calcularDistanciaX(t) {
    const DistanciaX =
      this.velocidadInicial * Math.cos(this.Angulo * (Math.PI / 180)) * t;

      return DistanciaX
    }
    calcularDistanciaY(t){
        let DistanciaY = this.velocidadInicial * Math.sin(this.Angulo * (Math.PI / 180))
        
        DistanciaY = DistanciaY * t - 0.5 * 9.8 *Math.pow(t ,2)
        return DistanciaY
    }

    CrearSpan(){
        for (let tiempo = 0; tiempo <=7; tiempo += 0.01){
            const span = document.createElement('span')
            
            const left = this.calcularDistanciaX(tiempo)
            const bottom = this.calcularDistanciaY(tiempo)
            span.style.left= `${left}%`
            span.style.bottom= `${bottom}%`

            if(left < 0 || bottom <0 ||left>=100|| bottom >=100)break

            
            document.getElementById('contenedor').appendChild(span)

        }
    }
}
