module.exports = (req, res, next) => {
  try{
    const { authotization } = req.headers;
    
    if(!authotization || authotization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido!'});
    }

    return next();
  } catch (error) {
    return res.status(500).end();
  }
}