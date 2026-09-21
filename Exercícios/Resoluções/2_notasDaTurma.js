class Aluno{
    constructor(nome){
        this.nome = nome;
        this.matematica = [];
        this.portugues = [];
    }

    adicionaNota(nota, disciplina){
        if (disciplina == "matematica"){
            this.matematica.push(nota)
        }
        else if (disciplina == "portugues"){
            this.portugues.push(nota)
        }
    }

    media(array){
        let soma = 0;
        for (let nota of array){
            soma += nota;
        }
        return soma / array.length
    }

    calculaMedia(disciplina){
        if (disciplina == "matematica"){
            return this.media(this.matematica)
        }
        else if(disciplina == "portugues"){
            return this.media(this.portugues)
        }
        else{
            console.log("Disciplina não reconhecida.")
        }
    }
}

class Turma{
    constructor(nomeTurma){
        this.nomeTurma = nomeTurma;
        this.alunos = [];
    }

    criaRanking(disciplina){
        if (disciplina != "matematica" && disciplina != "portugues"){
            console.log("Disciplina não reconhecida.")
            return;
        }

        let notas = [];

        // para cada aluno da turma, calcula a média na disciplina 
        // e armazena o nome do aluno e a média em um array
        for (let aluno of this.alunos){

            let nota = aluno.calculaMedia(disciplina);

            notas.push({
                nome: aluno.nome,
                media: nota
            });
        }

        for (let i = 0; i < notas.length; i++){

            // índice da maior média
            let maior = i;

            for (let j = i + 1; j < notas.length; j++){

                // se a média do aluno j for maior que a do aluno maior, 
                // atualiza o índice da maior média
                if (notas[j].media > notas[maior].media){
                    maior = j;
                }
            }

            // guarda a média atual em uma variável auxiliar
            let aux = notas[i];

            // coloca o elemento da maior média na posição atual
            notas[i] = notas[maior];
            
            // coloca a média da variável auxiliar na posição da maior média
            notas[maior] = aux;
        }

        return notas;
    }
}


let a1 = new Aluno("Beltrano");
a1.adicionaNota(8, "matematica");
a1.adicionaNota(9, "matematica");

let a2 = new Aluno("Fulano");
a2.adicionaNota(10, "matematica");
a2.adicionaNota(7, "matematica");

let a3 = new Aluno("Ciclana");
a3.adicionaNota(10, "matematica");
a3.adicionaNota(9, "matematica");

let turma = new Turma("3º Ano");

turma.alunos.push(a1);
turma.alunos.push(a2);
turma.alunos.push(a3);

console.log(turma.criaRanking("matematica"));