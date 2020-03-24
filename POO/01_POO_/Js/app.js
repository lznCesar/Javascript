// // COMO DECLARAR UN OBJETO 

// let Carro1Objeto = {
//     //propiedades del objeto
//     Color: "Rojo",
//     Marca: "Honda",
//     Modelo: 2000,
//     Motor: 2.0
//     //Metodos del objeto(Acciones)

// }
// // 
// console.info(`${Carro1Objeto.Marca}`)


//definicion de una clase el nombre de la clase siempre debe de ser un sustantivo y la primera mayuscula
// la clase es como una plantilla para los objeto
// Dentro de la clase se declaran con un igual

// metodo correcto para realizar una objeto una clase y darle una instanciacion a un objeto
class Carro {
    Color = "";
    Marca = "";
    Modelo = 0;
    Motor = 0;
    PosX = 0;
    PosY = 0;
    constructor(Color, Marca,Modelo,Motor){
        this.Color = Color;
        this.Marca = Marca
        this.Modelo = Modelo
        this.Motor = Motor
    }
}

let Carro1 = new Carro("Rojo", "Honda", 2015, 1.8)
let Carro2 = new Carro("Azul", "Nissan", 2020, 2.0)



