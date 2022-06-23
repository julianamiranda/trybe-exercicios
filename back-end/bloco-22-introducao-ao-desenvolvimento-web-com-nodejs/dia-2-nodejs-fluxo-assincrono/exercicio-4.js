const fs = require('fs').promises;

const leitura = async () => {
 const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) =>{
      const data = JSON.parse(fileContent);
      const lista = data.map((elem) => `${elem.id} - ${elem.name}`);
      lista.forEach((item) => console.log(item));
    });
}

const getById = async (id) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(fileContent);
  const newData = data.find((elem) => Number(elem.id) === id);
  if(!newData) throw new Error('id não encontrada');
  
  return newData;
}

/*
  // Filtra personagens
  const filterContent = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(fileContent);

  const infoFilter = data.filter((elem) => elem.id !== '10' && elem.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(infoFilter));
} 

// Cria um novo arquivo JSON com o conteúdo filtrado
const createFile = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(fileContent);
  
  const familiyIds = [1, 2, 3, 4];
  const simpsonsFamily = data.filter((elem) => familiyIds.includes(Number(elem.id)));
  
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFamily));
}

// Adciona um personagem no novo arquivo criado

const addInfo = async () => {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const data = JSON.parse(fileContent);
  const infoToAdd = { id: '8', name:'Nelson Muntz'};
  data.push(infoToAdd);
  
  await fs.writeFile('./simpsonsFamily.json', JSON.parse(data));
}

//Substitiui um personagem por outro
  // >> Com then
const replaceInfo = async () => {
  const fileContent = fs.readFile('./simpsonsFamily.json', 'utf-8')
  .then((result) => {
    const data = JSON.parse(result);
      const maggie = { id: '15', name: 'Maggie Simpson' };
      const editData = data.filter((elem) => elem.id !== '8');
      const finalData = editData.concat([maggie]);
      
      return fs.writeFile('./simpsonsFamily.json', JSON.stringify(finalData));
    });
  }

  // >> Com async/await
  const replaceInfo = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    const data = JSON.parse(result);
    const maggie = { id: '15', name: 'Maggie Simpson' };
    const editData = data.filter((elem) => elem.id !== '8');
    const finalData = editData.concat([maggie]);
    
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(finalData));
  }
*/
  
// vi no gabarito que essa função é apenas para ter um ponto de entrada centralizado para o script
const main = () => leitura();

main();

/* //chamando a função que busca pelo ID
const mainTwo = async () => {
  const searching = await getById(1);
  console.log(searching);
}

// usando o then
const mainThree = () => {
  getById(1).then ((result) => console.log(result));
} 

// Chamando a função que filtra
const mainFour = () => {
  filterContent();
}

//Chamando a função que cria o arquivo JSON
const mainFive = () => {
  createFile();
}

//Chama a função que add um personagem ao arquivo criado anteriormente
const mainSix = () => {
  addInfo();
}
*/

