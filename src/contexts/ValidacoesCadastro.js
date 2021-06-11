import React from 'react';

const ValidacosCadastro = React.createContext({
    cpf:semValidacao,
    senha:semValidacao,
    nome:semValidacao
});

function semValidacao(dados){
    console.log(dados);
    return {valido: true, texto: ""};
}

export default ValidacosCadastro;