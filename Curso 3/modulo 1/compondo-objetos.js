const cliente = {
    nome: "Diego",
    idade: 21,
    cpf: "65965656",
    email: "diego@rmail.com",
    fones: ["11992109298", "11994721287"]
}

console.log(cliente);

const dependentes = {
    nome: "Maria",
    idade: 20,
    parentesco: "Esposa"
}

cliente.dependentes = {
    nome: "Maria",
    idade: 20,
    parentesco: "Esposa"
};


console.log(cliente);