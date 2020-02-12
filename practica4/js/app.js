let radio;

const constantePi = 3.1416;
let resultado;

let button = document.getElementById("btnCalcular");
button.addEventListener("click", AreaCirculo);

function AreaCirculo() {
  radio = Number(document.getElementById("InpRadio").value);

  //resultado = constantePi * (radio * radio)

  let radioelevado = Math.pow(radio, 2);

  resultado = radioelevado * Math.PI;
  console.log(resultado)
  let imprimir = document.getElementById('imprimirResultado')

  imprimir.innerText=resultado
}
