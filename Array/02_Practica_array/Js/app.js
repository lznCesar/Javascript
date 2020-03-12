
let ArregloPromedio = []
    EventListener()
function EventListener(){

    document.addEventListener('DOMContentLoaded', AddEvents)


}

function AddEvents(){

    document.getElementById('AddInput').addEventListener('click', AddInput)
    document.getElementById('CalcularPromedio').addEventListener('click', CalcularPromedio)
    
}

let contadorInput = 0;

function AddInput(){

    const Output = document.getElementById('output')

    const DivCol = document.createElement('div')
    DivCol.setAttribute('class', 'col-12')

    const DivFg = document.createElement('div')
    DivFg.setAttribute('class', 'form-grup')

    const Label = document.createElement('label')
    Label.innerText = `Ingrese la calificación ${contadorInput +1}`

    const InputFc = document.createElement('input')
    InputFc.setAttribute('class','form-control')
    InputFc.setAttribute('class','mt-2')
    InputFc.setAttribute('type','number')
    InputFc.setAttribute('placeholder','Ingrese valor')
    InputFc.setAttribute('id', `InputPromedio${contadorInput}`)

    contadorInput++

    Output.appendChild(DivCol)
    DivCol.appendChild(DivFg)
    DivFg.appendChild(Label)
    DivFg.appendChild(InputFc)
    
    

}

function CalcularPromedio(){

    llenarArray()
    let acumulador = 0
    for (let i = 0; i<contadorInput; i++){
        acumulador += ArregloPromedio[i]
    }
    acumulador /= contadorInput
    console.log(acumulador);
    const Printz = document.getElementById('printZone')
    Printz.innerText = `el promedio es de ${acumulador}`
    
    
}

function llenarArray(){

    for (let x =0; x < contadorInput; x++){

        const Valor = document.getElementById(`InputPromedio${x}`).value;

        if (!isNaN(Valor)){

            ArregloPromedio[x] = Number(Valor)
        }else { 
            ArregloPromedio[x] = 0
        }
        
    }

}