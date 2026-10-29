using Portfolio.Web.Models;

namespace Portfolio.Web.Data;

/// <summary>
/// Conteúdo do portfólio. Para alterar textos, projetos ou competências, edite este ficheiro.
/// </summary>
public static class PortfolioData
{
    public const string LinkedInUrl = "https://www.linkedin.com/in/brunomartinssoftwere/";
    public const string GitHubUrl = "https://github.com/BrunoJorgeMartins";

    public static readonly IReadOnlyList<NavItem> Nav =
    [
        new("Início", "#inicio"),
        new("Sobre", "#sobre"),
        new("Competências", "#competencias"),
        new("Projetos", "#projetos"),
        new("Experiência", "#experiencia"),
        new("Contacto", "#contacto"),
    ];

    public static readonly IReadOnlyList<string> Filters =
        ["Todos", "Full Stack", "Back-end", "Base de Dados", "Sistemas Empresariais", "Suporte & Infra"];

    public static readonly IReadOnlyList<Project> Projects =
    [
        new(
            Id: "documental",
            Number: "01",
            Title: "Sistema de Gestão Documental e Fluxos Administrativos",
            ShortTitle: "Gestão Documental",
            Status: "CONCEITO · A DESENVOLVER",
            Categories: ["Full Stack", "Sistemas Empresariais", "Base de Dados"],
            Problem: "Documentos distribuídos, pouca rastreabilidade e solicitações sem acompanhamento tornam processos internos difíceis de consultar e aprovar.",
            Solution: "Uma plataforma centralizada para organizar documentos, definir permissões por departamento e acompanhar cada processo através de estados verificáveis.",
            Role: "Análise, modelagem de dados, regras de fluxo, desenvolvimento back-end e interfaces administrativas.",
            Technologies: ["C#", "ASP.NET MVC", "EF Code First", "SQL Server", "JavaScript"],
            Features:
            [
                "Perfis, departamentos, categorias e permissões",
                "Upload, organização e pesquisa de documentos",
                "Fluxo de aprovação com estados e responsáveis",
                "Histórico de alterações e registo de atividades",
                "Dashboard por estado de documentos e processos",
            ],
            Challenges:
            [
                "Garantir autorização adequada entre departamentos",
                "Modelar estados e histórico sem perder rastreabilidade",
                "Criar filtros rápidos para grandes conjuntos de documentos",
            ],
            NextStep: "Estruturar o MVP com autenticação, documentos, categorias, pesquisa e um fluxo inicial de aprovação."),

        new(
            Id: "escolar",
            Number: "02",
            Title: "Sistema Integrado de Gestão Escolar",
            ShortTitle: "Gestão Escolar",
            Status: "CONCEITO · A DESENVOLVER",
            Categories: ["Full Stack", "Sistemas Empresariais", "Base de Dados"],
            Problem: "Informações académicas e administrativas dispersas dificultam o acompanhamento de estudantes, turmas, avaliações e pagamentos.",
            Solution: "Um sistema modular que relaciona a gestão académica, administrativa e financeira em fluxos claros para diferentes perfis de utilizador.",
            Role: "Modelagem das entidades académicas, regras de negócio, desenvolvimento de módulos e construção de interfaces de operação.",
            Technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "jQuery"],
            Features:
            [
                "Estudantes, cursos, turmas, disciplinas e matrículas",
                "Avaliações, notas, pautas e controlo de presenças",
                "Documentos académicos preparados para impressão",
                "Propinas, pagamentos e valores em atraso",
                "Perfis para administração, docentes e estudantes",
            ],
            Challenges:
            [
                "Manter consistência entre ano letivo, turmas e matrículas",
                "Definir permissões para cada papel no sistema",
                "Validar regras de avaliação e publicação de resultados",
            ],
            NextStep: "Iniciar pelos módulos de estudantes, turmas, disciplinas, matrículas e registo de notas."),

        new(
            Id: "orcamento",
            Number: "03",
            Title: "Plataforma de Planeamento Orçamental e Gestão de Necessidades",
            ShortTitle: "Planeamento Orçamental",
            Status: "CONCEITO · A DESENVOLVER",
            Categories: ["Back-end", "Sistemas Empresariais", "Base de Dados"],
            Problem: "Pedidos sem prioridade, aprovações pouco rastreáveis e despesas desconectadas do planeamento tornam o controlo administrativo mais complexo.",
            Solution: "Uma plataforma que liga necessidades, prioridades, planos, decisões, comprovativos e estados de execução num percurso auditável.",
            Role: "Desenho das regras de negócio, modelagem de estados, integridade de dados, desenvolvimento de fluxos e painéis de acompanhamento.",
            Technologies: ["C#", "ASP.NET MVC", "EF Code First", "SQL Server", "LINQ"],
            Features:
            [
                "Necessidades com quantidade, prioridade e prazo",
                "Planos orçamentais, centros de custo e departamentos",
                "Aprovações com justificação e histórico de decisões",
                "Despesas, valores atendidos e comprovativos",
                "Estados de execução, alertas e adiamento para planos futuros",
            ],
            Challenges:
            [
                "Manter regras de transição consistentes entre estados",
                "Preservar integridade entre necessidade, aprovação e despesa",
                "Organizar a informação por departamento sem duplicação",
            ],
            NextStep: "Mapear o fluxo de estados e criar primeiro os módulos de necessidades, prioridades e aprovação."),

