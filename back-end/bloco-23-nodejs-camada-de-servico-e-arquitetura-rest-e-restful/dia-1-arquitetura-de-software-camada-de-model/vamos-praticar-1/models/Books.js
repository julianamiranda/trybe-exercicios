const connection = require('./connection');

const serialize = (data) => {
  return {
    id: data.id,
    title: data.title,
    authorId: data.author_id,
  }
};

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  return books.map(serialize);
}

const getByAuthorId = async (id) => {
  //const [books] = await connection.execute(`SELECT * FROM books WHERE model_example.author_id = ${id} LIMIT 2`);
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [id]);
  return books.map(serialize);
};

module.exports = {
  getAll,
  getByAuthorId,
}
