EventListener()


function EventListener(){
    
    document.getElementById('Cadena').addEventListener('keypress',Init)
}

function Init(e){
    
    if (e.key != "Enter")return
    if(e.target.value == "")return
    if(!isNaN(e.target.value))return
    if(e.target.value.charAt(3) == "")return
    Codigo (e.target.value)
    e.target.value = ""
    
}

function Codigo(Palabra){
    let CodigoO = [] 
    let Codigo3 = [] 

    for (let i = 0; i < Palabra.length; i++){
        
        CodigoO.push(Palabra.charCodeAt(i))
        Codigo3.push(Palabra.charCodeAt(i)+3)
    }
    const PrintZn1 = document.getElementById('Print1')
    PrintZn1.innerText =`Codio ASCII original ${CodigoO}`
    const PrintZn2 = document.getElementById('Print2')
    PrintZn2.innerText =`Codio ASCII modificado ${Codigo3}`
}
