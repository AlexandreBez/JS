// lazy evaliuation 
function* geradora() {

    //codigo....
    yield 'f1';
    //codigo....
    yield 'f2';
    //codigo....
    yield 'f3';
}

const g1 = geradora();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

//quando o valor e terminado e e chamado ele retorna undefined 
console.log(g1.next().value);


//pode ser iterado

function* geradora2() {

    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

console.log('===========================');
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {

    yield* geradora2();
    yield* geradora2();
    yield* geradora2();
    yield* geradora2();
}
console.log('===========================')
const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log('===========================')
//loop infinito
// for (let valor of g3) {
//     console.log(valor);
// }

function* geradora4() {

    yield function() {
        console.log('inicio');
    }

    //com o return a funcao patra aqui
    // return function() {
    //     console.log('return');
    // }

    yield function() {
        console.log('fim')
    }
};

console.log('===========================')
const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();


