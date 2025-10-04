const readline = require("readline-sync");

let nom =(readline.question ("Insira o nome do usuario: "));
let idd = parseFloat(readline.question ("Insara a idade do usuario: "));


if(idd >= 18 ){

console.log (`${nom} Pode entra pois a idade:${idd} é de maior` )
} else {

    console.log (`${nom} Não pode entra pois a idade:${idd} é de menor` )
}

console.log('------------------------')