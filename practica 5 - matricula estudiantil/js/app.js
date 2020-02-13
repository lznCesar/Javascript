let matricula;
let calificacion1;
let calificacion2;
let calificacion3;
let calificacion4;
let calificacion5;
let promedio;

let button = document.getElementById("calcpromediogeneral");

button.addEventListener("click",calcpromedio)

function calcpromedio() {
    console.log('click');

  calificacion1 = Number(document.getElementById("calificacion1").value);
  calificacion2 = Number(document.getElementById("calificacion2").value);
  calificacion3 = Number(document.getElementById("calificacion3").value);
  calificacion4 = Number(document.getElementById("calificacion4").value);
  calificacion5 = Number(document.getElementById("calificacion5").value);
  matricula = document.getElementById('matricula').value

  promedio = 
    (calificacion1 +
      calificacion2 +
      calificacion3 +
      calificacion4 +
      calificacion5) /
    5; 
  
    let imprimirresultado = document.getElementById('IMPpromedio')
    IMPpromedio.innerText = "matricula estudiantil:" + matricula + " - Promedio general:"  + promedio

}
