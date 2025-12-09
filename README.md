🎮 Game Store API – CRUD Completo com NestJS
<p align="center"> <img src="https://img.shields.io/badge/NestJS-v10-red" /> <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" /> <img src="https://img.shields.io/badge/Database-MySQL-blue" /> <img src="https://img.shields.io/badge/Language-TypeScript-3178c6" /> <img src="https://img.shields.io/badge/ORM-TypeORM-orange" /> </p>
🧾 Descrição do Projeto

A Game Store API é uma aplicação construída com NestJS + TypeORM + MySQL, permitindo o gerenciamento completo de Produtos (Games) e Categorias, incluindo relacionamento One-to-Many.

Essa API foi criada para fins acadêmicos, seguindo boas práticas como:

Arquitetura em camadas (Controller → Service → Repository/TypeORM)

Validações com Class-Validator

DTOs para entrada de dados

Entidades totalmente tipadas em TypeScript

🏗 📦 Estrutura da Aplicação


src/
 ├── categoria/
 │    ├── categoria.controller.ts
 │    ├── categoria.service.ts
 │    ├── categoria.entity.ts
 │    ├── dto/
 │    └── ...
 ├── produto/
 │    ├── produto.controller.ts
 │    ├── produto.service.ts
 │    ├── produto.entity.ts
 │    ├── dto/
 │    └── ...
 ├── app.module.ts
 └── main.ts

 

🗄 📌 Diagrama DER (Entidade-Relacionamento)

Cada Categoria possui muitos produtos, enquanto cada Produto pertence a uma única categoria.



+-----------------+        1    N       +------------------+
|   CATEGORIA     |-------------------- |     PRODUTO      |
+-----------------+                     +------------------+
| id_categoria PK |          🔗        | id_game PK       |
| nome            |                     | nome             |
| descricao       |                     | preco            |
+-----------------+                     | estoque          |
                                        | categoria_id  FK |
                                        +------------------+
                                        

🚀 Rotas da API
📁 Produtos
➕ Criar Produto
POST /produtos


Body

{
  "nome": "FIFA 25",
  "preco": 299.90,
  "estoque": 20,
  "categoria": 1
}

📄 Listar Todos
GET /produtos

🔍 Buscar por ID
GET /produtos/:id

✏ Atualizar
PUT /produtos/:id

❌ Deletar
DELETE /produtos/:id

🗂 Categorias
➕ Criar Categoria
POST /categorias

📄 Listar Todas
GET /categorias

🧪 Exemplos de Teste no Insomnia / Thunder Client
✔ Testar criação de categoria
POST http://localhost:3000/categorias

✔ Testar criação de produto com categoria
POST http://localhost:3000/produtos

✔ Testar filtro por ID
GET http://localhost:3000/produtos/1

🛠 Tecnologias Utilizadas
Tecnologia	Uso
NestJS	Estrutura principal
TypeScript	Tipagem estática
TypeORM	ORM e conexão com MySQL
MySQL	Banco relacional
Class-Validator	Validações de DTO
Insomnia	Testes de API
📥 Clonando e Rodando o Projeto
git clone https://github.com/SEU_USUARIO/game-store-api.git
cd game-store-api
npm install
npm run start:dev

👤 Autora
Nayane Rodrigues Oi Backend Developer

🔗 GitHub: https://github.com/nayaneoi 
🔗 LinkedIn: in/nayanerodriguesoi
