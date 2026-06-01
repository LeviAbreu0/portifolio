import { useI18n } from "../i18n/I18nProvider";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-primary-400 font-medium text-sm uppercase tracking-widest mb-3">
            {t.about.kicker}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            {t.about.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-zinc-400 text-lg leading-relaxed space-y-4">
            {t.about.lead.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
