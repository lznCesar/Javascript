let base;
let altura;
let Resultado;

let button = document.getElementById("btncalcular");

button.addEventListener("click", multiplica);

function multiplica() {
  base = Number(document.getElementById("base").value);
  altura = Number(document.getElementById("altura").value);

  Resultado = (base * altura) / 2;

  let otorgaresultado = document.getElementById("otorgaresultado");
  otorgaresultado.innerText = Resultado;
}
