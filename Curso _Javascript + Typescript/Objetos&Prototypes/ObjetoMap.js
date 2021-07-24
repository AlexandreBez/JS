const pessoas = [
    {id: 3, nome: 'Andre'},
    {id: 2, nome: 'Luan'},
    {id: 1, nome: 'Natalia'},
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// };

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
};

for(const [identifier, {id, nome}] of novasPessoas) { 
    console.log(identifier, id, nome);
};

