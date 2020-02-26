/* la siguiente forma de realizar el pseudocodigo es correcto pero no es ideal */

//     let acumulador = 0; 

// for (let Valorinicial=1;Valorinicial<=3; Valorinicial++){

//     let NumeroIngresado = Number(prompt('Ingrese el numero'));
//     acumulador = acumulador + NumeroIngresado;
   
//     console.log(acumulador);
// }

// const Zonaimprimir = document.getElementById('output');

// Zonaimprimir.innerText = acumulador;
function crearDom(){
    const output = document.getElementById('output');
    for(let x = 1; x<=5; x++){
        // realizamos el div 
        const div = document.createElement('div')
        div.classList.add('form-group');
        /*Creamos label */
        const label = document.createElement('label');
        label.innerText = `Ingresa el numero: ${x}`
        /* cramos inpunt*/
        const input = document.createElement('input');
        
        input.setAttribute('type','number');
        input.setAttribute('class','form-control');
        input.setAttribute('id',`inpNumero${x}`);
        
        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
    }
    
    const button = document.createElement('button');
    button.innerText= 'Calcular Suma';
    button.setAttribute('id', 'btnCalcularSuma');
    button.setAttribute('class', 'btn btn-outline-success btn-block')
    
    output.appendChild(button);
    EventListener()
}

let button = '';
function EventListener(){

    button = document.getElementById('btnCalcularSuma');
    button.addEventListener('click', suma);
    
}

function suma(){
    let acumulador=0;
    for (let i=1; i<=5; i++){
        let numero = Number(document.getElementById(`inpNumero${i}`).value);

        acumulador= acumulador + numero
    }
    console.log(acumulador)
}
crearDom()