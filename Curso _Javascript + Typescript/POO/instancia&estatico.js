class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumeta() {
        if(this.volume >= 100) {
            console.log(this.volume);
            return;
        }
        this.volume += 2;
    }

    diminui() {
        if(this.volume <= 0) {
            console.log(this.volume);
            return;
        }

        this.volume -=2;
    }

    //Método de instância
    static trocaPilha() {
        console.log("A pilha esta acabando...Troque a pilha");
    }
};

const controle1 = new ControleRemoto('LG');
controle1.aumeta();
console.log(controle1);

ControleRemoto.trocaPilha();
