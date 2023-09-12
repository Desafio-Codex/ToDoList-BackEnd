import { Perfil } from "../model/Perfil";
import { Tarefa } from "../model/Tarefa";

class TarefaRepository {
  private mapaTarefas: Map<string, Tarefa>;

  constructor() {
    this.mapaTarefas = new Map<string, Tarefa>();
  }

  public async cadastrarPerfil(perfil: Perfil): Promise<string> {
    // Implemente a lógica para entrar no perfil aqui
  }

  public async entrarPerfil(email: string, senha: string): Promise<void> {
    // Implemente a lógica para entrar no perfil aqui
  }

  public async sairPerfil(email: string): Promise<void> {
    // Implemente a lógica para sair do perfil aqui
  }

  public async alteraNomePerfil(email: string, senha: string, nome: string): Promise<void> {
    // Implemente a lógica para alterar o nome do perfil aqui
  }

  public async alteraIdadePerfil(email: string, senha: string, idade: number): Promise<void> {
    // Implemente a lógica para alterar a idade do perfil aqui
  }

  public async alteraFotoPerfil(email: string, senha: string, foto: string): Promise<void> {
    // Implemente a lógica para alterar a foto do perfil aqui
  }

  public async adicionaTarefa(email: string, senha: string, tarefa: Tarefa): Promise<void> {
    // Implemente a lógica para adicionar uma tarefa ao perfil aqui
  }

  public async editaNome(email: string, senha: string, nome: string, tarefa: Tarefa): Promise<void> {
    // Implemente a lógica para editar o nome de uma tarefa aqui
  }

  public async editaDescrição(email: string, senha: string, nome: string, tarefa: Tarefa): Promise<void> {
    // Implemente a lógica para editar a descrição de uma tarefa aqui
  }

  public async excluiTarefa(email: string, senha: string, tarefa: Tarefa): Promise<void> {
    // Implemente a lógica para excluir uma tarefa do perfil aqui
  }

  public async visualiza(email: string, senha: string, tarefa: Tarefa): Promise<string> {
    // Implemente a lógica para visualizar uma tarefa do perfil aqui
  }
}

export default TarefaRepository;
