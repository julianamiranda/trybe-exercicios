const fizzBuzz = (num) => {
  const result = new Promise((resolve, reject)=>{
    if (num % 3 === 0 && num % 5 === 0) return resolve ('FizzBuzz');
    if (num % 3 === 0) resolve ('Fizz');
    if (num % 5 === 0) resolve ('Buzz');

    reject(num);
  });

  return result;
} 

// note que apenas estamos passando a referência das funções `error` e `log`
// isso é possível pois só queremos encaminhar o exato mesmo parâmetro que vem do callback
fizzBuzz(1).catch(console.error); // Deve escrever "1" no console
fizzBuzz(3).then(console.log); // Deve escrever "Fizz" no console
fizzBuzz(5).then(console.log); // Deve escrever "Buzz" no console
fizzBuzz(15).then(console.log); // Deve escrever "FizzBuzz" no console

// uma alternativa seria chamar o `console` dentro de uma arrow function:
fizzBuzz(1).catch((error) => console.error(error));
fizzBuzz(3).then((response) => console.log(response));