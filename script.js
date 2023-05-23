'use strict';
let numeroSecreto = Math.trunc(Math.random()*20) + 1; //Sumamos uno, porque siempre va a multiplar entre 0.01 y 0.99
let score = 20;
let highScore = 0;
const mostrarMensaje = function(mensaje){
    document.querySelector('.message').textContent = mensaje;
}

document.querySelector(".check").addEventListener("click", function(){
    const valor = Number(document.querySelector(".guess").value);// el metodo Number convierte a numero lo que ingresemos como parametros.

    if(!valor){ // Como "0" es Falso, acá decimos: si(el valor es falso(!valor))
        mostrarMensaje("No es un numero");
    } 
    // Si adivina cual es el numero secreto
    else if (valor === numeroSecreto) {
        mostrarMensaje("Advinaste! Felicitaciones!");
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = numeroSecreto;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // Si el intento no es el numero secreto
        else if (valor !== numeroSecreto){
            if(valor > 1) {
                mostrarMensaje(valor > numeroSecreto ? "Es un numero menor!" : "Es un numero mayor!");
                score--;
                document.querySelector('.score').textContent = score;
            }   else {
                mostrarMensaje("Game Over!");
                document.querySelector('.score').textContent = 0;
            }
        }
});
// Volver a iniciar el juego
document.querySelector(".again").addEventListener("click", function(){
    score = 20; // Restablecer el valor de score a 20
    document.querySelector('.score').textContent = score;
    numeroSecreto = Math.trunc(Math.random()*20) + 1;
    mostrarMensaje("Start guessing...");
    document.querySelector(".guess").value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
});