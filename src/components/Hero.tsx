import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useI18n } from "../i18n/I18nProvider";
import { Particles } from "./Particles";
import { Typewriter } from "./Typewriter";
import { BlurText } from "./BlurText";

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        color="#a855f7"
        speed={0.4}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-400 font-medium text-lg sm:text-xl mb-4"
        >
          {t.hero.intro}
        </motion.p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          <BlurText text={t.hero.title} className="text-gradient" />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 h-8"
        >
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all duration-300 glow-sm hover:glow"
          >
            {t.hero.btnView}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-zinc-700 hover:border-primary-500 text-zinc-300 hover:text-white rounded-full font-medium transition-all duration-300"
          >
            {t.hero.btnContact}
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-zinc-600 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
