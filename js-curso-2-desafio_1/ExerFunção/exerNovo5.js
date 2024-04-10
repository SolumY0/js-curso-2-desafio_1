let numero = parseInt(prompt("Informe um número:"));
let contador = 0;

//for (let i = 1; i <= 10; i++){}
while (contador < 11){
    let resultado = conta(numero);
    function conta(numero){
        return numero*contador;
    }
    contador++;
    alert (resultado);
}
