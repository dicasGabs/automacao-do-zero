export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async abrir() {
    await this.page.goto('/login.html');
  }

  async clicarCriarConta() {
    await this.page.locator('a[href="/register.html"]').click();
  }

}