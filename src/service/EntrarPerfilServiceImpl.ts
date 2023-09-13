import {EntrarPerfilService} from './EntrarPerfilService';
import PerfilRepository from '../repository/PerfilRepository';

export class EntrarPerfilServiceImpl implements EntrarPerfilService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    entrarPerfil(email: string, senha: string): string {
        return this.perfilRepository.entrarPerfil(email, senha);
    }
}