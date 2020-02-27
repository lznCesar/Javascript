function eventListnener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApplication);
}

eventListnener()

function initApplication(){

    let Acumulador = 0;

    const listgrup = document.getElementById('listaAhorro');

    for (let i = 1; i <=12; i++ ){
    let Saving = Number(prompt(`Cual es tu ahorro del mes? ${i}`));

    Acumulador += Saving

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El dinero ahorrado en el mes ${i} es: ${Acumulador}`;

        listgrup.appendChild(li);
    }

    const li = document.createElement ('li');
    li.setAttribute('class', 'list-group-item bg-danger');
    li.innerText = `El dinero ahorra en el año es ${Acumulador}`;

    listgrup.appendChild(li);


}