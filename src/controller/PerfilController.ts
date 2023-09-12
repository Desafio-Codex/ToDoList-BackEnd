import { Request, Response } from 'express'; // Suponha que você está usando o Express.js

class PerfilController {
    private cadastrarPerfilService: CadastrarPerfilService;
    private entrarPerfilService: EntrarPerfilService;
    private editarNomePerfilService: EditarNomePerfilService;
    private editarIdadePerfilService: EditarIdadePerfilService;
    private editarFotoPerfilService: EditarFotoPerfilService;
    private adicionarTarefaService: AdicionarTarefaService;
    private editarTarefaService: EditarTarefaService;
    private concluirTarefaService: ConcluirTarefaService;
    private excluirTarefaService: ExcluirTarefaService;
  
    constructor(
      cadastrarPerfilService: CadastrarPerfilService,
      entrarPerfilService: EntrarPerfilService,
      editarNomePerfilService: EditarNomePerfilService,
      editarIdadePerfilService: EditarIdadePerfilService,
      editarFotoPerfilService: EditarFotoPerfilService,
      adicionarTarefaService: AdicionarTarefaService,
      editarTarefaService: EditarTarefaService,
      concluirTarefaService: ConcluirTarefaService,
      excluirTarefaService: ExcluirTarefaService,
    ) {
      this.cadastrarPerfilService = cadastrarPerfilService;
      this.entrarPerfilService = entrarPerfilService;
      this.editarNomePerfilService = editarNomePerfilService;
      this.editarIdadePerfilService = editarIdadePerfilService;
      this.editarFotoPerfilService = editarFotoPerfilService;
      this.adicionarTarefaService = adicionarTarefaService;
      this.editarTarefaService = editarTarefaService;
      this.concluirTarefaService = concluirTarefaService;
      this.excluirTarefaService = excluirTarefaService;
    }

  public cadastrarPerfil(req: Request, res: Response): void {
    const { nome, idade, genero, email, senha } = req.body;
    const resultado = this.cadastrarPerfilService.cadastrarPerfil(nome, idade, genero, email, senha);
    res.json({ mensagem: resultado });
  }

  public entrarPerfil(req: Request, res: Response): void {
    const { email, senha } = req.body;
    this.entrarPerfilService.entrarPerfil(email, senha);
    res.json({ mensagem: 'Perfil logado com sucesso.' });
  }

  public sairPerfil(req: Request, res: Response): void {
    // Implemente a lógica para sair do perfil aqui
    res.json({ mensagem: 'Perfil deslogado com sucesso.' });
  }

  public alteraNomePerfil(req: Request, res: Response): void {
    const { email, senha, nome } = req.body;
    this.editarNomePerfilService.editarNomePerfil(email, senha, nome);
    res.json({ mensagem: 'Nome do perfil alterado com sucesso.' });
  }

  public alteraIdadePerfil(req: Request, res: Response): void {
    const { email, senha, idade } = req.body;
    this.editarIdadePerfilService.editarIdadePerfil(email, senha, idade);
    res.json({ mensagem: 'Idade do perfil alterada com sucesso.' });
  }

  public alteraFotoPerfil(req: Request, res: Response): void {
    const { email, senha, foto } = req.body;
    this.editarFotoPerfilService.editarFotoPerfil(email, senha, foto);
    res.json({ mensagem: 'Foto do perfil alterada com sucesso.' });
  }

  public adicionaTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.adicionarTarefaService.adicionarTarefa(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa adicionada com sucesso.' });
  }

  public editaNome(req: Request, res: Response): void {
    const { email, senha, nome, tarefa } = req.body;
    this.editarTarefaService.editarTarefa(email, senha, nome, tarefa);
    res.json({ mensagem: 'Nome da tarefa editado com sucesso.' });
  }

  public editaDescrição(req: Request, res: Response): void {
    const { email, senha, nome, tarefa } = req.body;
    // Implemente a lógica para editar a descrição da tarefa aqui
    res.json({ mensagem: 'Descrição da tarefa editada com sucesso.' });
  }

  public excluiTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    this.excluirTarefaService.excluirTarefa(email, senha, tarefa);
    res.json({ mensagem: 'Tarefa excluída com sucesso.' });
  }

  public visualizaTarefaHoje(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    // Implemente a lógica para visualizar tarefa hoje aqui
    res.json({ mensagem: 'Tarefa de hoje visualizada com sucesso.' });
  }

  public visualizaTarefaPassado(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    // Implemente a lógica para visualizar tarefa passado aqui
    res.json({ mensagem: 'Tarefa do passado visualizada com sucesso.' });
  }

  public visualizaTarefaFuturo(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    // Implemente a lógica para visualizar tarefa futuro aqui
    res.json({ mensagem: 'Tarefa do futuro visualizada com sucesso.' });
  }
}

export default PerfilController;
