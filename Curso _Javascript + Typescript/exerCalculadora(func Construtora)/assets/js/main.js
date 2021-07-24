
//!Objeto calculadora
function Calculadora() {

    //!seleciona o display
    this.display = document.querySelector('.display');

    //!pega os botoes e o valor deles e chama as funcoes 
    this.capturaCliques = () => document.addEventListener('click', e => {

        const el = e.target;

        //!verifica a class do botao
        if (el.classList.contains('btn-num')) this.addNum(el);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-eq')) this.realizaConta(el);
        if (el.classList.contains('btn-del')) this.del();

    });

    //!captura tecla Enter
    this.capturaEnter = () => {
        document.addEventListener('keyup', (e) => {

            if(e.keyCode !== 13) return;
            this.realizaConta();

        });
    }

    //!captura o valor dos numeros
    this.addNum = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    //!limpa o display
    this.clear = () => this.display.value = '';

    //!deleta um carater
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    //!realiza conta ou retorna erro
    this.realizaConta() = () => {

        try {

            const conta = eval(this.display.value);

            if (!conta){  
                alert('conta invalida'); 
                return;
            };

            this.display.value = conta;

        } catch (e) {
            alert('Conta Invalida');
            return;
        };
    }

    //!ajuda na inicializacao da calculadora
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

}

//!cria novo objeto
const calculadora = new Calculadora();

//!chama o metodo auxiliar dentro do objeto
calculadora.inicia();

