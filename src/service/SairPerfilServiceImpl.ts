import {SairPerfilService} from './SairPerfilService';
import PerfilRepository from '../repository/PerfilRepository';

export class SairPerfilServiceImpl implements SairPerfilService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    sairPerfil(email: string): string {
        return this.perfilRepository.sairPerfil(email);
    }
}