const button = document.getElementById ('btnPromedio');
button.addEventListener('click',ObtenerPromedio);

function ObtenerPromedio(){

    const numero1 = Number(document.getElementById('input1').value);
    const numero2 = Number(document.getElementById('input2').value);
    const numero3 = Number(document.getElementById('input3').value);

    let resultado = (numero1 + numero2 + numero3) / 3;

    let cadena = `La Calificion es: ${numero1}`;

    if(resultado >=9){

        let divImprimir = ` <div class="alert alert-success mt-3"> <p> El alumno a aprobado </p> </div>`

        printZone.innerHTML = divImprimir;

    } else if (resultado >=6 && resultado < 9){

        let divImprimir2 = ` <div class="alert alert-warning mt-3"> <p> El alumno es Regular </p> </div>`
        printZone.innerHTML = divImprimir2;

    } else {

        let divImprimir3 = ` <div class="alert alert-danger mt-3"> <p> El alumno esta Reprobado </p> </div>`
        printZone.innerHTML = divImprimir3;
    }
}