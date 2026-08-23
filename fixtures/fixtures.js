import { test as base, expect } from '@playwright/test';
import { gerarUsuario, dadosPadrao } from './testData';

export const test = base.extend({
  usuario: async ({}, use) => {
    const usuario = gerarUsuario();
    console.log(`\n Preparando usuário:`);
    console.log(`   Nome:  ${usuario.nome}`);
    console.log(`   Email: ${usuario.email}`);
    console.log(`   Tel:   ${usuario.telefone}`);

    await use(usuario);

    console.log(`🧹 Usuário descartado\n`);
  },

  livro: async ({}, use) => {
    const livro = dadosPadrao.livros.alquimista;
    console.log(` Usando livro: ${livro.titulo}`);

    await use(livro);
  },

  senha: async ({}, use) => {
    await use(dadosPadrao.senhaDefault);
  },
});

export { expect };
