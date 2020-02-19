const button = document.getElementById('btndescuento');

button.addEventListener('click', DescuentoporCompra);

function DescuentoporCompra(){

    const Compra = Number(document.getElementById('totaldelaventa').value);

    const PrintAlert = document.getElementById('PrintAlert');

    if (Compra > 1000){

        let descuento = (Compra * 20) / 100; 
        PrintAlert.innerText = "Descuento:" + descuento;
    } 
    else{
        PrintAlert.innerText = "No hay Descuento"
    }

}