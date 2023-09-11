import { Schema, model, Document } from 'mongoose';

// Defina a interface que representa a estrutura dos dados da tarefa
interface ITarefa extends Document {
  nome: string;
  descricao: string;
}

// Crie um esquema Mongoose para a Tarefa
const TarefaSchema = new Schema<ITarefa>({
  nome: String,
  descricao: String,
});

// Defina a classe Tarefa com construtor, getters e setters
class Tarefa {
  private _nome: string;
  private _descricao: string;

  constructor(nome: string, descricao: string) {
    this._nome = nome;
    this._descricao = descricao;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(novaDescricao: string) {
    this._descricao = novaDescricao;
  }
}

// Crie o modelo Mongoose para a Tarefa
const TarefaModel = model<ITarefa>('Tarefa', TarefaSchema);

export { Tarefa, TarefaModel };
