import { Alumnos } from "./../TemasBase/Interfaces";
import { Carreras } from "./../TemasBase/Interfaces";
import { CentroEstudios } from "./../TemasBase/Interfaces";

let Alumnos: Array<Alumnos> = [
  {
    id: 1,
    Nombre: "Alicia Villareal",
    idCarrera: 3,
  },
  {
    id: 2,
    Nombre: "Blanca Díaz",
    idCarrera: 2,
  },
  {
    id: 3,
    Nombre: "Daniel Palacios",
    idCarrera: 4,
  },
  {
    id: 4,
    Nombre: "Victor Lemus",
    idCarrera: 1,
  },
  {
    id: 5,
    Nombre: "Karen Sanchez",
    idCarrera: 5,
  },
];

let Carreras: Array<Carreras> = [
  {
    idCarrera: 1,
    carrera: "Mercadotecnia",
    idCentroEstudios: 1,
  },
  {
    idCarrera: 2,
    carrera: "Historia",
    idCentroEstudios: 3,
  },
  {
    idCarrera: 3,
    carrera: "Nutricion",
    idCentroEstudios: 2,
  },
  {
    idCarrera: 4,
    carrera: "Tics",
    idCentroEstudios: 1,
  },
];

let CentroEstudios: Array<CentroEstudios> = [
  {
    id: 1,
    Nombre: "Ciencias y tecnologias",
  },
  {
    id: 2,
    Nombre: "Salud",
  },
];

const BtnDatosAlumno: HTMLElement = document.getElementById("BtnOtorgaDatos")!;
BtnDatosAlumno.addEventListener("click", DatosAlumno);



function OtorgarDatosAlumnos(Alumnos:Alumnos,callback:Function) {
  
    
}

function DatosAlumno() {
  let InputNombrealumno: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("DatosAlumno")
  );
  const NombreAlumno: string = InputNombrealumno.value;
  const NombreSolas: any = Alumnos.forEach(alumno => alumno.Nombre)
  console.log(NombreSolas);
  
  let ArrayNombre:Array <string> = []
  ArrayNombre.push(NombreSolas)
  console.log(ArrayNombre);
  
  if( NombreAlumno == NombreSolas) console.log('entro')
  else console.log('no entro');
  ;
  
  
  console.log(NombreAlumno);
}

// Alumnos.map(alumno => console.log(alumno))