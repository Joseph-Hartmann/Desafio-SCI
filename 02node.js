// Variaveis e pergunta número
var readline = require("readline-sync");
var n1 = parseFloat(readline.question("numero 1: "));
var n2 = parseFloat(readline.question("numero 2: "));
var n3 = parseFloat(readline.question("numero 3: "));
var n4 = parseFloat(readline.question("numero 4: "));
var n5 = parseFloat(readline.question("numero 5: "));

// Descobre o maior e o menor!
if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
  console.log(`O maior número é:${n1}`);
}
if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
  console.log(`O maior número é:${n2}`);
}
if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
  console.log(`O maior número é:${n3}`);
}
if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
  console.log(`O maior número é:${n4}`);
}
if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
  console.log(`O maior número é:${n5} `);
}
if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
  console.log(`O menor número é:${n1}`);
}
if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5) {
  console.log(`O menor número é:${n2}`);
}
if (n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5) {
  console.log(`O menor número é:${n3}`);
}
if (n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5) {
  console.log(`O menor número é:${n4}`);
}
if (n5 < n1 && n5 < n2 && n5 < n3 && n5 < n4) {
  console.log(`O menor número é:${n5} `);
}
