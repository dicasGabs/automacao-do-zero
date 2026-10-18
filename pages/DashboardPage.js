export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  get nomeDoUsuario() {
    return this.page.locator('#user-name');
  }

  get botaoSair() {
    return this.page.locator('#logout-button');
  }

  async sair() {
    // O botão "Sair da Conta" abre uma janela de confirmação do navegador
    // ("Tem certeza que deseja sair da sua conta?").
    // Por padrão o Playwright FECHA essas janelas dizendo "Cancelar" —
    // então sem esta linha o clique acontece e o usuário continua logado.
    // Ela precisa vir ANTES do clique: é um aviso combinado de antemão.
    this.page.once('dialog', (dialog) => dialog.accept());

    await this.botaoSair.click();
  }
}
