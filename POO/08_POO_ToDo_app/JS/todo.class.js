class ToDoList {
  contenido = "";

  constructor(contenido) {
    this.contenido = contenido;
  }

  //Seccion para agregar las tareas por hacer a la lista
  AddthingToDoDOM(contenedor, origen) {
    const li = document.createElement("li");
    li.classList = "list-group-item text-break";
    li.textContent = this.contenido;

    const BtnDelate = document.createElement("button");
    BtnDelate.classList.add(
      "pull-right",
      "btn",
      "btn-outline-danger",
      "borrar"
    );
    const span = document.createElement("span");
    span.classList.add("badge", "badge-pill", "text-danger", "borrar");
    span.setAttribute("id", "Borrado");
    const iborrar = document.createElement("i");
    iborrar.classList.add("fa", "fa-times", "borrar");
    span.appendChild(iborrar);

    const BtnDoThing = document.createElement("button");
    BtnDoThing.classList.add(
      "pull-right",
      "btn",
      "btn-outline-success",
      "realizado"
    );
    const span2 = document.createElement("span");
    span2.classList.add("badge", "badge-pill", "text-success", "realizado");
    span2.setAttribute("id", "Realizado");
    const i = document.createElement("i");
    i.classList.add("fa", "fa-check", "realizado");
    span2.appendChild(i);

    contenedor.appendChild(li);
    li.appendChild(BtnDelate);
    li.appendChild(BtnDoThing);
    BtnDelate.appendChild(span);
    BtnDoThing.appendChild(span2);

    //if (origen) ManipularLocalStorage.AgregarThisDoLocalStorage(this.contenido);
  }

  //   seccion para eliminar Tarea
  static EliminarElement(event) {
    let liEliminado = "";
    if (event.target.tagName == "I") {
      liEliminado = event.target.parentElement.parentElement.parentElement;
      console.log(liEliminado);
    } else if (event.target.tagName == "SPAN") {
      liEliminado = event.target.parentElement.parentElement;
      console.log(liEliminado);
    } else if (event.target.tagName == "BUTTON") {
      liEliminado = event.target.parentElement;
      console.log(liEliminado);
    }

    liEliminado.remove();
  }

  // Seccion Para marcar tarea como realizada
  static TareaRealizada(event) {
    let liEliminado = "";
    if (event.target.tagName == "I") {
      liEliminado = event.target.parentElement.parentElement.parentElement;
      console.log(liEliminado);
    } else if (event.target.tagName == "SPAN") {
      liEliminado = event.target.parentElement.parentElement;
      console.log(liEliminado);
    } else if (event.target.tagName == "BUTTON") {
      liEliminado = event.target.parentElement;
      console.log(liEliminado);
    }

    let TareaEliminada = liEliminado.textContent;
    TareaEliminada = TareaEliminada.substring(
      0,
      liEliminado.textContent.length - 1
    );
    console.log(TareaEliminada);

    ManipularLocalStorage.EliminarTweetsLocalStorage(TareaEliminada);
    liEliminado.remove();
  }
}
