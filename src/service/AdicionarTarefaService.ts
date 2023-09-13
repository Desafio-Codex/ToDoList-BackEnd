export interface AdicionarTarefaService {
    adicionarTarefa(email: string, nomeTarefa: string, descricao: string): string;
}