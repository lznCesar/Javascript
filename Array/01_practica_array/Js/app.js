let arreglo = [];
const output = document.getElementById('output')

function EventListener(){
    
    document.getElementById('buttonAceptar').addEventListener('click', ObtenerResultado)
    document.addEventListener('DOMContentLoaded', CargarInpunts)
    document.getElementById('btnReiniciar').addEventListener('click', ReiniciarApp)
    
}

EventListener()

function ReiniciarApp(){
    window.location.reload();
    
}

function CargarInpunts (){


    for (let x =0; x<10; x++){

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-grup')
        
        const LabelFg = document.createElement('label')
        LabelFg.innerText = `Dame el valor de la posición ${x}`

        const InputFC = document.createElement('input')
        InputFC.setAttribute('type', 'number')
        InputFC.setAttribute('placeholder', 'ingrese el valor')
        InputFC.setAttribute('class', 'form-control')
        InputFC.setAttribute('id', `inputValor ${x}`)

        output.appendChild(divFG)
        divFG.appendChild(LabelFg)
        divFG.appendChild(InputFC)
        


        
    }

}

function ObtenerResultado(){

    
    for (let x = 0; x<10; x++){

        const valor = document.getElementById(`inputValor ${x}`).value
        if( valor != ""){
        arreglo[x]= valor;
    }  else { arreglo[x] = `<span class="text-danger`
        
    }
    }

    
    MostrarValores()
}

function MostrarValores(){
    ClearDom()
    const MostrarValoresUl = document.getElementById('MostrarArreglos')

    for(let x=0; x < arreglo.length; x++){

        const li = document.createElement('li')
        li.setAttribute('class', 'list-group-item')
        li.innerHTML = `<p> Index: ${x}</p> <p> Valor: ${arreglo[x]}</p>`

        MostrarValoresUl.appendChild(li)
        
    }
    
}

function ClearDom(){

    while(output.firstChild){
        output.firstChild.remove();
    
}
}
