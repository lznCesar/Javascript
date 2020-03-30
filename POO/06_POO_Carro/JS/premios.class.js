class Premio {
    posicionX = 0
    posicionY = 0

    constructor(posicionX,posicionY){
        this.posicionX = posicionX
        this.posicionY = posicionY
    }

    CrearImagen(contenedor,SizeMargingLeft){

        const imagen = document.createElement('img')
        imagen.src = "./../ASSETS/sshit.jpeg"
        imagen.style.width = '50px'

        const StyleLeft = this.posicionX - SizeMargingLeft
        const StyleTop = this.posicionY 
        imagen.style.left = `${StyleLeft}px`
        imagen.style.top = `${StyleTop - 25}px`

        contenedor.appenChild(imagen)

        return {
            StyleLeft, 
            StyleTop,
            StyleLeftMax: StyleLeft - 50,
            StyleTopMax: StyleTop -50
        }
    }
}