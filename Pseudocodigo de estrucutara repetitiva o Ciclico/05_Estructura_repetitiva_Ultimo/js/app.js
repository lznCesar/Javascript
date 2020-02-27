
function eventListener(){

    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApplication);    
}

eventListener()


function initApplication(){
    const cantidades = Number(prompt('Cuantos numeros vas a evaluar?'));

    let AcumuladorMenores = 0;
    let AcumuladorMayores = 0;
    let print = document.getElementById('ZonePrint');

    for(let x = 0; x<cantidades; x++){
        let Numero = Number(prompt('Numero a evaluar?'));

        if(Numero <=0){
        AcumuladorMenores++;

        } else {
            AcumuladorMayores++;
        }
    
    }
    console.log(AcumuladorMenores,AcumuladorMayores)
    print.innerText = `el total de menores o iguales a Cero son: ${AcumuladorMenores}. el Total de mayores a cero son: ${AcumuladorMayores}`

}