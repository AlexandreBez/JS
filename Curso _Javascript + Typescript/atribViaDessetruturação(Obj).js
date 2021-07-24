
const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'jardim botanico',
        numero: 233
    }
}

const {nome: n, idade, endereco:{rua, ...resto}} = pessoa;

console.log(n, idade, rua, resto);
