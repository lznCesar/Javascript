const button = document.getElementById("btnTr");
button.addEventListener("click", GeneraDescuento);

function GeneraDescuento() {
  const CostoTraje = Number(document.getElementById("costoTrajes").value);

  if (CostoTraje > 3600) {
    let costoDescuento16 = (CostoTraje * 16) / 100;
    let costoFianl = CostoTraje - costoDescuento16;

    let printZone = `<div class= "alert alert-success mt-3">El Costo final del traje es: $ ${costoFianl} con un descuento de: $ ${costoDescuento16}</div>`;
    PrintZn.innerHTML = printZone;

}else{

    let costoDescuento7 = (CostoTraje * 7) / 100;
    let costoFinal7 = CostoTraje - costoDescuento7;

    let printZone = `<div class= "alert alert-success mt-3">El Costo final del traje es: $ ${costoFinal7} con un descuento de: $ ${costoDescuento7}</div>`;
    PrintZn.innerHTML = printZone;
}
}
