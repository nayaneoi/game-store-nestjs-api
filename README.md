📘 Game Store API (NestJS)








API backend desenvolvida em NestJS para gerenciar uma Loja de Games, incluindo módulos de produtos, categorias, clientes e pedidos.
Organizada de forma modular, escalável e seguindo boas práticas profissionais.

🚀 Tecnologias Utilizadas

NestJS

TypeScript

Node.js (18+)

TypeORM

MySQL

Insomnia (testes de rotas)

NPM ou Yarn

📦 Como rodar o projeto
🔧 1. Instale as dependências
npm install

🛠 2. Configure o banco de dados

Crie um banco no MySQL:

CREATE DATABASE game_store;


Crie um arquivo .env na raiz do projeto:

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=123456
DB_DATABASE=game_store

▶️ 3. Execute o projeto
npm run start:dev


Servidor iniciará em:

http://localhost:3000

🔌 Testes com Insomnia

Utilize o Insomnia para testar os endpoints.

Quando as rotas forem criadas, adicionarei aqui uma coleção .json exportada para facilitar os testes.

📁 Estrutura Inicial do Projeto
src/
  app.module.ts
  main.ts


Estrutura prevista:

src/
  modules/
    produtos/
    categorias/
    clientes/
    pedidos/
  database/

📌 Status do Projeto

🚧 Projeto em desenvolvimento (MVP)
Módulos e funcionalidades sendo implementados gradualmente.

👤 Autora

Nayane Rodrigues
Backend Developer

🔗 GitHub: https://github.com/nayaneoi
🔗 LinkedIn: in/nayanerodriguesoi