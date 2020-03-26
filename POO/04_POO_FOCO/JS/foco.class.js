class Foco {

    estado = false


    CambiarEstado(){
        this.estado = !this.estado
        if(this.estado){
            return './../ASSETS/PRENDIDO.jpg'
        }else{
            return './../ASSETS/apagado.jpg'
        }
    }
}