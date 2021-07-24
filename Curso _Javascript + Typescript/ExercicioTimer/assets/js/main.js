

function relogio() {

  //* pega a data do marco zero a meia noite e utiliza no display do timer

  function criaHoraDosSegundos(segundos) 
  {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {

      hour12: false,
      timeZone: 'UTC'

    });
  }

  //* seleciona no documento o elemento da class relogio no HTML

  const relogio = document.querySelector('.relogio');

  //! AUXILIA NAS FUNCOES DOS BOTOES
  let segundos = 0;
  let timer;

  //!Muda o display na pagina HTML no elemento Relogio e add nos segundos

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  //!Funcoes dos Botoes parar, zerar e iniciar

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}

relogio();
