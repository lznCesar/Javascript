let LongitudAlb, AnchoAlb, AlturaAlb, Pago;

let button = document.getElementById('btnTotales');
button .addEventListener('click', generaPago);

function generaPago(){

    LongitudAlb = Number(document.getElementById('Longuitud').value);
    AnchoAlb = Number(document.getElementById('Ancho').value);
    AlturaAlb = Number(document.getElementById('Altura').value);


    Pago = LongitudAlb * AnchoAlb * AlturaAlb


    let generarRecibo = document.getElementById('generarRecibo');
    generarRecibo.innerText = "Costo tota:" + Pago;
}
