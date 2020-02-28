function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', otorgaPares);
}

EventListener()

function otorgaPares(){
    
    let Print12 = document.getElementById('ZonePrint');
    console.log('click')

    for (let i = 2; i <=100; i ++){
        if (i % 2 == 0){

        Print12.innerHTML += `${i} <br/> `;
        console.log(i)
    }
    }
}