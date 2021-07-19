const nomes = ["Daniel", 'Ana', "João"];
const idades = [18, 22, 45];

// console.log(nomes[0], idades[0]);

const pessoa = new Object({nome: 'Ryan', idade: 18});
const pessoaFormal = new Object();

console.log(pessoa);

const pessoas = [
    {nome: 'Daniel', idade: 18},
    {nome: 'Ana', idade: 22},
    {nome: 'João', idade: 45},
];

let prop = 'nome';

console.log(pessoas);
console.log(pessoas[0][prop]);
console.log(pessoas[0].nome);