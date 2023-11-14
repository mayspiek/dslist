# Projeto Imersivo Spring Boot com NELIO ALVES

Este é um projeto de exemplo que demonstra a criação de uma API Web usando o framework Spring Boot com boas práticas de desenvolvimento.

## Descrição

O projeto "Imersivo Spring Boot" foi desenvolvido como parte de um curso de tecnologia e tem como objetivo ilustrar a construção de uma API robusta e escalável em Java usando o Spring Boot. Ele incorpora padrões de projeto de camadas, utiliza DTOs para transferência eficiente de dados e faz uso do JPA para a persistência de dados.

## Funcionalidades

- API RESTful com endpoints para operações CRUD.
- Padrões de camadas bem definidos para uma organização clara do código.
- Uso de DTOs para uma transferência eficiente de dados.
- Integração com JPA para persistência de dados em um banco de dados relacional.
- Exemplos de práticas avançadas, como autenticação e documentação com Swagger.

## Tecnologias Utilizadas

- Java
- Spring Boot
- Spring Data JPA
- Banco de Dados Relacional (por exemplo, MySQL, PostgreSQL)
- Swagger para documentação da API

## Requisitos de Configuração

- Java 17 ou superior
- [Spring Boot](https://spring.io/projects/spring-boot)
- Banco de Dados H2 e PostgreSQL (configurado no arquivo `application.properties`)

## Como Iniciar o Projeto

1. Clone este repositório para sua máquina local.
2. Configure seu banco de dados no arquivo `application.properties`.
3. Compile e execute o projeto.

```bash
./mvnw spring-boot:run
