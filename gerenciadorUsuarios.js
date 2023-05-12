const fs = require("fs"); //Neste exemplo, estamos utilizando o módulo fs para ler e escrever em um arquivo usuarios.json, que irá armazenar os dados dos usuários.

// Lê o arquivo de usuários e retorna um array com todos os usuários
function getUsers() {
  const data = fs.readFileSync("usuarios.json") || [];
  const users = JSON.parse(data);
  return users;

  //A função getUsers lê o arquivo e retorna um array com todos os usuários, enquanto a função saveUser recebe um objeto com as propriedades nome, email e senha e salva o usuário no arquivo. Antes de salvar o usuário, a função verifica se já existe um usuário com o mesmo email e, se existir, retorna um erro.
}

// Escreve um novo usuário no arquivo de usuários
function saveUser(user) {
  const dados = getUsers();
  const users = dados.users;
  const exists = users.some((u) => u.email === user.email);
  if (exists) {
    throw new Error("Este email já está em uso.");
  }
  users.push(user);
  dados.users = users;
  fs.writeFileSync("usuarios.json", JSON.stringify(dados));
  return "Usuário cadastrado com sucesso!";
}

// Faz login de um usuário
function loginUser(email, password) {
  //A função loginUser recebe o email e a senha do usuário e verifica se existe um usuário com esse email e se a senha está correta. Se o login for bem-sucedido, a função retorna o objeto do usuário.
  const dados = getUsers();
  const users = dados.users;
  const user = users.find((u) => u.email === email);
  if (!user || user.senha !== password) {
    throw new Error("Email ou senha inválidos.");
  }
  return user;
}

// Exclui um usuário
function deleteUser(email, password) {
  //Por fim, a função deleteUser recebe o email e a senha do usuário e verifica se existe um usuário com esse email e se a senha está correta. Se a validação for bem-sucedida, a função exclui o usuário do arquivo.
  const dados = getUsers();
  const users = dados.users;
  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1 || users[userIndex].senha !== password) {
    throw new Error("Email ou senha inválidos.");
  }
  users.splice(userIndex, 1);
  dados.users = users;
  fs.writeFileSync("usuarios.json", JSON.stringify(dados));
  return "Usuário removido com sucesso!";
}

module.exports = {
  saveUser,
  loginUser,
  deleteUser,
};
