
//* declarar funcao hoisting

oi();

function oi() {

    console.log('Oie');

}


//* first-class objects (objetos de primeira classe)
//* function expression
const nome = function(){
    console.log('lucas');
};

nome();

function exFuncao(funcao) { 
    funcao();
}

exFuncao(nome);

//* arrow function(moderno)

const ex = () => {
    console.log('bez');
}

ex();

//* dentro de um objeto

const obj = {

    //*mais moderno
    falar(){
        console.log('bla....bla');
    }

    // falar: function(){
    //     console.log('bla....bla');
    // }
}

obj.falar();
