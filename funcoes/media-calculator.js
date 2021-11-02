function mediaCalculator(...args) {
    if(!args.length) return 0;

    let media = 0;
    args.map(element => {
        if(typeof element === 'number') media += element;
        else throw new Error('Por favor, passe apenas números!')
    });

    return media / args.length;
};

console.log(mediaCalculator());
console.log(mediaCalculator(0, 10, 23, 70, 217, 23, 435, 899));