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

let relatorio = "";

for (let info in cliente) {

    if(typeof cliente[info] ==="object" || typeof cliente[info] === "function"){
        continue;
    }
    relatorio += `${info.toUpperCase()} = ${cliente[info]}//`;
}

console.log(relatorio);