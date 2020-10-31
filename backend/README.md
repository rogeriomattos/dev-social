<h1 align="center">Backend</h1>
<p align="center">
  <a href="#pré-requisitos">Pré-requisitos</a> • 
  <a href="#como-executar-o-servidor">Como executar o servidor</a> •
  <a href="#mer">MER</a> •
  <a href="#api">API</a> •
  <a href="#tecnologias">Tecnologias</a>
</p>

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

### Como executar o servidor
Primeiro baixe o repositório para o seu computador da seguinte forma:
```bash
  git clone https://github.com/rogeriomattos/dev-social
```

Então, entre na pasta ``dev-social/backend`` e instale as dependências do projeto:
```bash
  cd dev-social
  cd backend
  npm istall
```
Agora execute o comando abaixo para criar o banco de dados:`
```bash
  npm run knex:migrate
```

Por último, para rodar o servidor execute o comando abaixo:
```bash
  npm start
```

### MER

### API

### Tecnologias

As seguintes tecnologias foram usadas na construção do backend:
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Knex.js](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)
