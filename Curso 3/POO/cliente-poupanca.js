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

class ClientePoupanca extends Cliente{

    constructor(nome, email, cpf,saldo,saldoPoupanca){
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(deposito){
        this.saldoPoupanca += deposito;
    }

    exibirSaldoPoupanca(){
        console.log(this.saldoPoupanca)
    }
}


const clientePoup = new ClientePoupanca("Diego", "diego@diego.com", "12111321", 12000, 2000);


clientePoup.exibirSaldo();
clientePoup.exibirSaldoPoupanca();