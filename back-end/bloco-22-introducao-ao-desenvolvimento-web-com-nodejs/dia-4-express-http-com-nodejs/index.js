const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//Execicio 1
app.get('/ping', (_req, res) => {
 return res.json({message: 'pong'});
})

//Exercicio 2
app.post('/hello', (req, res) =>{
  const { name } = req.body;
  return res.status(200).appjson({ message: `Hello, ${name}!`})
});

app.listen(3000, () =>{ console.log("on na porta 3000")})