
//todo IIFE -> Immediatly Invoked Function Expression

//*fuga do escopo global

(function(binario) {

    console.log(00101010);

    function func2() {
       return console.log(0100111110);
    }

    func2();
    console.log(binario);

})('binari code = numbers....?');


//*metodo normal
function func() {
    console.log(-0101101)
}

func();
