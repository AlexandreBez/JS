function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: estoque, //valor
        writable: false,//alterar
        configurable: false,//configuravel
    });

    Object.defineProperties(this, { 
        nome: {
            enumerable: true, //mostra chave
            value: nome, //valor
            writable: false,//alterar
            configurable: false,//configuravel
        },
        preco: {
            enumerable: true, //mostra chave
            value: preco, //valor
            writable: false,//alterar
            configurable: false,//configuravel
        },
    });

};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));

