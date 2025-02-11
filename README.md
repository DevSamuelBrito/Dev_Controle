# Dev_Controle

## Descrição

Dev_Controle é uma aplicação full-stack desenvolvida com Next.js que permite o controle e gerenciamento de usuários e chamados. A aplicação inclui funcionalidades de autenticação, gerenciamento de usuários e integração com um banco de dados MongoDB. O objetivo principal é estudar as tecnologias aplicadas.

## Funcionalidades

- **Autenticação de Usuários**: Registro e login de usuários com verificação de credenciais.
- **Gerenciamento de Usuários**: Criação, leitura, atualização e exclusão de usuários, incluindo detalhes como nome, email e permissões.
- **Integração com Banco de Dados**: Utilização do Prisma para interagir com o banco de dados MongoDB, garantindo operações rápidas e seguras.
- **Rotas de API**: Implementação de rotas de API para operações de back-end, permitindo a comunicação entre o front-end e o banco de dados.

## Rotas de API

- **POST /api/auth/register**: Rota para registrar um novo usuário.
- **POST /api/auth/login**: Rota para login de usuário.
- **GET /api/users**: Rota para obter a lista de todos os usuários.
- **GET /api/users/:id**: Rota para obter detalhes de um usuário específico.
- **PUT /api/users/:id**: Rota para atualizar informações de um usuário específico.
- **DELETE /api/users/:id**: Rota para excluir um usuário específico.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento full-stack, facilitando a criação de aplicações web modernas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e responsivas.
- **Prisma**: ORM para interagir com o banco de dados, simplificando as operações de CRUD.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenamento de dados, oferecendo flexibilidade e escalabilidade.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código, melhorando a manutenção e a robustez do código.
- **Tailwind CSS**: Framework CSS para estilização da aplicação, permitindo a criação de interfaces atraentes e responsivas de forma rápida.

## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Dev_Controle.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Dev_Controle
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`:
   ```properties
   DATABASE_URL=""
   NODE_ENV=development
   NEXTAUTH_SECURITY=
   NEXTAUTH_URL=
   HOST_URL=
   GOOGLE_CLIENT_SECRET=
   GOOGLE_CLIENT_ID=
   ```

## Uso

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Imagens

### Tela Home

![Tela Home](/src/assets/images/telaHome.png)

### Dashboard

![Dashboard](/src/assets/images/chamados.png)

### Tela de Clientes

![Tela de Clientes](/src/assets/images/clientes.png)

### Tela de Cadastro de Clientes

![Tela de Cadastro de Clientes](/src/assets/images/cadastrandoCliente.png)

### Tela de Cadastro de Chamado

![Tela de Cadastro de Chamado](/src/assets/images/criandoChamado.png)

### Tela de Detalhes de Chamado

![Tela de Detalhes de Chamado](/src/assets/images/detalhesChamado.png)

### Tela de Abertura de Chamado sem estar logado pt.1

![Tela de Abertura de Chamado sem estar logado](/src/assets/images/chamadaoSemLogin.png)

### Tela de Abertura de Chamado sem estar logado pt.2

![Tela de Abertura de Chamado sem estar logado](/src/assets/images/openCriandoChamado.png)




## Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.
