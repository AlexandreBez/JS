function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') { 
            reject('BAD VALUE');
            return;
        };

        setTimeout(() => {
            resolve(msg);
            return;
        }, tempo);

    });

};

//promisse.all promisse.race promisse.resolve promisse.reject

const promises = [
    'Primeiro Valor',
    esperaAi('Promise1', 3000),
    esperaAi('Promise2', 1000),
    esperaAi('Promise3', 2000),
    // esperaAi(1000, 2000),
    'Outro valor',
];

// Promise.all(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => {
//         console.log("BAD VALUE");
//     });

// Promise.race(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => {
//         console.log(e);
//     });

function baixaPagina() {
    const emCache = false;
    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e));
