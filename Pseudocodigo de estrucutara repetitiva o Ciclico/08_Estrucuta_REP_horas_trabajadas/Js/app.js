function Eventlistener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', HorasTotales);

}

Eventlistener()

function HorasTotales(){
    const PrecioporHora = Number(prompt('Pago por hora'));

    const listdays = document.getElementById('lista-horas');
    let acumulador = 0;
    

    for (let i = 1; i <=6; i++){
        const HorasDiarias = Number(prompt(`Horas trabajadas dîa ${i}`));
        acumulador += HorasDiarias

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El total de horas trabajadas acumuladas hasta en el dia ${i} es de: ${acumulador} `;
        listdays.appendChild(li);
        
    }

    let total = acumulador * PrecioporHora;
    const li = document.createElement ('li');
    li.setAttribute('class', 'list-group-item bg-danger');
    li.innerText = `El dinero que el trabajador recibira es de ${total}`;
    listdays.appendChild(li);


}