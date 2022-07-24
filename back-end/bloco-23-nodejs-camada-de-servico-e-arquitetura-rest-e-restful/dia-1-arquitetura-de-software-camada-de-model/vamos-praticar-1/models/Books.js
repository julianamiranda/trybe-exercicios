const connection = require('./connection');

const serialize = (data) => {
  return {
    id: data.id,
    title: data.title,
    authorId: data.author_id,
  }
};
// 1. Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  return books.map(serialize);
}

// 3. Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id. 
const getByAuthorId = async (id) => {
  //const [books] = await connection.execute(`SELECT * FROM books WHERE model_example.author_id = ${id}`);
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [id]);
  return books.map(serialize);
};

module.exports = {
  getAll,
  getByAuthorId,
}
