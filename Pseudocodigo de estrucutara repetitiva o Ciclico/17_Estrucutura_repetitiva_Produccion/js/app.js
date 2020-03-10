function Eventlistneer(){
    const button = document.getElementById('btnInit')
    button.addEventListener('click', Industria)
}

Eventlistneer()

function Industria(){

    const NumIndustiras = Number(prompt('Ingrese el número de empresas'))
    const listgrup = document.getElementById('listaclaves')
    
    for (let i = 1; i <= NumIndustiras; i++){
        const Claves = Number(prompt(`Ingrese la clave de la empresa ${i}`))

        console.log(Claves)

         
        let GananciasAnuales = 0;
        let julioGanancias = 0;

        for (let j = 1; j<=12; j++){
            const Ingresomensuales = Number(prompt(`Ingrese el total del mes ${j}`))
            GananciasAnuales += Ingresomensuales

        if (j==7){
            julioGanancias = Ingresomensuales
        }
    }
    
    
    console.log(GananciasAnuales)  
    const li1 = document.createElement('li')
    li1.setAttribute('class', 'list-group-item mt-1 col-6');
    li1.innerText = `el acumulado de la empresa ${i} con clave ${Claves} es de ${GananciasAnuales}`
    listgrup.appendChild(li1)
    console.log(li1)
    
    if (julioGanancias > 3000000){
       // julioGanancias += ` Clave: ${Claves}`
        const li2 = document.createElement('li')
    li2.setAttribute('class', 'list-group-itme mt-1')
    li2.innerText = `el acumulado de julio es de ${julioGanancias} y la clave es ${Claves} `
    listgrup.appendChild(li2)
    }
    } 
}