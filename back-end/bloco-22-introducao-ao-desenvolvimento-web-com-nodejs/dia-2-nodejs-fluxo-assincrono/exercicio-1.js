// Exercicio 1
const farofa = (a,b,c) => {
  const p = new Promise((resolve, reject) => {
    const result = (a + b) * c;
    const isNumber = [a,b,c];
    if(isNumber.some(elem => typeof elem !== 'number')){
      return reject(new Error ('Informe apenas números'));
    }  
    result < 50 ? reject(new Error ('Valor muito baixo')) : resolve(result);
  })
  return p;
};

/* farofa(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

farofa(10, 10, 'a')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

farofa(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message)); */

module.exports = farofa;