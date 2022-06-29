function numberFunc (num) {
  const p = 'positivo';
  const n = 'negativo';
  const nt = 'neutro';
  const msg = 'o valor deve ser um número';
  
  if(num > 0) return p;
  if(num < 0) return n;
  if(num === 0) return nt;
  if(typeof(num) !== 'number') return msg;
}

module.exports = { numberFunc };