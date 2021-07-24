//!composição ou mixing

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const rir = {
    rir() {
        console.log(`${this.nome} está rindo.`);
    },
};

const cantar = {
    cantar() {
        console.log(`${this.nome} está cantando.`);
    }
};

// const pessoaPrototype = {...falar, ...rir, ...cantar};
const pessoaPrototype = Object.assign({}, falar, cantar, rir);

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
};

const p1 = criaPessoa('Luiz', 'Otavio');


