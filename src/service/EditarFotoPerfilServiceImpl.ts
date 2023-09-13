import {EditarFotoPerfilService} from './EditarFotoPerfilService';
import PerfilRepository from '../repository/PerfilRepository';

export class EditarFotoPerfilServiceImpl implements EditarFotoPerfilService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    editarFotoPerfil(email: string, imagem: Buffer): string {
        return this.perfilRepository.editarFotoPerfil(email, imagem);
    }
}