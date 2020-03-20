EventListener()
const PrintAl = document.getElementById('PrintAlea')
const PrintVoc = document.getElementById('PrintVocales')
let ArrayAleatorias = []
function EventListener(){

    document.getElementById('tamañoArray').addEventListener('keypress', InitApp)
}

// Seccion para iniciar la aplicacion y elegir el tamaño del array con palabras aleatorias
function InitApp(event){
    if (event.key != "Enter")return
    if (event.key == "")return
    if (event.key == 0) return
    if (isNaN(event.target.value))return
    
    FillArrayAlea (event.target.value)
}



// Seccion para crear el primer array con palabras aleatorias
//JS trata a los Strings como arrays
function WordsRandom(){

    let PalabrasRandom = "";
     let letrasRandom = "qazwsxedcrfvtgbyhnujmiklop"
     for ( let j = 0; j < 5; j++){
         PalabrasRandom += letrasRandom.charAt(Math.floor(Math.random()* letrasRandom.length))
        } 
        console.log(PalabrasRandom);
        return(PalabrasRandom)

}

function FillArrayAlea(tamanoArray){

    for (let i = 0; i < tamanoArray; i++){

        ArrayAleatorias.push(WordsRandom())
        
     }
     console.log(ArrayAleatorias);
     ArregloVocal(ArrayAleatorias)

     PrintAl.innerText = `el arreglo de palabras aleatorias es:  ${ArrayAleatorias}`
}


function ArregloVocal(ArrayAleatorias){
    let ArrayVocal = []
    for (let k = 0; k < ArrayAleatorias.length; k++){
        let primerLetra= ArrayAleatorias[k].charAt(0)
        if (primerLetra == 'a' || primerLetra == 'e' || primerLetra == 'i' || primerLetra == 'o' || primerLetra == 'u'){
        ArrayVocal.push(ArrayAleatorias[k])

}
    }
    console.log(ArrayVocal);
    PrintVoc.innerText = `el Arreglo de las palabras que inician con vocal es: ${ArrayVocal}`
    
}