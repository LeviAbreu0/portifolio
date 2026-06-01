import { motion } from "motion/react";
import { useI18n } from "../i18n/I18nProvider";
import { Reveal } from "./Reveal";

const skills = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html&theme=dark" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css&theme=dark" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js&theme=dark" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts&theme=dark" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react&theme=dark" },
  { name: "React Native", icon: "https://skillicons.dev/icons?i=react&theme=dark", label: "RN" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs&theme=dark" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java&theme=dark" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring&theme=dark" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql&theme=dark" },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres&theme=dark" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git&theme=dark" },
  { name: "C++", icon: "https://skillicons.dev/icons?i=cpp&theme=dark" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma&theme=dark" },
];

export function TechStack() {
  const { t } = useI18n();

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-primary-400 font-medium text-sm uppercase tracking-widest mb-3 text-center">
            {t.tech.kicker}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-center">
            {t.tech.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-zinc-400 text-lg text-center mb-12 max-w-xl mx-auto">
            {t.tech.lead}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group relative"
              >
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-primary-500/50 transition-all duration-300 cursor-default">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    loading="lazy"
                  />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {skill.label || skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
