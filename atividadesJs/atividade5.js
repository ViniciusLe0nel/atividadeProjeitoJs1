const readline = require("readline-sync");

let nota = Number(readline.question("INSIRA a nota:"));

if (nota >= 7) {
  console.log(`Aprovadocom nota: ${nota}`);
} else if (nota >= 5 && nota <= 6.9) {
  console.log(`Esta na recuperação com nota:${nota}`);
} else {
  console.log(`Esta reprovado com nota:${nota}`);
}

console.log('-------------------------------------')