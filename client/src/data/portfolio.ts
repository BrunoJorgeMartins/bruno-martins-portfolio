/**
 * Arquivo Técnico Editorial: dados transparentes, organizados e fáceis de substituir
 * quando os projetos forem implementados e tiverem ligações ou screenshots reais.
 */

export type Project = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  status: string;
  category: string[];
  problem: string;
  solution: string;
  role: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  nextStep: string;
};

export const projects: Project[] = [
  {
    id: "documental",
    number: "01",
    title: "Sistema de Gestão Documental e Fluxos Administrativos",
    shortTitle: "Gestão Documental",
    status: "CONCEITO · A DESENVOLVER",
    category: ["Full Stack", "Sistemas Empresariais", "Base de Dados"],
    problem:
      "Documentos distribuídos, pouca rastreabilidade e solicitações sem acompanhamento tornam processos internos difíceis de consultar e aprovar.",
    solution:
      "Uma plataforma centralizada para organizar documentos, definir permissões por departamento e acompanhar cada processo através de estados verificáveis.",
    role:
      "Análise, modelagem de dados, regras de fluxo, desenvolvimento back-end e interfaces administrativas.",
    image: "/manus-storage/document-management-visual_c783ca13.jpg",
    imageAlt: "Ilustração editorial de fluxo documental e aprovação administrativa.",
    technologies: ["C#", "ASP.NET MVC", "EF Code First", "SQL Server", "JavaScript"],
    features: [
      "Perfis, departamentos, categorias e permissões",
      "Upload, organização e pesquisa de documentos",
      "Fluxo de aprovação com estados e responsáveis",
      "Histórico de alterações e registo de atividades",
      "Dashboard por estado de documentos e processos",
    ],
    challenges: [
      "Garantir autorização adequada entre departamentos",
      "Modelar estados e histórico sem perder rastreabilidade",
      "Criar filtros rápidos para grandes conjuntos de documentos",
    ],
    nextStep: "Estruturar o MVP com autenticação, documentos, categorias, pesquisa e um fluxo inicial de aprovação.",
  },
  {
    id: "escolar",
    number: "02",
    title: "Sistema Integrado de Gestão Escolar",
    shortTitle: "Gestão Escolar",
    status: "CONCEITO · A DESENVOLVER",
    category: ["Full Stack", "Sistemas Empresariais", "Base de Dados"],
    problem:
      "Informações académicas e administrativas dispersas dificultam o acompanhamento de estudantes, turmas, avaliações e pagamentos.",
    solution:
      "Um sistema modular que relaciona a gestão académica, administrativa e financeira em fluxos claros para diferentes perfis de utilizador.",
    role:
      "Modelagem das entidades académicas, regras de negócio, desenvolvimento de módulos e construção de interfaces de operação.",
    image: "/manus-storage/school-system-visual_7e71b712.jpg",
    imageAlt: "Ilustração editorial de módulos de gestão escolar conectados.",
    technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "jQuery"],
    features: [
      "Estudantes, cursos, turmas, disciplinas e matrículas",
      "Avaliações, notas, pautas e controlo de presenças",
      "Documentos académicos preparados para impressão",
      "Propinas, pagamentos e valores em atraso",
      "Perfis para administração, docentes e estudantes",
    ],
    challenges: [
      "Manter consistência entre ano letivo, turmas e matrículas",
      "Definir permissões para cada papel no sistema",
      "Validar regras de avaliação e publicação de resultados",
    ],
    nextStep: "Iniciar pelos módulos de estudantes, turmas, disciplinas, matrículas e registo de notas.",
  },
  {
    id: "orcamento",
    number: "03",
    title: "Plataforma de Planeamento Orçamental e Gestão de Necessidades",
    shortTitle: "Planeamento Orçamental",
    status: "CONCEITO · A DESENVOLVER",
    category: ["Back-end", "Sistemas Empresariais", "Base de Dados"],
    problem:
      "Pedidos sem prioridade, aprovações pouco rastreáveis e despesas desconectadas do planeamento tornam o controlo administrativo mais complexo.",
    solution:
      "Uma plataforma que liga necessidades, prioridades, planos, decisões, comprovativos e estados de execução num percurso auditável.",
    role:
      "Desenho das regras de negócio, modelagem de estados, integridade de dados, desenvolvimento de fluxos e painéis de acompanhamento.",
    image: "/manus-storage/budget-planning-visual_5fe5c0bd.jpg",
    imageAlt: "Ilustração editorial de planeamento orçamental, aprovações e despesas.",
    technologies: ["C#", "ASP.NET MVC", "EF Code First", "SQL Server", "LINQ"],
    features: [
      "Necessidades com quantidade, prioridade e prazo",
      "Planos orçamentais, centros de custo e departamentos",
      "Aprovações com justificação e histórico de decisões",
      "Despesas, valores atendidos e comprovativos",
      "Estados de execução, alertas e adiamento para planos futuros",
    ],
    challenges: [
      "Manter regras de transição consistentes entre estados",
      "Preservar integridade entre necessidade, aprovação e despesa",
      "Organizar a informação por departamento sem duplicação",
    ],
    nextStep: "Mapear o fluxo de estados e criar primeiro os módulos de necessidades, prioridades e aprovação.",
  },
  {
    id: "helpdesk",
    number: "04",
    title: "Help Desk e Inventário de Ativos de TI",
    shortTitle: "Help Desk & Ativos",
    status: "CONCEITO · A DESENVOLVER",
    category: ["Full Stack", "Suporte & Infra", "Base de Dados"],
    problem:
      "Chamados realizados por canais dispersos e inventário incompleto atrasam a resolução de incidentes e dificultam a manutenção preventiva.",
    solution:
      "Uma base operacional para abrir chamados, acompanhar atendimentos e relacionar equipamentos, utilizadores, localizações e manutenções.",
    role:
      "Análise de processos de suporte, modelagem de ativos, desenvolvimento do sistema de tickets e interfaces para equipas técnicas.",
    image: "/manus-storage/helpdesk-inventory-visual_440b4d75.jpg",
    imageAlt: "Ilustração editorial de sistema de help desk e inventário de TI.",
    technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "JavaScript"],
    features: [
      "Abertura, prioridade, atribuição e acompanhamento de chamados",
      "Comentários, anexos e histórico de atendimento",
      "Inventário de computadores, dispositivos e rede",
      "Ativos associados a utilizadores, departamentos e localizações",
      "Manutenções, garantias, base de conhecimento e dashboard",
    ],
    challenges: [
      "Definir categorias e prioridades úteis para o suporte",
      "Relacionar o histórico do chamado com o ativo correto",
      "Manter a atualização do inventário simples para a equipa",
    ],
    nextStep: "Começar pelo MVP de chamados, categorias, estados, utilizadores e registo de ativos.",
  },
];

