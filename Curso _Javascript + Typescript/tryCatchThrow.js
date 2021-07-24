/*
try {

    console.log(naoExisto);

} catch(e){

    console.log("Variavel não existe....");

    console.log(e);
    //!nao FAÇA:
    console.log(e);
}

*/

function soma(x, y)
{

    if(typeof x !== "number" || typeof y !== "number")
    {

        throw new Error("X e Y Precisam ser numeros")
    
    }

    return x + y;

}


try 
{

    console.log(soma(3, 5));
    console.log(soma("tres", 5));

} 
catch(e)
{

    // console.log(e);

    console.log("Algo mais Amigavel para o user.....");

}


