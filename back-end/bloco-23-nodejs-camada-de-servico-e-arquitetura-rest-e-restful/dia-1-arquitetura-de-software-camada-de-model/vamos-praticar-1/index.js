const express = require('express');
const { getAll, getByAuthorId } = require('./models/Books');

const app = express();

// 2. Crie uma rota /books para trazer a lista de todos os livros;
app.get('/books', async (_req, res) => {
  const allBooks = await getAll();

  res.status(200).json(allBooks);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

// 3. Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id
  const allBooks = await getByAuthorId(id);
  
  if (!allBooks) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(allBooks);
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`on da porta ${PORT}`) });
