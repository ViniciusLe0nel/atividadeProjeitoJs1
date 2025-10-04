const readline = require("readline-sync");

let senha1 = "7100";
let login1 = "ainn";


login = readline.question("digite o login: ");
senha = readline.question("digite a senha: ");

if (senha === senha1 && login === login1) {
 console.log("Acesso liberado");
}
else{
    console.log('acesso negado')
}

console.log('fim do programa')



