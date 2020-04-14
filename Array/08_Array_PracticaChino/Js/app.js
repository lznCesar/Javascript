
// opcion: E;iminar la ultima posicion del array

// Opcion 3: agregar un elemento a la primera posiicion del array
// Opcion 4: Eliminar un elemento en la primera posicion del array
// opcion 5: Encontrar todos los elementos con valor 10 y regresar en un array su posicion 
// Opcion 6 Ordenar un array

// Opcion 7: mostrar el mismo array pero invertido
//el metodo que nos ayuda es el reverse

// Opcion 8: cambiar todos los 5 por la palabra "cinco"

EventListener()

let array = []
let outArray = []
function EventListener(){

    document.getElementById('Size').addEventListener('keypress', getSize)
    document.addEventListener('click',validarClick)
}

function getSize(e){

    if (e.key != "Enter")return
    if (e.target.value == "")return
    if (isNaN(e.target.value))return
    if (e.target.value <= 0)return

    CreateArray (e.target.value)
    e.target.value = ""

}

function CreateArray (Size){

    array =[]

    for (let i = 0; i < Size; i++){

        array.push(Math.floor(Math.random()*(11 - 1)+ 1))
    }
    console.log(array);
}.

function validarClick(e){
 
    // key es el valor a evaluar 
    switch (e.target.id){
        case 'op1':
            for ( let i = 0; i < array.length; i++){
                if ((i + 1) % 2 == 0){
    
                   outArray.push(0) 
                }else {
                    outArray.push(array[i])}
                }console.log(outArray);
                break

                case 'op2':
                    // el .pop nos elimina la ultima posicion  
                    array.pop()
                    console.log(array);
                    break;
                default:
                    return
                    break;

            
        case 'op3':
        let random = Math.floor(Math.random()* (11-1)+1)
        // .unshift agrega un elemento en la primera posicion del array
        array.unshift(random)
        console.log(array)
        break;
        
        case 'op4':
        array.shift()
        console.log(array);
        break

        case 'op5':
            let indices = []
            // indexOf()regresa una posicion, en caso que no exista el valor buscado regresa un -1
            let index = array.indexOf(10)
            while(index != -1){
                indices.push(index)
                index = array.indexOf(10,index+1)
            }console.log(indices);
            break
            
            case 'op6':
                // .sort() nos ayuda a acomdar los elementos dentro del array de esta forma (numeros) - (mayusculas)- (minusculas)
                console.log(array.sort());

            case 'op7':
                console.log(array.reverse());
                break
                
            case 'op8':
            for (let i = 0; i <array.length; i++){
                if (array[i] == 5 )
                    // .splice va a encontrar la posicion que tenga el valor buscado (5), elimina una posicion y agregas lo que quieres cambiar 
                    // si no agregamos el tercer elemento al splice solamente va a eliminar 
                    array.splice(i,1,'cinco')    
                }
                console.log(array);
            }
                
    }
    


