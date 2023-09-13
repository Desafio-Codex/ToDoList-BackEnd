export interface EditarFotoPerfilService {
    editarFotoPerfil(email: string, imagem: Buffer): string;
}