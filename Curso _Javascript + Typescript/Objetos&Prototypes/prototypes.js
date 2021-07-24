//!construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => "ORIGINAL" + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
};

//instacia
const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'DB');

console.dir(p1);
console.log(p2);

