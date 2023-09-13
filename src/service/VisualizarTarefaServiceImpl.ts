import {VisualizarTarefaService} from './VisualizarTarefaService';
import PerfilRepository from '../repository/PerfilRepository';

export class VisualizarTarefaServiceImpl implements VisualizarTarefaService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    visualizarTarefas(email: string): string {
        return this.perfilRepository.visualizarTarefas(email);
    }
}