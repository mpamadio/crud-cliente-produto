# Gerenciamento de Produtos e Clientes

Este é um projeto de gerenciamento de produtos e clientes desenvolvido com Vue.js no frontend e Node.js + MongoDB no backend.

## Configuração do Projeto

Siga as instruções abaixo para configurar e executar o projeto localmente:

### Pré-requisitos

- Node.js instalado na sua máquina
- MongoDB instalado e em execução

- [Node.js](https://nodejs.org/) - O Node.js é necessário para executar o servidor backend.
- [MongoDB](https://www.mongodb.com/) - O MongoDB é o banco de dados utilizado pelo projeto.

## Configuração do MongoDB

Certifique-se de ter o MongoDB instalado e em execução em sua máquina. Você pode instalá-lo usando um dos seguintes métodos:

### Unix/Linux

sudo apt install mongodb
sudo yum install mongodb

### Windows

Baixe o instalador executável do [site oficial do MongoDB](https://www.mongodb.com/try/download/community) e siga as instruções de instalação.

### Iniciando o Servidor MongoDB

Após a instalação, inicie o servidor MongoDB. Para sistemas Unix/Linux, você pode iniciar o servidor com o seguinte comando:

sudo service mongod start


## Configuração da Connection String do MongoDB

Certifique-se de que a Connection String do MongoDB esteja configurada corretamente em seu servidor backend. A Connection String deve seguir este padrão:

mongodb://127.0.0.1/gerenciamento-produto-cliente

![image](https://github.com/mpamadio/crud-cliente-produto/assets/2831485/2fed9cb9-8534-4ef6-85f0-ae69dd11315e)


### Passos para Execução

1. Clone o repositório para sua máquina local:
https://github.com/mpamadio/crud-cliente-produto.git

2. Instale as dependências do frontend e do backend:
   
    cd crud-cliente-produto
    yarn install

    cd ../backend
    yarn install

3. Inicie o servidor backend:
   
    cd backend
    node server.js

4. Inicie o servidor frontend:
   
   cd crud-cliente-produto
   yarn serve

5. Acesse o aplicativo no seu navegador:
   
    http://localhost:8080



Substitua `gerenciamento-produto-cliente` pelo nome do banco de dados que você deseja utilizar para este projeto.

## Instalação e Execução do Projeto

Após configurar o MongoDB e a Connection String, você pode seguir estas etapas para instalar e executar o projeto:

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Instale as dependências do frontend e do backend executando `npm install` ou `yarn install`.
4. Inicie o servidor backend executando `node server.js` no diretório backend.
5. Inicie o servidor frontend executando `npm run serve` ou `yarn serve` no diretório frontend.
6. Acesse o aplicativo no navegador em `http://localhost:8080` (a porta pode variar dependendo da configuração).

Se tudo correr conforme o esperado, você deve conseguir visualizar e interagir com o aplicativo no navegador.


    
    
## Funcionalidades

- Cadastro, edição, exclusão e listagem de produtos e clientes.
- Associação de produtos a clientes.
- Visualização de produtos associados a clientes.

## Notas Adicionais

Testes Unitários:
Testes unitários não foram implementados neste projeto.

Layout Responsivo:
O layout deste projeto não é totalmente responsivo.
