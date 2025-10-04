const readline = require("readline-sync");

let semana = readline.question('digite um mumero de 1 a 7 para saber o dia da semana: ' )

if (semana == 1){
    console.log('HOJE É DOMINGO MAN')
} else if (semana == 2) {
    console.log('HOJE É SEGUNDA MAN')
} else if (semana == 3) {
    console.log('HOJE É TERÇA-FEIRA MAN')
} else if (semana == 4) {
    console.log('HOJE É QUARTA-FEIRA MAN')
} else if (semana == 5) {
    console.log('HOJE É QUINTA-FEIRA MAN')
} else if (semana == 6) {
    console.log('HOJE É SEXTA-FEIRA MAN')
} else if (semana == 6) {
    console.log('HOJE É SABADO MAN')
}  else {
    console.log('DEU ERRO MAN !')
}

console.log('---------------------')
