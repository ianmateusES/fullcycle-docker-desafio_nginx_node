# docker-desafio-nginx-node

## Name
FullCycle - Docker - Desafio Nginx e Node.

## Descrição
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser:
```html
<h1>Full Cycle Rocks!</h1>
```
- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

## Usando
Para executar o projeto:
```bash
docker-compose up -d
```

Para visulizar a página principal, basta realizar um GET em `http://localhost:8080`;

Para adicionar um nome, basta enviar uma requisição POST para `http://localhost:8080`, com o seguinte body:
```JSON
{
  "name": "<nome>"
}
```
