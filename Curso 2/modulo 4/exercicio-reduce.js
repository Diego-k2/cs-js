const numeros = [43, 50, 65, 12];


const somaNumeros = (numeros) => {
   return numeros.reduce((acumulador, numero) => acumulador + numero);
}


console.log(somaNumeros(numeros));