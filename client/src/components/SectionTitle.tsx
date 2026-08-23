/**
 * Arquivo Técnico Editorial: marcador lateral, numeração e hierarquia tipográfica precisa.
 */

type SectionTitleProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionTitle({ index, eyebrow, title, description, tone = "light" }: SectionTitleProps) {
  return (
    <div className={`section-title ${tone === "dark" ? "section-title-dark" : ""}`}>
      <div className="section-index" aria-hidden="true">
        <span>{index}</span>
        <i />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </div>
  );
}
