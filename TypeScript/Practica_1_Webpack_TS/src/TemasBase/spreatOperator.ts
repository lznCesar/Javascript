import {Persona} from './Interfaces'
/*   SPREAD ARRAYS
* el spreat opertators son ... 
* los spreat operator solo se pueden utilizar en arreglos 
* se utilia para juntar dos arrays en una sola 

*/
const Arreglo1 = [1,2,3,4,5,6,7]
const Arreglo2 = [8,9,10];
const Arreglo3 = [...Arreglo1,...Arreglo2,11,12,13]


/*******************SPREAD OBJECTS*******************
* en objetos el spread opertor nos ayuda a remplazar una informacion
especifica dentro de un objeto 
*************************************/

/*
las interfaces nos ayuda  a realizar una plantilla a un 
objeto, nos ayuda a tener errores a la forma de elaborarlo
* no se pueden realizar operaciones 

*/

const ObjetoPersona1:Persona = {
    nombre: 'Cesar Emmanuel',
    apellido: 'Lozano',
    edad: 27,
    sexo: 'Masculino',
    estatura: 1.84
}

console.log(ObjetoPersona1.nombre);

const ObjetoPersona2 = {...ObjetoPersona1, edad:666}
console.log(ObjetoPersona2);

function SumaValores(x?:number, y?:number, z?:number){
    let suma = x! + y! + z!
    //console.log(suma);
}
SumaValores(...Arreglo2 )