class Seguro{
    marca = ''
    anio = ''
    tipo = ""

    constructor(marca,anio,tipo){
        this.marca = marca
        this.anio = anio
        this.tipo = tipo
    }

    CotizarSeguro(){
        // si americano

        let CantidadTotalSeguro = 0
        const Base = 2000

        switch (this.marca){

            case "1":
                CantidadTotalSeguro = Base * 1.15
                break

            case "2":
                CantidadTotalSeguro = Base * 1.05
                break
            
            case "3":
                CantidadTotalSeguro = Base * 1.35
                break
        }

        const diferencia = new Date().getFullYear() - this.anio
        CantidadTotalSeguro -= (diferencia * 3 * CantidadTotalSeguro)/100

        if(this.tipo == 'basico'){
            CantidadTotalSeguro *= 1.3
        } else {
            CantidadTotalSeguro *= 1.5
        }
        return CantidadTotalSeguro
    }
}