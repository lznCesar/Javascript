const button = document.getElementById('btn');
button.addEventListener('click', generarCosto);

function generarCosto(){

    const InpComensales = Number(document.getElementById('comensales').value);
    

    if (InpComensales >= 1 && InpComensales < 200){
        let Costo1 = InpComensales * 95;
        let printzone = `<div class = "alert alert-success mt-3">El Costo seria: ${Costo1}</div>`;
        imprimir.innerHTML = printzone;

    } else if (InpComensales > 200 && InpComensales <= 300){

        let Costo2 = InpComensales * 85;
        let printzone = `<div class = "alert alert-success mt-3">El Costo seria: ${Costo2}</div>`;

        imprimir.innerHTML = printzone;

    } else {
        
        let Costo3 = InpComensales * 75;
        let printzone = `<div class = "alert alert-success mt-3">El Costo seria: ${Costo3}</div>`;
        imprimir.innerHTML = printzone;

    }
}