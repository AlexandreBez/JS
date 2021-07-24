const frutas = ['Pera', 'Maça', 'Uva'];

for (let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'otavio',
    idade: 30
};

for(let i in pessoa) {
    console.log(i, pessoa[i]);
}