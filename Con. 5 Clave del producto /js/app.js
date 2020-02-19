const button = document.getElementById("btnDetalles");
button.addEventListener("click", DetallesProducto);

function DetallesProducto() {
  const Nombre = document.getElementById("nombreP").value;
  const Clave = document.getElementById("ClaveP").value;
  const Precio = document.getElementById("PrecioP").value;

  const printInfo = document.getElementById("printInfo");

  if (Clave == 01) {
    let descuento = (Precio * 10) / 100;
    let PrecioDescuento = Precio - descuento;
    printInfo.innerText =
      "Nombre del articulo" +
      Nombre +
      "Clave del articulo:" +
      Clave +
      "Precio original:" +
      Precio +
      "Precio Con descuento" +
      PrecioDescuento;
  } else{
      printInfo.innerText =  "Nombre del articulo" +
      Nombre +
      "Clave del articulo:" +
      Clave +
      "Precio original:" +
      Precio;
  } if (Clave == 02){
    let descuento20 = (Precio * 20) / 100;
    let PrecioDescuento20 = Precio - descuento20;
    printInfo.innerText =
      "Nombre del articulo" +
      Nombre +
      "Clave del articulo:" +
      Clave +
      "Precio original:" +
      Precio +
      "Precio Con descuento" +
      PrecioDescuento20;
  }
  }

