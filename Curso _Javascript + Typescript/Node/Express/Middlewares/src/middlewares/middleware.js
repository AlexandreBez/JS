module.exports = (req, res, next) => {

    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('lucas', 'não use lucas');
        console.log(`Voce postou ${req.body.cliente}`);
    }

    next();
}