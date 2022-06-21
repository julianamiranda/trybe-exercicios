const readLine = require('readline-sync');

const media = (d,t) => {
  return console.log( `Velocidade média: ${(d / t).toFixed(2)} m/s`);
}
const distancia = readLine.questionInt("Digite a distancia(m): ");
const tempo = readLine.questionInt("Digite a tempo(s): ");

media(distancia, tempo);
