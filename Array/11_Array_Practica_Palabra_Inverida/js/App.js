EvenListener ()
let ArrayPalabra = []
const Print1 = document.getElementById('PrintArray1')
const Print2 = document.getElementById('PrintArray2')

// SECCION PARA  AGREGAR LOS ELEMENTOS AL INPUT
function EvenListener(){

    document.getElementById('FillArray').addEventListener('keypress', InitApp)
}
// SECCION PARA INICIAR LA APP Y VALIDAR 
function InitApp(e){

    if (e.key != "Enter")return
    if (e.target.value == "")return
    if (!isNaN(e.target.value))return
    if (e.target.value.charAt(4) == "")return
    FillArray(e.target.value)

}

// SECCION PARA LLENAR ARRAY
function FillArray(PalabraArray){
    
    for(let i = 0; i < PalabraArray.length; i++){
        
        ArrayPalabra.push(PalabraArray[i])
    }
    Print1.innerText = `Array Original: ${ArrayPalabra}`
    Print2.innerText = `Array invertido: ${ArrayPalabra.reverse()}`
    

    
}



