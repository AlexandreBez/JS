//Suprclass
function Conta(ag, conta, saldo) {
    this.ag = ag;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo Insuficiente: R$${this.saldo}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.ag}/${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(5145, "00024273-5", 469.24);
conta1.depositar(543.00);
conta1.sacar(1012.29);

//===============Conta Corrente====================

function Cc(ag, conta, saldo, limite) {
    Conta.call(this, ag, conta, saldo);
    this.limite = limite;
};

Cc.prototype = Object.create(Conta.prototype);
Cc.prototype.constructor = Cc; 

Cc.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

const Cc1 = new Cc(4332, "00075543-7", 843.64, 1000);
Cc1.depositar(543.00);
Cc1.sacar(1012.29);
Cc1.sacar(1626.00);

//===============Conta Poupanca====================

function Cp(ag, conta, saldo) {
    Conta.call(this, ag, conta, saldo);
};

Cp.prototype = Object.create(Conta.prototype);
Cp.prototype.constructor = Cp; 

const cp1 = new Cp(4753, '00032473-2', 6000);
cp1.depositar(135);


