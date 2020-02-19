const button = document.getElementById('btncalcular');
button.addEventListener('click', MuestraalMayor);

function MuestraalMayor (){

    const Edad1 = Number(document.getElementById('EdadUsuario1').value);
    const Edad2 = Number(document.getElementById('EdadUsuario2').value);

    const PrintAlert = document.getElementById('printquienesmayor');

    const Nombre1 = document.getElementById('NombreUsuario1').value;
    const Nombre2 = document.getElementById('NombreUsuario2').value;
    
    if (Edad1 > Edad2){

        PrintAlert.innerText = Nombre1;

    } else{
        PrintAlert.innerText = Nombre2;
    }
}