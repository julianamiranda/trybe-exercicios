const fs = require('fs').promises;

const arrayStrings = async() =>  {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFilesPromises = strings.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  await Promise.all(createFilesPromises);

  const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

  const readFilesPromises = fileNames.map((name) => fs.readFile(fileName, 'utf-8'));
  
  // Utilizar Promise.all para aguardar a escrita de todos os arquivos - ou seja, a resolução de todas as promises.
  const fileContents = await Promise.all(readFilePromises);

  // Concatenar o conteúdo dos arquivos e criar o arquivo novo
  const newFileContent = fileContents.join ('');

  await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayString()