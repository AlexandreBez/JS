function Produto(nome, preco, estoque) {

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Bad Value!!!');
            }
            estoquePrivado = valor;
        },
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

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);
console.log(Object.keys(p1));

const p2 = criaProduto('Regata');
console.log(p2.nome);



