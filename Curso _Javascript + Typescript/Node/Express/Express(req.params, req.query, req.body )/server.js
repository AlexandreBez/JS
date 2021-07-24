const express = require('express');
const app = express();

//profiles/12345?campanha=googleads&noem_campanha=lirio

//http://meusite.com/ <- GET -> Entrega a página /
//http://meusite.com/sobre <- GET -> Entrega a página /sobre

//CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET   PUT    DELETE

app.use(
    express.urlencoded({ 
        extended: true 
    })
);

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente:<input type="text" name="nome">
        <button>Enviar Formulario</button>
        </form>
    `);
});

app.get('/testes:idUsuarios?/:parametro?', (req, res) => {
    // /profile/1
    console.log(req.params);
    // /profile/?chave1=valor1&chave2=valor2
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    
    console.log(req.body)
    res.send(`O que me foi enviado é ${req.body.nome}`);
});

app.get('/contato', (req, res) => {
    res.send('contatos: (99) 999999999');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});



