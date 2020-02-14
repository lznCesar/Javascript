let puntoAx, puntoBx, puntoAy, puntoBy, resultadointerno, DistanciaEntrePuntos;

let button = document.getElementById('botondistancia');
button.addEventListener("click", calculardistancia);

function calculardistancia(){

    puntoAx = Number(document.getElementById('PsnAX').value);
    puntoBx = Number(document.getElementById('PsnBX').value);
    puntoAy = Number(document.getElementById('PsnAY').value);
    puntoBy = Number(document.getElementById('PsnBY').value);

    resultadointerno = Math.pow((puntoBx - puntoAx),2) + Math.pow((puntoBy -  puntoAy),2);
    console.log(resultadointerno);

    DistanciaEntrePuntos = Math.sqrt(resultadointerno);

    let imprimirdistancia = document.getElementById('imprimirdistancia');
    imprimirdistancia.innerText=DistanciaEntrePuntos;
}
