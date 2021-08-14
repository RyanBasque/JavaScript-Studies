test();
// testeTwo(); testeTwo is not defined
// Isso porque a função que está atrelada a constante testTwo, e constante, por sua vez, não é içada (const e let não são içadas)

function test () {
    // console.log(testFour); // Cannot access 'testFour' before initialization
    console.log('Teste 1'); 
};

const testTwo = function () {
    console.log('Teste 2');
};

testTwo();

// Todas as funções são içadas para o topo dp código, por isso a função é chamada sem retornar nenhum erro
// mas isso só acontece com function declaration

// console.log(testeTree); // a variável existe, ou seja, ela é içada, mas ainda não teve seu valor atribuído (só passa a ter avlor depois da linha 19)
var testeTree = 'variável';

const testFour = 'variável com const';
// const testFour = 'variável com const'; SyntaxError: Identifier 'testFour' has already been declared

console.log(testFour);