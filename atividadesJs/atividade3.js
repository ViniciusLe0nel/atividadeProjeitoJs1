const readline = require("readline-sync");

let produto1 = parseFloat(readline.question("Insira o valor do primeiro produto R$: "));
let produto2 = parseFloat(readline.question("Insira o valor do segundo produto R$: "))


if (produto1 == produto2){
   console.log(`O produto 1:R$ ${produto1} tem o mesmo valor que produto 2:R$: ${produto2}` );
}

 else if ( produto1 < produto2) 
    {console.log (`O produto 1:R$ ${produto1} em comparação é menor que o produto 2:R$${produto2}`);

} else
    { console.log (`O produto 1:R$ ${produto1} em comparação é maior que o produto 2:R$ ${produto2}`) 
}

console.log ("fim da comparação");