const clientes = [
  {
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
  }, 
  {
    nome: "Maria",
    idade: 21,
    cpf: "65965656",
    email: "diego@rmail.com",
    fones: ["11992109298", "11994721287"],
    dependentes: [
      {
        nome: "Gabriel",
        idade: 20,
        parentesco: "Esposa",
      },
      {
        nome: "Arthur",
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
    }
];


const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; //Spread operator (espalha os conteudos de cliente)

console.log(listaDependentes);

console.table(listaDependentes); //Apresenta os dados como tabela


//DESAFIO

const clienteDesafioArray = [];

for (let index = 0; index < clientes.length; index++) {
  clienteDesafioArray.push(...clientes[index].dependentes);
}

console.table(clienteDesafioArray);
