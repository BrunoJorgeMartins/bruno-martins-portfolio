/**
 * Arquivo Técnico Editorial: portfólio assimétrico com evidência técnica antes de ornamento.
 */

import { FormEvent, useMemo, useState } from "react";
import "@/portfolio.css";
import "@/dossier-refinement.css";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Send,
  Server,
  X,
} from "lucide-react";
import { toast } from "sonner";
import ProjectDialog from "@/components/ProjectDialog";
import SectionTitle from "@/components/SectionTitle";
import { processSteps, projects, skillGroups, type Project } from "@/data/portfolio";

const navItems = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Competências", "#competencias"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Contacto", "#contacto"],
];

const filters = ["Todos", "Full Stack", "Back-end", "Base de Dados", "Sistemas Empresariais", "Suporte & Infra"];

const toastPlaceholder = (label: string) => toast.info(`${label}: adicionar ligação real antes de publicar.`);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [formError, setFormError] = useState("");

  const visibleProjects = useMemo(
    () => activeFilter === "Todos" ? projects : projects.filter((project) => project.category.includes(activeFilter)),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name", "email", "subject", "message"];
    const hasEmpty = required.some((field) => !String(data.get(field) ?? "").trim());
    const email = String(data.get("email") ?? "");
    if (hasEmpty || !/^\S+@\S+\.\S+$/.test(email)) {
      setFormState("idle");
      setFormError("Preencha todos os campos e informe um e-mail válido.");
      return;
    }
    setFormError("");
    setFormState("success");
    event.currentTarget.reset();
  }

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Bruno Martins — ir para o início">
            <img src="/manus-storage/bruno-martins-mark_c1b2f32b.png" alt="" />
            <span><b>BRUNO</b><em>MARTINS</em></span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>

          <button className="header-cv" onClick={() => toastPlaceholder("Currículo")}>CV <Download aria-hidden="true" /></button>
          <button className="mobile-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {navItems.map(([label, href]) => <a href={href} onClick={closeMenu} key={href}>{label}<ChevronRight aria-hidden="true" /></a>)}
            <button onClick={() => { closeMenu(); toastPlaceholder("Currículo"); }}>Descarregar CV <Download aria-hidden="true" /></button>
          </nav>
        ) : null}
      </header>

      <main id="conteudo">
        <section className="hero-section" id="inicio">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="hero-main">
            <div className="hero-copy">
              <p className="hero-availability"><span /> DISPONÍVEL PARA NOVAS OPORTUNIDADES</p>
              <p className="eyebrow">PORTFÓLIO · 2026</p>
              <h1>Da regra de negócio à interface que a equipa consegue usar.</h1>
              <p className="hero-lead">Sou <strong>Bruno Martins</strong>, Desenvolvedor Full Stack com foco em sistemas web, dados e processos empresariais.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#projetos">Examinar projetos <ArrowDownRight aria-hidden="true" /></a>
                <a className="button-secondary" href="#contacto">Falar comigo <ArrowUpRight aria-hidden="true" /></a>
              </div>
              <div className="hero-stack" aria-label="Tecnologias em destaque">
                <span>C#</span><i /> <span>ASP.NET</span><i /> <span>SQL SERVER</span><i /> <span>JAVASCRIPT</span>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="hero-portrait-meta"><span>PERFIL</span><span>001—BRM</span></div>
              <div className="hero-portrait">
                <img src="/manus-storage/bruno-martins-portrait_e0acfda7.jpg" alt="Retrato profissional de Bruno Martins." />
                <div className="portrait-caption"><span>BRUNO MARTINS</span><span>DESENVOLVEDOR FULL STACK</span></div>
              </div>
              <div className="hero-stamp"><img src="/manus-storage/bruno-martins-mark_c1b2f32b.png" alt="" /><span>SISTEMAS<br />COMPLETOS</span></div>
            </div>
          </div>
          <div className="hero-footnote"><span>01</span><p>Soluções empresariais desenhadas para processos claros, dados consistentes e evolução contínua.</p><span className="scroll-prompt">DESLIZE PARA EXPLORAR ↓</span></div>
        </section>

        <section className="about-section" id="sobre">
          <div className="content-grid">
            <SectionTitle index="01" eyebrow="SOBRE MIM" title="Desenvolvimento orientado ao funcionamento real." description="Tecnologia é útil quando torna o processo mais claro, a informação mais acessível e a decisão mais confiável." />
            <div className="about-content">
              <p className="about-statement">Trabalho no desenvolvimento e evolução de sistemas de gestão, combinando análise, modelagem, base de dados, back-end e interface num percurso técnico coerente.</p>
              <p>Com experiência em C#, ASP.NET, SQL Server, MySQL e JavaScript, tenho particular interesse em aplicações empresariais com regras de negócio, vários perfis de acesso e informação que precisa de permanecer organizada ao longo do tempo.</p>
              <div className="about-facts">
                <div><b>4</b><span>ANOS DE EXPERIÊNCIA EM DESENVOLVIMENTO WEB</span></div>
                <div><b>2</b><span>FRENTES COMPLEMENTARES: SOFTWARE E SUPORTE TÉCNICO</span></div>
              </div>
              <a className="text-link" href="#experiencia">Ver percurso profissional <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="skills-section" id="competencias">
          <div className="content-grid">
            <SectionTitle index="02" eyebrow="COMPETÊNCIAS" title="Uma visão completa do sistema." description="Da estrutura dos dados à experiência de quem utiliza a aplicação." tone="dark" />
            <div className="skills-content">
              <div className="skill-highlight"><p>FOCO PRINCIPAL</p><strong>C# · ASP.NET · SQL SERVER · JAVASCRIPT</strong></div>
              <div className="skill-grid">
                {skillGroups.map((group) => (
                  <article className="skill-group" key={group.number}>
                    <div className="skill-group-top"><span>{group.number}</span><em>{group.label}</em></div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="projects-header content-grid">
            <SectionTitle index="03" eyebrow="PROJETOS" title="Casos para construir, estudar e evoluir." description="Projetos demonstrativos selecionados para aprofundar competências relevantes para sistemas empresariais reais." />
            <div className="projects-note"><span className="status-dot" /> CONCEITOS E PROJETOS EM DESENVOLVIMENTO · SEM CLIENTES, MÉTRICAS OU LINKS INVENTADOS</div>
          </div>

          <div className="project-controls">
            <p>FILTRAR POR ÁREA</p>
            <div role="group" aria-label="Filtrar projetos">
              {filters.map((filter) => <button className={activeFilter === filter ? "is-active" : ""} onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>)}
            </div>
          </div>

          <div className="project-list">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className={`project-image project-artifact artifact-${project.id}`} role="img" aria-label={`Artefacto técnico de referência para ${project.shortTitle}`}>
                  <span>{project.number}</span>
                  <div className="artifact-meta"><b>REF. SISTEMA</b><em>ESTRUTURA / FLUXO</em></div>
                  <div className="artifact-nodes"><i /><i /><i /><i /><i /></div>
                  <div className="artifact-note">{project.shortTitle.toUpperCase()}</div>
                  <div className="artifact-bars"><i /><i /><i /><i /></div>
                </div>
                <div className="project-card-content">
                  <div className="project-card-top"><p>{project.status}</p><span>{project.category[0]}</span></div>
                  <h3>{project.shortTitle}</h3>
                  <p className="project-problem"><b>PROBLEMA</b>{project.problem}</p>
                  <p className="project-decision"><b>DECISÃO</b>{project.solution}</p>
                  <div className="project-techs">{project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <button className="project-examine" onClick={() => setSelectedProject(project)}>Examinar projeto <ArrowUpRight aria-hidden="true" /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experiencia">
          <div className="content-grid">
            <SectionTitle index="04" eyebrow="EXPERIÊNCIA" title="Software, suporte e continuidade operacional." description="Percurso profissional com desenvolvimento de sistemas e apoio à infraestrutura tecnológica." />
            <div className="timeline">
              <article className="timeline-item current">
                <div className="timeline-date">2022 — ATUAL</div>
                <div className="timeline-role"><span className="timeline-mark"><BriefcaseBusiness aria-hidden="true" /></span><div><p>ISABELINHA COMERCIAL, LDA.</p><h3>Programador</h3><p className="timeline-description">Participação no desenvolvimento e evolução de sistema de gestão institucional em ASP.NET, com implementação de funcionalidades, manutenção corretiva e evolutiva e suporte especializado a sistema de gestão educacional universitário.</p><div className="inline-tags"><span>ASP.NET</span><span>C#</span><span>SQL</span><span>Suporte</span></div></div></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2022 — ATUAL</div>
                <div className="timeline-role"><span className="timeline-mark"><Network aria-hidden="true" /></span><div><p>ISABELINHA COMERCIAL, LDA.</p><h3>Técnico de Informática</h3><p className="timeline-description">Instalação, configuração e manutenção de hardware e software, suporte a utilizadores e resolução de situações de conectividade e infraestrutura de rede.</p><div className="inline-tags"><span>Redes</span><span>DNS</span><span>DHCP</span><span>Active Directory</span></div></div></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2021 · 5 MESES</div>
                <div className="timeline-role"><span className="timeline-mark"><Server aria-hidden="true" /></span><div><p>UTANGA</p><h3>Estágio em Software e Redes</h3><p className="timeline-description">Modelagem de sistemas com UML, análise de requisitos, estruturação de soluções e apoio na gestão de serviços AD/DS, DNS, DHCP, ficheiros e proxy.</p><div className="inline-tags"><span>UML</span><span>AD/DS</span><span>PHP</span><span>MySQL</span></div></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="process-top"><p className="eyebrow">05 · COMO TRABALHO</p><h2>O código é uma parte da solução.<br />O processo vem antes.</h2><p className="process-reference">REF. 05 / MÉTODO DE DESENVOLVIMENTO</p></div>
          <div className="process-steps">
            {processSteps.map(([number, title, description]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><ChevronRight aria-hidden="true" /></article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="content-grid">
            <SectionTitle index="06" eyebrow="CONTACTO" title="Vamos conversar sobre o próximo sistema." description="Para oportunidades, colaboração ou discussão de um problema a resolver." tone="dark" />
            <div className="contact-content">
              <div className="contact-direct">
                <a className="email-link" href="mailto:brunocostamartins0@gmail.com">brunocostamartins0@gmail.com <ArrowUpRight aria-hidden="true" /></a>
                <p>Luanda, Viana · Vida Pacífica</p>
                <div className="contact-socials">
                  <button onClick={() => toastPlaceholder("GitHub")} aria-label="Adicionar ligação do GitHub"><Github aria-hidden="true" /> GitHub <span>Adicionar ligação</span></button>
                  <button onClick={() => toastPlaceholder("LinkedIn")} aria-label="Adicionar ligação do LinkedIn"><Linkedin aria-hidden="true" /> LinkedIn <span>Adicionar ligação</span></button>
                  <a href="mailto:brunocostamartins0@gmail.com"><Mail aria-hidden="true" /> E-mail <span>Enviar mensagem</span></a>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleContact} noValidate>
                <div className="form-heading"><Send aria-hidden="true" /><span>FORMULÁRIO PREPARADO PARA INTEGRAÇÃO</span></div>
                <div className="form-grid"><label>Nome<input name="name" type="text" placeholder="O seu nome" /></label><label>E-mail<input name="email" type="email" placeholder="nome@empresa.com" /></label></div>
                <label>Assunto<input name="subject" type="text" placeholder="Como posso ajudar?" /></label>
                <label>Mensagem<textarea name="message" rows={4} placeholder="Descreva brevemente a oportunidade ou o desafio." /></label>
                {formError ? <p className="form-error" role="alert">{formError}</p> : null}
                {formState === "success" ? <p className="form-success"><CheckCircle2 aria-hidden="true" /> Mensagem validada. Conecte este formulário a um serviço de envio para ativar o contacto.</p> : null}
                <button className="button-primary form-submit" type="submit">Validar mensagem <Send aria-hidden="true" /></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/manus-storage/bruno-martins-mark_c1b2f32b.png" alt="" /><span><b>BRUNO</b><em>MARTINS</em></span></div>
        <p>DESENVOLVEDOR FULL STACK · C# · ASP.NET · SQL SERVER · JAVASCRIPT</p>
        <span>© 2026 · PORTFÓLIO PROFISSIONAL</span>
      </footer>

      <ProjectDialog project={selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)} />
    </div>
  );
}
