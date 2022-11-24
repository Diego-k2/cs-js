class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    } 

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }

    exibirSaldoTeste(){
        return this.saldo;
    }

}   


const c1 = new Cliente("Diego", "Diego@diego.com", "1212324", 2133);

console.log(c1.nome);

console.log(c1.exibirSaldoTeste());