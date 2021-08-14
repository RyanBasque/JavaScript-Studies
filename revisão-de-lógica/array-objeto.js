const nome = ["Daniel", "Ryan", "Pedro"];
const pessoa = { nome: "Ana", idade: 17, email: "exemple@exemple.com" };

const pessoas = [
    { nome: 'João', idade: 18, email: "exemple@exemple.com" },
    pessoa,
    { nome: nome[0] },
];

console.log(pessoas);
console.log(pessoas[0].nome);