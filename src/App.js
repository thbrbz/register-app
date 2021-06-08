import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm/RegisterForm';
import 'fontsource-roboto';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <RegisterForm aoEnviar={aoEnviar} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviar(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return{valido:false, texto:"CPF deve ter 11 digitos."}
  }
  return{valido:true, texto:""}
}

export default App;
