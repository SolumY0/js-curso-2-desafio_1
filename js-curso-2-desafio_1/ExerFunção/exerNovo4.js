let altura = parseFloat(prompt("Informe a altura da sala:"));
let largura = parseFloat(prompt("Informe a largura da sala:"));
let area = calculoArea(altura, largura);
let perimetro = calculoPerimetro(altura, largura);

function calculoArea(altura, largura){
    return altura*largura;
}

function calculoPerimetro(altura, largura){
    return (altura*2)+(largura*2);
}

alert (`A área é ${area} e o perímetro é ${perimetro}.`);