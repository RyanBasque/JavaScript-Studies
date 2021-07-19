let n = 'global';

function mostraN () {
    // Todas as variáveis que eu criar aqui dentro só tem o alcance dessa função, idependente de ser var, let, const
    // let n = 'local';
    // pega o valor do let dentro da função

    let n1 = 'local';

    if(true) {
        // criei outro escopo de bloco, ou seja, o log lá em baixo não será alterado, mas se criar um var
        // o escopo passa a ser o escopo da função inteira
        let n1 = 'n1 dentro do if';
        var n2 = 'var n2'
    }

    console.log(`O valor de n1 é: ${n1}`);
    console.log(`O valor de n1 é: ${n2}`);
};

mostraN();

console.log(`O valor de n é: ${n}`);

function fnExt() {
    let n = 'n local da função fnExt';

    function fnInterna () {
        let n = 'n local da função fnInterna';
        console.log(n);
    };

    fnInterna();
    
    console.log(n)
};

// fnInterna() não definida;

fnExt();