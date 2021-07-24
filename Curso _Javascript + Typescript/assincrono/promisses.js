function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });

};

esperaAi('Conexão com o BD', aleatorio(1, 4))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados no BD', aleatorio(1, 4))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados no BD', aleatorio(1, 4))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO: ', e);
    });



