let proximaSenha = 1;
let fila = [];

function entrarNaFila(nome){
    let paciente = { 
        nome: nome, 
        senha: proximaSenha 
    };
    fila.push(paciente);
    proximaSenha++;
    console.log(`Paciente ${nome} entrou na fila com a senha ${paciente.senha}.`);
}

function chamarProximo(){
    if (fila.length == 0){
        console.log("Não há pacientes na fila.");
        return;
    }
    let paciente = fila.shift();
    console.log(`Senha ${paciente.senha} - ${paciente.nome} foi chamado(a).`);
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
