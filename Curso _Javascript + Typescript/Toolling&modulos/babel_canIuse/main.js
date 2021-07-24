const nome = 'luiz';
const obj = { nome };
const novoObj = { ...obj };

for(let soletra of nome){
    console.log(soletra);
}

console.log(novoObj);