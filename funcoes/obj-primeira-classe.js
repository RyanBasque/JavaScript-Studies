// callback

function fn(callback) {
    console.log('Executar callback');
    console.log(typeof(callback));
    typeof callback === 'function' && callback(); // curto circuíto
};

// fn(function () {
//     let n = 0;
//     n += 1;
//     console.log(n);
// });

// fn();

function testCallback() {
    console.log('Test');
};

// fn(testCallback);

const obj = {
    testCallback,
    // testCallback: testCallback,
    testCallbackTwo: function () {
        console.log('2');
    },
};

// fn(obj.testCallback);
// fn(obj.testCallbackTwo);

// closure

function closure(n1) {
    return function (n2) {
        return n1 * n2;
    };
};

const testOne  = closure(2); // diz que testOne é igual a função retornada
const testTwo = testOne(10); // diz que testTwo é o retorno da função do testOne, ou seja, testOne guarda o parâmetro e usa no retorno;

console.log(testOne, testTwo);

// propriets

function functionPropriets() {
    functionPropriets.count++;
    console.log('Propriedades de uma função', functionPropriets.count, functionPropriets.test);
};

functionPropriets.count = 10; // cria um sistema de 'cache'
functionPropriets.test = 'Test';

functionPropriets();