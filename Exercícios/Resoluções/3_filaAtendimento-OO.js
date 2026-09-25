class FilaDeAtendimento{
    constructor(){
        this.pacientes = [];
        this.proximaSenha = 1;
    }

    entrarNaFila(nome){
        let paciente = { 
            nome: nome, 
            senha: this.proximaSenha
        };
        this.pacientes.push(paciente);
        this.proximaSenha++;
        console.log(`Paciente ${nome} entrou na fila com a senha ${paciente.senha}.`);
    }

    chamarProximo(){
        if (this.pacientes.length == 0){
            console.log("Não há pacientes na fila.");
            return;
        }
        let paciente = this.pacientes.shift();
        console.log(`Senha ${paciente.senha} - ${paciente.nome} foi chamado(a).`);
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