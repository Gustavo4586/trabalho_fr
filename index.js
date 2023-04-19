// Obtém o email e senha do formulário de login
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;

// Realiza uma requisição HTTP POST para o servidor com as credenciais de login
fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: email,
    senha: senha
  })
})
.then(response => {
  if (response.ok) {
    // Se as credenciais forem válidas, redireciona o usuário para a página principal
    window.location.href = '/home';
  } else {
    // Se as credenciais forem inválidas, exibe uma mensagem de erro
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = 'Credenciais inválidas. Tente novamente.';
  }
})
.catch(error => {
  // Se ocorrer um erro durante a requisição, exibe uma mensagem de erro
  console.error(error);
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
});


