### JavaScript 👋

- JavaScript é uma linguagem de programação não compilada, ou seja, não necessita de um compilador para rodar (ex: Java e seu sdk).
- JavaScript tem uma tipagem fraca, ou seja, você pode aplicar vários tipos de dados à mesma variável.
- É uma linguagem de multiparadigma, ou seja, não há necessidade de seguir um padrão, como POO (programação orientada a objetos).
- Principal uso: Client-side (browser), mas também com Server-side (NodeJS).

### Babel

- Apesar do JavaScript ser uma linguagem não interpretada, nas novas updates (ES5+) se tornou necessário o uso de um compilador (para que todoso os sites na web não quebrem com uma mudança direta na fonte do JavaScript), que no caso, é o BabelJs.
- O Babel transforma let em var, arrow functions em functions, etc. Vejas as compatibilidades aqui https://github.com/kangax/compat-table;

### Ferramentas necessárias

- Browser evergreen (que está 100% atualizada com a linguagem);
- Git e GitHub;
- VsCode ou outros;
- NodeJs;

### Testes de JavaScript

Existem várias formas de testar um arquivo JavaScript, citarei duas:

- No console Node usando o comando: node caminho-do-arquivo (use tab para ver quais arquivos hão);
- Usando o comando node no terminal e logo em seguida colocando o código para testar (control + c para sair);
- Usando o console (F12) do browser;
- No browser em uma página HTML dentro da tag <script></script>, sendo uma tag normal ou uma orfã com caminho especificado para o arquuvo JavaScript <script src="./variaveis.js">.

Algumas dicas e coisas a se fazer:

- Não colocar o script dentro do head (motivo: performance);
- Colocar o script orfão dentro do body, mas no fim (motivo: performance);
- Code plugin: Code Runner, deixa disponível um botão de "run" no canto superior direito, executando um arquivo (simulação do node caminho-do-arquivo, mas no arquivo que você está visualizando).

Teorias:

- Alguns códigos só funcionam no browser (na DOM), como por exemplo, o alert(`Olá, mundo! 👋`). Esse código não funciona no terminal node por razões óbvias (o terminal não pode exibir uma alerta). A mensagem de erro é: Uncaught ReferenceError: alert is not defined;
- DOM: Document Object Model;

### Variáveis

- Podem ser criadas usando var, let ou const;
- Var é do ES5, funciona em diversos browsers;
- Let e const vieram a partir do ES2015, mas não funcionam em 100% dos browsers;
- É possível redeclarar o valor da variável infinitas vezes sem se preocupar com o tipo de dado (JavaScript não é uma linguagem tipada);
- Não é possível declarar duas variáveis com o mesmo nome `Com excessão se elas forem criadas com o uso de var` (por esse otivo e outros o uso de var vem sido desconsiderado);
- Let e var significam a mesma coisa (com excessão do erro citado acima), mas o const significa uma variável (constante) que não pode ter seu valor alterado (caso tente alterar seu valor, o JavaScrit apresentará o seguinte erro: TypeError: Assignment to constant variable);
- O JavaScript não aceita hifens na declaração de nomes de variáveis;
- O JavaScript também não aceita iniciar o nome com número, mas aceita se o número vier em segundo caractere para frente;
- O JavaScript também não aceita caracteres especiais, salvo \_ e $;

### Tipos de dados primitivos

- Os tipos primitivos são: Number (int e float), String e Boolean;
- Number int: números inteiros;
- Number float: `pontos flutuantes` ou números decimais;
- Typeof nome-da-variável para identificar o tipo de dado;

### Variáveis - String

