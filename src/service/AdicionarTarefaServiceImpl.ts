import {AdicionarTarefaService} from './AdicionarTarefaService';
import PerfilRepository from '../repository/PerfilRepository';
import Tarefa from '../model/Tarefa';

export class AdicionarTarefaServiceImpl implements AdicionarTarefaService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    adicionarTarefa(email: string, nomeTarefa: string, desTarefa: string): string {
        const tarefa = new Tarefa(nomeTarefa, desTarefa);
        return this.perfilRepository.adicionarTarefa(email, tarefa);
    }
}