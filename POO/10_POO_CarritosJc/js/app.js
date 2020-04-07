const TablaCarrito = document.querySelector("#lista-carrito tbody");

EventListener();

function EventListener() {
  document
    .querySelector("#lista-cursos")
    .addEventListener("click", GuardarCursoCarrito);
  document.querySelector("#carrito").addEventListener("click", EliminarCarrito);
  IniciarCarrito();
  document
    .querySelector("#vaciar-carrito")
    .addEventListener("click", VaciarCarrito);
}

//seccion para guardar los cursos dentro del carrito de compra
function GuardarCursoCarrito(event) {
  event.preventDefault();
  if (event.target.classList.value.search("agregar-carrito") == -1) return;
  const curso = event.target.parentElement.parentElement;

  const InformacionCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };
  const carrito = new Carrito();
  carrito.AgregarCursoCarrito(InformacionCurso, TablaCarrito, true);
}

function IniciarCarrito() {
  const cursosLs = LocalStorageManipular.ObtenerCursoLocalStorage();

  for (let i = 0; i < cursosLs.length; i++) {
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(cursosLs[i], TablaCarrito, false);
  }
}

function EliminarCarrito(event) {
  if (event.target.classList.value !== "borrar-curso") return;
  Carrito.EliminarCursoCarrito(event.target.parentElement.parentElement);
}

function VaciarCarrito() {
  Carrito.VaciarCarrito(TablaCarrito);
}
