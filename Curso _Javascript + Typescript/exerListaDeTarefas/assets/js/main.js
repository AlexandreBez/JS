
//todo selecionar as class do documento HTML e utilizar em variaveis
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//!funcao para criar li 

function criaLi(){

    const li = document.createElement('li');
    return li;
};

//* add a acao da tecla enter

inputTarefa.addEventListener('keypress', function(e) {

    if(e.keyCode === 13) {

        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    };
});

//* limpa a area do input texto ao add tarefa

function limpaInput() {

    inputTarefa.value = '';
    inputTarefa.focus();
    
};

//* cria o botao apagar ao lado da tarefa

function criaBotaoApagar(li) {

    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('Apagar');
    botaoApagar.setAttribute('class', 'Apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
};


//* funcao criaTarefa  para add li
//! a mente q controla e faz junção de acoes chamadas se encontram aqui

function criaTarefa(textoInput) {

    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefas();

};

//!Captura o evento do click no btn e verifica se o valor no campo
//!é vazio caso não esteja add uma li com a funcao criaTarefa() 

btnTarefa.addEventListener('click', function() {

    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});


//!apaga o elemento li atraves do botao apagar

document.addEventListener('click', function(e) {

    const el = e.target;

    if(el.classList.contains('Apagar')) {

        el.parentElement.remove();
        salvaTarefas();

    }

});

//! salva as tarefas mesmo saindo da pagina HTML

function salvaTarefas() {

    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {

        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);

    };

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

};


//!le as tarefas e joga de volta na ul

function adicionaTarefasSalvas() {

    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
    
        criaTarefa(tarefa);

    };
};

adicionaTarefasSalvas();

