const apresentarArrow = nome => `Meu nome é ${nome}`;


console.log(apresentarArrow("DIEGO"));

//Função ocupando somente uma linha
const soma= (num1, num2) => num1 + num2;

//Caso a função ocupe mais de uma linha
const arrowMaior = (num1, num2) => {
    if(num1 <= 9 && num2 <= 9) {
        return num1 + num2;
    }
}


console.log(arrowMaior(1, 4));