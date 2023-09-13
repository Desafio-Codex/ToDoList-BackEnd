import {EditarNomeTarefaService} from './EditarNomeTarefaService';
import PerfilRepository from '../repository/PerfilRepository';

export class EditarNomeTarefaServiceImpl implements EditarNomeTarefaService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    editarNomeTarefa(email: string, nome1: string, nome2: string): string {
        return this.perfilRepository.editarNomeTarefa(email, nome1, nome2);
    }
}