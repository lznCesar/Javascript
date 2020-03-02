function Evenlistener (){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', Encuentro);
}

Evenlistener()


function Encuentro(){

    let Ags = 70;
    let Zax = 150;
    let continuar = true;
    let Print = document.getElementById('ZonePrint');

    while(continuar == true){
        //seria lo mismo que colocar while(continuar)
        Ags ++;
        Zax --;
    
        if (Ags == Zax){
            continuar = false;
            console.log(Ags)
            console.log(Zax)
            Print.innerText = `Ambos conductores se encontran en el km ${Ags}`
            
        }
    }

}
