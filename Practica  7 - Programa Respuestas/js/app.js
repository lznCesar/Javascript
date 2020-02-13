let correctas;
let incorrectas;
let EnBlanco;
let Puntajefinal;

let button = document.getElementById("puntajefinal2");

button.addEventListener("click", obtenpromediofinal);

function obtenpromediofinal() {
  correctas = Number(document.getElementById("idcorrectas").value);
  incorrectas = Number(document.getElementById("idincorrectas").value);
  EnBlanco = Number(document.getElementById("idblanco").value);

  PuntajedeExamenfinal = (correctas * 4) - (incorrectas) + (EnBlanco * 0);

  let imprimirpuntajefinal = document.getElementById("puntajefinal3");
  imprimirpuntajefinal.innerText= PuntajedeExamenfinal;
  
}
