# Aplicação DSLIST
Este projeto envolveu a criação de uma API Web robusta usando o framework Spring Boot em Java. Implementei práticas avançadas de desenvolvimento de software, incluindo a arquitetura em camadas para separação de responsabilidades, a utilização de padrões de projeto como Data Transfer Object (DTO) para uma melhor transferência de dados e o Mapeamento Objeto Relacional com o JPA para a integração eficiente com o banco de dados.

Posteriormente, dei continuidade ao desenvolvimento, iniciando a construção do front-end para consumir essa API. Utilizei o React como framework principal e o Axios para realizar requisições HTTP à API, permitindo a interação completa entre a interface de usuário e os dados fornecidos pela aplicação back-end.








## Configuração do Banco de Dados
### Postgres
A aplicação utiliza um banco de dados Postgres. Certifique-se de configurar corretamente as credenciais do banco de dados no arquivo application.properties.

### H2
Para desenvolvimento, a aplicação usa um banco de dados H2 em memória. As configurações podem ser encontradas no arquivo application-dev.properties.


## Instalação

__Clone este repositório para o seu ambiente local:__
Instalação e Execução
Clone o repositório.

```bash
  git clone https://github.com/mayspiek/dslist.git
```

## Configurando o ambiente
1. __Verifique a versão atual do Node.js__
```bash
  node -v
```

2. __Caso a versão do Node.js não seja 20, use o NVM para trocar__
```bash
  nvm install 20
  nvm use 20
```

3. __Navegue até o diretório front e instale as dependências do Node.js__
```bash
  cd front
  npm install
```
4. __Instale o Maven (caso não tiver)__
```bash
  # No Linux
  sudo apt install maven
```

5. __Instale as dependências do Maven__
```bash
  mvn clean install
```

6. __Execute a aplicação Spring Boot__
```bash
  ./mvnw spring-boot:run
```

### Endpoints
__Listar Gêneros de Jogos__
- Endpoint: __/genres__
- Método: __GET__
- Descrição: Retorna a lista de gêneros de jogos disponíveis.
![image](https://github.com/mayspiek/dslist/assets/79992764/8c140101-9c8a-42f9-a0ee-4f0a50494b41)


  
__Listar Jogos por Gênero__
- Endpoint: __/{genreId}/games__
- Método: __GET__
- Descrição: Retorna a lista de jogos pertencentes ao gênero especificado por {genreId}. No momento, a rota chamada é apenas do gênero 1, em breve colocarei isso de forma dinâmica.
![image](https://github.com/mayspiek/dslist/assets/79992764/e7231a10-fdee-4d6c-be81-fecafccb891b)



### Instância EC2 na AWS
A aplicação está hospedada em uma instância EC2 na AWS e eu fiz a requisição por meio dessa instância mas também podera ser feita através do __localhost:8080__ após rodar a aplicação Spring localmete na máquina.
![image](https://github.com/mayspiek/dslist/assets/79992764/75452017-c0de-46a1-aed1-ae8ee459d4ed)


Desenvolvimento Futuro
A implementação atual oferece apenas operações GET para consultar os dados. Os próximos passos incluem a implementação dos endpoints POST, DELETE e UPDATE para permitir a manipulação completa dos dados de jogos e gêneros.
