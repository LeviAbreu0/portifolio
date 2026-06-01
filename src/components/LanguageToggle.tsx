import { motion } from "motion/react";
import { useI18n } from "../i18n/I18nProvider";
import type { Lang } from "../i18n/translations";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const toggle = () => {
    setLang((lang === "en" ? "pt" : "en") as Lang);
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-medium text-zinc-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 backdrop-blur-sm"
    >
      {lang === "en" ? "PT-BR" : "EN"}
    </motion.button>
  );
}
