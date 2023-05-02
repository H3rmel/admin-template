import { ToggleDarkMode } from "@/components/ToggleDarkMode/ToggleDarkMode";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="layout-header">
      <section>
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-xl text-dark-300 dark:text-light-800">{subtitle}</h2>
      </section>
      <section>
        <ToggleDarkMode/>
      </section>
    </header>
  );
}
