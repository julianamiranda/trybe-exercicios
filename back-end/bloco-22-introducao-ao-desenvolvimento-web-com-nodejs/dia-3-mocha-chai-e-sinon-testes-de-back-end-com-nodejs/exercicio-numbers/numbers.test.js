const { expect } = require('chai');

const { numberFunc } = require('./numberFunc.js');

describe('Executa a função numberFunc', () =>{
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numberFunc(2);
        expect(resposta).to.be.a('string');
      });
      it('é igual a "positivo"', () => {
        const resposta = numberFunc(2);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });
  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numberFunc(-2);
        expect(resposta).to.be.a('string');
      });
      it('é igual a "negativo"', () => {
        const resposta = numberFunc(-2);
        expect(resposta).to.be.equals('negativo');
      });
    });
  });
  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numberFunc(0);
        expect(resposta).to.be.a('string');
      });
      it('é igual a "neutro"', () => {
        const resposta = numberFunc(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
  describe('quando o input não for um número', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numberFunc('a');
        expect(resposta).to.be.a('string');
      });
      it('é igual a "o valor deve ser um número"', () => {
        const resposta = numberFunc('a');
        expect(resposta).to.be.equals('o valor deve ser um número');
      });
    });
  });
});

/* 
// código antigo, refatorado acima
describe('Executa a função numberFunc', ()=>{  
  it('Um número positivo:', () => {
     const resposta = numberFunc(2)
    expect(resposta).to.be.equals("positivo");
  });
  it('Um número negativo:', () => {
    const resposta = numberFunc(-2)
    expect(resposta).to.be.equals("negativo");
  });
  it('Um número neutro:', () => {
    const resposta = numberFunc(0)
    expect(resposta).to.be.equals("neutro");
  });
}); 

*/