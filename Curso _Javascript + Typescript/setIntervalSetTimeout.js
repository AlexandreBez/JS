function mostraHora() 
{

    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function doInterval()
{

    console.log(mostraHora());

}

// setInterval(doInterval, 2000);

const timer = setInterval(function () 
{
    console.log(mostraHora())

}, 1000);

setTimeout(function() 
{
    clearInterval(timer)

}, 5000)



