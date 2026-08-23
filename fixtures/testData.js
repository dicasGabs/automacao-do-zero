import { faker } from '@faker-js/faker';

export const gerarUsuario = () => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    telefone: faker.phone.number('(##) 9####-####'),
    senha: 'SenhaSegura@123'
});

export const dadosPadrao = {
    livros: {
        alquimista: {
            titulo: 'O Alquimista',
            autor: 'Paulo Coelho',
            paginas: '256',
        },
    },
    senhaDefault: 'SenhaSegura@123',
};
