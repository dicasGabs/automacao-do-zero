export class RegisterPage {
    constructor(page) {
        this.page = page;
    }

    get campoNome() {
        return this.page.getByLabel('Nome Completo');
    }

    get campoEmail() {
        return this.page.locator('#email');
    }

    get campoTelefone() {
        return this.page.getByLabel('Telefone');
    }

    get campoSenha() {
        return this.page.locator('#password');
    }

    get campoConfirmarSenha() {
        return this.page.locator('#confirm-password');
    }

    get checkboxTermos() {
        return this.page.locator('#register-form input[type="checkbox"]');
    }

    get botaoCriarConta() {
        return this.page.locator('#register-btn');
    }

    get mensagemSucesso() {
        return this.page.getByText(/Conta criada|sucesso/i);
    }

    get mensagemErro() {
        return this.page.getByText(/erro|já cadastrado|inválido/i);
    }

    async preencherNome(nome) {
        await this.campoNome.fill(nome);
    }

    async preencherEmail(email) {
        await this.campoEmail.fill(email);
    }

    async preencherTelefone(telefone) {
        await this.campoTelefone.fill(telefone);
    }

    async preencherSenha(senha) {
        await this.campoSenha.fill(senha);
    }

    async confirmarSenha(senha) {
        await this.campoConfirmarSenha.fill(senha);
    }

    async aceitarTermos() {
        await this.checkboxTermos.click();
    }

    async clicarCriarConta() {
        await this.botaoCriarConta.click();
    }

    async preencherCadastro(usuario) {
        await this.preencherNome(usuario.nome);
        await this.preencherEmail(usuario.email);
        await this.preencherTelefone(usuario.telefone);
        await this.preencherSenha(usuario.senha);
        await this.confirmarSenha(usuario.senha);
        await this.aceitarTermos();
    }

}