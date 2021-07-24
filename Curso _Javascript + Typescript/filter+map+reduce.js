const numeros = [50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
    .filter(valor => valor % 2 == 0)//[ 50, 80, 2, 8, 22 ]
    .map(valor => valor * 2)//[ 100, 160, 4, 16, 44 ]
    .reduce((ac, valor) => ac + valor);//324);

console.log(numerosPares);





