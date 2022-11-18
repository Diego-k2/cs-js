const cliente = {
    nome: "Diego",
    idade: 36,
    cpf: "6599595",
    email: "difjhfi|@gmail.com"
}


cliente.listaTelefone = ["116959959"];

console.log(cliente);

cliente.listaTelefone.push("45454545454");

console.log(cliente);

console.log(cliente.listaTelefone[1]);
