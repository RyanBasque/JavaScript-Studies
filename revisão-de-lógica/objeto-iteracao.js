const pessoa = {
    nome: 'Ana',
    'idade': 17,
    afiliacao: 'ETWD'
};

for(let prop in pessoa) {
    // Retorna a propiedade
    console.log(prop, ':' ,pessoa[prop]); // retorna o valor
}