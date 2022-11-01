const cliente = {
    nome: "Diego",
    idade: 21,
    cpf: "1248548",
    numeroConta: "484884",
}

console.log(cliente);

cliente.telefone = "11994721287"; 

console.log(cliente);

cliente.telefone = "11954394048";

console.log(cliente);

delete cliente.telefone;

console.log(cliente);


/**
 * Se o campo não existir e eu fizer a chamada dele eu crio ele
 * E para deletar basta usar o operador delete e o objeto.nomeCampo
 */