import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm/RegisterForm';
import 'fontsource-roboto';
import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarNome}}>
          <RegisterForm aoEnviar={aoEnviar} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviar(dados){
  console.log(dados);
}

export default App;
