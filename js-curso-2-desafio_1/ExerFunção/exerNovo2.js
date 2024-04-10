//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro
let numero = parseInt(prompt("Insira um número"));
let resultado = 1;
function numeroFatorial(fatNumero){
    if (fatNumero == 0){
        return 1;
    }
    while (fatNumero != 0){
        resultado *= fatNumero; //resultado = resultado*fatNumero
        fatNumero-=1;
    }   
    return resultado;
}
numeroFatorial(numero);
alert (`o fatorial de ${numero} é ${resultado}`);
