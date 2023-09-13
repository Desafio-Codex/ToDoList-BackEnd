import { Request, Response } from 'express';
import { CadastrarPerfilService } from '../service/CadastrarPerfilService';
import { EntrarPerfilService } from '../service/EntrarPerfilService';
import { SairPerfilService } from '../service/SairPerfilService';
import { EditarNomePerfilService } from '../service/EditarNomePerfilService';
import { EditarIdadePerfilService } from '../service/EditarIdadePerfilService';
import { EditarFotoPerfilService } from '../service/EditarFotoPerfilService';
import { AdicionarTarefaService } from '../service/AdicionarTarefaService';
import { EditarNomeTarefaService } from '../service/EditarNomeTarefaService';
import { EditarDescTarefaService } from '../service/EditarDescTarefaService';
import { ExcluirTarefaService } from '../service/ExcluirTarefaService';
import { VisualizarTarefaService } from '../service/VisualizarTarefaService';


class UsuarioController {
  private cadastrarPerfilService: CadastrarPerfilService;
  private entrarPerfilService: EntrarPerfilService;
  private sairPerfilService: SairPerfilService;
  private editarNomePerfilService: EditarNomePerfilService;
  private editarIdadePerfilService: EditarIdadePerfilService;
  private editarFotoPerfilService: EditarFotoPerfilService;
  private adicionarTarefaService: AdicionarTarefaService;
  private editarNomeTarefaService: EditarNomeTarefaService;
  private editarDescTarefaService: EditarDescTarefaService;
  private excluirTarefaService: ExcluirTarefaService;
  private visualizarTarefaService: VisualizarTarefaService;

  constructor(
    cadastrarPerfilService: CadastrarPerfilService,
    entrarPerfilService: EntrarPerfilService,
    sairPerfilService: SairPerfilService,
    editarNomePerfilService: EditarNomePerfilService,
    editarIdadePerfilService: EditarIdadePerfilService,
    editarFotoPerfilService: EditarFotoPerfilService,
    adicionarTarefaService: AdicionarTarefaService,
    editarNomeTarefaService: EditarNomeTarefaService,
    editarDescTarefaService: EditarDescTarefaService,
    excluirTarefaService: ExcluirTarefaService,
    visualizarTarefaService: VisualizarTarefaService,
  ) {
    this.cadastrarPerfilService = cadastrarPerfilService;
    this.entrarPerfilService = entrarPerfilService;
    this.sairPerfilService = sairPerfilService;
    this.editarNomePerfilService = editarNomePerfilService;
    this.editarIdadePerfilService = editarIdadePerfilService;
    this.editarFotoPerfilService = editarFotoPerfilService;
    this.adicionarTarefaService = adicionarTarefaService;
    this.editarNomeTarefaService = editarNomeTarefaService;
    this.editarDescTarefaService = editarDescTarefaService;
    this.excluirTarefaService = excluirTarefaService;
    this.visualizarTarefaService = visualizarTarefaService;
  }

  public cadastrarPerfil(req: Request, res: Response): void {
    const { nome, idade, genero, email, senha } = req.body;
    const resultado = this.cadastrarPerfilService.cadastrarPerfil(nome, idade, genero, email, senha);
    res.json({ mensagem: resultado });
  }

  public entrarPerfil(req: Request, res: Response): void {
    const { email, senha } = req.body;
    const resultado = this.entrarPerfilService.entrarPerfil(email, senha);
    res.json({ mensagem: resultado });
  }

  public sairPerfil(req: Request, res: Response): void {
    const { email } = req.body;
    const resultado = this.sairPerfilService.sairPerfil(email);
    res.json({ mensagem: resultado });
  }

  public editarNomePerfil(req: Request, res: Response): void {
    const { email, nome } = req.body;
    const resultado = this.editarNomePerfilService.editarNomePerfil(email, nome);
    res.json({ mensagem: resultado });
  }

  public editarIdadePerfil(req: Request, res: Response): void {
    const { email, idade } = req.body;
    const resultado = this.editarIdadePerfilService.editarIdadePerfil(email, idade);
    res.json({ mensagem: resultado });
  }

  public editarFotoPerfil(req: Request, res: Response): void {
    const { email, senha, foto } = req.body;
    const resultado = this.editarFotoPerfilService.editarFotoPerfil(email, foto);
    res.json({ mensagem: resultado });
  }

  public adicionarTarefa(req: Request, res: Response): void {
    const { email, nome, descricao } = req.body;
    const resultado = this.adicionarTarefaService.adicionarTarefa(email, nome, descricao);
    res.json({ mensagem: resultado });
  }

  public editarNomeTarefa(req: Request, res: Response): void {
    const { email, nome1, nome2 } = req.body;
    const resultado = this.editarNomeTarefaService.editarNomeTarefa(email, nome1, nome2);
    res.json({ mensagem: resultado });
  }

  public editarDescricao(req: Request, res: Response): void {
    const { email, senha, nome, descricao } = req.body;
    const resultado = this.editarDescTarefaService.editarDescTarefa(email, nome, descricao);
    res.json({ mensagem: resultado });
  }

  public excluirTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    const resultado = this.excluirTarefa.excluirTarefa(email, tarefa);
    if (resultado) {
      res.json({ mensagem: "Tarefa excluída com sucesso!" })
    }
    else {
      res.json({ mensagem: "Ação não pode ser realizada" });
    }
  }

  public concluirTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    const resultado = this.excluirTarefa.excluirTarefa(email, tarefa);
    if (resultado) {
      res.json({ mensagem: "Tarefa concluída com sucesso!" })
    }
    else {
      res.json({ mensagem: "Ação não pode ser realizada" });
    }
  }

  public visualizarTarefa(req: Request, res: Response): void {
    const { email, senha, tarefa } = req.body;
    const resultado = this.visualizarTarefaService.visualizarTarefas(email);
    res.json({ mensagem: resultado });
  }

}

export default UsuarioController;