const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];


const alunosMedias = [alunos, medias];


function exibeNomeENota(nomeAluno){
    if(alunosMedias[0].includes(nomeAluno)){
        // const alunos = alunosMedias[0];
        // const medias = alunosMedias[1];
        //faz a mesma coisa

        const [alunos, medias] = alunosMedias;

        const indice = alunos.indexOf(nomeAluno);        
        console.log(`Aluno ${nomeAluno} está presente e sua nota é ${medias[indice]}`);
    } else {
        console.log("Aluno não existe")
    }
}

exibeNomeENota("Juliana");