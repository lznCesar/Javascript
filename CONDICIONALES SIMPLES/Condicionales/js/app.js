const button = document.getElementById('btnComparar');

button.addEventListener('click', compararNumeros);

function compararNumeros(){
    
    let Numero1= Number(document.getElementById('inpNumero1').value);
    let Numero2= Number(document.getElementById('inpNumero2').value);

    const PrintAlert = document.getElementById('PrintAlert');
   

    if(Numero1>Numero2){
        console.log('Numero A es mayor');
        PrintAlert.innerText = "El Numero Mayor es:" + Numero1
    }else{
        console.log('Numero B es mayor');  
        PrintAlert.innerText = "El Numero Mayor es:" + Numero2
    }

}