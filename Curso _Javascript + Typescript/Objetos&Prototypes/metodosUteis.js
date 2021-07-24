const produto = {nome: 'Produto', preco: 1.8};

//!values & entries
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
// console.log(Object.values(produto));


//!getOwnpropertyDescriptor
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


//!keys & freeze
// const Caneca = {nome: produto.nome, preco: produto.preco};
// Object.freeze(produto);
// console.log(Object.keys(produto));

//!assign
// const Caneca = Object.assign({}, produto, {material: 'Porcelana'});
// Caneca.nome = 'Outro Nome';
// Caneca.preco = 2.5;
// console.log(produto);

//!spreed
// const Caneca = {
//     ...produto,
//     material: 'Porcelana',
// };



