//OBS : EU N ENTENDI SE É PRA

const readline = require("readline-sync");

let salario = Number(readline.question("Digite Seu salario:R$ "));

if (salario <= 2000) {
  console.log("iSENTO DE TAXA");
}
 else if (salario >= 2000 && salario <= 5000) {
  console.log("TAXA DE 10% NO SEU SALARIO");
} 
else  {
  console.log("TAXA DE 20% NO SEU SALARIO");
}


console.log('FIM DO PROGRAMA\n')


