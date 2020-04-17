import {Persona} from './Interfaces'
/*******************Caracteristicas de los parametros de las funciones*******************
Explicaremos las caracteristicas que tienen los parametros de las funciones

Parametros obligatorios 
parametros opcionales 
parametros default/defecto

Notas:
    1.-el primer parametro no puede ser opcional 
    2.- Siempre los paramtros opcionale deben de escribirse al final
*************************************/

// function suma(x:number, ultimo:number = 10, y?:boolean){

//     let suma = x + ultimo;
//     if(y == undefined) console.log(suma);
// }

// suma(10,20);

/*******************Funcion de flecha*********************/

function ImpresionDatos() {
  console.log("Hello word from standar function");
}

const ArrowFunctionSaludos = (x: number, y: number) => x + y;

/*********************Caracteristicas del funcion de flecha*****************
1.-la caracteristica para poder usar un arrow function le debemos de dar el
valor a una variable
2.- si solo tenemos un return despues no se necesita poner {} ni el return 
*************************************/

//console.log(ArrowFunctionSaludos(10, 20));

ImpresionDatos();

/**************************************
Metodos Array funcion de flecha 
1.- ForEach: es similar hacer un ciclo for, recorre un arreglo y acada valor le aplica una acción y nos arroja la posiciones del array
2.- Map
3.- Find
4.- Filter
5.- Some
*************************************/

let ArregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let personas: Array<Persona> = [
  {
    id:1,
    nombre: "Jose Carlos",
    apellido: 'Gonzalez',
    edad: 23,
    sexo: "Masculino",
  },
  {
    id:1,
    nombre: "Chinese",
    apellido: 'Zepeda',
    edad: 23,
    sexo: "Masculino",
  },
  {
    id:1,
    nombre: "La Daniela",
    apellido: 'Estrada',
    edad:26,
    sexo: "Femenino",
  }
];
let ArregloNuevo: any = [];

ArregloNumerico.forEach((elemento) =>
  elemento % 2 == 0
    ? console.log("par", elemento)
    : console.log("impar", elemento)
);

/*******************Map*******************
Es similar al forEach ya que por cada valor en el arreglo le aplica una 
acción, la diferencia es que Map nos crea un arreglo nuevo y ForEach no
*************************************/

ArregloNuevo = ArregloNumerico.map((elemento) =>
  elemento % 2 == 0 ? "par" : "impar"
);

/*******************Find*******************
* Encuentra 1 valor dentro de un arreglo y nos comparte un valor nuevo 
if (elemento.id == 2){
    return elemento
}
*************************************/

//let persona = personas.find((elemento) => elemento.id == 2);

/*******************Filter*******************
*
* Encuentra varios valores con la misma caracteristica y regresa varios valores
con ellos
*************************************/

let personaMasculinas = personas.filter((persona) => persona.sexo == 'Masculino');
//console.log(personaMasculinas);
let personaFemenina = personas.filter((persona) => persona.sexo == 'Femenino');
//console.log(personaFemenina);

/*******************Some*******************
Encuentra un valor dentro de un arreglo y nos regresa un true/false
* true cuando existe el valor
* false para cuando el valor no existe
*************************************/

//let existe = personas.some((persona)=> persona.id == 2 && persona.nombre == 'Chinese');
//console.log(existe);
