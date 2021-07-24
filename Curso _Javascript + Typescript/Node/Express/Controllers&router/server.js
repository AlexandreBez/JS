const express = require('express');
const app = express();

//http://meusite.com/ <- GET -> Entrega a página /
//http://meusite.com/sobre <- GET -> Entrega a página /sobre

//CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET   PUT    DELETE

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente:<input type="text" name="nome">
        <button>Enviar Formulario</button>
        </form>
    `);
});



app.post('/', (req, res) => {
    res.send('Recebi o formulario');
});

app.get('/contato', (req, res) => {
    res.send('contatos: (99) 999999999');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});



