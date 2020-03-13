EventListener()
function EventListener(){

    document.getElementById('MostrarInputs').addEventListener('click', MostraInputs)
}

const output = document.getElementById('output')

function MostraInputs(){
    console.log('click');
    
    
    const NumeroInputs = Number(document.getElementById('NumeroInputs').value)

    if (NumeroInputs > 1000 || NumeroInputs <=0) return
    EliminarElementos()
    const row = document.createElement('div')
    row.setAttribute('class', 'row')

    for (let i = 0; i<NumeroInputs; i++ ){
        const DivCol = document.createElement('div')
        DivCol.setAttribute('class','col-12')

        const DivFG = document.createElement('div')
        DivFG.setAttribute('class','form-group')

        const Label = document.createElement('label')
        Label.innerText = `Ingrese numero a guardar en el arreglo`

        const Input = document.createElement('input')
        Input.setAttribute('type', 'number')
        Input.setAttribute('id', 'valorInput')
        Input.setAttribute('class', 'form-control')

        row.appendChild(DivCol)
        DivCol.appendChild(DivFG)
        DivFG.appendChild(Label)
        DivFG.appendChild(Input)
    
    }
    output.appendChild(row)
    const buttonObtenerResultado = document.createElement('button')
    buttonObtenerResultado.setAttribute('class','btn btn-outline-success btn-block')
    buttonObtenerResultado.setAttribute('id','BtnCalcularResultados')

    buttonObtenerResultado.innerText = `Calcular Resultado`
    row.appendChild(buttonObtenerResultado)

    document.getElementById('BtnCalcularResultados').addEventListener('click',RealizarComparacion)
}


function RealizarComparacion(){
    
    const NumeroInputs = document.getElementsByTagName('input')
    
    let Acumulador = 0;

    for (let x = 0; x <NumeroInputs.length; x++){

        // Acumulador += Number(NumeroInputs[x].value)
        // console.log(Acumulador);

        for (let y = x+1; y < NumeroInputs.length; y++){

            if ( NumeroInputs[x].value == NumeroInputs[y].value){

                NumeroInputs[y].value = "";
                
            }
        }
        
        console.log(NumeroInputs[x].value);
    }
    
    MostrarDatos(NumeroInputs);

}

function EliminarElementos(){

    while(output.firstChild){
        output.firstChild.remove()
    }
}

function MostrarDatos(NumeroInputsArreglo){
    
    console.log(NumeroInputsArreglo);
    const PrintZn = document.getElementById('PrintZn')

    for (let x = 0; x < NumeroInputsArreglo.length; x++){

    if (NumeroInputsArreglo[x].value != ""){
        
        console.log(NumeroInputsArreglo[x].value);



        PrintZn.innerText += `-${NumeroInputsArreglo[x].value} `
    }

    }
}
