function calcImc(height, weight) {
    if(height && weight) {
        if(typeof height === 'number' && typeof weight === 'number') 
            return (weight / (height ** 2)).toString(); 
        else throw new Error('Not a Number');
    } else throw new Error('Please, pass params');
};

// console.log(calcImc(1.71, 55));

const newVar = function opa () {
    console.log('eai');
};

console.log(newVar());