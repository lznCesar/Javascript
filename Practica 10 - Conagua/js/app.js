let MetrosTotales, CostoPorMetro, Pago;

let button = document.getElementById('btnTotales');

button .addEventListener('click', generaPago);

function generaPago(){

    MetrosTotales = Number(document.getElementById('mtsAlberca').value);
    CostoPorMetro = Number(document.getElementById('costomts').value);

    Pago = MetrosTotales * CostoPorMetro;

    let generarRecibo = document.getElementById('generarRecibo');
    generarRecibo.innerText = Pago;
}
