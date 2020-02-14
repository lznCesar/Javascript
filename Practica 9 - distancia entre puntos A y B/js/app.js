let puntoA, puntoB, DistanciaEntrePuntos;

let button = document.getElementById('botondistancia');
button.addEventListener("click", calculardistancia);

function calculardistancia(){

    puntoA = Number(document.getElementById('PsnA').value);
    puntoB = Number(document.getElementById('PsnB').value);

    DistanciaEntrePuntos = puntoB - puntoA;

    let imprimirdistancia = document.getElementById('imprimirdistancia');
    imprimirdistancia.innerText=DistanciaEntrePuntos;
}
