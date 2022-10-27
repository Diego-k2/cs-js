//var 
// var altura = 5;
// var comprimento = 7;
// area = altura * comprimento;
// var area;
// console.log(area + ", usando var");

// //let
// let forma = "retangulo";
// let altura = 5;
// let comprimento = 7;
// let area;


// if(forma === "retangulo"){
//     area = altura * comprimento;
// } else if(forma === "triangulo") {
//     area = (altura * comprimento)/2;
// } else {
//     area = "Não é retangulo nem triangulo";
// }

// console.log(area);

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;

if(forma === "quadrado"){
    area = altura * comprimento;
} else if(forma === "triangulo") {
    area = (altura * comprimento)/2;
} else {
    area = "Não é retangulo nem triangulo";
}
console.log(area);
