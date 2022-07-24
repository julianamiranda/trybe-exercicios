const express = require('express');
const { getAll, getByAuthorId} = require('./models/Books');

const app = express();

app.get('/books', async (_req, res) => {
  const { author_id } = req.query;

  const allBooks = (author_id) ? await getByAuthorId(author_id) : getAll();
  
  res.status(200).json(allBooks);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`on da porta ${PORT}`) });