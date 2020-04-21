import { Persona } from "./../TemasBase/Interfaces";
console.log('inicio de archivo de Promises');

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

let Salario: Array<any> = [
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

interface resolveFinal{
    nombre:string,
    salario:number
}
const getEmpleado = (id: number) => {
    console.log(id);
    
  // la siguiente forma es la sintaxis para llamar una promesa dentro de
  // una funcion y esta funcion solamente realice la promesa.
  return new Promise((resolve, reject) => {
    const Empleado = Personas.find((persona) => persona.id == id);
    if (!Empleado) {
        reject(Empleado);
    }
    resolve(Empleado);
});
}

  const getSalario= (Empleado: Persona):Promise<resolveFinal> => {
    return new Promise((resolve, reject) => {
      const SalarioEmpleado = Salario.find(
        (salario) => salario.id == Empleado.id
      );
      if(!SalarioEmpleado){
          reject(`No se encuentra salario para el empleado: ${Empleado.nombre}`)
      }
      resolve({
          nombre: Empleado.nombre,
          salario: SalarioEmpleado.salario
      })
    });
  };

  // resolve y reject son parametros posicionales los cuales forzosamente
  //se deben de llamar asi
  
  getEmpleado(3).then((resolve: any) => {
      console.log("Ejecucion del resolver");
      console.log(resolve);

      getSalario(resolve).then((resolve) =>{
          console.log(`El empleado: ${resolve.nombre} gana un salario de: 
          ${resolve.salario}`);
      })
      .catch((reject:string)=>console.log(reject))
    })
    .catch((reject: string) => {
      console.error("Ejecucion del reject");
      console.error(reject);
    });
  // * Then se ejecuta cuando el resolve se recorre, los paramteros
  // de then mensaje es el mismo mensaje que se encuentra dentro del
  // parametro al de rosolve

