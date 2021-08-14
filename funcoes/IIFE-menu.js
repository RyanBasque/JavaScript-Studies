// var isValid = false;

// function test () {
//     console.log('Test One');
// };

// Para evitar poluição de escopo global, ou seja, uma variável ou uma função substituindo a outra, foram criadas as funções auto invocáveis (IIFE)

(function () {
    console.log("Test Two - Menu");

    let isvalid = true;
    function showValid () {
        console.log(isValid);
    };

    showValid();
})();