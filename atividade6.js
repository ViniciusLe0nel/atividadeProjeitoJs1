const readline = require("readline-sync");

let venda = Number(readline.question("Insira o valor da venda:R$ "));
let valorFinal;

if (venda > 200) {
  valorFinal = venda - (venda * 0.15);
} else {
  valorFinal = venda - (venda * 0.05);
}

console.log(`Valor original da compra:R$${venda.toFixed(2)} mas com o desconto o valor ficou R$${valorFinal.toFixed(2)}`);








