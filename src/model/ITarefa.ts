import { Document } from 'mongoose';

// Interface para representar um documento Tarefa
export interface ITarefa extends Document {
  nome: string;
  descricao: string;
}
