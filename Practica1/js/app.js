

/*
se declaran las variables que se utilizaran en el codigo*/

let numero1;
let numero2;
let Resultado;


/*
se declara variable de button y se le asigna el botn de calcular */
let button=document.getElementById('btncalcular');

button?.addEventListener('click',suma)

function suma(){

    numero1= Number(document.getElementById('ipnumero1').value)
    numero2= Number(document.getElementById('ipnumero2').value)

   Resultado = numero1 + numero2;

   let imprimirresultado=document.getElementById('imprimirResultado')
   imprimirresultado.innerText=Resultado

    
} 
