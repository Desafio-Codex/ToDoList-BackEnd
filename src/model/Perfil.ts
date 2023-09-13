import { Schema, model, Types } from 'mongoose';
import { IPerfil } from './IPerfil';
import { ITarefa } from './ITarefa';
import Tarefa, { tarefaSchema } from './Tarefa';

const perfilSchema = new Schema({
  nomeCompleto: String,
  idade: Number,
  genero: String,
  email: String,
  senha: String,
  usuarioLogado: Boolean,
  listaTarefas: [tarefaSchema],
  imagem: Buffer,
});

const PerfilModel = model<IPerfil>('Perfil', perfilSchema);

class Perfil {
  _model: IPerfil;
  constructor(
    nomeCompleto: string,
    idade: number,
    genero: string,
    email: string,
    senha: string
  ) {
    this._model = new PerfilModel({
      nomeCompleto,
      idade,
      genero,
      email,
      senha,
      usuarioLogado: false,
      listaTarefas: [],
      imagem: undefined,
    });
  }

  getModel() {
    return this._model;
  }

  // Getter e Setter para o nome
  getNome(): string {
    return this._model.nomeCompleto;
  }

  setNome(nome: string) {
    this._model.nomeCompleto = nome;
  }

  // Getter e Setter para a idade
  getIdade(): number {
    return this._model.idade;
  }

  setIdade(idade: number) {
    this._model.idade = idade;
  }

  // Getter e Setter para usuarioLogado
  getUsuarioLogado(): boolean {
    return this._model.usuarioLogado;
  }

  setUsuarioLogado() {
    if (this._model.usuarioLogado == true) {
      this._model.usuarioLogado = false;
    }
    else {
      this._model.usuarioLogado = true;
    }
  }

  // Getter e Setter para imagem
  getImagem(): Buffer | undefined {
    return this._model.imagem;
  }

  setImagem(imagem: Buffer) {
    this._model.imagem = imagem;
  }

  // Método para adicionar uma tarefa à lista de tarefas
  adicionarTarefa(tarefa: any) {
    this._model.listaTarefas.push(tarefa);
  }

  // Método para remover uma tarefa da lista de tarefas por nome
  excluirTarefa(nome: string): boolean {
    const index = this._model.listaTarefas.findIndex((tarefa: any) => tarefa.nome === nome);
    if (index !== -1) {
      this._model.listaTarefas.splice(index, 1);
      return true;
    }
    return false;
  }

  // Método para atualizar o nome de uma tarefa na lista de tarefas:
  atualizarNomeTarefa(nome1: string, nome2: string): boolean {
    const tarefa = this._model.listaTarefas.find((tarefa: any) => tarefa.nome === nome1);
    if (tarefa) {
      tarefa.nome = nome2;
      return true;
    }
    return false;
  }

  // Método para atualizar o nome de uma tarefa na lista de tarefas:
  atualizarDescrTarefa(nome: string, descr: string): boolean {
    const tarefa = this._model.listaTarefas.find((tarefa: any) => tarefa.nome === nome);
    if (tarefa) {
      tarefa.descricao = descr;
      return true;
    }
    return false;
  }

  // Método para obter uma string com nome e descrição de todas as tarefas
  visualizarTarefas(): string {
    if (this._model.listaTarefas.length === 0) {
      return "Parabéns, você não possui tarefas pendentes!";
    }
    let tarefasFormatadas = "";
    this._model.listaTarefas.forEach((tarefa: ITarefa) => {
      tarefasFormatadas += `Nome: ${tarefa.nome}, Descrição: ${tarefa.descricao}\n`;
    });
    return tarefasFormatadas;
  }

}

export default Perfil;