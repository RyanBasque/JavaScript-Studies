// Jeitos de declarar: var, let, const

let nome = 'Ryan'; // String é em envolvido em aspas

var teste = 'Teste';
var teste = 10; // Tipo número (Number)

let testeDois;
testeDois = 'Variáveis podem ser inicializadas sem valor';

const valorInalteravel = 'Valor que não muda, variável constante';
// valorInalteravel = 'Mudei o valor?';

// Isso não dá erro por conta do uso de var, com let bateria o erro Identifier 'teste' has already been declared.
// Por esse motivo e outros o uso de var vem sido desconsiderado

console.log(teste)