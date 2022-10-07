//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}



//Funciones  
function agregarTweet(e){
    e.preventDefault();
    //Textarea donde el usuario escribe 
    const tweet = document.querySelector('#tweet').value;

    //Validación...
    if(tweet === ''){
        mostrarError('No puede ir vacio');
        return;//evita que se ejecuten mas lineas de codigo
    }
    console.log('Agregando Tweet');
}

//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 seg
    setTimeout(() => {
        mensajeError.remove();
    },3000);
}