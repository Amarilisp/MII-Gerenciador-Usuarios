const gerenciadorUsuarios = require("./gerenciadorUsuarios");

// Cadastrar um novo usuário
const novoUsuario = {
  nome: "maria",
  email: "maria@gmail.com",
  senha: "123456",
};

// gerenciadorUsuarios.saveUser(novoUsuario);

// Fazer login com um usuário existente
const email = "maria@gmail.com";
const senha = "123456";

const resultadoLogin = gerenciadorUsuarios.loginUser(email, senha);
console.log(resultadoLogin);

// Excluir um usuário existente
const resultadoExclusao = gerenciadorUsuarios.deleteUser(email, senha);
console.log(resultadoExclusao);

//O require é uma função do Node.js que permite importar módulos e arquivos de outros locais do seu projeto ou do sistema. Quando você usa require em um arquivo, o Node.js irá procurar pelo arquivo especificado no local especificado e carregar o conteúdo dele para uso no seu código. O require também pode ser usado para importar módulos instalados pelo gerenciador de pacotes do Node.js, como o npm.

// Por exemplo, const fs = require('fs') importa o módulo fs do Node.js, que fornece funções para manipulação de arquivos. Já const meuModulo = require('./meuModulo.js') importa um módulo chamado meuModulo.js que está localizado na mesma pasta do arquivo que está importando.
