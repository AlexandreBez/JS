
//*sempre inicializa com nome maiusculo
//!brigatorio a palavra new
//* molde para gerar um novo objeto 

function  Pessoa(nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log('sou um metodo.....');
    }
    
}


let p1 = new Pessoa('lucas', 'Bez');
let p2 = new Pessoa('jose', 'Alberto');

console.log(p1.nome, p1.sobrenome);
console.log(p2);
p1.metodo();

console.log(p1.metodoInterno);
