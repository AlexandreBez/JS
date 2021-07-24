exports.paginaInicial = (req, res) => {
    // console.log(req.flash('info'), req.flash('ola mundo'));
    res.render('index');
    return;
  };
  
  exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
  };