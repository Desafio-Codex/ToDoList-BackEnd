import {EditarIdadePerfilService} from './EditarIdadePerfilService';
import PerfilRepository from '../repository/PerfilRepository';

export class EditarIdadePerfilServiceImpl implements EditarIdadePerfilService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    editarIdadePerfil(email: string, idade: number): string {
        return this.perfilRepository.editarIdadePerfil(email, idade);
    }
}