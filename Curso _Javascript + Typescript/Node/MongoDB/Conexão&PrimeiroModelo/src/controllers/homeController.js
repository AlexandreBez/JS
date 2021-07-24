const HomeModel = require('../models/HOMEMODEL');

HomeModel.create({ 
    titulo:'Titulo de teste',
    descricao: 'uma descricao'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginainicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

