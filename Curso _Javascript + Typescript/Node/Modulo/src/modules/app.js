// const mod1 = require('./mod1');
// const mod1 = require('./mod1').falaNome;
// const path = require('path');
// const { nome, sobrenome, falaNome } = require('../../mod1');
// const { Pessoa } = require('../../mod1');
// const axios = require('../../mod1');
// const p1 = new Pessoa("Luiz", "Otavio", 25);
// p1.falar()

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

// console.log(nome, sobrenome)
// console.log(falaNome());

// const multiplicacao = require('./A/B/C/mod1');
// console.log(multiplicacao(2, 2))

// const multi = require('./A/B/C/z/mod2');
const path = require('path');

console.log(__filename);
console.log(path.resolve(__dirname, '..'));

