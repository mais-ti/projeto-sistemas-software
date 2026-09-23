# Exercício

Crie um código que vai simular o funcionamento de uma fila de atendimento médico. Imagine o seguinte cenário:
1. Todo paciente que chega na clínica, digita seu nome e pega a senha de atendimento;
2. Os pacientes aguardam na fila até terem suas senhas chamadas;
3. Quando um paciente é chamado, a sua senha sai da fila de atendimento.

Partindo do cenário, o seu código precisa:
* Gerenciar as senhas dos pacientes;
* Armazenar os nomes e senhas de cada paciente;
* Colocar os pacientes na fila de acordo com a ordem de chegada;
* Chamar os pacientes pela senha;
* Remover o paciente chamado da fila.

Esse exercício deve ser resolvido de **duas** formas:
* Usando um código imperativo: vocês podem usar funções, loops, condicionais, mas **não podem** usar classes;
* Usando um código orientado a objetos: vocês **devem** usar classes e objetos.

**Obs.:** Neste exercício, todos os pacientes têm a mesma prioridade na fila. Ou seja, não implementaremos as preferências legais.

**Obs. 2:** Não é necessário usar `prompt-sync` para pegar entradas do usuário.

## Estrutura do código — versão imperativa

A estrutura do código serve como base para a resolução do exercício. Você pode ficar a vontade para copiar essa estrutura ou fazer o seu código totalmente do zero.

⚠️ **Atenção:** O uso da estrutura é opcional, porém, os casos de teste (no final da estrutura) devem funcionar corretamente! Desse modo, os nomes das variáveis e das funções devem ser os mesmos.

```javascript
let proximaSenha = 1;
let fila = [];

function entrarNaFila(nome){

}

function chamarProximo(){

}

//Casos de teste
entrarNaFila("Ana Souza")
entrarNaFila("Carlos Lima")
entrarNaFila("Beatriz Rocha")

chamarProximo()
chamarProximo()

entrarNaFila("Diego Alves")

chamarProximo()
chamarProximo()
chamarProximo()
```

## Estrutura do código — versão orientada a objetos

⚠️ **Atenção:** O uso da estrutura é opcional, porém, os casos de teste (no final da estrutura) devem funcionar corretamente! Desse modo, o nome da classe e os nomes dos métodos devem ser os mesmos.

```javascript
class FilaDeAtendimento{
    constructor(){
        this.pacientes = [];
        this.proximaSenha = 1;
    }

    entrarNaFila(nome){

    }

    chamarProximo(){

    }
}

//Casos de teste
let fila = new FilaDeAtendimento()

fila.entrarNaFila("Ana Souza")
fila.entrarNaFila("Carlos Lima")
fila.entrarNaFila("Beatriz Rocha")

fila.chamarProximo()
fila.chamarProximo()

fila.entrarNaFila("Diego Alves")

fila.chamarProximo()
fila.chamarProximo()
fila.chamarProximo()
```
