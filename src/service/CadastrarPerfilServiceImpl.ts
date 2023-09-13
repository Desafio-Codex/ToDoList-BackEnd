import {CadastrarPerfilService} from './CadastrarPerfilService';
import PerfilRepository from '../repository/PerfilRepository';
import Perfil from '../model/Perfil';

export class CadastrarPerfilServiceImpl implements CadastrarPerfilService {
    perfilRepository: PerfilRepository;

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    cadastrarPerfil(nome: string, idade: number, genero: string, email: string, senha: string): string {
        const perfil = new Perfil(nome, idade, genero, email, senha);
        return this.perfilRepository.cadastrarPerfil(perfil);
    }
}