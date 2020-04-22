import { Persona, Salario } from "./../TemasBase/Interfaces";

const GetNombre = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Cesar Emmanuel");
    } else {
      reject(new Error("No hay usuarios"));
      // este método nos ayudara a que este mensaje entre
    }
  });
};

// la palabra reservada async provoca que una funcion que no retorna nada
// cuando se resulve correctamente a diferencia de una promesa normal es
// el return a diferencia de resolve

async function saludos() {
  console.log("ejecutando Funcion Async");
  let nombreRespuesta: string | undefined = undefined;

  // GetNombre().then((nombre:string)=> {
  //     nombreRespuesta = nombre;
  //     console.log('Apenas me resolvi');

  // })

  // el await lo utilizamos para realizar un tanto asincrono y la parte
  // con el await hasta que se realize continuara con el programa
  // el await solo se puede usar dentro de una funcion async y solo espera
  // una promesa
  nombreRespuesta = await GetNombre();

  // prueba()

  if (nombreRespuesta == undefined) {
    // para retornar los errores utilizando la palabra async es
    // atraves de la siguiente sintaxis
    throw Error("Nombre del usuario con valor indefinido");
  }

  return `Hola usuario: ${nombreRespuesta}`;
}

// function prueba() {
//     let suma = 2 +2
//     console.log(suma)
// }

// saludos()
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error: Error) => {
//     alert(error.message);
//   });

/*******************PRACTICA*******************

*************************************/
let Personas: Array<Persona> = [
  {
    id: 1,
    nombre: "Cesar",
    apellido: "Lozano",
    edad: 27,
    sexo: "M",
  },
  {
    id: 2,
    nombre: "Manuel",
    apellido: "Lizalde",
    edad: 27,
    sexo: "M",
  },
  {
    id: 3,
    nombre: "Daniela",
    apellido: "Estrada",
    edad: 26,
    sexo: "F",
  },
  {
    id: 4,
    nombre: "Laura",
    apellido: "Ruvalcaba",
    edad: 25,
    sexo: "F",
  },
  { id: 5, nombre: "Maria", apellido: "Fernada", edad: 22, sexo: "F" },
];

let Salario: Array<Salario> = [
  {
    id: 1,
    salario: 5000,
  },
  {
    id: 2,
    salario: 10000,
  },
  {
    id: 3,
    salario: 2000,
  },
  {
    id: 4,
    salario: 4000,
  },
];

const GetEmpleado = async (id: number) => {
  const Empleado = Personas.find((persona) => persona.id === id);

  if (!Empleado) {
    throw new Error(`Empleado con id: ${id}, no existe en la base de datos`);
  } else {
    return Empleado;
  }
};

const GetSalario = async (Empleado: Persona) => {
  const SalarioEmpleado = Salario.find((salario) => salario.id === Empleado.id);
  if(!SalarioEmpleado){
      throw new Error (`El empleado con id: ${Empleado.id}, no cuenta con un salario registrado`)
  }else {
      return{
          nombre: Empleado.nombre,
          salario: SalarioEmpleado.salario
      }
  }
};

const GetInformacion = async (id: number) => {
  const Empleado = await GetEmpleado(id);
  console.log(Empleado);
  const response = await GetSalario(Empleado)

  return `El empleado ${response.nombre}, gana un salario de 
  $${response.salario}`
};

GetInformacion(5)
  .then((mensaje:string)=> console.info(mensaje))
  .catch((err: Error) => console.log(err.message));
