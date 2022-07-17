const productNameValidator = (req, res, next) => {
  const { productName } = req.body;
  
  if(!productName) res.status(400).json({ message: "O campo productName é obrigatório" });
  if(productName.length < 4) res.status(400).json({ message: "O campo productName deve ter pelo menos 4 caracteres" });

  next()
}

module.exports = productNameValidator;