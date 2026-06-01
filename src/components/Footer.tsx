import { useI18n } from "../i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-zinc-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {t.footer}
        </p>
        <div className="flex items-center gap-4 text-xs text-zinc-600">
          <a
            href="mailto:leviabreu.dev@gmail.com"
            className="hover:text-zinc-400 transition-colors"
          >
            Email
          </a>
          <span>·</span>
          <a
            href="https://github.com/LeviAbreu0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
