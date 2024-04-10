let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function clicarConsole(){
    console.log ("O botão foi clicado.");
}

function clicarAlert(){
    alert ("Eu amo JS.");
}

let cidade;
function clicarPrompt(){
    cidade = prompt("Qual a sua cidade do Brasil?");
    alert (`Estive em ${cidade} e lembrei de você.`);
}

let numero1;
let numero2;
let soma;
function clicarSoma(){
    numero1 = parseInt(prompt("Digite um número:"));
    numero2 = parseInt(prompt("Digite um número:"));
    soma = numero1+numero2;
    alert (`A soma dos números é ${soma}.`)
}