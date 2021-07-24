// funcao que se chama de volta

function num(max) {
    if(max >= 10) return;
    max++;
    console.log(max)
    num(max)
}

num(-10);
