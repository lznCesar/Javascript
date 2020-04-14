class Interfaz {
  MostrarMensaje(mensaje, tipo) {
    console.log(mensaje);
    console.log(tipo);
    
    
    const div = document.createElement("div");

    if (tipo == "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }
    div.innerHTML = `${mensaje}`;

    document
      .querySelector("#cotizar-seguro")
      .insertBefore(div, document.querySelector(".form-group"));
    
      // setTimeout() temporizador que pide un codigo ß
      setTimeout(function(){
          document.querySelector(".mensaje").remove()
      },5000)
    }

    MostrarResultado(seguro,total){
        const Resultado = document.getElementById('resultado')
        let marca = ''

        switch(Seguro.marca){
            case "1":
                marca = 'Americano'
                break
            
            case "2":
            marca = "Asiatico"
            break

            case "3":
            marca = "Europeo"
            break
    }

    const div = document.createElement('div')
    div.innerHTML = `
    
    <p class="header">Cotización:</p>
    <p> Marca:${Marca}<p>
    <p> Año: ${seguro.anio}</p>  
    <p> Tipo: ${seguro.tipo}</p>  
    <p> Total: ${total}</p>  
    `
    
    const Spinner = document.querySelector('#cargando img')
        Spinner.style.display = 'block'

        setTimeout(function(){
            Spinner.style.display = "none"
            Resultado.appendChild(div)
        },5000)
    
}
}
