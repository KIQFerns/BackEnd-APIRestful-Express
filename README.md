## Projeto em andamento

Sistema de Login com crud de usuário e produto simples.


## Inicialização
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
npm run typeorm -- -d src/shared/typeorm/index.ts migration:run
