import {ExcluirTarefaService} from './ExcluirTarefaService';
import PerfilRepository from '../repository/PerfilRepository';

export class ExcluirTarefaServiceImpl implements ExcluirTarefaService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    excluirTarefa(email: string, nomeTarefa: string): boolean {
        return this.perfilRepository.excluirTarefa(email, nomeTarefa);
    }
}