export const skillGroups = [
  {
    number: "01",
    label: "BACK-END",
    title: "Lógica, dados e regras de negócio",
    items: ["C#", "ASP.NET MVC", "ASP.NET Web Forms", "Entity Framework", "LINQ", "APIs"],
  },
  {
    number: "02",
    label: "FRONT-END",
    title: "Interfaces claras e responsivas",
    items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Razor Views", "Bootstrap"],
  },
  {
    number: "03",
    label: "BASE DE DADOS",
    title: "Estrutura, consultas e evolução",
    items: ["SQL Server", "MySQL", "Modelagem", "SQL", "Migrations", "Code First"],
  },
  {
    number: "04",
    label: "INFRAESTRUTURA",
    title: "Continuidade operacional",
    items: ["Git / GitHub", "Redes", "DNS", "DHCP", "Active Directory", "Suporte técnico"],
  },
];

export const processSteps = [
  ["01", "Entender", "Contexto, utilizadores e problema operacional."],
  ["02", "Estruturar", "Requisitos, entidades, regras e percurso da informação."],
  ["03", "Construir", "Back-end, interface e validações com foco no uso real."],
  ["04", "Testar", "Cenários críticos, consistência e comportamento esperado."],
  ["05", "Evoluir", "Manutenção, melhorias e novas necessidades do sistema."],
];
