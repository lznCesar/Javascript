class ManipularLocalStorage{
    static ArrayThings = []

    static AgregarThisDoLocalStorage (ContendioLista){
        this.ArrayThings = this.ObtenerLocalStorage()
        this.ArrayThings.push(ContendioLista)
        // JSON.stringify ayuda aponer elemntos dentro de un array
        localStorage.setItem('tasks', JSON.stringify(this.ArrayThings))
    }

    static ObtenerLocalStorage(){
        let tareasObtenidasLs = []
        if (localStorage.getItem('tasks')=== null){
            return tareasObtenidasLs
        }
        return JSON.parse(localStorage.getItem('task'))

    }

    static EliminarTweetsLocalStorage(contenido){
    let tareasLs = this.ObtenerLocalStorage()
    let ArrayNewTareasLs = []

    for (let i = 1; i < tareasLs; i++){
        if(contenido != tareasLs[i]){

            ArrayNewTareasLs.push(tareasLs[i])
        }
    }
    localStorage.setItem('tasks', JSON.stringify(ArrayNewTareasLs))
}

}