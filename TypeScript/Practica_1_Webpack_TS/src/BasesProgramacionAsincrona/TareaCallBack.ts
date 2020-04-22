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

// Esta seccion para el primer button

// const BtnDatosAlumno: HTMLElement = document.getElementById("BtnOtorgaDatos")!;
// BtnDatosAlumno.addEventListener("click", DatosAlumno);

// let GetAlumno = (nombre: string, callback: Function) => {
//   return new Promise((resolve, reject) => {
//     let alumno = Alumnos.find((alumno) => alumno.Nombre === nombre);

//     if (!alumno) {
//       reject(callback(`No se encuentra alumno ${alumno}`));
//     } else {
//       resolve(callback(null, alumno));
//     }
//   });
// };

// let GetCarrera = (alumno: Alumnos, callback: Function) => {
//   let carrera = Carreras.find(
//     (carrera) => carrera.idCarrera === alumno.idCarrera
//   );

//   if (!carrera) {
//     callback(`Carrera no existe`);
//   } else {
//     callback(null, carrera.carrera);
//   }
// };

// function DatosAlumno() {
//   let InputNombrealumno: HTMLInputElement = <HTMLInputElement>(
//     document.getElementById("DatosAlumno")
//   );
//   const NombreAlumno: string = InputNombrealumno.value;
//   GetAlumno(NombreAlumno, (err: null | string, alumno: Alumnos) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     GetCarrera(alumno, (err: null | string, resp: string) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(
//         `El alumno ${NombreAlumno} con id ${alumno.id} cursa ${resp}`
//       );
//     });
//   });
// }

/**************************************
seccion para realizar las activadiades Async-await
*************************************/

const BtnDatosAlumno: HTMLElement = document.getElementById("BtnOtorgaDatos")!;
BtnDatosAlumno.addEventListener("click", DatosAlumno);


let GetAlumno = async (nombre: string, callback: Function) => 
  {
    let alumno = Alumnos.find((alumno) => alumno.Nombre === nombre);

    if (!alumno) {
      throw new Error (callback(`No se encuentra alumno ${alumno}`));
    } else {
      return (callback(null, alumno));
    }
  };

  let GetCarrera = (alumno: Alumnos, callback: Function) => {
    let carrera = Carreras.find(
      (carrera) => carrera.idCarrera === alumno.idCarrera
    );
  
    if (!carrera) {
      callback(`Carrera no existe`);
    } else {
      callback(null, carrera.carrera);
    }
  };

  function DatosAlumno() {
    let InputNombrealumno: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("DatosAlumno")
    );
    const NombreAlumno: string = InputNombrealumno.value;
    GetAlumno(NombreAlumno, (err: null | string, alumno: Alumnos) => {
      if (err) {
        console.log(err);
        return;
      }
      GetCarrera(alumno, (err: null | string, resp: string) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(
          `El alumno ${NombreAlumno} con id ${alumno.id} cursa ${resp}`
        );
      });
    });
  }