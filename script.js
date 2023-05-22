'use strict';
let numeroSecreto = Math.trunc(Math.random()*20) + 1; //Sumamos uno, porque siempre va a multiplar entre 0.01 y 0.99
// document.querySelector('.number').textContent = numeroSecreto;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function(){
    const valor = Number(document.querySelector(".guess").value);// el metodo Number convierte a numero lo que ingresemos como parametros.

    if(!valor){ // Como "0" es Falso, acá decimos: si(el valor es falso(!valor))
        document.querySelector('.message').textContent = "No es un numero!!";
    } 
    // Si adivina cual es el numero secreto
    else if (valor === numeroSecreto) {
        document.querySelector('.message').textContent = "Advinaste! Felicitaciones!"
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = numeroSecreto;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // Si el intento es un numero mayor al numero secreto
    else if (valor > numeroSecreto) {
        if(score > 1) {
            document.querySelector('.message').textContent = "Es un numero menor!";
            score--;
            document.querySelector('.score').textContent = score;
        }   else {
            document.querySelector('.message').textContent = "Game Over!";
            document.querySelector('.score').textContent = 0;
        }
    } 
    // Si el intento es un numero menor al numero secreto
    else if (valor < numeroSecreto) {

        if(score > 1) {
            document.querySelector('.message').textContent = "Es un numero mayor!";
        score--;
        document.querySelector('.score').textContent = score;
        }   else {
            document.querySelector('.message').textContent = "Game Over!";
            document.querySelector('.score').textContent = 0;
        }
    }
    
});
document.querySelector(".again").addEventListener("click", function(){
    console.log("se hizo click");
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector(".guess").value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";

});

document.querySelector(".again").addEventListener("click", function(){
    score = 20; // Restablecer el valor de score a 20
    document.querySelector('.score').textContent = score;
    numeroSecreto = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector(".guess").value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
});