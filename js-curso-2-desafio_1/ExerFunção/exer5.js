let numero = prompt("Informe o número?");
let numero2 = prompt("Informe o número?");
function maiorNumero(numero,numero2){
    if (numero > numero2){
        alert (`O maior número é ${numero}.`);
    }
    else{
        alert (`O maior número é ${numero2}.`);
    }
}
maiorNumero(numero, numero2);