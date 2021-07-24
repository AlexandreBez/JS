//*factory funtion
function pessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(oi = 'hello') {
            //!this sempre vai se referir a pessoa que chamou
            //!o Objeto
            return `${this.nome}....${oi}`;
        },

        altura: a,
        peso: p,

        //GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = pessoa('Junji', 'Ito', 1.7, 70);

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.fala());
p1.nomeCompleto = 'Anakim ito';
console.log(p1.nomeCompleto);

