let n1 = '10.9087';
n1 = parseFloat(n1); // return 10.9087
n1 = parseInt(n1); // return 10

let n2 = 2;

let n3 = 'a344';
n3 = parseInt(n3) // NaN. Retornou NaN porque o primeiro caractere foi uma letra;
n3 = Number(n3) // NaN
n3 = '344a';
n3 = Number(n3) // NaN

let teste = 10;
teste = teste + '';

let teste2 = 12;
// decimais: 0 - 9;
// hexadecimais: 0 - f (15);
teste2 = teste2.toString(16)

// console.log(n1, n2 + n1, n3);
console.log(teste2);

// conversão implícita 