const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// solicita ao usuário para inserir 5 números
const numeros = [];
rl.question("Insira 5 números separados por espaço: ", (input) => {
  numeros.push(...input.split(" ").map((num) => Number(num)));

  // separa os números pares e ímpares
  const pares = numeros.filter((num) => num % 2 === 0);
  const impares = numeros.filter((num) => num % 2 !== 0);

  // calcula a média geral dos números
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;

  // imprime os resultados
  console.log(`Números pares: ${pares}`);
  console.log(`Números ímpares: ${impares}`);
  console.log(`Média geral: ${media}`);

  rl.close();
});
