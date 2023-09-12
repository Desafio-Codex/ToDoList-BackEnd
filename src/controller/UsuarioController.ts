import { Request, Response } from 'express';
import PerfilController from './PerfilController'; // Importe a classe PerfilController

class UsuarioController {
  private perfilController: PerfilController;

  constructor(perfilController: PerfilController) {
    this.perfilController = perfilController;
  }

  public cadastrarPerfil(req: Request, res: Response): void {
    const { nome, idade, genero, email, senha } = req.body;
    const resultado = this.perfilController.cadastrarPerfil(nome, idade, genero, email, senha);
    res.json({ mensagem: resultado });
  }

  public entrarPerfil(req: Request, res: Response): void {
    const { email, senha } = req.body;
    this.perfilController.entrarPerfil(email, senha);
    res.json({ mensagem: 'Perfil logado com sucesso.' });
  }

  public sairPerfil(req: Request, res: Response): void {
    const { email } = req.body;
    this.perfilController.sairPerfil(email);
    res.json({ mensagem: 'Perfil deslogado com sucesso.' });
  }

  public alteraNomePerfil(req: Request, res: Response): void {
    const { email, senha, nome } = req.body;
    this.perfilController.alteraNomePerfil(email, senha, nome);
    res.json({ mensagem: 'Nome do perfil alterado com sucesso.' });
  }

  public alteraIdadePerfil(req: Request, res: Response): void {
    const { email, senha, idade } = req.body;
    this.perfilController.alteraIdadePerfil(email, senha, idade);
    res.json({ mensagem: 'Idade do perfil alterada com sucesso.' });
  }

  public alteraFotoPerfil(req: Request, res: Response): void {
    const { email, senha, foto } = req.body;
    this.perfilController.alteraFotoPerfil(email, senha, foto);
    res.json({ mensagem: 'Foto do perfil alterada com sucesso.' });
  }

  public adicionaTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.perfilController.adicionaTarefa(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa adicionada com sucesso.' });
  }

  public editaNome(req: Request, res: Response): void {
    const { email, senha, nome, tarefa } = req.body;
    this.perfilController.editaNome(email, senha, nome, tarefa);
    res.json({ mensagem: 'Nome da tarefa editado com sucesso.' });
  }

  public editaDescricao(req: Request, res: Response): void {
    const { email, senha, nome, descricao } = req.body;
    this.perfilController.editaDescricao(email, senha, nome, descricao);
    res.json({ mensagem: 'Descrição da tarefa editada com sucesso.' });
  }

  public excluiTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.perfilController.excluiTarefa(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa excluída com sucesso.' });
  }

  public visualizaTarefaHoje(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.perfilController.visualizaTarefaHoje(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa de hoje visualizada com sucesso.' });
  }

  public visualizaTarefaPassado(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.perfilController.visualizaTarefaPassado(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa do passado visualizada com sucesso.' });
  }

  public visualizaTarefaFuturo(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.perfilController.visualizaTarefaFuturo(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa do futuro visualizada com sucesso.' });
  }
}

export default UsuarioController;