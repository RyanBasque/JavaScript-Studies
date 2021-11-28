### JavaScript 👋

- JavaScript é uma linguagem de programação não compilada, ou seja, não necessita de um compilador para rodar (ex: Java e seu sdk).
- JavaScript tem uma tipagem fraca, ou seja, você pode aplicar vários tipos de dados à mesma variável.
- É uma linguagem de multiparadigma, ou seja, não há necessidade de seguir um padrão, como POO (programação orientada a objetos).
- Principal uso: Client-side (browser), mas também com Server-side (NodeJS).

### Babel

- Apesar do JavaScript ser uma linguagem não `interpretada`, nas novas updates (ES5+) se tornou necessário o uso de um compilador (para que todos os sites na web não quebrem com uma mudança direta na fonte do JavaScript), que no caso, é o BabelJs.
- O Babel transforma let em var, arrow functions em functions, etc. Vejas as compatibilidades aqui https://github.com/kangax/compat-table;

### Ferramentas necessárias

- Browser evergreen (que está 100% atualizada com a linguagem);
- Git e GitHub;
- VsCode ou outros;
- NodeJs;

### Testes de JavaScript

Existem várias formas de testar um arquivo JavaScript, citarei quatro:

- No console Node usando o comando: node caminho-do-arquivo (use tab para ver quais arquivos hão);
- Usando o comando node no terminal e logo em seguida colocando o código para testar (control + c para sair);
- Usando o console (F12) do browser;
- No browser em uma página HTML dentro da tag <script></script>, sendo uma tag normal ou uma orfã com caminho especificado para o arquuvo JavaScript <script src="./variaveis.js">.

### Algumas dicas e coisas a se fazer:

- Não colocar o script dentro do head (motivo: performance);
- Colocar o script orfão dentro do body, mas no fim (motivo: performance);
- Code plugin: Code Runner, deixa disponível um botão de "run" no canto superior direito, executando um arquivo (simulação do node caminho-do-arquivo, mas no arquivo que você está visualizando).

### Polyfills

- Fazer com que métodos que não são reconhedos pelo browser sejam reconhecidos pelo JavaScript (ex: Array.prototype.find);

### Teorias:

- Alguns códigos só funcionam no browser (na DOM), como por exemplo, o alert(`Olá, mundo! 👋`). Esse código não funciona no terminal node por razões óbvias (o terminal não pode exibir uma alerta). A mensagem de erro é: Uncaught ReferenceError: alert is not defined;
- DOM: Document Object Model;
- Uma vez que você cria um let arry = []; e um let \_arry = [], os dois não tem o mesmo valor, então arry === \_arry retorna false. Isso porque ele compara o espaço alocado na memória para cada array

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
- É possível criar uma variável sem o uso de nenhuma palavra reservada, mas isso `faz com que o escopo dela seja global` (isso pode ser impedido com o uso do uso strict);

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

### Operador de consciência nula

- É um operador lógico que retorna seu lado direito quando o operador esquerdo é `null`ou `undefined`;
- Importante relevar que ele não olha para os operadores `Falsy`, apenas se o valor é null ou undefined;
- ex: const foo = null ?? 'default string'; // default string
- ex: const baz = 0 ?? 42; // 0

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

- Existem 2 tipos de criação de array, a sintaxe Formal e a literal (mais usada);
- Formal: const arr = new Array();
  // Use (valor) para iniciar com valor, ou sem para iniciá-la com valor nenhum. Use também para limpar o array de um jeito mais formal e elegante (ex: const a = [0, 1, 2]; a = new Array)
- Existem vários jeitos de colcoar valores, são alguns deles:
- arr[3] = 'teste'; arr.push('teste 2');
- Literal: const teste = [];

### Objetos

- Também há um jeito formal: const pessoa = new Object();
- Jeito literal: const pessoa = {};
- Você pode iterar objetos usando for in;
- Use .chave ou ['chave'] para buscar um valor ex: const pessoas = { nome: `Ryan` };
- console.log(pessoas.nome);

### Métodos

