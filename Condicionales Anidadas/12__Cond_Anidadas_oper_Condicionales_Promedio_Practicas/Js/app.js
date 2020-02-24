const button = document.getElementById('Btnpromedio');
button.addEventListener('click', Promediofinal);

function Promediofinal(){

    const Calificacion1 = Number(document.getElementById('Practia1').value);
    const Calificacion2 = Number(document.getElementById('Practia2').value);
    const Calificacion3 = Number(document.getElementById('Practia3').value);
    const Calificacion4 = Number(document.getElementById('Practia4').value);

    if (Calificacion1 < Calificacion2)
        if (Calificacion1 < Calificacion3)
        if (Calificacion1 < Calificacion4){
            let promedio1 = (Calificacion2 + Calificacion3 + Calificacion4) / 3;
            let PrintCal = `<div class= alert alert-success mt-3>El promedio de las prácticas es de ${promedio1}</div>`
            PrintZn.innerHTML = PrintCal;
        } else {
            let promedio2 = (Calificacion2 + Calificacion3 + Calificacion1) / 3;
            let PrintCal = `<div class= alert alert-success mt-3>El promedio de las prácticas es de ${promedio2}</div>`
            PrintZn.innerHTML = PrintCal;
        } 
        if (Calificacion2 < Calificacion1)
        if (Calificacion2 < Calificacion3)
        if (Calificacion2 < Calificacion4){
            let promedio3 = (Calificacion1 + Calificacion3 + Calificacion4) / 3;
            let PrintCal = `<div class= alert alert-success mt-3>El promedio de las prácticas es de ${promedio3}</div>`
            PrintZn.innerHTML = PrintCal;
        }else {
            let promedio4=(Calificacion1 + Calificacion3 + Calificacion2) / 3;
            let PrintCal2 = `<div class= alert alert-success mt-3>El promedio de las prácticas es de ${promedio4}</div>`
            PrintZn.innerHTML = PrintCal2;
        } 
        if (Calificacion3 < Calificacion1)
        if (Calificacion3 < Calificacion2)
        if (Calificacion3 < Calificacion4){
            let promedio5=(Calificacion1 + Calificacion2 + Calificacion4) / 3;
            let PrintCal3 = `<div class= alert alert-success mt-3>El promedio de las prácticas es de ${promedio5}</div>`
            PrintZn.innerHTML = PrintCal3;
    
    }
}

