import {Persona} from './../TemasBase/Interfaces'
const Arreglo4:Array<number> = [1,2,3,4,5,6,7,8,9]

Arreglo4.forEach(function(elemento){
   // console.log(elemento);
})

/**************************************
Explicacion Basica Callback
*************************************/

function Primerfuncion(segundaFuncion:Function){
alert('Primero ejecuto primerFuncion y despues segundaFuncion')
segundaFuncion()
}

function Segundafunction(){
alert ('Hola se ejecuto la segunda función')
}
// Primerfuncion(Segundafunction)

/*******************Ejercicio Callback*******************

*************************************/

function userName(SaludarUserName:Function){
    let name = prompt('Ingrese su nombre')
    SaludarUserName(name)
}

function SaludarUserName(nombre:string){
    alert (`Hola ${nombre}`)
}

// userName(SaludarUserName)


/**************************************
tercer ejercicio
*************************************/

function suma(a:number,b:number, callback:Function){
    let res = a+b
    callback(res)
}
function MostrarResultado(res:number){
    res>10? alert('Pasaste la Materia') : alert ('Reprobaste la materia')
}

//suma(7,10, MostrarResultado)

/**************************************
USO INTERMEDIO CALLBACKS
*************************************/

let Personas: Array <Persona> = [
    {
    id: 1,
    nombre: 'Cesar',
    apellido: 'Lozano',
    edad: 27,
    sexo: 'M'
    },
    {
        id: 2,
        nombre: 'Manuel',
        apellido: 'Lizalde',
        edad: 27,
        sexo: 'M'
    },
    {
        id: 3,
        nombre: 'Daniela',
        apellido: 'Estrada',
        edad: 26,
        sexo: 'F'
    },
    {
        id: 4,
        nombre: 'Laura',
        apellido: 'Ruvalcaba',
        edad: 25,
        sexo: 'F'
    },
    { id: 5,
        nombre: 'Maria',
        apellido: 'Fernada',
        edad: 22,
        sexo: 'F'},
]

const button = document.querySelector('#BtnEjecutar')
button?.addEventListener('click', EliminarUsuario)

function EliminarUsuario(){

}

function mostraUsuarioTabla(){

    const tbody = document.querySelector('#tbody')
    Personas.forEach((persona)=>{
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad}</td>
        `
        tbody?.appendChild(tr)
    })
}

mostraUsuarioTabla()