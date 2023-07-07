# Tecnologias e Informações
- NodeJS
- TypeScript
- NestJS
- TypeORM
- Kafka

# Instalação e execução

1) Renomeie o arquivo `.env.example` para `.env`
> Esse arquivo contem variáveis de ambiente e não é versionado
`cp .env.example .env`

2) Crie uma docker network para que os containers se comuniquem mesmo sob uma VPN
> Necessário apenas na primeira execução
`docker network create dev-network --subnet 172.24.24.0/24`

3) Suba os container
> Com esse comando vamos subir e destravar o terminal
`docker-compose up -d`

4) Acompanhe os logs da aplicação
> Alterações no código são refletidas automaticamente
`docker logs --tail 1000 -f orders`

### Acessando o projeto pelo browser
`http://localhost:3000`

Criar mensagens através do Kafka UI
`http://localhost:8080`
