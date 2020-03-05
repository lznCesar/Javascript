//Supóngase que en una reciente elección hubo cuatro candidatos (con identificadores 1, 2, 3, 4). Calcular el número de votos correspondientes a cada candidato y el porcentaje que obtuvo respecto al total de votantes. El programa finalizara cuando el usuario teclee un 0.

function EventListener() {
  const button = document.getElementById("btnInit");
  button.addEventListener("click", calculodeVotos);
}

EventListener();

function calculodeVotos() {
  let acumuladorvotostotales = 0;
  let acumulador1 = 0;
  let acumulador2 = 0;
  let acumulador3 = 0;
  let acumulador4 = 0;
  const listavotos1 = document.getElementById("listavotos");

  let continuar = true;

  while (continuar) {
    let candidatos = Number(prompt("Ingrese numero del candidato a votar"));
    acumuladorvotostotales++;

    if (candidatos == 1) {
      acumulador1++;
    } else if (candidatos == 2) {
      acumulador2++;
      
    } else if (candidatos == 3) {
      acumulador3++;
    
    } else if (candidatos == 4) {
      acumulador4++;
     
    } else if (candidatos == 0) {
      continuar = false;
    }
  }

  let promedio1 = (acumulador1 * 100) / (acumuladorvotostotales - 1);
  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-group-item mt-2");
  li1.innerText = `el numero de votos del candidato 1 es de: ${acumulador1} y el ${promedio1}% de los votantes `;
  listavotos1.appendChild(li1);

  let promedio2 = (acumulador2 * 100) / (acumuladorvotostotales - 1);
  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-group-item mt-2");
  li2.innerText = `el numero de votos del candidato 1 es de: ${acumulador2} y el ${promedio2}% de los votantes `;
  listavotos1.appendChild(li2);

  let promedio3 = (acumulador3 * 100) / (acumuladorvotostotales - 1);
  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-group-item mt-2");
  li3.innerText = `el numero de votos del candidato 1 es de: ${acumulador3} y el ${promedio3}% de los votantes `;
  listavotos1.appendChild(li3);

  let promedio4 = (acumulador4 * 100) / (acumuladorvotostotales - 1);
  const li4 = document.createElement("li");
  li4.setAttribute("class", "list-group-item mt-2");
  li4.innerText = `el numero de votos del candidato 1 es de: ${acumulador4} y el ${promedio4}% de los votantes `;
  listavotos1.appendChild(li4);


}
