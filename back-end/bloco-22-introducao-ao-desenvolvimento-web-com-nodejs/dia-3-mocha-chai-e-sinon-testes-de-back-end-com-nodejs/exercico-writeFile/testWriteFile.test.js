const { expect } = require('chai');
const writing = require('./writeFile');

describe('Executa a função writeFile', () => {
	describe('a resposta', () => {
		it('é uma "string"', () => {
			const resposta = writing('skz.txt', 'you make stray kids stay');
			expect(resposta).to.be.a('string');
		});
		it('é igual a "ok"', () => {
			const resposta = writing('skz.txt', 'you make stray kids stay');
			expect(resposta).to.be.equals('ok');
		});
	});
});