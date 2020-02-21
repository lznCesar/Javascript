const button = document.getElementById('btnSuma');
button.addEventListener('click', SumaPr);

function SumaPr(){

    const presupuesto = Number(document.getElementById('prespuesto').value);
    const PrArt1 = Number(document.getElementById('Articulo1').value);
    const PrArt2 = Number(document.getElementById('Articulo2').value);
    const PrArt3 = Number(document.getElementById('Articulo3').value);
    const PrArt4 = Number(document.getElementById('Articulo4').value);

    let SumaPr = PrArt1 + PrArt2 + PrArt3 + PrArt4;

    if(presupuesto < SumaPr){
        let Imprimir = `<div class="alert alert-warning mt-3">El precio está fuera de presupuesto</div>`
        PrintZn.innerHTML = Imprimir;
    } else{
        let Imprimir = `<div class="alert alert-warning mt-3">El precio está dentro del presupuesto</div>`
        PrintZn.innerHTML = Imprimir;

    }
}
