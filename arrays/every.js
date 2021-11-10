const arr = [1, 5, 10, 'olá', false];

const aa = arr.map(e => {
  return typeof e === 'number' && e * 1000;
});

console.log(aa, 'arr');

let onlyNumbers = arr.every(item => typeof item === 'number');

// faz uma verificação pra cada elemento do array e retorna um boolean
// todos os itens são números? não, então retorne false.
// todos são string? sim, então retorne true.

let moreThan20 = arr.every(item => item > 20);

console.log(onlyNumbers);

let filteredArr = arr.filter(item => typeof item === 'number');

console.log(filteredArr);

let arry = [0, 2343234, 5, 6456, 1346, 97, 5];

console.log(arry.lastIndexOf(4673240895709234)); // -1 porque não existe

console.log(arry.includes(2343234)); // true

console.log([0, 'ryan'].find(e => e == 'test'));