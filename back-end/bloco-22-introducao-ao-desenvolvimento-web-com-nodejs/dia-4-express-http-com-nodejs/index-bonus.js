const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const auth = require('./auth');

app.use(bodyParser.json());
app.use(auth);

// Bonus
//Exercicio 1

app.listen(3000, () => console.log('on porta 3000!'));