- Variáveis tipo string são identificadas pelo uso de aspas;
- Em JavaScript o uso de aspas simples ou duplas não faz diferença alguma;
- Também há o uso de template literals, fazendo o uso de crase (ex: let nome = `Ryan`);
- É possível usar aspas simples dentro de aspas duplas e vice versa, mas nunca o mesmo tipo de aspas dentro do valor (ex: let teste = "variável com "aspas"" // erro; let testeDois = "variável com 'aspas'");
- A solução do problema de cima é dizer para o JavaScript que aquilo é literal com o uso de barras (ex: let teste = " meu nome é \"Ryan\" ");
- É possível colocar o valor de uma varíavel dentro de uma string e concatenar strings com o template literals (\* apenas no ES2015+ ex: let teste = `String com valor ${nome-da-variavel}`);

### Variáveis - Number

- Dois tipos: Int (inteiro) e Float (flutuante, decimal);

### Variáveis - Boolean

- Ou é true ou false;

### Variáveis - Undefined, Null e Symbol (ES2015)

- Undefined signifca que a váriavel foi declarada, mas não teve valor atribuído;
- Usar typeof ou console.log pode verificar se há algum valor;
- Uma variável com valor `null` tem como tipo o {object}. Isso é um erro de implementação do JavaScript, mas para não quebrar código antigo, este erro não foi resolvido.

### Variáveis - Conversão entre tipos

- O JavaScript é inteligente o suficiente para fazer uma conversão implícita, ou seja, ele sabe que não é possível multiplicar um número por uma string, então ele verifica se é possível fazer uma conversão de string para número, e se possível, faz a multiplicação;
- O item acima pode ser um problema na hora de somar números com strings, porque ele não vai somar, e sim concatenar;
- No item acima, o JavaScript transforma os 2 em string (por baixo dos panos) obs: o JavaScript apenas faz isso na hora de somar;
- Toda informação que vem na interface gráfica do JavaScript vem como string, mesmo que você coloque, por exemplo, um <input type="number">;

### Conversão entre tipos - parseInt() e parseFloat()

- let n1 = "10.89723". Usando o parseInt(n1), ele faz virar número ignorando completamente os números após a vírgula, deixando apenas como 10.
- Já o parseFloat(n1) transformaria em um número quebrado, exatamente como era quando string, ou seja: 10.89723.
- O float considera números decimais apenas os que tem (.), ou seja ignoraria e deixaria apenas se fosse: 10,89723.
- O parseInt ignora as letras e números que vem após os números (ex: 10ads1232, saída: 10);
- O parseInt retorna NaN se o primeiro caractere for uma string;
- O construtor Number() retorna NaN se houver qualquer letra dentro da string, ou seja, aceita apenas números;

### Conversão entre tipos - Number para String

- Alguns jeitos de converter:
- let teste = 10; teste = teste + "";
- teste.toString();
- decimais: 0 - 9, hexadecimais: 0 - f(15), binário: 0 e 1;
- O toString pode receber um parametro opcional para especificar a base de conversão (decimal, hexadecimal, binário, etc);

### Operadores aritiméticos

- Os operadores aritiméticos são: +, -, \*, /, %, \*\*;
- Resto de divisão: % (muito utilizado para recuperar números múltiplos de 3, etc);
- Potência: ** (não funciona em todos os browsers, ex: 2 ** 3);
- O sinal de / tem preferência, para mudar use ( );

### Operadores de atribuição

- Todos os operadores aritiméticos estão dentro dos operadores de atribuição;
- Operador mais usado: = (serve para atribuir valor a uma variável);
- Os outros operadores servem para o último valor da variável e atribuir com uma operação;
- Exemplo: atribuicaoDeValor += 7; (soma o último valor da variável com o 7);
- Os outros operadores são: =-, =/, =\*, =%, =\*\* (são dificilmente usados);

### Operadores de incremento e decremento

- Usados para somar ou diminuir 1;
- Exemplo de uso: let i = 0; i++ (pós-incremento);
- Exemplo de uso: let i = 0; ++i (pré-incremento);
- Exemplo de uso: let i = 1; i-- (pós-decremento);
- Exemplo de uso: let i = 1; --i (pré-decremento);
- Diferença entre pré e pós:
- Quanto a otimização, o pós-incremento faz uso de uma variável temporária para armazenar o valor de i antes do incremento, já o pré-incremento adiciona o valor a variável original, no entanto isto é uma otimização prematura e é estatisticamente insignificante.

### Operadores de comparação

- Igualdade de valor: ==;
- Igualdade de valor e tipo ===;
- Diferença de valor !=;
- Diferença de valor e tipo !==;
- Menor que: <;
- Maior que: >;
- Menor ou igual que: <=;
- Maior ou igual que: >=;
- console.log(10 > 2), retorna true;

### Operadores lógicos

- Três tipos: and (&&), or (||) e not (!);

### Precedência de operadores

- O operador && tem preferência, ou seja, é executado primeiro (ex: (idade >= 18 || paisPresentes) && comprouBilhete);
- A ordem do primeiro item pode ser mudada se for usado o operador ( ), então o código dentro dos parênteses será executado primeiro;
- Resposta do primeiro item: true, false

### If e Else

- if(expressão com retorno true) { código } else { código };
- if(!condição) verifica se a condição é falsa, se sim, então o if é executado;
- Também há o else if(condição) {}

### If e Else ternário

- Um jeito de fazer um if para códigos menores;
- `let changedIf = teste === 0 ? 'retorno true' : 'retorno false' `;

### Valores falsy e truthy

- Valores considerados true ou false quando há uma condição (ex: if e else);
- Dentro de estruturas condicionais alguns valores são avaliados como true ou false, por exemplo:
- Falsy (0, '', NaN, undefined, null, false); // obs: apenas '' e não ' '
- Todos os demais são considerados true;
- `0 ? console.log('true') : console.log('0 is false')` // '0 is false';

### Curto-circuito

- Usar os operadores lógico para executar expressões de forma mais elegante;
- O exemplo mais prático de curto-circuito é com o operador &&. Este operador verifica se a condição é true, se for ele vai para próxima condição que é uma função (ex: isValid && console.log('É válido'));
- Agora se for um operador Or(||), o JavaScript verifica se a primeiro condição é true, se não for ele olha a próxima condição que é uma função (ex: isValid || console.log('Não é válido')), mas se a primeira condição for true, ele deixa de observar a próxima e simplesmente não excuta nada;
- Valores falsy e truthy são observados também;

### Condicional Switch

- Um jeito de criar um if sem repetí-lo várias vezes;
- Switch(variável) { case comparação: comando; break; variavel === 'teste': comando; break; default: comando };
- O case faz referência a comparação da variável (igual ao parametro do if), o comando é o código que ele vai rodar e o break é o que define se o switch vai parar de ser executado quando aquele case for verdadeiro;
- O default é quase um else, caso nenhum case seja verdadeiro, o default será aplicado;

### Laços de repetição

- Ajuda a quebrar esforços repetitivos;
- While(repete o laço até que a condição seja false) { código } (obs: por favor, garanta que a condição vire false);
- Let indice = 0; while(indice < 10) { i++; console.log(indice) };
- For(let i = 0; j < 10; j++) { código };
- O for recebe 3 expressões, uma variável (você pode criar uma usando let ou var), a condição de repetição e um operador de incremento ou decremento da primeira expressão (variável);
- O do { código } while() {} faz com que a ação dentro do Do seja executada pelo menos uma vez;

### Continue vs break

- Palavras que mudam o flow de um loop;
- Break, continue e return;
- O break faz com que o for, while e o switch (podem haver mais) parem de executar x código;
- O continue faz com que o um código seja ignorado caso a condição seja verdadeira (tome cuidado ao usar no while, garanta que o incrementador seja executado);

### Break vs Return

- O return para de executar a função, enquanto break a executa uma última vez antes de terminar;
- O return para e função e pode retornar algo ao mesmo tempo;

### Funções

- Existem várias maneiras de se criar uma função, dentre elas estão as com declaração função, funcions expressions (com variáveis) e as arrow functions;
- function teste() { console.log('declaração de função') };
- const teste = function () { console.log('function express') };
- const teste = () => { console.log('arrows functions') }; // existe desde o ES2015

### Funções com retorno de valores

- Retornar valores (ex: retorna o dia da semana)
- function teste() { return 6 };
- let testeVar = teste();
- console.log(testeVar) // mostra 6;

### Funções que recebem paramêtros

- Funções que recebem valores dentro de suas chaves, podendo ser opcionais ou não, usando function teste(n1, n2 = null);

### Escopo de variáveis

- Escopo de bloco: variável ou função criadas dentro de outra função só tem o alcance de bloco, ou seja, apenas naquela função;
- Podem ser criadas variáveis de bloco com mesmo nome das globais;
- Funções criadas dentro de outras funções só tem escopo de bloco;

### Arrays
