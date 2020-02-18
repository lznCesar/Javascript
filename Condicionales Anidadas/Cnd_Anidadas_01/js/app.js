const button = document.getElementById('btnNumero');
button.addEventListener('click',CompararNumeros);

function CompararNumeros(){
    const Number1 = Number(document.getElementById('N1').value);
    const Number2 = Number(document.getElementById('N2').value);
    const Number3 = Number(document.getElementById('N3').value);

    const printnumber = document.getElementById('printnumber');


    if (Number1 > Number2){
        if(Number1 > Number3){
            printnumber.innerText = Number1;
        }else
        printnumber.innerText = Number3;
    }else if (numero2> Number3){
        printnumber.innerText = Number2;
    }else{
        printnumber.innerText = Number3;
    }
}