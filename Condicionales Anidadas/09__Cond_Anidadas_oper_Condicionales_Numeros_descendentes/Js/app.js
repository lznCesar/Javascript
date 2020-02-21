const button = document.getElementById('btnOrdenar');
button.addEventListener('click',OrdenarDes);

function OrdenarDes(){

    const ValorA = Number(document.getElementById('ValA').value);
    const ValorB = Number(document.getElementById('ValB').value);
    const ValorC = Number(document.getElementById('ValC').value);

    console.log(ValorA)

    if ((ValorA > ValorB) && (ValorA > ValorC) && (ValorB > ValorC)){

        let printOrden = `<div class="alert alert-success mt-3">${ValorA}, ${ValorB}, ${ValorC}.</div>`
        PrintZn.innerHTML = printOrden;
    } else if (ValorA > ValorB && ValorA > ValorC && ValorC > ValorB){
        let printOrden = `<div class="alert alert-success mt-3">${ValorA}, ${ValorC}, ${ValorB}.</div>`
        PrintZn.innerHTML = printOrden;
    } else if (ValorB > ValorA && ValorB > ValorC && ValorA > ValorC){
        let printOrden = `<div class="alert alert-success mt-3">${ValorB}, ${ValorA}, ${ValorC}.</div>`
        PrintZn.innerHTML = printOrden;
    } else if (ValorB > ValorA && ValorB > ValorC && ValorC > ValorA){
        let printOrden = `<div class="alert alert-success mt-3">${ValorB}, ${ValorC}, ${ValorA}.</div>`
        PrintZn.innerHTML = printOrden;
    }else if (ValorC > ValorA && ValorC > ValorB && ValorA > ValorB){
        let printOrden = `<div class="alert alert-success mt-3">${ValorC}, ${ValorA}, ${ValorB}.</div>`
        PrintZn.innerHTML = printOrden;
    }else{
        let printOrden = `<div class="alert alert-success mt-3">${ValorC}, ${ValorB}, ${ValorA}.</div>`
        PrintZn.innerHTML = printOrden;
    }

}