const button = document.getElementById("cifras");
button.addEventListener("click", Conteo);

function Conteo() {
  const NumeroRequerido = Number(
    document.getElementById("ingreseNumero").value
  );
  const PrintAlert = document.getElementById("printCifras");

  if (NumeroRequerido > 0 && NumeroRequerido < 10) {
    PrintAlert.innerText = "el valor tiene 1 cifra";
  } else if (NumeroRequerido > 9 && NumeroRequerido < 100) {
    PrintAlert.innerText = "el valor tiene 2 cifra";
  } else if (NumeroRequerido > 99 && NumeroRequerido < 1000) {
    PrintAlert.innerText = "El Valor tiene 3 cifras";
  } else {
    PrintAlert.innerText = "ERROR";
  }
}
