//Desarrolle una solución para calcular e imprimir los números perfectos menores a N. Se dice que un número es perfecto si:
// a. “La suma de sus divisores excepto el mismo es igual al propio número”
function Evenlistener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', NumeroPrimo)
}

Evenlistener()

function NumeroPrimo(){

    
    const Ingresado = Number(prompt('Ingrese número entero positivo'));
    
    for (let i = 2; i < Ingresado; i++){
        let suma = 0;

        for (let j =1; j < i; j++){
            
            if (i % j == 0){
    
                suma = suma+j
                
            }
        }
        if(suma==i){
              
            const imprimir = document.getElementById('ZonePrint')
            imprimir.innerText += `${i}- `
        }
    }
    
}