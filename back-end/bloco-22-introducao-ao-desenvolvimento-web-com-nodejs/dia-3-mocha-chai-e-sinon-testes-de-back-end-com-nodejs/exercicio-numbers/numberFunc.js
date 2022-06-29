function numberFunc (num) {
  const p = 'positivo';
  const n = 'negativo';
  const nt = 'neutro';
  
  if(num > 0) return p;
  if(num < 0) return n;
  if(num === 0) return nt;
}

module.exports = { numberFunc };