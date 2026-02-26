# Shortz-App  
### Matéria: Teste de Software

## Visão Geral

O **Shortz-App** é uma plataforma web de vídeos curtos (com duração máxima de 1 minuto), desenvolvida como projeto prático para a disciplina de **Teste de Software**.  
O sistema permite que usuários criem contas, façam login, publiquem vídeos curtos e consumam conteúdos de forma rápida e intuitiva.

O foco principal deste projeto é **aplicar conceitos de testes de software** no desenvolvimento de uma aplicação real, contemplando testes funcionais, validações de entrada e verificação de regras de negócio.

## Objetivo do Projeto

- Aplicar conceitos teóricos de **Teste de Software** na prática  
- Desenvolver um sistema simples, porém completo, com backend e frontend integrados  
- Validar funcionalidades essenciais como autenticação, upload de arquivos e persistência de dados  
- Garantir o correto funcionamento do sistema através de testes manuais e validações

## Tecnologias Utilizadas

### Backend:
- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js, utilizado para rotas e middlewares
- **MySQL**: Banco de dados relacional
- **Sequelize**: ORM para mapeamento e manipulação dos dados
- **Multer**: Middleware para upload de arquivos (vídeos e capas)
- **Express-Session**: Gerenciamento de sessões de usuários
- **Bcrypt**: Criptografia e hash de senhas
- **Dotenv**: Gerenciamento de variáveis de ambiente

### Frontend:
- **EJS (Embedded JavaScript)**: Template engine para renderização das views
- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização da interface
- **JavaScript**: Interatividade no lado do cliente

## Iniciando
```bash
npm init -y

npm install express mysql2 sequelize multer express-session bcrypt dotenv

npm install --save-dev nodemon
```

## Clonando 

```bash
npm i
npm run dev
```

> Projeto desenvolvido para fins acadêmicos na disciplina de Teste de Software, por Laiz Detros.