class Tweets {
  contenido = "";
  localstorage

  constructor(contenido) {
    this.contenido = contenido;
    
  }

  AgregarTweetDOM(contenedor, origen) {

    const li = document.createElement("li");
    li.classList = "list-group-item text-break";
    li.textContent = this.contenido;

    const BtnEliminar = document.createElement("button");
    BtnEliminar.classList = "close";

    const span = document.createElement("span");
    span.classList = "badge badge-pill text-danger";

    span.textContent = "X";

    contenedor.appendChild(li);
    li.appendChild(BtnEliminar);
    BtnEliminar.appendChild(span);
    
    
    if (origen) ManipularLocalStorage.AgregarTweetsLocalStorage(this.contenido)
  }
  static EliminarTweetDOM(event) {
    if (event.target.tagName != "SPAN") return;
  const liBorrado  = event.target.parentElement.parentElement;
  let TextoLiBorrado = liBorrado.textContent
  TextoLiBorrado = TextoLiBorrado.substring(0,liBorrado.textContent.length-1)
  
  
  ManipularLocalStorage.EliminarTweetLocalStorage(TextoLiBorrado)
    liBorrado.remove()
}
}
