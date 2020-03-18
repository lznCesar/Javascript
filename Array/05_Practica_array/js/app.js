EventListener()
let lista = document.getElementById('zonePrint')

let ArregloNumerosPrimosGlobal = []

//Se encarga de llenar ArregloNumerosPrimosGlobal
function fillArrayGlobal(){
    for (let i = 0; i< 1000; i++){
        
        let bandera = true

        for (let y = 2; y < i; y++){
            if (i % y == 0){
                bandera = false
                break
            }
        }
        if (bandera){
            //.push() es para agrehar un elemento a la ultima posicion de un array
            ArregloNumerosPrimosGlobal.push(i)
        }
    }
    
    
}
    function EventListener(){

        document.addEventListener("DOMContentLoaded",fillArrayGlobal)
        document.getElementById('tamañoArray').addEventListener('keypress',InitApp)

    }

    function InitApp(event){
        
        if (event.key != "Enter")return;//la funcion se retorna cada vez que precionamos una tecla diferente a enter
        if (event.target.value == "")return
        if (event.target.value <= 0)return
        if (isNaN(event.target.value))return;
        //cada vez que se cumple una de estas condiciones se retorna la funcion y sigue escuchando al evento keypress 
                
        FillArray(event.target.value)

    }

    function FillArray(tamañoArray){

        //array secundario que se llena a partir del array global de primos
        let ArregloNumerosPrimos = []
        let suma = 0
        
        for ( let i = 0; i< tamañoArray; i++) {

            let NumeroAleatori = Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1
            
            //rregloNumerosPrimos[i] = ArregloNumerosPrimosGlobal[NumeroAleatori]
            
            ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[NumeroAleatori])

            const li = document.createElement('li')
            li.setAttribute('class','list-group-item')
            li.innerText = ArregloNumerosPrimos[i]
            lista.appendChild(li)
            
            suma += ArregloNumerosPrimos[i]
        }

      
    

       const li = document.createElement('li')
       li.setAttribute('class','list-group-item')
       li.innerText = `la suma de los numeros primos aleatorios es: ${suma}`
       lista.appendChild(li)

       obtenerMayor(ArregloNumerosPrimos)
    }

    function obtenerMayor(array){

        mayor = 0
        
        for (let x = 0; x < array.length; x++){
//[3,7,2,11]
            if (array[x] > mayor){
                mayor = array[x]
            }
        }
        
        const li = document.createElement('li')
        li.setAttribute('class','list-group-item')
        li.innerText = `El numero mayor del array es: ${mayor}`
        lista.appendChild(li)
        
    }