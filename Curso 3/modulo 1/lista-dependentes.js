const cliente = {
    nome: "Diego",
    idade: 21,
    cpf: "65965656",
    email: "diego@rmail.com",
    fones: ["11992109298", "11994721287"]
}

const dependente1 = {
    nome: "Maria",
    idade: 20,
    parentesco: "Esposa"
}

const dependente2 = {
    nome: "Nice",
    idade: 21,
    parentesco: "Mãe"
}

cliente.dependentes = [dependente1, dependente2];

console.log(cliente.dependentes[1]);
