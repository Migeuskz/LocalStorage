//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#Lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}



//Funciones  
function agregarTweet(e){
    e.preventDefault();

    console.log('Agregando Tweet');
}