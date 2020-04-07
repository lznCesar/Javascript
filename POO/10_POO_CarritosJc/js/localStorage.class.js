class LocalStorageManipular {

    static AgregarCarritoLocalStorage(InformacionCursos){
        let cursosLs = this.ObtenerCursoLocalStorage()
        cursosLs.push(InformacionCursos)
        localStorage.setItem('cursos', JSON.stringify(cursosLs))
    }

    static ObtenerCursoLocalStorage(){
        if(localStorage.getItem('cursos')==null)return[]
        return JSON.parse(localStorage.getItem('cursos'))
        // JSON.parse regresa todos los datos que se consideraban strigns a objet
    }

    static EliminarCursoLS(idCurso){
        let cursosLs = this.ObtenerCursoLocalStorage()
        let nuevosCursosLS = []

        for (let i = 0; i < cursosLs; i++){
            if(cursosLs[i].id != idCurso){
                nuevosCursosLS.push(cursosLs[i])
            }
        }
        console.log(cursosLs);
        console.log(nuevosCursosLS);
        localStorage.setItem('cursos',JSON.stringify(nuevosCursosLS))
        
    }

    static VaciarCarritoLS(){
        localStorage.clear()
    }

    static VerificarCursoRepetido(idCurso){
        const CursosLs = this.ObtenerCursoLocalStorage()
        for (let i = 0; i<CursosLs.length; i++){
            if(idCurso == CursosLs[i].id){
                return true
            }
        }
        return false
    }
}