// sintaxe formal e literal (literal é sempre a melhor)

// Formal

const arr = new Array; // com ou sem (), sem para criar vazio e () para criar com coisas dentro
const arr2 = new Array('teste', 'teste dois', 1, 2, new Array(2, 4, 10)); 
  // arrays são do tipo objeto porque por baixo dos panos é um objeto (js não tem tipo array)
// usado para criar um novo array ou limpar um já existente;

arr[0] = "Ryan"; // coloca o valor no índice 0, 1, 2 etc arr[indice]
arr[1] = "Ana Beatriz";

console.log(arr);
console.log(arr2[4][0]); // Pega o array dentro do array

// Literal (mais usado);

const arr3 = [];
arr3[4] = 'Novo valor';
arr3[arr3.length] = 'Novo valor 2';
arr3.unshift('Novo valor 3');
arr3.push('Novo valor 4');
arr3.push('Novo valor 5', 'Novo valor 6');

console.log(arr3); // <4 empty items (undefined)>, 'Novo valor' ]'