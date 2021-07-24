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

async function executa() {

    try {
        const fase1 = await esperaAi('Fase1', aleatorio(1,5));
        console.log(fase1);
        const fase2 = await esperaAi('Fase2', aleatorio(1,5));
        console.log(fase2);
        const fase3 = await esperaAi('Fase3', aleatorio(1,5));
        console.log(fase3);
    }catch(e) {
        console.log(e);
    }

}

executa();

//pending -> pendente
//fullfilled -> resolvida
//rejected -> rejeitada
