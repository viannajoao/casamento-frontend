import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-contact',
  templateUrl: './wedding-contact.component.html',
  styleUrls: ['./wedding-contact.component.scss']
})
export class WeddingContactComponent {
  readonly contato = 'https://wa.me/5511988891766';
  readonly whatsPresenca = 'https://wa.me/5511982023551';
  modoNome = false;
  pessoas: { nome: string; vai: boolean | null }[] = [];
  aviso = '';
  ocupado = false;
  enviado = false;
  private codigo = '';
  private tentativa = '';
  private sessao = 0;

  abrir(dialogo: HTMLDialogElement, formulario: HTMLFormElement, campo: HTMLInputElement): void {
    this.sessao++;
    this.modoNome = false;
    this.pessoas = [];
    this.aviso = this.codigo = '';
    this.ocupado = this.enviado = false;
    formulario.reset();
    dialogo.showModal();
    campo.focus();
  }

  trocar(campo: HTMLInputElement): void {
    this.modoNome = !this.modoNome;
    this.aviso = '';
    campo.value = '';
    campo.focus();
  }

  async buscar(campo: HTMLInputElement, titulo: HTMLElement): Promise<void> {
    if (this.ocupado) return;
    const sessao = this.sessao;
    const porNome = this.modoNome;
    const valor = campo.value.trim();
    this.aviso = '';
    this.ocupado = true;
    try {
      const resposta = await this.requisitar(porNome ? { acao: 'nome', nome: valor } : { acao: 'buscar', codigo: valor });
      if (sessao !== this.sessao) return;
      if (resposta.status === 404 && resposta.headers.get('content-type')?.includes('application/json') &&
          (await resposta.json()).erro === 'CONVITE_NAO_ENCONTRADO') {
        this.aviso = 'Convite não encontrado. Confira os dados ou fale com os noivos.';
        return;
      }
      if (!resposta.ok) throw new Error();
      const dados = await resposta.json();
      if (sessao !== this.sessao) return;
      if (porNome && dados.existe) {
        this.trocar(campo);
        this.aviso = 'Nome encontrado. Digite o código do seu convite para responder.';
      } else if (!porNome && Array.isArray(dados.nomes) && dados.nomes.length > 0) {
        this.codigo = valor;
        this.tentativa = crypto.randomUUID();
        this.pessoas = dados.nomes.map((nome: string) => ({ nome, vai: null }));
        titulo.focus();
      } else {
        throw new Error();
      }
    } catch {
      if (sessao === this.sessao) this.aviso = 'Não foi possível consultar a lista agora. Tente novamente ou fale com os noivos.';
    } finally {
      if (sessao === this.sessao) this.ocupado = false;
    }
  }

  async responder(): Promise<void> {
    if (this.ocupado || this.enviado || !this.pessoas.length || this.pessoas.some(pessoa => pessoa.vai === null)) return;
    const sessao = this.sessao;
    this.ocupado = true;
    this.aviso = '';
    try {
      const resposta = await this.requisitar({ acao: 'responder', codigo: this.codigo, respostas: this.pessoas, tentativa: this.tentativa });
      if (!resposta.ok || !(await resposta.json()).enviado) throw new Error();
      if (sessao === this.sessao) {
        this.enviado = true;
        this.aviso = 'Resposta enviada. Obrigado por nos avisar!';
      }
    } catch {
      if (sessao === this.sessao) this.aviso = 'Não conseguimos confirmar o envio. Tente novamente ou avise os noivos pelo WhatsApp.';
    } finally {
      if (sessao === this.sessao) this.ocupado = false;
    }
  }

  private requisitar(dados: object): Promise<Response> {
    return fetch('/api/presenca', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  }
}
