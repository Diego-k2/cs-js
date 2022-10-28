function soma(num1, num2){ //parametros;
    return num1 + num2;
}




//ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade} anos`;
}

// console.log(nomeIdade("Diego", 21));

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(2, 4)));

