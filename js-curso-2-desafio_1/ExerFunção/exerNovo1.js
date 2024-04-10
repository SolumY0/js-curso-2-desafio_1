let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em quilos:"));
let resultado = calcularIMC(altura, peso);
function calcularIMC(altura, peso) {
    return peso/(altura**2);
}
alert (`O IMC é ${resultado.toFixed(2)}.`);