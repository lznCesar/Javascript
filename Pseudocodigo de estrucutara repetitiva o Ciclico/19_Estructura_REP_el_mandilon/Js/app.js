// La cadena de tiendas de autoservicio “El mandilón” cuenta con sucursales en C ciudades diferentes de la República, en cada ciudad cuenta con T tiendas y cada tienda cuenta con N empleados, asimismo, cada una registra lo que vende de manera individual cada empleado, cuánto fue lo que vendió cada tienda, cuánto se vendió en cada ciudad y cuánto recaudó la cadena en un solo día.

function Eventlistener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', TiendaNacional)
}

Eventlistener()

function TiendaNacional(){

    const Ciudades = Number(prompt('ingrese el número de ciudades')) 

    let contCiudades = 0;
    let Totalmandilon = 0
    for (let i = 1; i <= Ciudades; i++){
        const Tiendas = Number(prompt(`Ingrese el numero de tiendas en la Ciudad ${i}`))
        console.log(Tiendas);
    
        
        for (let j = 1; j<= Tiendas; j++){
            const Empleados = Number(prompt(`Ingrese Numero de empleados En la tienda ${j} Ciudad ${i}`))
            console.log(Empleados);
        
            
            
            let conTotales = 0;
        for (let k=1; k<= Empleados; k++){
       const VentasEmpleados = Number(prompt(`total de Ventas Empleado ${k} de la tienda ${j}, Ciudad ${i}`))
       console.log(VentasEmpleados);
     
            for (let l=1; l <= VentasEmpleados; l++){
                let totalventas = Number(prompt(`ingrese total de venta ${l}`))
                console.log(totalventas);
                conTotales += totalventas
                console.log(conTotales);    

                const printSalesEmplo = document.getElementById('ZonePrint1');
                printSalesEmplo.innerHTML = `El total de ventas de empleado es de ${conTotales}`

            }
          
       contCiudades += conTotales
       console.log(contCiudades);
       const printSalesCiudades = document.getElementById('ZonePrint2')
       printSalesCiudades.innerText = `el ingreso total por de la ciudad ${i} es de ${contCiudades} - `
       
        }
    
    }
    Totalmandilon += contCiudades
    console.log(Totalmandilon);
    const pritnTotalCiudad = document.getElementById('ZonePrint3')
    pritnTotalCiudad.innerText = `el ingreso total a nivel nacional es de ${Totalmandilon}`
       

    }

}
