let dolar = parseFloat(prompt("Informe um valor de dinheiro em dólares:"));
let real = tranformarReal(dolar);

function tranformarReal(dolar){
    return dolar*4.80;
}
alert (`A transformação desse dinheiro para reais é igual a ${real.toFixed(2)} reais.`)