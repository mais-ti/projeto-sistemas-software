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
