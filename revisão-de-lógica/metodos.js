const produto = {
    nome: 'caneta',
    quantidade: 10,
    // comprarCaneta: function (n) {
    //     if(n > this.quantidade) return "Estoque indisponível";

    //     this.quantidade -= n;
    // },
    comprarCaneta(n) {
        if(n > this.quantidade) return "Estoque indisponível";

        this.quantidade -= n;
    }

    // Não funciona com arrow function
}

produto.comprarCaneta(3);
console.log(produto);

/* 
    o This pode representar muitas coisas. Dependendo do contexo, como o de uma arrow function, ele referencia outra coisa
    na web, por exemplo, representa o objeto window que contem os métodos alert, prompt, locate, etc

*/