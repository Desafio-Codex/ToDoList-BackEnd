import { Schema, model, Types } from 'mongoose';
import { IPerfil } from './IPerfil';
import { tarefaSchema } from './Tarefa';

const perfilSchema = new Schema({
  nomeCompleto: String,
  idade: Number, // Corrigido para 'Number'
  genero: String,
  email: String,
  senha: String,
  foto: { type: Types.ObjectId, ref: 'Imagem' },
  usuarioLogado: Boolean,
  listaDeTarefas: [tarefaSchema],
});

const PerfilModel = model<IPerfil>('Perfil', perfilSchema);

export class Perfil {
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
      listaDeTarefas: [],
    });
  }

  getModel() {
    return this._model;
  }
}