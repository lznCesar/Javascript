function EventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', GeneraTotales)
    
}
EventListener()

function GeneraTotales(){    
    const sueldo = Number(prompt('ingrese Sueldo Mensual'))

    let año1 = 0;
    let año2 = 0;
    let año3 = 0;
    let año4 = 0;
    let año5 = 0;
    let año6 = 0;

    for (let mes = 1; mes <= 72; mes++){

        let segundo = ((sueldo * 10) / 100) + sueldo;
        let tercero = ((segundo * 10) / 100) + segundo;
        let cuarto = ((tercero * 10) / 100) + tercero
        let quinto = ((cuarto * 10) / 100) + cuarto
        let sexto = ((quinto * 10) / 100) + quinto
    

            if(mes >= 1 && mes <=12){
            año1 += sueldo
            // console.log(año1)
            
            // if para el segundo año
        } 
        else if(mes >12 && mes <=24){
            año2 += segundo   
        } 
        // if para el tercer año
        else if (mes > 24 && mes <=36){
            año3 += tercero
            
        }
        // if para el cuarto año
        else if (mes > 36 && mes <=48){
            año4 += cuarto
        }
        // if para el quinto año 
        else if( mes > 48 && mes <= 60){
            año5 += quinto
        }
        //  if para el sexto año 
        else if(mes >60 && mes <= 72){
            año6 += sexto
        }
    }
    let salariototal = año1 + año2+ año3+ año4+ año5+ año6

    const p1 = document.getElementById('ZonePrint1')
    p1.innerText = `el total anual del año 1 es de: $ ${año1}`

    const p2 = document.getElementById('ZonePrint2')
    p2.innerText = `el total anual del año 2 es de: $ ${año2}`
    const p3 = document.getElementById('ZonePrint3')
    p3.innerText = `el total anual del año 3 es de: $ ${año3}`

    const p4 = document.getElementById('ZonePrint4')
    p4.innerText = `el total anual del año 4 es de: $ ${año4}`

    const p5 = document.getElementById('ZonePrint5')
    p5.innerText = `el total anual del año 5 es de: $ ${año5}`

    const p6 = document.getElementById('ZonePrint6')
    p6.innerText = `el total anual del año 6 es de: $ ${año6}`
    
    const p7 = document.getElementById('ZonePrint7')
    p7.innerText = `el total de los ingresos por los 6 años laborando es de: $ ${salariototal}`



    console.log(año1)
    console.log(año2)
    console.log(año3)
    console.log(año4)
    console.log(año5)
    console.log(año6)
    console.log(salariototal);
    
    
    
}