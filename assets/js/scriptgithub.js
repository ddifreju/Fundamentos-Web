async function getGithub() {
  const main = document.querySelector('main')
  const userName = prompt('Qual o seu usuário do github?')
  
  const resposta = await fetch(`https://api.github.com/users/${userName}`)
  console.log(resposta);
  const dados = await resposta.json()
  console.log(dados);

  const inserirHtml = document.createElement('div')

  if (dados.login === 'freddiju') {
    dados.login = 'jamaiscompartilharei'
  }

  const dadosUsuario = `
    <p>Nome do usuario: ${dados.login}</p>
    <p>Seguidores: ${dados.followers}</p>
  `

  inserirHtml.innerHTML = dadosUsuario
  main.appendChild(inserirHtml)
}

getGithub()