class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        
        if(this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }

        this.ligado = true;
    }

    desligar() {

        if(!this.ligado) {
            console.log(this.nome + ' já desligado.');
            return;
        }

        this.ligado = false;

    }
};

const cel1 = new DispositivoEletronico('Xiaomi');
cel1.ligar();
cel1.ligar();
cel1.desligar();
cel1.desligar();

console.log(cel1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Motorola', 'Cinza', 'Nexus 5');
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo, temWifi) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.temWifi = temWifi;
    }

    falaOi() { 
        console.log("Óla...Seja Bem-Vindo");
    }
}

const t1 = new Tablet('Samsung', 'Prata', 'Nexus 9', true);
t1.ligar();
t1.falaOi();
console.log(t1);

