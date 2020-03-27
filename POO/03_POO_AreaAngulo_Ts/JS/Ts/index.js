"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
EventListener();
function EventListener() {
    document.getElementById('btnCalcular').addEventListener('click', CalcularArea);
}
function CalcularArea() {
    var Altura = document.getElementById('Altura').value;
    var base = document.getElementById('Base').value;
}
