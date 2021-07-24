const numeros = [50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
    
    //!dobro dos valores
    acumulador.push(valor * 2);
    //!multiplos de 2 
    // if(valor % 2 === 0) acumulador.push(valor);
    //!soma do total do array
    // acumulador += valor;
    return acumulador

}, []);
console.log(total);


const pessoas = [

    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}

];

const maisVelha = pessoas.reduce((acumulador, valor) => {

    if(acumulador.idade > valor.idade) return acumulador;

});
console.log(maisVelha);

