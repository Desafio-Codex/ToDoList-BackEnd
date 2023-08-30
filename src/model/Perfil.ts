class Perfil {
  nomeCompleto: string;
  genero: string;
  idade: number;
  email: string;
  senha: string;
  tarefas: Tarefa[] = []; // Lista ligada de tarefas

  constructor(nomeCompleto: string, genero: string, idade: number, email: string, senha: string) {
    this.nomeCompleto = nomeCompleto;
    this.genero = genero;
    this.idade = idade;
    this.email = email;
    this.senha = senha;
  }

  adicionarTarefa(nome: string, descricao: string) {
    const novaTarefa = new Tarefa(nome, descricao);
    this.tarefas.push(novaTarefa);
  }
}