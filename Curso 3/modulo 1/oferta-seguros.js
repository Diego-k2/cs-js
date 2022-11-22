const cliente = {
  nome: "Diego",
  idade: 21,
  cpf: "65965656",
  email: "diego@rmail.com",
  fones: ["11992109298", "11994721287"],
  dependentes: [
    {
      nome: "Maria",
      idade: 20,
      parentesco: "Esposa",
    },
    {
      nome: "Nice",
      idade: 21,
      parentesco: "Mãe",
    },
  ],
  saldo: 1150,

  depositar: function (deposito) {
    this.saldo += deposito;
  },

  sacar: function (saque) {
    this.saldo -= saque;
  },
};

function oferecerSeguro(obj) {
  const propsCliente = Object.keys(obj); //utilizamos para pegar as chaves 
  if (propsCliente.includes("dependentes")) {
        console.log(`Oferta de seguro para ${obj.nome} e para seus dependentes`)
    } 
}

console.log(Object.values(cliente)); //Pega somente os valores
console.log(Object.entries(cliente)); //retorna o array em forma de chave valor 

oferecerSeguro(cliente);
