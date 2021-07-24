


function criaCalculadora() {
    return {

        //!display
        display: document.querySelector('.display'),

        //!funcao para limpar display
        clearDisplay() {
            this.display.value = '';
        },

        //!funcao para apagar um caracter
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        //!inicializa
        inicia() {
            this.clickBotoes();
            this.pressionaEnter();  
        },

        //!Tecla Enter
        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {

                if(e.keyCode === 13) {
                    this.realizaConta();
                }

            })
        },

        realizaConta() {
            //!funcao perigosa para falha de segurança
            let conta = this.display.value;

            try{

                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = conta;

            } catch(e) {
                alert('Conta Invalida');
                return;
            }
        },

        //!captura o click dos botoes 
        clickBotoes() {
            document.addEventListener('click', (e) => {

                const el =e.target;

                //!ve o valor do texto

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                //!botao limpar
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                //!botao apagar um caracter
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                //!botao Igual
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                //!Fixar o problema do focus
                this.display.focus();

            });

        },

        //!o valor do texto e mandado para ca
        btnParaDisplay(valor) {
            this.display.value += valor;
        },


    };
}


const calculadora = criaCalculadora();
calculadora.inicia();
