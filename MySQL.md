## Baixar o MySQL

Entra no site oficial: [dev.mysql.com](https://dev.mysql.com/downloads/installer/)

* Baixa o MySQL Installer for Windows
* Pode ser o web (menorzinho) ou o full (mais pesado)
* Se pedir login, clica em “No thanks, just start my download”

## Instalar o MySQL

#### Durante a instalação:
  * Escolhe Developer Default (recomendado)
  * Ele já instala:
    - MySQL Server
    - MySQL Workbench

Avança até a parte de configuração do servidor

## Configurar o MySQL Server
* Tipo de configuração
    * Escolhe: Standalone MySQL Server
* Porta
    * Porta padrão: 3306 -> Se não tiver conflito, deixa assim

* Autenticação
    * Use Strong Password Encryption
    * Usuário root
* Define uma senha do root

⚠️ Guarda essa senha (vai usar no .env)

## Finalizar e testar o serviço

* O instalador vai:
    * Criar o serviço MySQL
    * Iniciar automaticamente
* Se tudo deu certo:
    * Status: Running

## Testar no MySQL Workbench

* Abre o MySQL Workbench
    * Clica na conexão Local Instance MySQL
    * Digita a senha do root
* Se conectar → MySQL está instalado corretamente ✅

## Criar o banco do projeto

* No MySQL Workbench, executa:
```sql
CREATE DATABASE shortz_app;
```
(opcional, mas recomendado)
```sql
CREATE DATABASE shortz_app
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;
```
## Testar conexão pelo Node.js
No teu projeto, cria o arquivo .env:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=shortz_app
SESSION_SECRET=chave_secreta
```
Exemplo rápido de conexão com Sequelize:
```js
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
)

sequelize.authenticate()
  .then(() => console.log('✅ Conectado ao MySQL'))
  .catch(err => console.error('❌ Erro ao conectar:', err))
```

Se aparecer:
* Conectado ao MySQL
    * Configuração finalizada com sucesso
* Problemas comuns
    * Porta 3306 em uso
    * Só muda a porta na instalação ou finaliza outro serviço usando a 3306
* Erro de acesso
    * Usuário errado (root)
    * Senha errada
    * Banco não criado