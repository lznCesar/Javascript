import {Triangulo} from './Triangulo.class'

EventListener()

function EventListener(){

    document.getElementById('btnCalcular')!.addEventListener('click',CalcularArea)
}

function CalcularArea(){

    const Altura:number = Number((<HTMLInputElement> document.getElementById('Altura')).value)
    const base:number= Number((<HTMLInputElement> document.getElementById('Base')).value)
    const triangulo = new Triangulo(base, Altura)

    console.log(triangulo.area);
    
}