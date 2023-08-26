const input = require("readline-sync");

const N =parseInt(input.question("Digite um numero Inteiro N: "));
let soma =0;

for (let i = 2; i <= N; i += 2) {
    soma += i;
}

console.log(`A soma dos números pare de 1 a ${N} é: ${soma}`);