const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const simpsonsInfo = require('./fs-utils');

app.use(bodyParser.json());

//Execicio 1
app.get('/ping', (_req, res) => {
 return res.json({"message": 'pong'});
})

//Exercicio 2
app.post('/hello', (req, res) =>{
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
});

//Exercicio 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(Number(age) <= 17) return res.status(401).json({ "message": "Unauthorized" });
  return res.status(200).json({ "message": `Hello, ${name}!` });
})

//Exercicio 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
})

//Exercicio 6
app.get('/simpsons', async(req, res) => {
  try{
    const simpsons = await simpsonsInfo.getSimpsons();
    return res.status(200).json(simpsons);
  } catch(error){
    return res.status(500).end;
  };
});

// Exercicio 7
app.get('/simpons/:id', async(req, res) => {
  try{
    const { id } = req.params;
    const simpsons = await simpsonsInfo.getSimpsons();

    const getSimpsonsById = simpsons.find((s) => s.id === Number(id));
    
    if(!getSimpsonsById) return res.status(404).json({ message: 'simpson not found' });
    return res.status(202).json(getSimpsonsById);
  }catch(error){
    return res.status(500).end;
  };
});

app.listen(3000, () =>{ console.log("on na porta 3000")})