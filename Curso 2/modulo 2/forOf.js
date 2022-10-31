const notas = [10, 6.5, 8, 7.5];
let media = 0;


for (let nota of notas) { //é um for each
    media += nota;
}

media = media / notas.length;

console.log(media);