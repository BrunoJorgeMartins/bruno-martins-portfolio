# Portfólio — Bruno Jorge Martins

Portfólio profissional de **Bruno Jorge Martins**, Engenheiro de Software e Desenvolvedor C# / ASP.NET, com sede em Luanda, Angola.

O site apresenta o perfil, as competências técnicas, o processo de trabalho e quatro estudos de caso de sistemas empresariais (gestão documental, gestão escolar, planeamento orçamental e help desk com inventário de TI).

## Tecnologias

- **Front-end:** React 19, TypeScript, Vite, Tailwind CSS
- **Back-end:** Node.js, Express, tRPC
- **Base de dados:** Drizzle ORM
- **Qualidade:** Vitest, Prettier, verificação de tipos com `tsc`

## Como executar

Requisitos: Node.js e [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev        # servidor de desenvolvimento
pnpm check      # verificação de tipos
pnpm test       # testes
pnpm build      # build de produção
pnpm start      # executa o build de produção
```

O servidor lê a configuração (base de dados, autenticação, armazenamento) de variáveis de ambiente, que não fazem parte do repositório.

## Estrutura

```
client/    interface (páginas, componentes, dados do portfólio)
server/    API tRPC, autenticação e biblioteca de ficheiros
shared/    tipos e constantes partilhados
drizzle/   esquema e migrações da base de dados
```

Os conteúdos dos projetos estão em `client/src/data/portfolio.ts`.

## Contacto

[LinkedIn](https://www.linkedin.com/in/brunomartinssoftwere/) · [GitHub](https://github.com/BrunoJorgeMartins)
