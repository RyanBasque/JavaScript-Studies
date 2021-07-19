// Operadores: + - / * % **

let soma = 1 + 2;
let diminuicao = 1 - 2;
let divisao = 10 / 2;
let restoDaDivisao = 10 % 2; // usado para pegar números multiplos
let mutiplicacao = 2 * 2;
let potencia = 2 ** 2;

// Operadores de atribuição

let atribuicaoDeValor = 'O sinal de igual é um operador';
atribuicaoDeValor = 3;
atribuicaoDeValor += 7; // soma o último valor da variável com o 7
atribuicaoDeValor -= 3; // diminui o último valor da variável com o 3
atribuicaoDeValor *= 3; // mutiplica o último valor da variável com o 3
atribuicaoDeValor /= 1; // divisão o último valor da variável com o 1
atribuicaoDeValor %= 3; // resto da divisão o último valor da variável com o 3

// Operadores de incremento e decremento

let i = 0;
i++; // pós
++i; // pré
i--;
--i;

// Operadores lógicos
let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);