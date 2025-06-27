let qtdNumeros_s =  prompt ("Seja bem vindo!, digite a quantidade de numeros que você deseja fazer a média : ");
let qtdNumeros_i = parseInt(qtdNumeros_s);

let soma = 0;

for (let count = 0; count < qtdNumeros_i ; count++){
    let numeros_s = prompt("Digite aqui o numero :");
    let x1 = parseInt(numeros_s);
    soma += x1;
}

let media = soma / qtdNumeros_i;

console.log("A média é : "+media);

