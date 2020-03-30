const imagen = document.getElementById('Carro')
let SizeMargingLeft = 0
const carro = new Carro(0, 0);
const contenedor = document.getElementById('contenedor')
let PosicionImaganes = []
EventListener();

function EventListener(){
    ObtenerMargin()

    document.addEventListener("keydown", moveCar)
    contenedor.addEventListener('click', PonerPremio)
    window.addEventListener('resize', ObtenerMargin)

}

function moveCar(e){
            console.log(e);
            
    carro.MoverCarro(e.key. imagen)
    
}
function PonerPremio(event){

    console.log(event);
    const premio = new Premio(event.X, event.Y)
    PosicionImaganes.push(premio.CrearImagen(contenedor, SizeMargingLeft))
    
}
// esta seccion nos ayuda para conocer un margin en automatico de una pantalla en la cual su tamaño se modifica

function ObtenerMargin(){

    const MarginContainer = window.getComputedStyle(contenedor).getPropertyValue("Margin-left")
    SizeMargingLeft = MarginContainer.substring(0,MarginContainer.length - 2)
}