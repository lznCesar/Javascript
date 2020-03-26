EventListener()

const foco = new Foco()
let imagen = document.getElementById('imagen')

function EventListener(){

    document.getElementById('button').addEventListener('click', Modificar)
}

function Modificar(){
    imagen.src = foco.CambiarEstado()

}
