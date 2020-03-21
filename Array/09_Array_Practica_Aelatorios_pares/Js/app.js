EventListener()
let arrayAleatorio = []
const List = document.getElementById('List')

function EventListener(){

    document.getElementById('TamañoArray').addEventListener('keypress', InitApp)

}

// Function to init the app and value validation 
function InitApp(e){

    if(e.key != "Enter")return
    if(e.target.value == "")return
    if(e.target.value <= 0)return
    if(isNaN(e.target.value))return
    
    FillArrayAleatorio(e.target.value)
    e.target.value = ""
}

// funcion para llenar un arreglo con numeros Aleatorios
function FillArrayAleatorio(SizeArray){

    for(let i = 0; i < SizeArray; i++){

        arrayAleatorio[i] = Math.floor((Math.random()*(1000 - 1))+1)
        
    }
    const li = document.createElement('li')
    li.setAttribute('class','list-group-item')
    li.innerText = `Arreglo aleatorio: ${arrayAleatorio}`
    List.appendChild(li)

    ArrayPairs(arrayAleatorio)
}

// funcion para sacar los numeros pares del array aleatorio

function ArrayPairs(arrayAleatorio){
    let arrayPares = []
    for(let j= 0; j < arrayAleatorio[j]; j++){

        if (arrayAleatorio[j] % 2 == 0){
            
            arrayPares.push(arrayAleatorio[j])
        }
    }
    const li = document.createElement('li')
    li.setAttribute('class','list-group-item')
    li.innerText = `Arreglo con los numeros pares es: ${arrayPares}`
    List.appendChild(li)   
}
