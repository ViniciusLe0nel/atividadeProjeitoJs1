const readline = require("readline-sync");

let idade = Number(readline.question("Digite a idade: "));

if (idade <= 12) {
  console.log("Classificação: Infantil");
}
 else if (idade >= 13 && idade <= 17) {
  console.log("Classificação: Juvenil");
} 
else if (idade >= 18 && idade <= 39) {
  console.log("Classificação: Adulto");
} 
else {
  console.log("Classificação: Master");
} 