        new(
            Id: "helpdesk",
            Number: "04",
            Title: "Help Desk e Inventário de Ativos de TI",
            ShortTitle: "Help Desk & Ativos",
            Status: "CONCEITO · A DESENVOLVER",
            Categories: ["Full Stack", "Suporte & Infra", "Base de Dados"],
            Problem: "Chamados realizados por canais dispersos e inventário incompleto atrasam a resolução de incidentes e dificultam a manutenção preventiva.",
            Solution: "Uma base operacional para abrir chamados, acompanhar atendimentos e relacionar equipamentos, utilizadores, localizações e manutenções.",
            Role: "Análise de processos de suporte, modelagem de ativos, desenvolvimento do sistema de tickets e interfaces para equipas técnicas.",
            Technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "JavaScript"],
            Features:
            [
                "Abertura, prioridade, atribuição e acompanhamento de chamados",
                "Comentários, anexos e histórico de atendimento",
                "Inventário de computadores, dispositivos e rede",
                "Ativos associados a utilizadores, departamentos e localizações",
                "Manutenções, garantias, base de conhecimento e dashboard",
            ],
            Challenges:
            [
                "Definir categorias e prioridades úteis para o suporte",
                "Relacionar o histórico do chamado com o ativo correto",
                "Manter a atualização do inventário simples para a equipa",
            ],
            NextStep: "Começar pelo MVP de chamados, categorias, estados, utilizadores e registo de ativos."),
    ];

    public static readonly IReadOnlyList<SkillGroup> SkillGroups =
    [
        new("01", "BACK-END", "Lógica, dados e regras de negócio",
            ["C#", "ASP.NET MVC", "ASP.NET Web Forms", "Entity Framework", "LINQ", "APIs"]),
        new("02", "FRONT-END", "Interfaces claras e responsivas",
            ["HTML5", "CSS3", "JavaScript", "jQuery", "Razor Views", "Bootstrap"]),
        new("03", "BASE DE DADOS", "Estrutura, consultas e evolução",
            ["SQL Server", "MySQL", "Modelagem", "SQL", "Migrations", "Code First"]),
        new("04", "INFRAESTRUTURA", "Continuidade operacional",
            ["Git / GitHub", "Redes", "DNS", "DHCP", "Active Directory", "Suporte técnico"]),
    ];

    public static readonly IReadOnlyList<Experience> Experiences =
    [
        new(
            Date: "2022 — ATUAL",
            Company: "ISABELINHA COMERCIAL, LDA.",
            Role: "Programador",
            Description: "Participação no desenvolvimento e evolução de sistema de gestão institucional em ASP.NET, com implementação de funcionalidades, manutenção corretiva e evolutiva e suporte especializado a sistema de gestão educacional universitário.",
            Icon: "briefcase-business",
            Tags: ["ASP.NET", "C#", "SQL", "Suporte"],
            IsCurrent: true),
        new(
            Date: "2022 — ATUAL",
            Company: "ISABELINHA COMERCIAL, LDA.",
            Role: "Técnico de Informática",
            Description: "Instalação, configuração e manutenção de hardware e software, suporte a utilizadores e resolução de situações de conectividade e infraestrutura de rede.",
            Icon: "network",
            Tags: ["Redes", "DNS", "DHCP", "Active Directory"]),
        new(
            Date: "2021 · 5 MESES",
            Company: "UTANGA",
            Role: "Estágio em Software e Redes",
            Description: "Modelagem de sistemas com UML, análise de requisitos, estruturação de soluções e apoio na gestão de serviços AD/DS, DNS, DHCP, ficheiros e proxy.",
            Icon: "server",
            Tags: ["UML", "AD/DS", "PHP", "MySQL"]),
    ];

    public static readonly IReadOnlyList<ProcessStep> ProcessSteps =
    [
        new("01", "Entender", "Contexto, utilizadores e problema operacional."),
        new("02", "Estruturar", "Requisitos, entidades, regras e percurso da informação."),
        new("03", "Construir", "Back-end, interface e validações com foco no uso real."),
        new("04", "Testar", "Cenários críticos, consistência e comportamento esperado."),
        new("05", "Evoluir", "Manutenção, melhorias e novas necessidades do sistema."),
    ];
}
