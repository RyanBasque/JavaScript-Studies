// let n = 0;
let n = 1;

n = n || 10;
// como n é igual a zero, então o operador Or (||) faz com que 10 seja true, retornando o 10;
// mas se n for igual a 1, ele retorna o primeiro valor true (1);

/*

if(!n) {
    // Operador falsy, ou seja: 0 = false

    n = 10;
}

*/

console.log(n)

let isValid = true;

isValid || console.log('Não é válido');
isValid && console.log('É válido');