
/*
las interfaces nos ayuda  a realizar una plantilla a un 
objeto, nos ayuda a tener errores a la forma de elaborarlo
* no se pueden realizar operaciones 

*/

// para exportar este elemento en especifico
export interface Persona{
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    sexo: string,
}


// nombre: 'Cesar Emmanuel',
//     apellido: 'Lozano Rincon',
//     edad: 23,
//     sexo: 'Masculino' 

// interfaces para utilizar en la tarea de call back 

export interface Alumnos{
    id: number,
    Nombre: string,
    idCarrera: number
}

export interface Carreras {

    idCarrera: number,
    carrera: string,
    idCentroEstudios: number,
}

export interface CentroEstudios {
    id: number,
    Nombre: string
}

