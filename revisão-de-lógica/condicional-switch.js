let diaSemana = 6;

if(diaSemana == 0) {
    console.log('Hoje é: Domingo');
} else if (diaSemana === 1) {
    console.log('Hoje é: Segunda');   
} else if (diaSemana === 2) {
    console.log('Hoje é: Terça');   
} else if (diaSemana === 3) {
    console.log('Hoje é: Quarta');
} else if (diaSemana === 4) {
    console.log('Hoje é: Quinta');   
} else if (diaSemana === 5) {
    console.log('Hoje é: Sexta');   
} else {
    console.log('Hoje é: Sábado');   
};

let dia;

switch(diaSemana) {
    case 0: 
        dia = 'Domingo';
        break;
    case 1: 
        dia = 'Segunda';
        break;
    case 2: 
        dia = 'Terça';
        break;
    case 3: 
        dia = 'Quarta';
        break;
    case 4: 
        dia = 'Quinta';
        break;
    case 5: 
        dia = 'Sexta';
        break;
    case 6: 
        dia = 'Sábado';
        break;
    default:
        dia = ' -- ';
};

console.log(`Hoje é ${dia}`);