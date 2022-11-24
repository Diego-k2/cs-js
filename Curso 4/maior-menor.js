const valoresLivros = [25, 15, 30, 50, 5, 20];
let maior = 0;
let menor = 0;

for (let index = 0; index < valoresLivros.length; index++) {
    
    if(valoresLivros[index] > maior){
        maior = valoresLivros[index];
        if(menor === 0){
            menor = maior;
        }
    } else if(valoresLivros[index] < menor) {
        menor = valoresLivros[index];
    }

    console.log(`O MAIOR É ${maior}`);
    console.log(`O MENOR É ${menor}`);

}