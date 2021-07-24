class Pessoa {
    constructor(nome, sobrenome) { 
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`);
    }

    rir() {
        console.log(`${this.nome} ${this.sobrenome} está Rindo.`);
    }
};

const p1 = new Pessoa('Luiz', 'Otavio');
console.log(p1);

p1.falar();
p1.rir();

