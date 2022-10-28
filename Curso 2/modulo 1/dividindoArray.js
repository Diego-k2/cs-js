const alunos = [
  "Joao",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinicius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];


const primeirosAlunos = alunos.slice(0, alunos.length/2);
const outrosAlunos = alunos.slice(alunos.length/2);

console.log(outrosAlunos);
console.log(",")
console.log(primeirosAlunos);