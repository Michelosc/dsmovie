# DSMovie

# Sobre o projeto

https://dsmovie-michel.netlify.app/

DSMovie é uma aplicação full stack web construída durante a 6ª edição da **Semana DevSuperior** (#sds6), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de avaliação de filmes, onde os dados são exibidos em um dashboard mostrando a quantidade de avaliações e o sucesso de cada filme avaliado pelos usuários cadastrados.

## Layout web
![Web 1](https://github.com/Michelosc/dsmovie/blob/main/assets/dsmovie-dashboard.png)

![Web 2](https://github.com/Michelosc/dsmovie/blob/main/assets/dsmovie-avaliacao.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Spring Security
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- Apex Charts
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/Michelosc/dsmovie.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/Michelosc/dsmovie.git

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor
Michel de Oliveira Santos Corrêa

https://www.linkedin.com/in/michel-corr%C3%AAa-3268a113a/

## Licença

Este projeto está sob a licença [MIT](./LICENSE).
