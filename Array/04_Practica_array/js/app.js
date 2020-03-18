
function EventListener(){

    document.getElementById('TamañoArray').addEventListener("keypress",CrearInput)
}

EventListener()

function CrearInput(event){

    if (event.key == "Enter"){
        

        // si isNana es true = quiere decir que no es un numero
        // si isNan es flase, es un numero
        
      if (isNaN(event.target.value))return;

 RellenarArreglo(event.target.value)
}
}

function RellenarArreglo(TamañoArray){

    let ArregloNumeroAleatorio = []

    for (let i = 0; i<TamañoArray; i++){

        ArregloNumeroAleatorio[i]= Math.floor((Math.random()*(10-1))+1);

    }
    MostrarValores(ArregloNumeroAleatorio)
    
}



function MostrarValores(ArregloLLeno){
    
    let listGroup = document.getElementById('lista')
    let PritnZn = document.getElementById('PrintZone')
    let sumaArray = 0

    for (let i = 0; i<ArregloLLeno.lenth; i++){
        const li = document.createElement('li')
        li.setAttribute("class", "list-group-item")
        li.innerText = ArregloLLeno
        listGroup.appendChild(li)

        sumaArray += ArregloLLeno[i]
    }

    PritnZn.innerText = sumaArray
}