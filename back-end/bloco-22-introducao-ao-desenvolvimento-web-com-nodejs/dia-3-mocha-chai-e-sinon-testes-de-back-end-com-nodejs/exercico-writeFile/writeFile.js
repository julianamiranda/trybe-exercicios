const fs = require('fs');

const writing = (fileName, content) => {
  fs.writeFileSync(`${__dirname}/${fileName}`, content)
  return 'ok';
};

module.exports = { writing };