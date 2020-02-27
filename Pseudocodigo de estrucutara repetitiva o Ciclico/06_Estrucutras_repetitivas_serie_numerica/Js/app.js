function Eventlistener(){

    const button = document.getElementById('btnInit');
    button.addEventListener('click', PrintSerie);
}

Eventlistener()

function PrintSerie(){
    console.log('click');
    
    let print = document.getElementById('ZonePrint');

    for (let i = 100; i >= 0; i--){
        print.innerText += ` ${i}, `;
    }
}