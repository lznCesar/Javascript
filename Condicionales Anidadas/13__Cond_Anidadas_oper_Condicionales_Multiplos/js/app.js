const button = document.getElementById('btnmultiplo');
button.addEventListener('click', multiplos);

function multiplos(){

    const numeroA = Number(document.getElementById('ValA').value);
    const numeroB = Number(document.getElementById('ValB').value);

    let Res1 = numeroA % numeroB;
    let Res2  = numeroB % numeroA;

    if (Res1 == 0){
        let PrintRes = `<div class= "alert alert-success mt-2">El número ${numeroB} es mùltiplo de ${numeroA}</div>`
        PrintZn.innerHTML = PrintRes;
        console.log(Res1);
    } else if (Res2 == 0){
        let PrintRes = `<div class= "alert alert-success mt-2">El número ${numeroA} es mùltiplo de ${numeroB}</div>`
        PrintZn.innerHTML = PrintRes;
        console.log(Res2);   
    } else {
        let PrintRes = `<div class= "alert alert-success mt-2">Los números no son múltiplos</div>`
        PrintZn.innerHTML = PrintRes;
    }
}
