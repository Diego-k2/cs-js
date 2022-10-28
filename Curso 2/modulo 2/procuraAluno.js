const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];


const alunosMedias = [alunos, medias];


function exibeNomeENota(nomeAluno){
    if(alunosMedias[0].includes(nomeAluno)){
        const indice = alunosMedias[0].indexOf(nomeAluno);        
        console.log(`Aluno ${nomeAluno} está presente e sua nota é ${alunosMedias[1][indice]}`);
    } else {
        console.log("Aluno não existe")
    }
}

exibeNomeENota("Juliana");