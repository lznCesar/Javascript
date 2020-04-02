class ManipularLocalStorage {
  static ArrayTweets = [];

  static AgregarTweetsLocalStorage(ContenidoTweet) {
    this.ArrayTweets = this.ObtnerLocalStorage();
    // En esta seccion vamos agregar los elementos a la local storage
    this.ArrayTweets.push(ContenidoTweet);
    // JSON.stringify ayuda guardar los elementos dentro de un arreglo con formato de strigns
    localStorage.setItem("tweets", JSON.stringify(this.ArrayTweets));
  }

  // seccion para obtener los tweets que se encuentran en local storage y agregarlos 
  static ObtnerLocalStorage() {
    let tweetsObtenidoLS = [];

    if (localStorage.getItem("tweets") === null) {
      return tweetsObtenidoLS;
    }
    return JSON.parse(localStorage.getItem("tweets"));
    // JSON.parse convierte el string en un array
  }

// seccion en la cual eliminamos los tweets del local storage 
  static EliminarTweetLocalStorage(contenido){
    let tweetsLS = this.ObtnerLocalStorage()
    let ArrayNuevoTweetLS = []

    for (let i=0; i < tweetsLS.length; i ++){

      if (contenido != tweetsLS[i]){
        ArrayNuevoTweetLS.push(tweetsLS[i])
      }
    }
    localStorage.setItem('tweets', JSON.stringify(ArrayNuevoTweetLS))
  }
}
