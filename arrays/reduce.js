const numbers = [0, 2, 4, 2 ,5, 6, 7, 2, 2, 54, 2];

const formatedNumber = numbers.reduce((acc, atualItem) => {
    if(acc.indexOf(atualItem) < 0) {
        acc.push(atualItem);
    }

    return acc;
}, []);ku

console.log(formatedNumber);

const studentAverage = [9.5, 10.0, 7.9, 2.5, 5.5];
const averageLength = studentAverage.length;

const formatedAverage = studentAverage.reduce((acc, atualItem) => {
    return acc + atualItem;
}, 0) / averageLength;

console.log(formatedAverage);