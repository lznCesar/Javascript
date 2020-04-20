// esta es la forma en al cual establecemos una variable en Ts
let variable1: number = 0;
let variable2: string = "Hola Mundo";
let variable3: boolean = true;
let Array1: Array<string | number> = [1, 2, 3, "a"];

// --A las funciones le podemos decir que elementos va a manajer
// o que datos va retornar
function Numerica(x: number, y: number): number | null {
  // --Los tipos de datos pueden ser de diferentes tipos number, any
  let resultado: number = x + y;
  return resultado;
}

const BtnEjecutar: HTMLElement = document.getElementById("BtnEjecutar")!;
// --El signo de admiracion es para asegurar a Ts que el elemento que
// estamos llamndo existe 100%
BtnEjecutar.addEventListener("click", CalcularEdadCasarse);

function CalcularEdadCasarse() {
  const InputEdadUsuario: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("EdadUsuario")
  );

  const EdadUsuario: number = Number(InputEdadUsuario.value);

  let resultado: number = EdadUsuario + 20;

  const OutputElement: HTMLDivElement = <HTMLDivElement>(
    document.querySelector("#Output")
  );
  OutputElement.innerHTML = `Te vas a casa a los ${resultado}`;
}
