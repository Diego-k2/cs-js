const cliente = {
    nome: "Diego",
    idade: 21,
    cpf: "1248548",
    numeroConta: "484884"
}


const chaves = ["nome", "idade", "cpf", "numeroConta"];

console.log(cliente[chaves[0]]);

chaves.forEach((chave) => {
    console.log(cliente[chave]);
});
