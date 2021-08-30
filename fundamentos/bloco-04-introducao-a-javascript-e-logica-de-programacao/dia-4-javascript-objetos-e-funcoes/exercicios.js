let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
  
// Item 1

console.log('Bem-vinda, ' + info.personagem);

// Item 2

info.recorrente = 'Sim';
console.log(info.recorrente);

// Item 3

for( let key in info ){
    console.log(key);
}

// Item 4

for (let key in info) {
    console.log(info[key]);
}

// Item 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (let keys in info) {
    if ( keys === 'recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim' ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[keys] + ' e ' + info2[keys]);
    }
  }