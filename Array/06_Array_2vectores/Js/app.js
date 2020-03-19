let Lista = document.getElementById('PrintZn')
let ArrayA = []
let ArrayB = []
let ArrayC = []

EventListener ()
function EventListener (){

    document.getElementById('tamañoArray').addEventListener('keypress', InitApp)
    document.getElementById('OpcionC').addEventListener('keypress',OpcionC)
}

function InitApp (event){

    if (event.key != "Enter")return
    if (event.key == "")return
    if (event.key == 0) return
    if (isNaN(event.target.value))return

    FillArrays(event.target.value)   
}

function OpcionC (event){
    
    if (event.key != "Enter")return
    if (event.key == "")return
    if (!isNaN(event.target.value))return
    if (event.target.value != "a" && event.target.value != 'b' && event.target.value != 'c')return
    
    hacerOperacion(event.target.value)
    
}

function hacerOperacion(opcion){
    console.log(opcion);

//Arreglo A = [1,2,3,4]
//Arreglo B = [5,6,7,8]
//arreglo C = [6,8,10,12]
    if (opcion == "a"){
 
        for (let i = 0; i< ArrayA.length; i++){
            //ArrayC = [6]
            ArrayC.push(ArrayA[i]+ArrayB[i])
        }
        const liA = document.createElement('li')
        liA.setAttribute('class','list-group-item')
        liA.innerText = `el Resultado de la suma de los arreglos A + B:  ${ArrayC},`
        Lista.appendChild(liA)
    }

    if (opcion == "b"){

        for ( let i = 0; i<ArrayA.length; + i++){

            ArrayC.push(ArrayB[i]-ArrayA[i])
        }
        const liB = document.createElement('li')
        liB.setAttribute('class','list-group-item')
        liB.innerText = `el Resultado de la resta de los arreglos B - A es de:  ${ArrayC},`
        Lista.appendChild(liB)
      console.log(ArrayC);
    }
    
  if (opcion == "c"){
      for (let i = 0; i < ArrayA.length; i++){
          ArrayC.push(ArrayB[i]*ArrayA[i])
      }
      const liC = document.createElement('li')
        liC.setAttribute('class','list-group-item')
        liC.innerText = `el Resultado de la multiplicación de los arreglos B * A es de:  ${ArrayC},`
        Lista.appendChild(liC)
      
  }
  
}

function FillArrays(TamañoArrayA){

    
    for (let i = 0; i < TamañoArrayA; i++){

        let NumAleatoriosA = Math.floor(Math.random() * (100 - (-100)) + (-100))
    
        ArrayA.push(NumAleatoriosA)
        
    }
    console.log(ArrayA);
    const li = document.createElement('li')
    li.setAttribute('class','list-group-item')
    li.innerText = `Los numeros Aleatorios del Array A son:  ${ArrayA},`
    Lista.appendChild(li)
    

    

for (let j = 0; j < TamañoArrayA; j++){
        
    let NumAleatoriosB = Math.floor(Math.random() * (100 - (-100)) + (-100))
    ArrayB.push(NumAleatoriosB)
    
}

const li2 = document.createElement('li')
li2.setAttribute('class','list-group-item')
li2.innerText = `Los numeros Aleatorios del Array B son: ${ArrayB}, `
Lista.appendChild(li2)
}


