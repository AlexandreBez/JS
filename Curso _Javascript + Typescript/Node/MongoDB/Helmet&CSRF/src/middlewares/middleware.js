
exports.middlewareGlobal = (req, res, next) => {
  res.locals.local = 'Este e o valor da variavel local';
    next();
  };
  
  exports.outroMiddleware = (req, res, next) => {
    next();
  };