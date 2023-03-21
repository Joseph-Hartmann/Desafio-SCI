var readline = require("readline-sync");
const nms = [, , , , ,];

//Pede para digitar os números!
nms[0] = parseFloat(readline.question("inserir numero: "));
nms[1] = parseFloat(readline.question("inserir numero: "));
nms[2] = parseFloat(readline.question("inserir numero: "));
nms[3] = parseFloat(readline.question("inserir numero: "));
nms[4] = parseFloat(readline.question("inserir numero: "));

//Escreve o número na posição 3
console.log(`O vetor tem: ${nms.length} posições`);
console.log(`O valor da posição 3 é: ${nms[3]}`);
