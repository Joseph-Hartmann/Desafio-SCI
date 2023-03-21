var readline = require("readline-sync");
var aluno = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

//Aluno 1
aluno[0][0] = readline.question("Digite nome do 1° aluno: ");
aluno[0][1] = parseFloat(readline.question("insira nota do aluno: "));
aluno[0][2] = parseFloat(readline.question("insira nota do aluno: "));
aluno[0][3] = parseFloat(readline.question("insira nota do aluno: "));
aluno[0][4] = parseFloat(readline.question("insira nota do aluno: "));
console.log("=======================");
//Aluno 2
aluno[1][0] = readline.question("Digite nome do 2° aluno: ");
aluno[1][1] = parseFloat(readline.question("insira nota do aluno: "));
aluno[1][2] = parseFloat(readline.question("insira nota do aluno: "));
aluno[1][3] = parseFloat(readline.question("insira nota do aluno: "));
aluno[1][4] = parseFloat(readline.question("insira nota do aluno: "));
console.log("=======================");

//Aluno 3
aluno[2][0] = readline.question("Digite nome do 3° aluno: ");
aluno[2][1] = parseFloat(readline.question("insira nota do aluno: "));
aluno[2][2] = parseFloat(readline.question("insira nota do aluno: "));
aluno[2][3] = parseFloat(readline.question("insira nota do aluno: "));
aluno[2][4] = parseFloat(readline.question("insira nota do aluno: "));
console.log("=======================");
console.table(aluno);

aluno[0] = console.log(`Nota final ${aluno[0]}`);
console.log(`Nota final ${aluno[1]}`);
console.log(`Nota final ${aluno[2]}`);
