import { test, expect } from '../fixtures/fixtures';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


test.describe('Cadastro de usuário', () => {

    let loginPage;
    let registerPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);

        await loginPage.abrir();
        await loginPage.clicarCriarConta();
    });


    test('deve cadastrar um novo usuário com sucesso', async ({ page, usuario }) => {
        await expect(page).toHaveURL(/register/);

        await registerPage.preencherCadastro(usuario);
        await expect(registerPage.campoEmail).toHaveValue(usuario.email);

        await registerPage.clicarCriarConta();

        await expect(registerPage.mensagemSucesso).toBeVisible();
        await expect(registerPage.mensagemSucesso).toContainText(/sucesso/i);
        await expect(registerPage.mensagemErro).not.toBeVisible();
    });


    test('deve manter os dados digitados no formulário antes de enviar', async ({ usuario }) => {
        await registerPage.preencherCadastro(usuario);

        // SOFT ASSSERTIONS:    não param na primeira falha, mas continuam executando os demais expect
        await expect.soft(registerPage.campoNome).toHaveValue(usuario.nome);
        await expect.soft(registerPage.campoEmail).toHaveValue(usuario.email);
        await expect.soft(registerPage.campoTelefone).toHaveValue(usuario.telefone);
        await expect.soft(registerPage.checkboxTermos).toBeChecked();

        await expect(registerPage.botaoCriarConta).toBeEnabled();
    });


});