/* >> Bloco 15.1 - Introdução a Redux - Entenendo actions, stores e reducers << */

// Importando o Redux
const Redux = require('redux');

// Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.

/* const ESTADO_INICIAL = {
  login: false,
  email: '',
}

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer); //criando a store

console.log(store.getState()); //buscando o valor na store */

//Para o nosso exemplo, iremos usar uma actionCreator chamada fazerLogin . Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store .

const fazerLogin = (email) => ({
  type: "LOGIN", 
  email
})

const ESTADO_INICIAL = {
  login: false,
  email: '',
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {   // o reducer um objeto que contém todos os dados atuais do estado mais as chaves que serão modificadas pela action!
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:   //No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());