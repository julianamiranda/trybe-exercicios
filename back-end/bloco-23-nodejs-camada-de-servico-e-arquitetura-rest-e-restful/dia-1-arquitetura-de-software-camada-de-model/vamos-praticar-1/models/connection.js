const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: '14652089767',
  host: 'localhost',
  database:'model_example'
});

module.exports = connection;
