function Cliente(nome, cpf, email, saldo){ //ESSE É UM CONSTRUTOR IGUAL AO  JAVA
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar= function(deposito){this.saldo += deposito};
}


function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){

    Cliente.call(this, nome, cpf, email, saldo); //herdando do Cliente, primeiro parametro é mostrando que é este objeto
    this.saldoPoup = saldoPoup;
}

ClientePoupanca.prototype.depositarPoup = function(valor) { //outra forma de adicionar um metodo no nosso objeto
    this.saldo += valor;
}

const c1 = new ClientePoupanca("Diego", "232323", "ijiji@ijfij", 1245, 3244);

console.log(c1);

c1.depositarPoup(123422);

console.log(c1);


