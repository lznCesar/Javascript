function EventListener(){
    const button = document.getElementById('btnInit')
    button.addEventListener('click', VentasTotales);

}

EventListener()

function VentasTotales(){

    let NumerodeVentas = Number(prompt('Cuantas Ventas realizaste el dia de hoy?'));
    let acumuladorMayor = 0;
    let acumuladorMedio = 0;
    let acumuladorMenor = 0;
    let acumuladorGlobal = 0;
    let contMayor = 0;
    let contMedio = 0;
    let contMenor = 0;
    const Imprimir1 = document.getElementById('ZonePrint1');
    const Imprimir2 = document.getElementById('ZonePrint2');
    const Imprimir3 = document.getElementById('ZonePrint3');
    const Imprimir4 = document.getElementById('ZonePrint4');

    for (let i = 1; i <= NumerodeVentas; i ++){

        let MontodeVentas = Number(prompt(`Ingrese el monto de la venta ${i}`));
    
        acumuladorGlobal += MontodeVentas;
        //console.log(acumulador)

        if (MontodeVentas > 1000){

            acumuladorMayor += MontodeVentas 
            contMayor++
            console.log(acumuladorMayor)
            console.log(contMayor)
            Imprimir1.innerText = `El monto de ventas de esta categoría es de: $ ${acumuladorMayor}`

        } if (MontodeVentas > 500 && MontodeVentas <= 1000){

            acumuladorMedio += MontodeVentas
            contMedio ++
            console.log(acumuladorMedio)
            console.log(contMedio)
            Imprimir2.innerText = `El monto de ventas de esta categoría es de: $ ${acumuladorMedio}`

        } if(MontodeVentas <=500 && MontodeVentas >0){
            acumuladorMenor += MontodeVentas
            contMenor ++
            console.log (acumuladorMenor)
            console.log(contMenor)
            Imprimir3.innerText = `El monto de ventas de esta categoría es de: $ ${acumuladorMenor}`
            
        } console.log(acumuladorGlobal)
        Imprimir4.innerText = `El monto total de las ventas es de: $ ${acumuladorGlobal}`
    
    }

}