function EventListener(){

    const button = document.getElementById('btnInit');
    button.addEventListener('click', Fibonacci)

}

EventListener()

function Fibonacci(){
    const ListGrup = document.getElementById('lista-unlam');
    let NumX = 0;
    let NumY = 1;
    let NumerodePosiciones = Number(prompt('Numero de posiciones de la serie'))
    const Print = document.getElementById('ZonePrint')

    for (let i = 1; i <= NumerodePosiciones; i++){
        let Resultado = NumX + NumY;
        NumX = NumY 
        NumY = Resultado

        //console.log(Resultado)
        console.log(NumX)

        Print.innerHTML += `<br>El index ${i} de la sucesion de Fibonacci es  ${NumX}</br>`

    }



}