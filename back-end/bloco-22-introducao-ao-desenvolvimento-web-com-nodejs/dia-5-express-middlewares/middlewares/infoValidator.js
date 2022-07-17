const infoValidator = (req, res, next) => {
  const { infos: { salesDate, warrantyPeriod } } = req.body;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const isdateValid = dateRegex.test(salesDate);

  if(!infos) return res.status(400).json({ message: "O campo infos é obrigatório"});

  if(!salesDate) return res.status(400).json({ message: "O campo saleDate é obrigatório"});
  if(!isdateValid) return res.status(400).json({ message: "O campo saleDate não é uma data válida"});
  
  if(!warrantyPeriod) return res.status(400).json({ message: "O campo warrantyPeriod é obrigatório"});
  if(warrantyPeriod < 1 || warrantyPeriod > 3) return res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3"});

  next()
};

module.exports = infoValidator;