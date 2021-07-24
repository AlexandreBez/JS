
//! argumentos que sustenta todos os argumentos enviados

function func() {
    console.log(arguments[0]);
}

func('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);

function func2(a, b, c, d, e, f) {
    // let total = 0;
    // for (let argumentos of arguments) {
    //     total += argumentos;
    // }

    console.log(a, b, c, d, e, f);
}

func2(1, 2, 3, 4, 5);

//* argumentos podem receber valor ja definidos

function func3(a, b = 6, c = 2) {
    console.log(a + b + c);
}

func3(4, undefined, 20);

//* objeto literal 

function func4({nome, sobrenome, idade}){

    console.log(nome, sobrenome, idade);

};

func4({nome:'lucas', sobrenome:'bez', idade: '?'});

//* desetruturacao de array 

function func5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

func5(['lucas', 'alexandre', 'osaka']);

//* com rest operator

function func6(operador, acumulador, ...numeros) {

    for (let numero of numeros) {
        if ( operador === '+') acumulador += numero;
        if ( operador === '-') acumulador -= numero;
        if ( operador === '*') acumulador *= numero;
        if ( operador === '/') acumulador *= numero;
    }

    console.log(acumulador);
};

func6('+', 1, 20, 20);

//* exemplo 2

//! sempre use os tres pontinhos e funciona em qualquer funcao
const conta = (...args) => {
    console.log(args);
};

conta('+', 1, 20, 30, 40)