- São funções atreladas a objetos;
- const teste = { funcao: function (n) {...} };
- teste.funcao(n);
- Toda função dentro de um objeto é um `MÉTODO`, como por exemplo: método alert do obketo window (window.alert("Algo"));

### This

- O This em arrow functions é mudado, dependendo do contexto, não retorna nada.
- O This pode representar muitas coisas. Dependendo do contexo, como o de uma arrow function, ele referencia outra coisa na web, por exemplo, representa `o objeto window que contem os métodos alert, prompt, locate, etc`;
- Voltarei nesse módulo depois;

### Wrapper

- Com excessão de null e undefined, todos os tipos primitivos podem ser envolvidos usando o Wrapper, que basicamente é: (antes) const str = "teste" (agora) const new String("teste");
- Isso é pouco usado e faz com que o tipo deixe de ser string para ser um objeto de string fazendo com que a string agora tenha métodos por ser um objeto;

### Valor vs referência

...
let arry = [];
let \_arry = [];

arry === \_arry || console.log(false);
// Isso porque ele compara o espaço de memória do computador alocado a esse array
// Mas se eu disser que arry = \_arry, eu estou dizendo que eles compartilham o mesmo espaço de memória, e consecutivamente os mesmo valores;

arry = \_arry;

arry[0] = "teste";

console.log(arry, \_arry); // ["teste"] ["teste"]
...

- Ver mais em './revisão-de-lógica/valor-vs-referencia.js'

### Tratamento de erros (bloco try catch finnaly)

