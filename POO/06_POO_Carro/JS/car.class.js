class Carro {
    posicionX = 0
    posicionY = 0

    constructor (posicionX, posicionY){
    this.posicionX = posicionX
    this.posicionY = posicionY
    }

    MoverCarro(direccion, Imagen, PosicionCaquitas){

        switch(direccion){
            case 'ArrowUp':
                if(this.posicionY<=0)return
                Image.src = './../ASSSETS/Carro.norte.jpeg'
                Imagen.style.top = `${this.posicionY--}%`
                break

                case 'ArrowLeft':
                    if(this.posicionX<=0)return
                    Imagen.src = './../ASSSETS/carro.izquierda.jpeg'
                    Imagen.syle.left = `${this.posicionX--}%`
                    break      

                case 'ArrowRight':
                    if( this.posicionX>=94)return
                    Imagen.src = './../ASSSETS/carro.derecha.jpeg'
                    Imagen.syle.left = `${this.posicionX++}%`
                    break        
                            
                case 'ArrowDown':
                    if(this.posicionY >=90)return
                    Imagen.src = './../ASSSETS/carro_derecha.jpeg'
                    Imagen.style.top = `${this.posicionY--}%`
                    break                
        }
    }
    
    VerificarColision (PosicionCaquitas = []){

        for (let i = 0; i < PosicionCaquitas.length; i++){
            if (
            this.posicionX >= Math.floor(PosicionCaquitas[i].styleLeft +33/10) && 
                this.posicionX <= Math.floor(PosicionCaquitas[i].styleLeftMax/10) &&

                this.posicionY >= Math.floor(PosicionCaquitas[i].StyleTop/10) &&
                this.posicionY <= Math.floor(PosicionCaquitas[i].StyleTopMax/10)
            )
            
        }
        
    }
}