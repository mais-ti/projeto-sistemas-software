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
            let nota = this.media(this.matematica).toFixed(1)
            console.log(`${this.nome} na disciplina Matemática teve média: ${nota}`)
            return nota
        }
        else if(disciplina == "portugues"){
            let nota = this.media(this.portugues).toFixed(1)
            console.log(`${this.nome} na disciplina Português teve média: ${nota}`)
            return nota
        }
        else{
            console.log("Disciplina não reconhecida.")
        }
    }
}


let aluno1 = new Aluno("Aluno da Silva")
aluno1.adicionaNota(5.8, "matematica")
aluno1.adicionaNota(8.3, "matematica")
aluno1.adicionaNota(6.2, "portugues")
aluno1.adicionaNota(7.6, "portugues")

aluno1.calculaMedia("portugues")
aluno1.calculaMedia("matematica")

let aluno2 = new Aluno("Aluna Santos")
aluno2.adicionaNota(9.1, "matematica")
aluno2.adicionaNota(8.3, "matematica")
aluno2.adicionaNota(5.9, "portugues")
aluno2.adicionaNota(7.1, "portugues")

aluno2.calculaMedia("portugues")
aluno2.calculaMedia("matematica")