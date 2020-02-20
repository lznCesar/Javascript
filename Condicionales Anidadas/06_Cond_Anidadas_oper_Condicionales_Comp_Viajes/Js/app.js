const button = document.getElementById("btnPre");
button.addEventListener("click", CostoViaje);

function CostoViaje() {
  const Camion = document.getElementById("bus").value;
  const Pasajeros = Number(document.getElementById("Personas").value);
  const Km = Number(document.getElementById("kilometros").value);

  if (Camion == 'A'){
    let costoFinal = Km * 1.5;
    let costoPersona = costoFinal / Pasajeros;

    let printXXn = `<div class= "alert alert-succes mt-3">El costo Final del viaje es: $ ${costoFinal} y el costo por Pasajero es: $ ${costoPersona} </div>`;
    printZn.innerHTML = printXXn;
} else if( Camion == 'B'){

    let costoFinal = Km * 2;
    let costoPersona = costoFinal / Pasajeros;

    let printXXn = `<div class= "alert alert-succes mt-3">El costo Final del viaje es: $ ${costoFinal} y el costo por Pasajero es: $ ${costoPersona} </div>`;
    printZn.innerHTML = printXXn;
} else if ( Camion == 'C'){
    let costoFinal = Km * 2.5;
    let costoPersona = costoFinal / Pasajeros;

    let printXXn = `<div class= "alert alert-succes mt-3">El costo Final del viaje es: $ ${costoFinal} y el costo por Pasajero es: $ ${costoPersona} </div>`;
    printZn.innerHTML = printXXn;
} else if ( Camion == 'D'){
    let costoFinal = Km * 3;
    let costoPersona = costoFinal / Pasajeros;

    let printXXn = `<div class= "alert alert-succes mt-3">El costo Final del viaje es: $ ${costoFinal} y el costo por Pasajero es: $ ${costoPersona} </div>`;
    printZn.innerHTML = printXXn;
} else {
    let printXXn =  `<div class= "alert alert-succes mt-3">ERROR La clase de camion seleccionado no existe</div>`;
    printZn.innerHTML = printXXn;
}

}

