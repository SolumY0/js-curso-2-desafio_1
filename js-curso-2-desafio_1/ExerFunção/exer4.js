let media;
let numero1 = parseInt(prompt("Informe o número?"));
let numero2 = parseInt(prompt("Informe o número?"));
let numero3 = parseInt(prompt("Informe o número?"));
function numero(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}
media = numero(numero1, numero2, numero3)
alert (`A média é ${media}.`);