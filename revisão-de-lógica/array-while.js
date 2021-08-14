// Criar um array com números não repetidos e aleatórios

// console.log(parseInt(Math.random() * 50)); 
// Retorna um número inteiro aleatório de 0 até cinquenta

function generateRandomInteger(max) {
    return parseInt(Math.random() * max);
};

let array = new Array();

while(array.length <= 20) {
    let randomNumber = generateRandomInteger(30);

    array.indexOf(randomNumber) < 0 && array.push(randomNumber)
};

console.log(array);