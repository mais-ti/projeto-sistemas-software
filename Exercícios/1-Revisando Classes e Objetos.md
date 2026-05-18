# Exercício

Crie um código que tenha uma classe Aluno que guarde o nome do aluno e possua dois arrays vazios, chamados `portugues` e `matematica`, que vão guardar notas de prova.
Além desses atributos, a classe precisa ter dois métodos: 
`adicionarNota`, que vai receber uma nota e qual a disciplina. Ex.: `adicionarNota(7.8, "matematica")`
`calcularMedia`, que vai receber o nome da disciplina e vai retornar a média das notas. Ex.: `calcularMedia("matematica")`

## Estrutura do código
A estrutura do código serve como base para a resolução do exercício. Você pode ficar a vontade para copiar essa estrutura ou fazer o seu código totalmente do zero.
⚠️ **Atenção: ** O uso da estrutura é opcional porém os casos de teste (no final da estrutura) devem funcionar corretamente! Desse modo, o nome da classe e os nomes dos métodos devem ser os mesmos.

```javascript
class Aluno{
    constructor(nome){
        this.nome = nome;
        this.matematica = [];
        this.portugues = [];
    }

    adicionarNota(nota, disciplina){

    }

    media(array){

    }

    calcularMedia(disciplina){
        if (disciplina == "matematica"){

        }
        else if(disciplina == "portugues"){

        }
        else{
            console.log("Disciplina não reconhecida.")
        }
    }
}

//Casos de teste
let aluno1 = new Aluno("Aluno da Silva")
aluno1.adicionarNota(5.8, "matematica")
aluno1.adicionarNota(8.3, "matematica")
aluno1.adicionarNota(6.2, "portugues")
aluno1.adicionarNota(7.6, "portugues")

aluno1.calcularMedia("portugues")
aluno1.calcularMedia("matematica")

let aluno2 = new Aluno("Aluna Santos")
aluno2.adicionarNota(9.1, "matematica")
aluno2.adicionarNota(8.3, "matematica")
aluno2.adicionarNota(5.9, "portugues")
aluno2.adicionarNota(7.1, "portugues")

aluno2.calcularMedia("portugues")
aluno2.calcularMedia("matematica")
```