// var isValid = false;

// function test () {
//     console.log('Test One');
// };

// Para evitar poluição de escopo global, ou seja, uma variável ou uma função substituindo a outra, foram criadas as funções auto invocáveis (IIFE)

(function (win, doc) {
    win.alert('IIFE 2');
    document.write('Teste de Doc')

    let isvalid = true;
    function showValid () {
        console.log(isValid);
    };

    showValid();
})(window, document);