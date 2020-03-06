//Desarrolle una solución que lea un numero M, obtenga y cuente todos los números primos menores a M.

function Eventlistener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', numerosprimos)

}

Eventlistener()

function numerosprimos(){

    let esPrimo = true
    
    let NumIngresado = Number(prompt('ingrese Numero'));
    
    for (let i = 0; i <= NumIngresado; i++){

        esPrimo=true;

        for (let y = 2; y < i; y++){

            if ( i % y == 0){
                esPrimo=false
                 break 
                }

        } 
        if(esPrimo==true){
            console.log(i)    

        }
    }
        
    
}