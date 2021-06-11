function validarCPF(cpf){
    if(cpf.length !== 11){
      return{valido:false, texto:"CPF deve ter 11 digitos."};
    }
    return{valido:true, texto:""};
}

function validarSenha(senha){
  if(senha.length < 4 || senha.length > 72){
    return{valido:false, texto:"Senha deve ter de 4 a 72 dígitos"};
  }
  return{valido:true, texto:""};
}

function validarNome(nome){
  if(nome.length < 4 ){
    return{valido:false, texto:"Nome deve possir mais de 3 dígitos"};
  }
  return{valido:true, texto:""};
}

export {validarCPF, validarSenha, validarNome};