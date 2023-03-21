var readline = require("readline-sync");
var sair = 0;

do {
  // Pergunta Nome do Aluno
  var nome = readline.question("Digite seu nome: ");

  // Pergunta as 4 Notas do Aluno
  console.log("Digite as notas dos 4 Bimestres!");
  var n1 = parseInt(readline.question("Nota 1: "));
  var n2 = parseInt(readline.question("Nota 2: "));
  var n3 = parseInt(readline.question("Nota 3: "));
  var n4 = parseInt(readline.question("Nota 4: "));

  // Cálculo de Média Final e imprime se foi aprovado ou reprovado
  var resultado = n1 + n2 + n3 + n4;
  var notafinal = resultado / 4;
  console.log(`Sua Média Final: ${notafinal}`);

  if (notafinal >= 6 && notafinal <= 10) {
    console.log(`${nome} você está Aprovado!`);
  }
  if (notafinal >= 0 && notafinal < 6) {
    console.log(`${nome} você está Reprovado!`);
  }

  sair = parseInt(
    readline.question(
      "Digite 0 para sair, ou qualquer outra tecla para reiniciar o programa!"
    )
  );
} while (sair != 0);
