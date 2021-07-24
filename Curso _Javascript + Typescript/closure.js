
function retornaFunc() {
    const nome = 'Lucas';
    return function() {
        //*closure e a habilidade dessa funcao acessar o
        //*seu escopo léxico
        return nome;
    }
}

const func = retornaFunc();
console.dir(func);
