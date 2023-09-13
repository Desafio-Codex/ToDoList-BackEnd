import Perfil from "../model/Perfil";
import Tarefa from "../model/Tarefa";

class PerfilRepository {
  private mapaPerfis: Map<string, Perfil>;

  constructor() {
    this.mapaPerfis = new Map<string, Perfil>();
  }

  public cadastrarPerfil(perfil: Perfil): string {
    this.mapaPerfis.set(perfil.getModel().email, perfil);
    return "Cadastro realizado com sucesso";
  }

  entrarPerfil(email: string, senha: string): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!; // "!" serve para afirmar que o perfil existe
      if (perfil.getModel().senha === senha) {
        if (!perfil.getModel().usuarioLogado) {
          perfil.setUsuarioLogado();
          this.mapaPerfis.set(email, perfil);
        }
        return "Login realizado com sucesso!";
      }
    }
    return "Email ou senha de usuário inválido(s)!";
  }

  public sairPerfil(email: string): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (perfil.getModel().usuarioLogado) {
        perfil.setUsuarioLogado();
        this.mapaPerfis.set(email, perfil);
      }
      return "Usuário deslogou.";
    }
    return "Email inválido";
  }

  public editarNomePerfil(email: string, nome: string): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!";
      }
      perfil.setNome(nome);
      this.mapaPerfis.set(email, perfil);
      return "Nome do usuário alterado com sucesso!"
    }
    return "Email inválido!";
  }

  public editarIdadePerfil(email: string, idade: number): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!";
      }
      perfil.setIdade(idade);
      this.mapaPerfis.set(email, perfil);
      return "Nome do usuário alterado com sucesso!"
    }
    return "Email inválido!";
  }

  public editarFotoPerfil(email: string, foto: Buffer): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!";
      }
      perfil.setImagem(foto);
      this.mapaPerfis.set(email, perfil);
      return "Nome do usuário alterado com sucesso!"
    }
    return "Email inválido!";
  }

  public adicionarTarefa(email: string, tarefa: Tarefa): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!";
      }
      perfil.adicionarTarefa(tarefa);
      this.mapaPerfis.set(email, perfil);
      return "Tarefa adicionada com sucesso!";
    }
    return "Email inválido!";
  }

  public editarNomeTarefa(email: string, nome1: string, nome2: string): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!";
      }
      const resultado = perfil.atualizarNomeTarefa(nome1, nome2);
      if (resultado) {
        this.mapaPerfis.set(email, perfil);
        return "Nome da tarefa com sucesso!";
      }
      return "Tarefa não encontrada!"
    }
    return "Email inválido!";
  }

  public editarDescricaoTarefa(email: string, nome: string, descr: string): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!";
      }
      const resultado = perfil.atualizarDescrTarefa(nome, descr);
      if (resultado) {
        this.mapaPerfis.set(email, perfil);
        return "Descrição da tarefa atualizada com sucesso!";
      }
      return "Tarefa não encontrada!"
    }
    return "Email inválido!";
  }

  public excluirTarefa(email: string, nome: string): boolean {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return false;
      }
      const resultado = perfil.excluirTarefa(nome);
      if (resultado) {
        this.mapaPerfis.set(email, perfil);
        return resultado;
      }
      return false;
    }
    return false;
  }

  public visualizarTarefas(email: string): string {
    if (this.mapaPerfis.has(email)) {
      const perfil = this.mapaPerfis.get(email)!;
      if (!perfil.getModel().usuarioLogado) {
        return "Faça login antes!"
      }
      return perfil.visualizarTarefas();
    }
    return "Email inválido!";
  }
}

export default PerfilRepository;
