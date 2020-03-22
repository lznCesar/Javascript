EventListener()
let ArrayPrimos = []
const PrintZn = document.getElementById('PrintZn')

// seccion para agregar eventos 
function EventListener(){
    
    document.addEventListener('click',ValidarClick)
}

//seccion para crear array partiendo del click en button
function ValidarClick(e){
    switch (e.target.id){
        case 'CrearArray':
            for (let i = 0; i< 1000; i++){
        
                let bandera = true
        
                for (let y = 2; y < i; y++){
                    if (i % y == 0){
                        bandera = false
                        break
                    }
                }
                if (bandera){
                    //.push() es para agrehar un elemento a la ultima posicion de un array
                    ArrayPrimos.push(i)
                }
            }
            console.log(ArrayPrimos);
            console.log(ArrayPrimos.reverse());
            let ArrayDes = ArrayPrimos.reverse()
            PrintZn.innerText = `${ArrayPrimos.reverse()}`    
            
        }
}