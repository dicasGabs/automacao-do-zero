import { test, expect } from '../fixtures/fixtures';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardPage } from '../pages/DashboardPage';


test.describe('Login', () => {

    let loginPage;
    let registerPage;
    let dashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);
        dashboardPage = new DashboardPage(page);

        await loginPage.abrir();
    });


    test('deve entrar com o usuário que acabou de ser cadastrado', async ({ page, usuario }) => {
        // ARRANGE: cria o usuário pela própria tela de cadastro e sai da conta
        await loginPage.clicarCriarConta();
        await registerPage.preencherCadastro(usuario);
        await registerPage.clicarCriarConta();
        await expect(page).toHaveURL(/dashboard/);

        await dashboardPage.sair();
        await expect(page).toHaveURL(/login/);

        // ACT
        await loginPage.fazerLogin(usuario.email, usuario.senha);

        // ASSERT
        await expect(page).toHaveURL(/dashboard/);
        await expect(dashboardPage.nomeDoUsuario).toHaveText(usuario.nome);
    });


    test('não deve entrar com a senha errada', async ({ page }) => {
        // usuario@teste.com é a conta de testes que o próprio Hub mostra na tela de login
        await loginPage.fazerLogin('usuario@teste.com', 'senhaErrada123');

        await expect(loginPage.alerta).toBeVisible();
        await expect(loginPage.alerta).toContainText('Email ou senha incorretos');
        await expect(page).toHaveURL(/login/);
    });


    test.fixme('deve avisar os dois campos obrigatórios quando nada é preenchido', async () => {
        await loginPage.clicarEntrar();

        // .visible() (entrou no Playwright 1.63): só as mensagens que APARECEM na tela
        await expect(loginPage.mensagensDeValidacao.visible()).toHaveText([
            'Por favor, insira um email válido.',
            'Por favor, insira a senha.',
        ]);
    });

});
