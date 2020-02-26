Eventlistener()
function Eventlistener(){
    const button = document.getElementById('btnInit')
    button.addEventListener('click', iniciarAplicacion)
}

function iniciarAplicacion(){

    let NumeroAlumnos = Number(prompt('Cuanta alumnos son?'));

    let acumulador = 0;
    const imprimir = document.getElementById('ZonePrint')
    for (let i=1; i <= NumeroAlumnos; i++){

        let edad = Number(prompt(`Ingreso la edad del alumno ${i}`));
        acumulador +=edad 
    }
    let resultado = acumulador/NumeroAlumnos;
    console.log(resultado);
    imprimir.innerHTML = resultado;
}

