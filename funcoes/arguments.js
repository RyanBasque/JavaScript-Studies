(function () {
    console.log(arguments); // { '0': 1, '1': 4, '2': 6, '3': 7 }
    // Arguments tem o outro nome de array like
    let totalSum = 0;

    for(let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    };

    console.log('totalSum: ', totalSum);

})(1, 4, 6, 7);

function test () {
    let totalSum = 0;

    for(let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    };

    console.log('totalSum Test: ', totalSum);
};

test(1, 7, 345, 745, 56);
test(1, 7, 345, 745);
test(1, 7, 345, 745, 56, 23, 645, 545, 75, 6784);