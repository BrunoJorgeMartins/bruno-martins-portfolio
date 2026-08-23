/**
 * Arquivo Técnico Editorial: detalhe de projeto em diálogo com contexto, decisão e próximo passo.
 */

import { Check, CircleDotDashed, Code2, Lightbulb, Wrench } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";

type ProjectDialogProps = {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
};

export default function ProjectDialog({ project, onOpenChange }: ProjectDialogProps) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={onOpenChange}>
      {project ? (
        <DialogContent className="project-dialog max-h-[90vh] overflow-y-auto border-0 bg-[#f5f3ee] p-0 text-[#12202b] sm:max-w-4xl">
          <div className="project-dialog-image">
            <img src={project.image} alt={project.imageAlt} />
            <div className="project-dialog-image-overlay" />
            <p>{project.status}</p>
            <span>{project.number}</span>
          </div>
          <div className="p-6 sm:p-9">
            <DialogHeader className="max-w-2xl text-left">
              <p className="eyebrow text-[#146cff]">ESTUDO DE CASO · PROJETO DEMONSTRATIVO</p>
              <DialogTitle className="font-display text-3xl leading-[0.96] tracking-[-0.05em] sm:text-5xl">{project.title}</DialogTitle>
              <DialogDescription className="pt-3 text-base leading-7 text-[#53616b]">{project.solution}</DialogDescription>
            </DialogHeader>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <article className="case-note">
                <CircleDotDashed aria-hidden="true" />
                <h3>Problema</h3>
                <p>{project.problem}</p>
              </article>
              <article className="case-note">
                <Code2 aria-hidden="true" />
                <h3>Meu papel</h3>
                <p>{project.role}</p>
              </article>
            </div>

            <div className="project-dialog-grid">
              <section>
                <div className="dialog-label"><Check aria-hidden="true" /> Funcionalidades prioritárias</div>
                <ul className="dialog-list">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </section>
              <section>
                <div className="dialog-label"><Wrench aria-hidden="true" /> Desafios previstos</div>
                <ul className="dialog-list">
                  {project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
                </ul>
              </section>
            </div>

            <div className="next-step-note">
              <Lightbulb aria-hidden="true" />
              <div><span>PRÓXIMO PASSO</span><p>{project.nextStep}</p></div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
            </div>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
