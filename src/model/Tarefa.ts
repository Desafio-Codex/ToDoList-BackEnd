import { Schema, model } from 'mongoose';
import { ITarefa } from './ITarefa';

// Defina o esquema para o modelo Tarefa
export const tarefaSchema = new Schema({
  nome: String,
  descricao: String,
});

// Classe Tarefa
export class Tarefa {
  private _model;

  constructor(nome: string, descricao: string) {
    this._model = model<ITarefa>('Tarefa', tarefaSchema);
    this.nome = nome;
    this.descricao = descricao;
  }

  // Métodos getters e setters
  get nome(): string {
    return this._model.nome;
  }

  set nome(nome: string) {
    this._model.nome = nome;
  }

  get descricao(): string {
    return this._model.descricao;
  }

  set descricao(descricao: string) {
    this._model.descricao = descricao;
  }
}