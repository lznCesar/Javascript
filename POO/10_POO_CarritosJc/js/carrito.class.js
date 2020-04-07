// esta clase nos ayudara agregar el curso al carrito
class Carrito {
  AgregarCursoCarrito(InformacionCurso, TablaCarrito, origen) {
    if (
      LocalStorageManipular.VerificarCursoRepetido(InformacionCurso.id) &&
      origen
    )
      return;
    const TableRow = document.createElement("tr");
    TableRow.innerHTML = ` 
    <td>
        <img src="${InformacionCurso.imagen}" widht=100%""/>
    </td>
    <td>${InformacionCurso.titulo} </td>
    <td>${InformacionCurso.precio}</td>
    <td>
    <a class="borrar-curso" data-id="${InformacionCurso.id}"> X </a>
    </td>
    `;
    TablaCarrito.appendChild(TableRow);
    if (origen)
      LocalStorageManipular.AgregarCarritoLocalStorage(InformacionCurso);
  }

  static EliminarCursoCarrito(nodeDom) {
    const idCurso = nodeDom
      .querySelector(".borrar-curso")
      .getAttribute("data-id");
    LocalStorageManipular.EliminarCursoLS(idCurso);
    nodeDom.remove();
  }

  static VaciarCarrito(TablaCursos) {
    while (TablaCursos.firstChild) {
      TablaCursos.firstChild.remove();
    }
    LocalStorageManipular.VaciarCarritoLS();
  }
}
