const readline = require("readline-sync");

let num1 = parseFloat(readline.question("Insira o valor a ser retirado R$: "));

if (num1 % 2 === 0 ){
   console.log (`${num1} O valor é par\n` )
} else {
      console.log (`${num1}O valor é impar\n` )
}

console.log('fim da operação\n')