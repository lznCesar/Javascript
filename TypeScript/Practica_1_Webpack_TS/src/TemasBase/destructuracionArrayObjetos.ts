
const objetoValores = {a:2, b:3, c:4, d:5};
const {a,b,c} = objetoValores

/* caracteristica de la destructuracion de valores que tiene que 
tenere el mismo nombre no importa la posicion solo que se llamen 
igual 
*/

//console.log(objetoValores.a);
//console.log(a);

const Arreglo:Array<number> = [1,2,3,4,5,6,7,8,9,0]
const [v,w,z] = Arreglo
/* valores posicionales dependiendo en que posicion lo coloquemos
van a tomar ese valor 
*/
console.log(v,w,z);

