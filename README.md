# Portfólio — Bruno Jorge Martins

Portfólio profissional de **Bruno Jorge Martins**, Engenheiro de Software e Desenvolvedor C# / ASP.NET, com sede em Luanda, Angola.

O site apresenta o perfil, as competências técnicas, a experiência, o processo de trabalho e quatro estudos de caso de sistemas empresariais (gestão documental, gestão escolar, planeamento orçamental e help desk com inventário de TI).

## Tecnologias

- **ASP.NET Core 9 (MVC)** com vistas Razor
- **HTML, CSS e JavaScript** simples, sem frameworks de front-end
- Ícones SVG em linha (conjunto [Lucide](https://lucide.dev), licença ISC)

## Como executar

Requisito: [.NET SDK 9](https://dotnet.microsoft.com/download).

```bash
dotnet run --project Portfolio.Web
```

O site fica disponível em `http://localhost:5080`.

```bash
dotnet build Portfolio.sln     # compilar
dotnet publish Portfolio.Web -c Release -o publish   # gerar a versão de produção
```

## Estrutura

```
Portfolio.Web/
  Controllers/   HomeController (página inicial, formulário de contacto, erros)
  Models/        modelos de dados e validação do formulário
  Data/          PortfolioData.cs — todo o conteúdo do portfólio
  Helpers/       IconHelper — ícones SVG (@Html.Icon("nome"))
  Views/         páginas Razor e partials (_ProjectCard, _ProjectDialog, ...)
  wwwroot/       css/site.css, js/site.js e imagens
```

## Como alterar o conteúdo

- **Textos, projetos, competências e experiência:** `Portfolio.Web/Data/PortfolioData.cs`.
- **Retrato:** coloque a fotografia em `Portfolio.Web/wwwroot/img/portrait.jpg`. Enquanto não existir, é mostrado um monograma "BM".
- **Cores e tipografia:** `Portfolio.Web/wwwroot/css/site.css`.

## Formulário de contacto

O formulário valida os dados no servidor (com proteção anti-CSRF), mas **ainda não envia email**. Para o ativar, envie a mensagem a partir de `HomeController.Contact`, por exemplo por SMTP.

## Contacto

[LinkedIn](https://www.linkedin.com/in/brunomartinssoftwere/) · [GitHub](https://github.com/BrunoJorgeMartins)
