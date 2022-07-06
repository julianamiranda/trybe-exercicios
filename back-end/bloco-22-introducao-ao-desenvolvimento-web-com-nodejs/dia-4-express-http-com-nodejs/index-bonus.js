const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const auth = require('./auth');
const generateToken = require('./generateToken');

app.use(bodyParser.json());
app.use(auth);

// Bonus
//Exercicio 2
app.post('/signup', (req, res) => {
  try {
    const { email, password, fistName, phone } = req.body;
    
    if ([email, password, firstName, phone].includes(undefined)){
      return res.status(401).json({ message: 'missing fields' });
    }

    const token = generateToken();
    return res.status(200).json( { token });
  } catch(error){
    return res.status(500).end();
  }
})

app.listen(3000, () => console.log('on porta 3000!'));