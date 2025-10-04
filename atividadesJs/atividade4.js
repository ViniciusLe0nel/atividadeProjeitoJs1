
const readline = require("readline-sync");

let temperatura = Number(readline.question("Digite a temperatura em graus Celsius: "));

if (temperatura <= 0) {
  console.log(`A água está no estado sólido a ${temperatura}°C.`);
} else if (temperatura > 0 && temperatura <= 100) {
  console.log(`A água está no estado líquido a ${temperatura}°C.`);
} else {
  console.log(`A água está no estado gasoso a ${temperatura}°C.`);
}

console.log('-------------------------------------')