// var isValid = !false;

// function test () {
//     console.log('Test Two');
// };

// Para evitar poluição de escopo global, ou seja, uma variável ou uma função substituindo a outra, foram criadas as funções auto invocáveis (IIFE)

(function () {
    let isvalid = true;
    console.log("Test One - Modal", isvalid);

    function showValid () {
        // console.log(isValid); ReferenceError: isValid is not defined
        console.log("opa");
    };

    showValid();
})();