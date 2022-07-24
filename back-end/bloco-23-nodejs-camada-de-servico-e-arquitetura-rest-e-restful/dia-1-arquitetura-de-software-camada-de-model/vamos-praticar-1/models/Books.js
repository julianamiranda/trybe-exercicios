const connection = require('./connection');
const Author = require('./Authors');

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

const isValid = (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;
  
  return true;
};

const create = (title, authorId) => {
   return connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)', [title, authorId]
  );
};

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create, 
}
