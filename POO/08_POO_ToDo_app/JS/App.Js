const ContentList = document.querySelector("#TxThings");
const ListThingsToDo = document.querySelector("#List-Things-toDo");

EventListener();

// seccion para agregar eventos a objetos especificos

function EventListener() {
  document
    .getElementById("FormularioGeneral")
    .addEventListener("submit", ObtenerToDoThings);
    ListThingsToDo.addEventListener('click', ProcesarTarea)
}

//seccion para obtener la lista de cosas por hacer
function ObtenerToDoThings(event){

    event.preventDefault()
    if (ContentList.value.trim() == '')return
    // la funcion .trim() nos ayuda a elimiar los espacios que se puedan encontra al inicio o al final
    const InstanciaToDoList = new ToDoList(ContentList.value)
    
    InstanciaToDoList.AddthingToDoDOM(ListThingsToDo, true)

    ContentList.value = ''
}

function ProcesarTarea(e){
//console.log(e.target.tagName);
  let btn = e.target.classList
  // console.log(btn[btn.length -1]);

                              // 0      1            2            3  array.length =4  
  if(btn[btn.length -1] == 'borrar'){  
  
    ToDoList.EliminarElement(e)
    console.log('Ejecuta Borrar');
  }else if(btn[btn.length -1] == 'realizado'){
    ToDoList.TareaRealizada(e)
    
  }else return
  
}

function CargartareasLocalStorage(){

  const TareasLs = ManipularLocalStorage.ObtenerLocalStorage()

  for(let i = 0; i < TareasLs.length; i++){
    const InstanciaToDoList = new ToDoList(TareasLs[i])
    InstanciaToDoList.AddthingToDoDOM(ListThingsToDo,false)
  }
}
