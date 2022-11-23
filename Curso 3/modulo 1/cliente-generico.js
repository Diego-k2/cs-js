function Cliente(nome, cpf, email, saldo){ //ESSE É UM CONSTRUTOR IGUAL AO  JAVA
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.exibeSaldo= function(){console.log(this.saldo);};

    this.setNome = (nome) => this.nome = nome; //Setter
    this.getNome = () => this.nome; //Getter

}


const pessoa = new Cliente("Diego", "48983873817", "diego@diego.com", 1200); //INSTANCIANDO UM OBJETO EM JS 

const pessoa2 = new Cliente("Maria", "23424234", "Maria@Maria.com", 3000);


console.log(pessoa);

console.log(pessoa2);

pessoa.exibeSaldo();
pessoa.setNome("Alisson");
console.log(pessoa);

console.log(pessoa.getNome());

pessoa2.exibeSaldo();