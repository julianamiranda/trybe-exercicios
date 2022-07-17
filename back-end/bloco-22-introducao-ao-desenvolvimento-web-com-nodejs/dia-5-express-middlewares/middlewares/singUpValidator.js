const singUpValidator = (req, res, next) => {
  try{
    const { email, password, firstName, phone } = req.body;
    if ([email, password, firstName, phone].includes(undefined)) return res.status(401).json({ message: 'missing fields' });
  }catch(error){
    return res.status(500).end();
  }
}

module.exports = singUpValidator;