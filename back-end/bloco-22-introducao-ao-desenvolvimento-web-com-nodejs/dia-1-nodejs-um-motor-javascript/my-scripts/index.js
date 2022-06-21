// Não consegui desenvolver o codigo para o exercicio 8 e estou usando essa solução do gabarito como base e fazendo de um jeito que eu consiga entender

const readLine = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imc.js'},
  { name: 'Calcular velocidade média', path: './velocidade.js'},
  { name: 'Jogo de advinhação', path: './sorteio.js'},
];

function escolherScript() {
  const enunciado = 'Escolha um numero para executar o script correspondente\n';
  const lista = '        Scripts\n0- Calcular IMC \n1- Calcular velocidade media \n2- Jogo da adivinhacao \nR: '
  console.log(enunciado);
  const numeroEscolhido = readLine.questionInt(lista);
/*   const mensagem = scripts
  .reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado); */
  const script = scripts[numeroEscolhido];
  return script;
}

function main() {
  const script = escolherScript();

  if(!script) console.log('Número inválido. Saindo');

  require(script.path);
}

main();