let Telaenmetros, Resultado;
const pulgadas = 39.37

let button = document.getElementById('convierte');

 button.addEventListener('click',metrosapulgadas );

function metrosapulgadas(){

    Telaenmetros = Number(document.getElementById('telamts').value);

    Resultado = Telaenmetros * pulgadas;

    let generaConversion = document.getElementById('generaConversion');
    generaConversion.innerText = Resultado;
}