const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

const removido = nomes.splice(4, 1, 'Luan', 'Tania');
// const negativo = nomes.splice(-1, -1);
// const negativo2 = nomes.splice(-1, Number.MAX_VALUE);
console.log(nomes, removido);

