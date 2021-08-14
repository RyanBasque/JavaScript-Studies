let arry = [];
let _arry = [];

arry === _arry || console.log(false); // Isso porque ele compara o espaço de memória do computador alocado a esse array
// Mas se eu disser que arry = _arry, eu estou dizendo que eles compartilham o mesmo espaço de memória, e consecutivamente os mesmo valores

arry = _arry;

arry[0] = "teste";

console.log(arry, _arry);

function alteraArry (array) {
    array.push('Adicionado');
}

let a = ["a"];
console.log(a);
alteraArry(a);
console.log(a);

function alteraPrimitivo (p) {
    // Em tipos primitivos, ele alterna o paramêtro, mas em Array, ele altera o espaço 
    // de memórua usado no compuator que signifca aquela variável, ou seja, muda a variável original
    p += " Adicionado"
}

let b = "Mensagem";
console.log(b);
alteraPrimitivo(b);
console.log(b);