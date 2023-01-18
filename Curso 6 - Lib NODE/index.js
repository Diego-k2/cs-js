import fs from "fs";
import chalk from "chalk";

//Função que dropa um erro toda vez que é chamada 
function trataErro(err){
    throw new Error(chalk.red(err.code, "Não há arquivo no diretorio"));
}

// function pegaArquivo(caminhoArquivo){
//     const encode = "utf-8"
//     fs.readFile(caminhoArquivo, encode, (err, result) =>{
//         if(err){
//             trataErro(err);
//         } 
//         console.log(chalk.green(result));
//     } )
// }

//Criando via função assincrona usando com THEN
// function pegaArquivo(caminhoArquivo){
//     const encode = "utf-8";

//     fs.promises.readFile(caminhoArquivo, encode)
//         .then((texto) => console.log(chalk.green(texto))) //Pegando a respotas caso de certo
//         .catch((erro) => trataErro(erro)) //Pegando a resposta caso de erro 

// }

//Criando via função assincrona usando com async/await
//Deixa a gente escrever de forma muito semelhante a um codigo sincrono 
async function pegaArquivo(caminhoArquivo){
    
    try{
        const enconde = "utf-8";
        const texto = await fs.promises.readFile(caminhoArquivo, enconde); 
        console.log(chalk.green(texto));
    } catch(err) { //precisamos fazer assim para pegar o erro 
        trataErro(err)
    }
    

}



// pegaArquivo("./arquivos/");
pegaArquivo("./arquivos/texto.md");