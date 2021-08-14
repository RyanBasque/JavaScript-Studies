function soma (n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw Error('Erro de soma, você passou um tipo que não é number');
    }
    return n1 + n2;
};