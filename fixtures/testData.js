import { fakerPT_BR as faker } from '@faker-js/faker';


const gerarTelefone = () => {
    const ddd = faker.number.int({ min: 11, max: 99 });
    const numero = faker.string.numeric(8);
    return `(${ddd}) 9${numero.slice(0, 4)}-${numero.slice(4)}`;
}

export const gerarUsuario = () => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    telefone: gerarTelefone(),
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
