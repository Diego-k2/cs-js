const livros = require("./lista-livros");
let maisBarato = 0;


for (let index = 0; index < livros.length; index++) {

    if(livros[index].preco < livros[maisBarato].preco){
        maisBarato = index;
    }
}

console.log(`O MAIS BARATO É ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`);





