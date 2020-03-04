// 9. Dado un numero positivo, imprima el número, igual o menor al de la serie FIBONACCI.
function EventListener (){
    const button = document.getElementById('btnInit')
    button.addEventListener('click', Serie)

}

EventListener()

function Serie(){

    const ListGrup = document.getElementById('lista-unlam');
    let NumX = 0;
    let NumY = 1;
    //let NumerodePosiciones = Number(prompt('Numero de posiciones de la serie'))
    const Print = document.getElementById('ZonePrint')
    let NumeroPositivo = Number(prompt('ingrese Numero'))

    let continuar = true;

    let Resultado=0;
    while (continuar){
         Resultado = NumX + NumY;
        NumX = NumY 
        NumY = Resultado


        
        if(Resultado>=NumeroPositivo){
            
            
            break;
        }
        console.log(Resultado)
        //console.log(Resultado)
        Print.innerHTML=`<br> el numero agregado es: ${NumeroPositivo} el numero menor o igual dentro de la serie FIBONACCI es: ${Resultado}</br>`
    } 
    



}