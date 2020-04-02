const ContenidoTweet = document.querySelector("#txTeewt")
const listaTweets = document.querySelector('#lista-tweets')

EventListener();
CargarTweetsLocalStorage()
function EventListener() {
  document
    .getElementById("formulario")
    .addEventListener("submit", ObtenerFormulario);
    listaTweets.addEventListener('click',EliminarTweet)
}

function ObtenerFormulario(event){
    
    event.preventDefault();
    if(ContenidoTweet.value.trim() == '')return
    const InstanciaTweet = new Tweets(ContenidoTweet.value)
    
    InstanciaTweet.AgregarTweetDOM(listaTweets, true)  

    ContenidoTweet.value = ''
}

function EliminarTweet(){
    Tweets.EliminarTweetDOM(event)    
}

function CargarTweetsLocalStorage(){

    const TweetsLS = ManipularLocalStorage.ObtnerLocalStorage()
    
    for (let i = 0; i < TweetsLS.length; i++){

        const InstanciaTweet = new Tweets (TweetsLS[i])
        InstanciaTweet.AgregarTweetDOM(listaTweets, false)
    }

    
}