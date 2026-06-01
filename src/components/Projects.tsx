import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { Reveal } from "./Reveal";

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-primary-400 font-medium text-sm uppercase tracking-widest mb-3 text-center">
            {t.projects.kicker}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-center">
            {t.projects.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-zinc-400 text-lg text-center mb-12 max-w-xl mx-auto">
            {t.projects.lead}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.title} delay={0.1 * (i + 1)}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
                <div className="relative h-full flex flex-col rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 transition-colors">
                  <div className="flex-1">
                    <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center mb-4">
                      <span className="text-primary-400 font-bold text-lg">
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-600/10 text-primary-400 border border-primary-600/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors mt-auto"
                  >
                    <ExternalLink size={16} />
                    {t.projects.viewCode}
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
