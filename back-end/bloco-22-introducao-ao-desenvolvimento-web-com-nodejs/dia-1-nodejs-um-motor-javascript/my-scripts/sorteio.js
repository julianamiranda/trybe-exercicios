const readLine = require('readline-sync');

const lottery = (bet) => {
  const luckyNumber = Math.floor(Math.random() * 11); // gera um número inteiro de 0 a 10

  if(bet === luckyNumber) console.log("Parabéns, número correto!");
  if(bet !== luckyNumber) console.log(`Opa, não foi dessa vez. O número era ${luckyNumber}`)
  
  const option = readLine.question("Deseja jogar novamente? (S/N):  ");
  tryAgain(option.toUpperCase());
}

const tryAgain = (option) => {
  switch (option){
    case "S":
      startGame();
    case "N":
      console.log("Bye bye o/")
    default:
      console.log("Bye bye o/")
  }
}

const startGame = () => {
  const bet = readLine.questionInt( "Digite um numero entre 0 e 10: ");
  lottery(bet);
}

startGame();