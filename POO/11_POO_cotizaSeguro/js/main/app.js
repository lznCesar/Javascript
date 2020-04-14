const anio = document.getElementById("anio");

EventListener();
LlenarSelectAnio();

function EventListener() {
  document
    .querySelector("#cotizar-seguro")
    .addEventListener("submit", CotizarSeguro);
}

function CotizarSeguro(event) {
  event.preventDefault();
  const MarcaSeleccionada = document.getElementById("marca").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const ValueAnio = anio.value;
  const interfaz = new Interfaz();
console.log(ValueAnio)

  if (MarcaSeleccionada == "" || tipo == "" || ValueAnio == "") {
    interfaz.MostrarMensaje(
      "Faltan datos, favor de revisar el formulario",
      "error"
    );
    return
  }
  let resultado = document.querySelector('#resultado div')
  
  if (resultado != null) resultado.remove()

  const seguro = new Seguro(MarcaSeleccionada,ValueAnio,tipo)
  const Total = seguro.CotizarSeguro()
  
  interfaz.MostrarResultado(seguro,Total)
  interfaz.MostrarMensaje('Cotizado...','exito')
  
}

function LlenarSelectAnio() {
  const max = new Date().getFullYear();
  const min = max - 20;

  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;

    anio.appendChild(option);
  }
}
