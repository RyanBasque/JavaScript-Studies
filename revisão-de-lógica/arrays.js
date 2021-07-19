// sintaxe formal e literal (literal é sempre a melhor)

const arr = new Array; // com ou sem (), sem para criar vazio e () para criar com coisas dentro
const arr2 = new Array('teste', 'teste dois', 1, 2, new Array(2, 4, 10)); 
  // arrays são do tipo objeto porque por baixo dos panos é um objeto (js não tem tipo array)
// usado para criar um novo array ou limpar um já existente;

arr[0] = "Ryan"; // coloca o valor no índice 0, 1, 2 etc arr[indice]
arr[1] = "Ana Beatriz";

console.log(arr);