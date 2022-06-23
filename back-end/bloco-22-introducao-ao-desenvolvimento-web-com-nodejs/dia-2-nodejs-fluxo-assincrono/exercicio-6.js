const fs = require('fs');
const readline = require('readline');

const question = (msg) => {
  const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readLineInterface.question(msg, (answer) => {
      readLineInterface.close();
      resolve(answer);
    })
  })
};

const start = async () => {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  }
  catch(err){
    console.log('Arquivo inexistente');
  }
}

start()