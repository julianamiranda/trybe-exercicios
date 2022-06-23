const farofa = require('./exercicio-1.js');

const randomNumber = () => Math.floor(Math.random() * 101);

const randomFarofa = () => {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber); //refatorei e utilizei essa lógica do gabarito.
  return randomNumbers;
}

farofa(...randomFarofa)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

//  Array.from = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from