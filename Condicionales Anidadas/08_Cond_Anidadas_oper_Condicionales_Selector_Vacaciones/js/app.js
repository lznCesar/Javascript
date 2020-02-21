const button = document.getElementById('btn');
button.addEventListener('click',CostoporDestino);

function CostoporDestino(){  

    const DestinoFn = document.getElementById('Destinos').value;
    let Costkm = 2;


    if (DestinoFn == '1'){
    let costoIda = 750 * Costkm;
    console.log(costoIda)
    let CostoTotal = costoIda * 2;

    let ImpCosto = `<div class="alert alert-success mt-2">El costo del viaje de ida es: $ ${costoIda} El costo de vuelta es: $ ${costoIda} El Costo Total es de: $ ${CostoTotal}</div>`
    PrintZn.innerHTML = ImpCosto;
    } else if (DestinoFn == '2'){
        let costoIda = 800 * Costkm;
        console.log(costoIda)
        let CostoTotal = costoIda * 2;
    
        let ImpCosto = `<div class="alert alert-success mt-2">El costo del viaje de ida es: $ ${costoIda} El costo de vuelta es: $ ${costoIda} El Costo Total es de: $ ${CostoTotal}</div>`
        PrintZn.innerHTML = ImpCosto;
    } else if (DestinoFn == '3'){
        let costoIda = 1200 * Costkm;
        console.log(costoIda)
        let CostoTotal = costoIda * 2;
    
        let ImpCosto = `<div class="alert alert-success mt-2">El costo del viaje de ida es: $ ${costoIda} El costo de vuelta es: $ ${costoIda} El Costo Total es de: $ ${CostoTotal}</div>`
        PrintZn.innerHTML = ImpCosto;
    }else if (DestinoFn == '4'){
        let costoIda = 1800 * Costkm;
        console.log(costoIda)
        let CostoTotal = costoIda * 2;
    
        let ImpCosto = `<div class="alert alert-success mt-2">El costo del viaje de ida es: $ ${costoIda} El costo de vuelta es: $ ${costoIda} El Costo Total es de: $ ${CostoTotal}</div>`
        PrintZn.innerHTML = ImpCosto;
    } else{
        let ImpCosto = `<div class="alert alert-success mt-2">No hay gasto si elige esta opción</div>`
        PrintZn.innerHTML = ImpCosto;
    }
}