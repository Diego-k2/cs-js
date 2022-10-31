const notas = [10, 9.5, 8, 6, 7];


const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10? 10 : nota + 1;
});


console.log(notasAtualizadas);
