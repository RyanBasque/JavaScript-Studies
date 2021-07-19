let i = 0;

while(15 > i) {
    i++

    if(i == 5) {
        continue
        // pula para o próximo número
    }

    if(i >= 10) {
        console.log('Maior e parou');
        break
    }

    console.log(i);
};