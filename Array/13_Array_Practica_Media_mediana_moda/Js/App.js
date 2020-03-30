EventListener()
let Array1 = []
let MediaOperacion, MedianaValor;
const PrintArray = document.getElementById('PrintArray')
const PrintPart1 = document.getElementById('Media')

function EventListener(){

    document.getElementById('SizeArray').addEventListener('keypress',Init)
}

function Init(e){

    if (e.key != 'Enter')return;
    if(e.target.value == "")return
    if(e.target.value == 0)return
    if(e.target.value > 500)return
    if(isNaN(e.target.value))return
    FillArray(e.target.value)
}
 
//SECCION PARA LLENAR ARRAY CON EL NUMERO DE INGRESADO POR INPUT
function FillArray(Size){

for (let i = 0; i < Size; i++){

    Array1.push(Math.floor(Math.random()*(50 - 1)+1))
}
console.log(Array1);
console.log(Array1.sort());
Media(Array1.sort())
Mediana(Array1.sort())
PrintArray.innerHTML =`${Array1.sort()}`
}

//SECCION PARA OBTENER LA MEDIA DEL ARRAY ALEATORIO 
function Media(ArrayAscendente){
    console.log(ArrayAscendente);
    let MediaArray = 0
    for (let i=0; i < ArrayAscendente.length; i++){
        MediaArray += (ArrayAscendente[i])/ArrayAscendente.length
    }
    console.log(MediaArray);  
}

function Mediana(ArrayAscendente){
    for (let i=0; i < ArrayAscendente.length; i++){
        if (ArrayAscendente.length % 2 != 0){
            MediaOperacion = Math.floor((ArrayAscendente.length / 2))
            
            MedianaValor = ArrayAscendente[MediaOperacion]   
        }
        
    }
    console.log(MedianaValor);          
}