- Existem alguns meios de tratar erros e evitar que eles aconteçam, o mais popular é a função throw Error('mensagem';
- Essa função faz com que, se houver um erro (como de tipagem, por exemplo, visualizar melhor em './revisão-de-lógica/tratamento-de-erros.js'), retorna um console.log com a mensagem de erro.
- Usando o bloco try {} catch (error) {}, podemos dizer ao JavaScript: "ei, tente executar esse código", e se ele não conseguir, passa a executar as funções do bloco catch (ver melhor em './revisão-de-lógica/tratamento-de-erros.html');
- Excessão: o JavaScript ignora absolutamente todo, `todo` código abaixo se houver erros, mas se você usar um bloco try catch, ele continua a execução (ignora tudo que vem abaixo desse bloco);
- O bloco finnaly é executado se houver ou não um erro;

## Sistema léxico do JavaScript

- O que é uma instrução? Qualquer bloco de código que o JS interpreta (ex: 10 + 20);
- Existem comentários de uma única linha (//) e os de múltiplas linhas (/_ e _/);
- O JavaScript é case sensitive, ou seja diferencia letras maiúsculas de minúsculas;
- Existem palavras reservadas do JavaScript, ou seja, palavras que não podem ser usadas para dar nomes, como var, let, for, etc;
- Veja mais da spalavras reservadas em (Palavras reservadas)[https://www.google.com/search?q=palavras+reservadas+javascript&oq=palavras+reserva&aqs=chrome.4.0l3j69i57j0l6.4154j0j7&sourceid=chrome&ie=UTF-8];
- O ponto e vírgula é opcional no JavaScript, tudo depende do time em que você está trabalhando;
- Mas o ponto e vírgule obrigatório se você colocar 2 códigos na mesma linha (ex: let a = "oi"; teste())

### Use Strict

- Deixa o código mais seguro, diminuindo as chances de dar problema;
- Muda muita coisa no JavaScript
- Coloque "use strict" na primeira linha do código, atenção, `primeira linha` ou antes da primeira declaração;
- Uma das coisas que ele faz é evitar o criação de variáveis sem usar let, const ou var;
- (Site da mozzila) [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode];

## Funções

- Em Javascript, funções são objetos com a incrível capacidade de serem invocados;
- Podem ser literais, isto é, sem usar o operador new para criar a função;
- Até o ES5, funções eram o único jeito de gerar escopo de variáveis;
- Podem ser IIFE (Immediately Invoked Function Expression), isto é, podem ser invocadas imediatamente;
- IIFE não é necessário se você está usando bundle, node ou esModule;
- Ver mais sobre `IIFE` em './funcoes/IIFE.html';
- Podem ter propriedades internas como arguments e names;
- Nomes podem ser opcionais, ou seja, as funções podem ser anônimas

### IIFE

- `Não é necessário se você já estiver usando um Bundle (Webpack, Parcel, etc), USModules (browsers evergreen) ou se você programar em NodeJs`
- As IIFE (funções auto-invocáveis) são funções que tem como objetivo suprir o problema das funções onInit no JS base (se você tem 2 scripts com o mesmo nome de função, ex: function init() {...} init(), o Js não compreende que são duas funções diferentes, ou seja, evita poluição de escopo global), por isso, foi criado as IIFE's;
- Sintaxe: (function () {console.log('On init!')})();
- Você pode passar argumentos para essas funções usando (function (n1, n2){...})(0, 4500);
- Você pode passar como argumento final as variáveis window e document (reservadas do Js) veja melhor e, './funcoes/IIFE-menu.js';

### Hoisting

- Hoisting é a capacidade do interpretador do JavaScript de içar funções e var's para o começo do código;
- Isso permite com que você possa criar uma `function` teste () na linha 10 e o chame da linha 1 sem dar problemas;
- Isso também funciona com `var`'s, mas não com const e let, isso faz com que quando você criar uma var na linha 70 e a chama na linha 20, ou até mesmo 69, um erro não retornará, e sim a variável com valor undefined, isso porque ela existe, mas ainda não teve seu valor atribuído (linha 70);

### Propriedade Arguments

- A propriedade arguments nasceu para suprir a necessidade de ter infinitos argumentos dentro de uma função;
- Quando você desejar usar o arguments, não é necessário adicionar argumentos nos () de uma função, só precisa chamar o arguments, exemplo: `test(){console.log(arguments)}; test(1, 2, 3, 5, 7, 1, 10, 'oi', [0, 4, 5])` // output: { '0': 1, '1': 2, '2': 3, '3': 5, etc };
- Veja mais sobre o uso em './funcoes/arguments.js';
- Arguments tem uma estrutura bem parecida com array, por isso, sua alcunha é 'array like';
- É possível pegar um item específico com arguments[index], exatamente igual a um Array;
- Arguments não existem dentro de `arrow functions`, só existem em IIEF's, Function expression ou function declaration;

### Propriedade name

- A propriedade name não é muito utilizada, mas ela retorna o nome da função, sua sintaxe é console.log(nomeDaDuncao.name);
- Funciona com todos os tipos de função, mas se for uma function declaration e o segundo bloco de função for nomeada, ela retorna o segundo nome, ex: const test = function opa() {...}; console.log(test.name); // 'opa';

### Objetos de primeira classe

- Funções são tratadas como objetos, ou seja objetos de primeira classe. Isso faz com que seja possível passar uma fn (função) como paramêtro para outra (um callback, cd), fazer que uma fn seja retornada por outra, que uma fn seja proriredade de um objeto, ou seja, um método, e também que uma fn tenha suas próprias propriedades;
- Callbacks são meios de passar uma função como parâmetro de uma função, assim, podem executá-la dentro do corpo da própria (ex: function test(cb){} test(() => conosole.log('opa')););
- Closures são meios de "guardar um cachê e usá-lo depois", ou seja você pode retornar uma função dentro de outra função, e se, você passar um parãmetro no primeiro corpo, ele fica em 'cachê'para ser usado quando necessário (veja mais em './funcoes/obj-primeira-classe.js');
- Prorpiedade é outro meio de guardar um cachê, mas como forma de variável. Crie uma função e depois use nomeDaFuncao.nomeDaVarivel = valor (veja mais em './funcoes/obj-primeira-classe.js');

## DOM - Parte I

- O que é a DOM? (Document Object Model) é uma API disponível apenas nos browsers que edita o que é mostrado na tela;
- DOM é uma árvore que representa o HTML (mundo do javascript), onde nós podemos mudar a dom que será refletido no HTML e vice versa;
- O F12, por exemplo, mostra o DOM, e se você mudar o DOM, reflete momentaneamente no HTML;
- A dom é representada pela variável document, tanto que se você der um log nela, será possível visualizar o "html" da pagína;
- Então, se você quiser mudar um h1, por exemplo, você terá que usar document.[...];
- Você pode usar um id, tag ou classe pra selecionar e mudar um elemento DOM;
- document.getElementById("opa").textContent = "olaaar" // isso mudará o texto do elemento com id opa;

### Diferença entre querySelector e getElement

- O querySelector aceita tanto classe, quanto id e outros parametros de seleção.. Porém, isso faz com que você tenha que colocar a estrutura, exemplo: document.querySelector("#opa"), ele pega o primeiro elemento com o seletor (o que pega todos é o querySelectorAll);
- O getElement, aceita apenas a estrutura definida para aquela função, getElementById = id, geteElementByClassName = class;
- O querySelecot vasculha a DOM inteira para achar o parâmetro, já o getElement vai direto no que você escolheu (ele usa os parâmetros do css, então .class, #id, etc) // querySelector("#opa p");

### DOM - Seletores

- document.getElementById('title1') - pega um único elemento pelo id;
- document.getElementsByTagName() - pega elementos pela tag em forma de array like;
- document.getElementsByClassName() - pega elementos pela classe em forma de array like, ou seja, retorna todos os objetos com aquela classe, então para mudar, por exemplo, o texto de um elemento com a classe title1, você pode usar document.getElementsByClassName('title1')[0].textContent = 'olaaa';
- document.querySelector('#paragrafo2') - pega os elementos pelo seletor css, ou seja, #test, .test;
- document.querySelectorAll() pega todos os elementos pelo seletor css, ou seja, #test, .test, em forma de array like (nodeList);
- O método .map não existe no tipo nodeList, então você deve usar um forEach, ou seja, document.querySelectorAll('#test').forEach(element => {element.textContent = 'olaaa'});

* Você pode usar um Array.from(nodelist) para transformar o nodeList em um array e posteriormente usar o map;

- O document.getElementByClassName() retorna uma coleção de elementos, array like, e para que você possa mexer em cada um individualemente, é necessário usar [index].comando();
- O item acima também reflete no tagname e selectorAll;

### innerHTML vs innerText vs textContent

- O innerHTMl rendereiza tanto tags, quanto texto // document.querySelector('#paragrafo2').innerHTML = '<h1>Ola</h1>' // Ola;
- O innerText rendereiza apenas texto // document.querySelector('#paragrafo2').innerText = '<h1>Ola</h1>' // <h1>Ola</h1>;

## Pegar tag filha ou tag pai de um elemento

...
const htmlElement = document.querySelector('#top-bar');
const pai = htmlElement.parentElement;
// const filho = htmlElement.firstElementChild;
const filho = htmlElement.children[0]; // (isso porque retorna um array like)
...

## Remover elementos do DOM

...
const htmlElement = document.querySelector(".top-bar p");
const htmlFather = htmlElement.parentElement;
console.log(htmlFather.parentElement);
htmlFather.parentElement.removeChild(htmlFather);
...

## Arrays

- Variáveis para guardar mais do que um valor;
  ...
  const test = new Array(6); // um array com 6 posições vazias;
  ...

## Criação de Arrays

- Literals - const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
- Construtores - const array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
- Os dois fazem a mesma coisa, portanto use apenas um (use de acordo com o cenário);

### Métodos

- Jeitos de modificar ou validar arrays;

### every

- Faz uma validação para cada item do array e retorna um boolean. Todos os itens são números? não, então retorne false. Todos são string? sim, então retorne true;

### filter

- Recebe uma function e retorna um array com os itens que passaram na validação, ex: const opa = [0, 'ryan', 12, 90].filter(item => typeof item === 'number') // [0, 12, 90];

### foreach

- Sempre retorna undefined, porque não retorna nada;
- Não altera o array original;
  ...
  const opa = [0, 'ryan', 12, 90].foreach(item => typeof item === 'number') // undefined;
  ...

### map

- Recebe uma function e retorna um array com os itens modificados, ex: [0, 'ryan', 12, 90].map(item => item \* 2) // [0, 'ryan', 24, 180];

### find

- Não funciona no navegador Internet Explorer;
- Retorna o primeiro valor achado que satisfaça uma condição;
  ...
  const test = [0, 123, 54, 'ryan', 'basque'];
  console.log(test.find(item => item === 'basque')); // 'basque'
  ...
- Retorna undefined se não existir;

### includes

- Não funciona no navegador Internet Explorer;
- Verifica se há um determinado item dentro do array, retorna um boolean;
  ...
  let arry = [0, 2343234, 5, 6456, 1346, 97, 5];
  console.log(arry.includes(2343234)); // true
  ...

### indexOf e lastIndexOf

- IndexOf(1) retona a primeira posição do elemento dentro do array (retorna -1 se não existir);
- LastIndexOf(5) retona a última posição do elemento dentro do array (retorna -1 se não existir);

### concat

- Sem muito o que dizer, simplesmente junta dois arrays;
- Às vezes usam pra clonar arrays;
  ...
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = a.concat(b); // [1 , 2, 3, 4, 5, 6];
  ...

### push

- Altera o array original e retorna o novo índice do array;
- Adiciona um valor no último índice do array;
  ...
  const a = [0, 1];
  a.push(2); // [0, 1, 2];
  ...

### pop

- Altera o array original e retorna o último elemento removido;
- Remove um valor no último índice do array;
  ...
  const a = [0, 1, 2];
  a.pop(); // [0, 1];
  ...

### shift

- Altera o array original e retorna o primeiro elemento removido;
- Remove um valor no primeiro índice do array;
  ...
  const a = [0, 1, 2];
  a.shift(); // [1, 2];
  ...

### unshift

- Altera o array original e retorna o novo índice do array;
- Adiciona um valor no primeiro índice do array;
  ...
  const a = [0, 1];
  a.unshift(2); // [2, 0, 1];
  ...

### slice

- Faz um recorte do array;
- Pega o indice de onde iniciar e onde terminar;
  ...
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const b = a.slice(2, 5); // [2, 3, 4];
  ...

### splice

- O mais poderoso;
- Modifica o array original;
- Remove um recorte do array;
- Pega o indice de onde iniciar e onde terminar;
  ...
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const b = a.splice(2, 5); // [0, 1, 5, 6, 7, 8, 9];
  ...
- Se receber mais do que 2 parâmetros, ele remove os itens e insere novos;
  ...
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const b = a.splice(2, 5, 'a', 'b', 'c', 'd', 'e'); // [0, 1, 'a', 'b', 'c', 'd', 'e', 8, 9];
  ...

## Array from e array of

- Criado a partir do construtor Array; // Array.from();
- São funçoes nativas;
- Sem suporte pra IE (internet explorer); // Use um polyfill;

### Array.from()

- Cria um array copiando outro;
- Especialmente útil quando se quer transformar um array like em um array;
  ...
  const arrOne = new Array(13); // empty x 13
  const arrOneCopy = Array.from(arrOne); // faz uma cópia do array só que com 13 itens com undefined
  ...

### Array.of()

- Cria um array com x elementos (undefined);
- O método Array.of() cria um nova instância de Array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos.
  ...
  const arrOne = Array.of(1, 2, 3); // [1, 2, 3]
  ...
- A diferença entre o Array.of() e o construtor de Array é no tratamento dos argumentos inteiros: Array.of(7) cria um array com um único elemento, 7, enquanto Array(7) cria um array vazio de propriedade length igual a 7 (Nota: isso quer dizer um array com 7 espaços vazios, e não com valores do tipo undefined).

## Spread Operator

- Pega os itens dentro do array e os retorna de forma solta;
  ...
  const arr = [1, 2, 3];
  const arr2 = [...arr, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
  sum(arr); // sum([1, 2, 3]) -> ERROR!
  sum(...arr); // sum(1, 2, 3) -> 6
  ...

## Rest Operator (para Arrays)

- Pega o resto do Array e retorna em forma de Array;

...
const aa = [0, 1, 2, 5, 6, 8, 10];
const [n1, n2, n3, n4, ...n5] = aa;
console.log(n1, n2, n3, n4, n5);
...
