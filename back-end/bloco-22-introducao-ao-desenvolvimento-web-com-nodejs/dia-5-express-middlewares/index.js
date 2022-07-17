const express = require('express');
const bodyParser = require('body-parser');

const generateToken = require('./utils/generateToken');
const infoValidator = require('./middlewares/infoValidator');
const tokenValidator = require('./middlewares/tokenValidator');
const singUpValidator = require('./middlewares/singupValidator');
const productNameValidator = require('./middlewares/productNameValidator');

const app = express();

app.use(bodyParser.json());

app.use(tokenValidator);

// Exercicio 1
app.post('/sales', productNameValidator, infoValidator, (_req, res) =>{
  res.status(201).json({ message: "Venda cadastrada com sucesso" });
})

//Exercicio 2
app.post('/singup', singUpValidator, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

app.listen(3001, ()=> console.log('deu bom'));