// const NumeroRandom = Math.floor(Math.random() * 11);

// if (NumeroRandom >= 6) {
//   alert(`Pasaste Con calificacion ${NumeroRandom}`);
// } else {
//   alert(`No pasaste Con calificacion ${NumeroRandom}`);
// }

// IF TERNARIO BASICO

// NumeroRandom >= 6
//   ? alert(`Pasaste Con calificacion ${NumeroRandom}`)
//   : alert(`No pasaste Con calificacion ${NumeroRandom}`);

// ell signo de pregunta despues de la operacion se refiere a la accion
// que se va a realizar despues de la comprobacion
// -- El if ternario solamente se puede utilizar cuando se van a realizar
// nos acciones osea con IF  y con ELSE

let numero = 10;
let NumeroObtenido =
  numero == 5 ? "Cinco" : numero == 7 ? "siete" : numero == 11 ? "once" : null;

// que es lo mismo que esto

// if (numero == 5){
//     NumeroObtenido = 'cinco'
// }else if(numero == 7){
//     NumeroObtenido = 'siete'
// }else if (numero == 11){
//     NumeroObtenido = 'once'
// }else {
//     NumeroObtenido = 'Es otro numero'
// }

console.log(NumeroObtenido);

/*
==  ===
el tercer igual si el valor es el mismo y si el tipo de dato  es igual 
!= !==
>= >===
<= <==
*/

let x: any = 7;
let y: any = 7;

x === y
  ? alert(`los valores sin operadores restrictivos son iguales`)
  : alert(`los valores con operador restrictivo no son iguales`);
