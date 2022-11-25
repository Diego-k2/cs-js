const livros = require("./lista-livros");

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
    
    for (let index = posicaoInicial; index < arrProdutos.length; index++) {
    
        if(arrProdutos[index].preco < arrProdutos[maisBarato].preco){
            maisBarato = index;
        }
    }

    return maisBarato;
}


// console.log(`O MAIS BARATO É ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`);


module.exports = menorValor;
