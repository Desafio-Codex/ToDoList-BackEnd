import { Document, Types } from 'mongoose';
import { ITarefa } from './ITarefa';

export interface IPerfil extends Document {
  nomeCompleto: string;
  idade: number;
  genero: string;
  email: string;
  senha: string;
  foto: Types.ObjectId | null;
  usuarioLogado: boolean;
  listaDeTarefas: ITarefa[];
}

export { ITarefa };
