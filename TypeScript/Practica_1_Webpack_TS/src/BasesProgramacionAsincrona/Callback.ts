import { Persona } from "./../TemasBase/Interfaces";
const Arreglo4: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Arreglo4.forEach(function (elemento) {
  // console.log(elemento);
});

/**************************************
Explicacion Basica Callback
*************************************/

function Primerfuncion(segundaFuncion: Function) {
  alert("Primero ejecuto primerFuncion y despues segundaFuncion");
  segundaFuncion();
}

function Segundafunction() {
  alert("Hola se ejecuto la segunda función");
}
// Primerfuncion(Segundafunction)

/*******************Ejercicio Callback*******************

*************************************/

function userName(SaludarUserName: Function) {
  let name = prompt("Ingrese su nombre");
  SaludarUserName(name);
}

function SaludarUserName(nombre: string) {
  alert(`Hola ${nombre}`);
}

// userName(SaludarUserName)

/**************************************
tercer ejercicio
*************************************/

function suma(a: number, b: number, callback: Function) {
  let res = a + b;
  callback(res);
}
function MostrarResultado(res: number) {
  res > 10 ? alert("Pasaste la Materia") : alert("Reprobaste la materia");
}

//suma(7,10, MostrarResultado)

/**************************************
USO INTERMEDIO CALLBACKS
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

//
function EliminarUsuario(Nombre: string, callback: Function) {
  let longitudinicial = Personas.length;
  Personas = Personas.filter(
    (personas) => personas.nombre.toLowerCase() != Nombre
  );
  if (longitudinicial == Personas.length) {
    callback(true, Nombre);
  } else {
    callback(null, Nombre);
  }
}

function mostraUsuarioTabla(err: boolean | null, respuesta: boolean) {
  if (err) {
    console.error(`El usuario con nombre ${respuesta}`);
  }
  const tbody = document.querySelector("#tbody");
  Personas.forEach((persona) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad}</td>
        `;
    tbody?.appendChild(tr);
  });
}
EliminarUsuario(`ricardo`, mostraUsuarioTabla);

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

let GetEmpleado = (id: number, callback: Function) => {
  let empleadoDB = Personas.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    callback(`no existe empleado con ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};
let getsalario = (empleado: Persona, callback: Function) => {
  let salarioDB = Salario.find((salario) => salario.id === empleado.id);

  if (!salarioDB) {
    callback(`no se encontro un salario para usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
    });
  }
};

// Invocacion de funciones
GetEmpleado(3, (err: null | string, empleado: Persona) => {
  if (err) {
    return console.error(err);
  }
  getsalario(empleado, (err: null | string, resp: any) => {
    if (err) {
      console.log(err);
        return;
    }
    console.info(`el salario de ${resp.nombre} es de ${resp.salario}`)
  });
});
