let raio = parseFloat(prompt("Informe o valor do raio:"));
let area = calcularArea(raio);
let perimetro = calcularPerimetro(raio);

function calcularArea(raio){
    return 3.14*(raio**2);
}

function calcularPerimetro(raio){
    return (2*3.14)*raio;
}
alert (`A área é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}.`);


