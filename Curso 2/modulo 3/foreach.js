const notas = [10, 6.5, 8, 7.5];
let media = 0;


notas.forEach(function (nota) {
    media += nota;
    console.log(media);
});

console.log(`A média é ${media/notas.length}`);