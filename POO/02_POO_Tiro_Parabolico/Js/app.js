EventListener()

function EventListener(){

    document.getElementById('btnCalcular').addEventListener('click',CalcularRecorrido)

}

function CalcularRecorrido(){
    let Angulo = Number(document.getElementById('Angulo').value)
    let Velocidad = Number(document.getElementById('Velocidad').value)
    const proyectil = new Proyectil(Velocidad,Angulo);
proyectil.CrearSpan()
}