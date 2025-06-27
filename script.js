let qtdNumeros_s = prompt("Seja bem-vindo! Digite a quantidade de números que você deseja para calcular a média:");
let qtdNumeros_i = parseInt(qtdNumeros_s);

let soma = 0;

for (let count = 1; count <= qtdNumeros_i; count++) {
    let numero_s = prompt(`Digite o ${count}º número:`);
    let numero = parseFloat(numero_s); // aceita números com vírgula
    soma += numero;
}

let media = soma / qtdNumeros_i;

document.getElementById("resultado").textContent = `A média é: ${media.toFixed(2)}`;
