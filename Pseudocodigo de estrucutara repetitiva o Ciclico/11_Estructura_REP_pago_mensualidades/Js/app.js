function Eventlistener(){

    const button = document.getElementById('btnInit');
    button.addEventListener('click', Mensualidades);

}
Eventlistener()

function Mensualidades(){

    const listamensualidades = document.getElementById('lista-mesualidades');

    //acumuladormensualidad = 0;

    for (let i = 1; i<=20; i++){
        let progresion = 10 * (Math.pow(2,(i-1)))
        console.log(i)
        console.log(progresion)

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El monto a pagar en la mensualidad ${i} es de $ ${progresion} `;
        listamensualidades.appendChild(li);
    }
        let sumatotal = 10 * ((Math.pow(2,20))-1)/(2-1); 
    console.log(sumatotal)
    const li = document.createElement ('li');
    li.setAttribute('class', 'list-group-item bg-success text-center');
    li.innerText = `El monto total de pago al final de las 20 mensualidades es de: $ ${sumatotal}`;
    listamensualidades.appendChild(li);


}

