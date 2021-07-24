const objA = {
    chaveA: 'A',
    //__proto__: Object.prototype
}

const objB = {
    chaveB: 'B',
    //__proto__: Object.prototype
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA);

console.log(objB.chaveA);
console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
}

const p1 = new Produto('Regata', 50);
p1.desconto(19);
p1.aumento(20);
console.log(p1);

//literal
const p2 = {
    nome: 'Caneca',
    preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(5);

console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: false,
        configurable: false,
        enumerable:true,
        value: 640
    },
    nome: {
        writable: false,
        configurable: false,
        enumerable:true,
        value: 'Nexus 6'
    }
});

p3.desconto(10);
console.log(p3);

