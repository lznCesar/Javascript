class Premio {
    //caracteristicas o propiedades
    posicionX = 0
    posicionY = 0

    //el constructor se ejecuta en automatico y te pide dos parametros
    constructor(posicionX, posicionY){
        this.posicionX = posicionX
        this.posicionY = posicionY
        //this.--- hace referencia a las propiedades de la clase 
    }
//metodo o capacidad de la clase Premio

    static EliminarPremio(contenedor, id){
        contenedor.removeChild(document.getElementById(`${id}`))
    }
    CrearImagen(contenedor,SizeMargingLeft){

        const imagen = document.createElement('img')
        imagen.src = "./../ASSETS/sshit.jpeg"
        imagen.style.width = '50px'
        imagen.id = `imagen${Math.random().toString().split(".")[1]}`
        
        const StyleLeft = this.posicionX - SizeMargingLeft
        const StyleTop = this.posicionY 
        imagen.style.left = `${StyleLeft}px`
        imagen.style.top = `${StyleTop - 25}px`

        contenedor.appendChild(imagen)

        return {
            id: imagen.id,
            StyleLeft: StyleLeft -50, 
            StyleTop: StyleTop - 50,        
            StyleLeftMax: StyleLeft + 50,
            StyleTopMax: StyleTop + 50
        }
    }
}