import {EditarNomePerfilService} from './EditarNomePerfilService';
import PerfilRepository from '../repository/PerfilRepository';

export class EditarNomePerfilServiceImpl implements EditarNomePerfilService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    editarNomePerfil(email: string, nome: String): string {
        return this.perfilRepository.editarNomePerfil(email, nome);
    }
}