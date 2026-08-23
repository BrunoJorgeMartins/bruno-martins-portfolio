# Direção de design — Portfólio de Bruno Martins

## Três abordagens exploradas

### 1. Arquivo Técnico Editorial

**Very Brief Intro:** Um portfólio com a disciplina visual de um dossiê profissional: tipografia editorial, contrastes sóbrios e blocos de informação que fazem o trabalho parecer verificável e estruturado.

**Probability:** 0.07

### 2. Estúdio de Sistemas

**Very Brief Intro:** Uma linguagem corporativa contemporânea inspirada em salas de controlo e documentação de produto, com superfícies claras, grelha assimétrica e azul de engenharia como sinal de confiança.

**Probability:** 0.04

### 3. Conexões Humanas

**Very Brief Intro:** Um site de caráter mais pessoal, com fotografia documental em preto e branco, texto caloroso e detalhes em cobre para aproximar o profissional do visitante.

**Probability:** 0.09

## Abordagem escolhida: Arquivo Técnico Editorial

### Design Movement

**Editorial Swiss Design aplicado a produto digital.** A composição usa ritmo tipográfico forte, linhas de referência e uma estrutura assimétrica para transformar informação técnica em leitura segura e clara.

### Core Principles

1. **Evidência antes de ornamento:** projetos são apresentados como casos, com contexto, estados e decisões técnicas.
2. **Precisão visível:** bordas finas, numeração sequencial, labels em caixa alta e espaçamento regular comunicam organização.
3. **Contraste funcional:** fundos marfim, tinta azul-profunda e um azul elétrico controlado criam hierarquia sem recorrer a neon.
4. **Presença humana com função:** a fotografia profissional é um ponto de confiança no hero, não uma decoração repetida.

### Color Philosophy

O fundo **marfim técnico** evita a frieza de branco puro e cria uma sensação de documento cuidadosamente preparado. O **azul de engenharia** ancora títulos, estruturas e superfícies de alta confiança. O **azul-sinal** é reservado a ações, estados e referências ativas, para que cada uso comunique relevância. Tons carvão e cinzento-azulado sustentam leitura longa e divisões subtis.

### Layout Paradigm

Uma composição de **coluna editorial lateral**: uma coluna estreita guia rótulos, índices, marcadores de secção e anos; a área principal sustenta conteúdo amplo e variável. O hero usa duas massas visuais desiguais, com texto editorial à esquerda e retrato em painel à direita. As secções não dependem de uma grelha de cards uniformes; alternam entre tabelas de competência, faixas de processo, estudos de caso e cronologia.

### Signature Elements

1. Um marcador azul vertical com numeração de secção e texto de metadados.
2. Etiquetas monoespaçadas para stack, estado e categorias de projeto.
3. Um desenho de “circuito documental” em linhas finas, usado como padrão de fundo muito discreto.

### Interaction Philosophy

As interações devem parecer ferramentas bem calibradas: navegação direta, filtros imediatos, estados de foco evidentes e detalhes de projeto que se expandem sem perder o contexto. Nenhuma animação deve competir com o conteúdo.

### Animation

Os elementos entram uma vez através de opacidade e pequeno deslocamento vertical, com atraso gradual entre blocos. Hover em botões, links e projetos usa mudança sutil de cor, deslocamento máximo de 4px e duração de 180–240ms. Respeitar `prefers-reduced-motion` removendo transições não essenciais.

### Typography System

**Space Grotesk** é usada em títulos e números, trazendo expressão técnica e presença editorial. **IBM Plex Sans** sustenta parágrafos, formulários e descrições por oferecer leitura estável. **IBM Plex Mono** identifica metadados, estados, tecnologias e índices. Títulos usam pesos 500–700; texto normal usa 400–500; labels monoespaçadas mantêm tamanho compacto e tracking amplo.

### Brand Essence

**Bruno Martins transforma processos institucionais complexos em sistemas web organizados, robustos e utilizáveis para equipas que precisam de clareza operacional.**

**Personalidade:** preciso, confiável, pragmático.

### Brand Voice

A voz é direta, sóbria e orientada a resolver problemas. Títulos devem nomear a transformação entregue; CTAs devem indicar a próxima ação de forma objetiva. Evitar slogans genéricos e promessas sem evidência.

Exemplos: “Da regra de negócio à interface que a equipa consegue usar.”

Exemplo de CTA: “Examinar projetos demonstrativos”.

### Wordmark & Logo

O símbolo é um monograma geométrico **BM** formado por dois blocos de código interligados, sugerindo integração entre back-end e front-end. O logotipo textual combina “BRUNO” em Space Grotesk com “MARTINS” em IBM Plex Mono, criando um contraste de autoria e precisão.

### Signature Brand Color

**Azul-sinal `#146CFF`**, usado exclusivamente para foco, ações e marcadores de percurso.

## Style Decisions

- Os projetos serão representados por **artefactos de sistema em HTML/CSS**, com mapas de entidades, fluxos, estados e painéis documentais; ilustrações genéricas não serão usadas como imagem principal de caso.
- Os campos de secção mantêm o par marfim técnico e azul-profundo. O azul-sinal fica reservado a referências, ações, estados e marcadores de leitura.
- Cada resumo de projeto deve apresentar explicitamente o **problema operacional**, a **decisão de sistema** e o **estado atual** para preservar a transparência do portfólio.
