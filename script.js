'use strict';
const numeroSecreto = Math.trunc(Math.random()*20) + 1; //Sumamos uno, porque siempre va a multiplar entre 0.01 y 0.99
// document.querySelector('.number').textContent = numeroSecreto;

document.querySelector(".check").addEventListener("click", function(){
    const valor = Number(document.querySelector(".guess").value);// el metodo Number convierte a numero lo que ingresemos como parametros.
    console.log(valor);

    if(!valor){ // Como "0" es Falso, acá decimos: si(el valor es falso(!valor))
        document.querySelector('.message').textContent = "No es un numero!!";
    } else if (valor === numeroSecreto) {
        document.querySelector('.message').textContent = "Advinaste! Felicitaciones!"
    } else if (valor > numeroSecreto) {
        document.querySelector('.message').textContent = "Es un numero más chico!";
    } else if (valor < numeroSecreto) {
        document.querySelector('.message').textContent = "Es un numero más grande!";
    }
});