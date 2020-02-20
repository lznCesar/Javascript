const button = document.getElementById('btnzz');
button.addEventListener('click',CostoporHoras);


function CostoporHoras(){
    
    const HrsEstacionado = Number(document.getElementById('IngreseHoras').value);

    if (HrsEstacionado <= 2){
        let precioporHoras = HrsEstacionado * 5;

        let IMPCOSTO = `<div class="alert alert-success mt-3">El costo por el Estacionamiento es: $ ${precioporHoras}</div>`
        printZn.innerHTML = IMPCOSTO;
    } else if (HrsEstacionado > 2 && HrsEstacionado < 6){

        let precioporHoras = (HrsEstacionado - 2) * 4;
        let total2 = 10 + precioporHoras; 


        let IMPCOSTO = `<div class="alert alert-success mt-3">El costo por el Estacionamiento es: $ ${total2}</div>`
        printZn.innerHTML = IMPCOSTO;
  } else if ( HrsEstacionado >= 6 && HrsEstacionado < 11){

        let precioporHoras = (HrsEstacionado - 5) * 3;
        let total3 = 22 + precioporHoras;
        
        let IMPCOSTO = `<div class="alert alert-success mt-3">El costo por el Estacionamiento es: $ ${total3}</div>`
        printZn.innerHTML = IMPCOSTO;
  } else{
    let precioporHoras = (HrsEstacionado - 10) * 2;
    let total4 = 37 + precioporHoras;

    let IMPCOSTO = `<div class="alert alert-success mt-3">El costo por el Estacionamiento es: $ ${total4}</div>`
    printZn.innerHTML = IMPCOSTO;
  }
}

