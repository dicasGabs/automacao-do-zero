export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  // ---------- GETTERS: só DESCREVEM onde está cada coisa na tela ----------

  get campoEmail() {
    return this.page.locator('#email');
  }

  get campoSenha() {
    return this.page.locator('#password');
  }

  get botaoEntrar() {
    return this.page.locator('#login-btn');
  }

  get alerta() {
    return this.page.locator('#alert-container');
  }

  // As DUAS mensagens ("insira um email válido" e "insira a senha") já estão
  // no HTML desde o começo, só que escondidas. Por isso este locator acha 2.
  get mensagensDeValidacao() {
    return this.page.locator('.invalid-feedback');
  }

  // ---------- MÉTODOS: AGEM na tela ----------

  async abrir() {
    await this.page.goto('/login.html');
  }

  async clicarCriarConta() {
    await this.page.locator('a[href="/register.html"]').click();
  }

  async preencherEmail(email) {
    await this.campoEmail.fill(email);
  }

  async preencherSenha(senha) {
    await this.campoSenha.fill(senha);
  }

  async clicarEntrar() {
    await this.botaoEntrar.click();
  }

  async fazerLogin(email, senha) {
    await this.preencherEmail(email);
    await this.preencherSenha(senha);
    await this.clicarEntrar();
  }
}
