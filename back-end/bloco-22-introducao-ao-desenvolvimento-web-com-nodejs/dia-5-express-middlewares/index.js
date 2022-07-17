const express = require('express');
const bodyParser = require('body-parser');

const productNameValidator = require('./middlewares/productNameValidator');
const infoValidator = require('./middlewares/infoValidator');

const app = express();

app.use(bodyParser.json());

app.post('/sales', productNameValidator, infoValidator, (_req, res) =>{
  res.status(201).json({ message: "Venda cadastrada com sucesso" });
})

app.listen(3001, ()=> console.log('deu bom'));