const readline = require('readline-sync');

let nome = readline.question("Insira o nome do cliente: ");
let idade = Number(readline.question("Insira a idade do cliente: "));
let valor  = Number(readline.question("Insira o valor do ingresso: R$ "));

if (idade < 18) {
    console.log("O cliente não pode comprar, pois é menor de idade.");
} else {
    if (valor >= 100) {
        let desconto = valor * 0.20;
        valor = valor - desconto;
        console.log(`Desconto aplicado de R$${desconto.toFixed(2)}!`);
    }

    console.log(`Cliente: ${nome}, Idade: ${idade}, Valor final: R$${valor.toFixed(2)}`);
}

console.log('------------------------ ')
  

