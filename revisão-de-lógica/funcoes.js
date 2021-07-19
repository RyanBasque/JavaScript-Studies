function ola() {
    console.log('Olá, isso é uma função!');
};

const ola2 = function () {
    console.log('Olá, isso é uma função usando variável!');
};

const ola3 = () => {
    console.log('Olá, isso é uma função usando o ES2015!');
};

ola();
ola2();
ola3();

// Com retorno

function pegaDiaDaSemana () {
    let date = new Date().getDay();
    let atualDay;

    switch(date) {
        case 1:
            atualDay = 'Hoje é: Segunda';
            break;
        case 2:
            atualDay = 'Hoje é: Terça';
            break;
        case 3:
            atualDay = 'Hoje é: Quarta';
            break;
        case 4:
            atualDay = 'Hoje é: Quinta';
            break;
        case 5:
            atualDay = 'Hoje é: Sexta';
            break;
        case 6:
            atualDay = 'Hoje é: Sábado';
            break;
        case 7:
            atualDay = 'Hoje é: Domingo';
            break;

        default:
            atualDay = 'Não foi achado nenhum dia da semana';
    };

    return atualDay;
};

let dia = pegaDiaDaSemana();

console.log(dia);

function teste (n1, n2) {
    // n1 = undefined, mas se eu criar um
    let _n1 = n1 || 0;
    // ou você pode colocar um n2 = null no paramêtro
    return _n1 + n2;

    // se eu rodar teste(1) com só um parametro, vai retornar number + undefined = NaN;
}

console.log(teste(1));