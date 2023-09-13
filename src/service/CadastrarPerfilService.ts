export interface CadastrarPerfilService {
    cadastrarPerfil(nome: string, idade: number, genero: string, email: string, senha: string): string;
  }