let velocidad;
let tiempo;
let distancia;

let button = document.getElementById('dimeladistancia');

button.addEventListener("click", calculaDistancia)

function calculaDistancia(){

    velocidad = Number(document.getElementById('velocidadkm').value)
    tiempo = Number(document.getElementById('tiempoS').value)

    distancia = velocidad * tiempo 

    let imprimirresultado = document.getElementById ('imprimedistancia')
    imprimedistancia.innerText = distancia
    

}