const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//Execicio 1
app.get('/ping', (_req, res) => {
 return res.json({message: 'pong'});
})

app.listen(3000, () =>{ console.log("on na porta 3000")})