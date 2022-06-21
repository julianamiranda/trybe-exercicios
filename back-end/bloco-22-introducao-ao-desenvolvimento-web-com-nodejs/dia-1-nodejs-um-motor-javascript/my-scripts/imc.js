const readLine = require('readline-sync');

const imc = (peso, altura) => {
  const resultado = (peso / Math.pow(altura,2)).toFixed(1);
  console.log(`IMC = ${resultado}`);

  if (resultado < 18.5) console.log('Situação: Abaixo do peso (magreza)');
  if (resultado >= 18.5 && resultado <= 24.9) console.log('Situação: Peso normal');
  if (resultado >= 25 && resultado <= 29.9) console.log('Situação: Acima do peso (sobrepeso)');
  if (resultado >= 30 && resultado < 34.9) console.log('Situação: Obesidade grau I');
  if (resultado >= 35 && resultado < 39.9) console.log('Situação: Obesidade grau II');
  if (resultado >= 40.0) console.log('Situação: Obesidade grau II');
}

console.log("Calculadora de IMC");
const peso = readLine.questionFloat("Digite o peso(kg): ");
const altura = readLine.questionFloat("Digite o altura(m): ");

imc(peso,altura);

