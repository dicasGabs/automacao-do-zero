import { test, expect } from '../fixtures/fixtures';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';

test('deve cadastrar um novo usuário com sucesso', async ({ page, usuario }) => {

    const homePage = new HomePage(page);
    await homePage.abrir();
    await homePage.clicarCriarConta();
    await expect(page).toHaveURL(/register/);


    const registerPage = new RegisterPage(page);
    await registerPage.preencherCadastro(usuario);

    await expect(registerPage.campoEmail).toHaveValue(usuario.email);

    await registerPage.clicarCriarConta();

    await expect(registerPage.mensagemSucesso).toBeVisible();

    await expect(registerPage.mensagemSucesso).toContainText(/sucesso/i);

    await expect(registerPage.mensagemErro).not.toBeVisible();
});


test('deve manter os dados digitados no formulário antes de enviar', async ({ page, usuario }) => {

    const homePage = new HomePage(page);
    await homePage.abrir();
    await homePage.clicarCriarConta();

    const registerPage = new RegisterPage(page);
    await registerPage.preencherCadastro(usuario);

    // SOFT ASSSERTIONS:    não param na primeira falha, mas continuam executando os demais expect

    await expect.soft(registerPage.campoNome).toHaveValue(usuario.nome);
    await expect.soft(registerPage.campoEmail).toHaveValue(usuario.email);
    await expect.soft(registerPage.campoTelefone).toHaveValue(usuario.telefone);
    await expect.soft(registerPage.checkboxTermos).toBeChecked();

    await expect(registerPage.botaoCriarConta).toBeEnabled();



   

    
});






