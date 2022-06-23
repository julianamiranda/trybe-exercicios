const farofa = require('./exercicio-1.js');

const randomNumber = () => Math.floor(Math.random() * 101);

const randomFarofa = async () => {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber); //refatorei e utilizei essa lógica do gabarito.
  try {
    const result = await farofa(...randomNumbers);
    console.log(result);
  }
  catch(err) {
    console.error(err.message);
  }
}

randomFarofa();
  //  Array.from = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from