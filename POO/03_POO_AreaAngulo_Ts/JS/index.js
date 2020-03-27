"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Triangulo_class_1 = require("./Triangulo.class");
EventListener();
function EventListener() {
    document.getElementById('btnCalcular').addEventListener('click', CalcularArea);
}
function CalcularArea() {
    const Altura = Number(document.getElementById('Altura').value);
    const base = Number(document.getElementById('Base').value);
    const triangulo = new Triangulo_class_1.Triangulo(base, Altura);
    console.log(triangulo.area);
}
