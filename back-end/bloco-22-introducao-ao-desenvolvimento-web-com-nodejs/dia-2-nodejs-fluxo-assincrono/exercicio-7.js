const fs = require('fs');
const readline = require('readline');

const question = async (message) => {
  const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise ((resolve) => {
    readLineInterface.question(message, (answer) => {
      readLineInterface.close();
      resolve(answer);
    });
  });
}

const start =  async () => {
  const fileName = await question('Arquivo a ser lido: ');
  //utilizando um catch para tratar erros
  const originalContent = await fs.readFile(fileName, 'utf-8')
    .catch((err) =>{
      console.error (`Erro ao ler o arquivo: ${err}`);
      return false;
    });
  // Se `originalContent` estiver vazia ou contiver um valor falso,
  // quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
  // Utilizamos o `return` para encerrar a execução
  if (!originalContent) return;

  //Perguntamos quais palavras deverão ser substituídas, realizamos a substituição e exibimos o resultado na tela.
  const oldWord = await question('Qual a palavra deseja substituir? ');
  const newWord = await question ('E qual palavra ficara em seu lugar? ');

  const newContent = originalContent.replace( newRegExp(oldWord, 'g'), newWord);

  console.log('Resultado da substituição: ');
  console.log(newContent);

  //Perguntamos o nome do arquivo onde salvar o resultado e escrevemos no disco.
  const destinationPath = await question('Onde deseja salvar o resultado? ');
  await fs.writeFile(destinationPath, newContent);
}

start();