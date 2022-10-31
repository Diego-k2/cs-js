const nomes = ["Ana", "Clara", "Maria", "Maria", "Joao", "Joao", "Joao"];


const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

/*
    O set não aceita valores duplicados 
*/