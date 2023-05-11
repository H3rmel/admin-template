import { ToggleDarkMode } from "@/components/ToggleDarkMode/ToggleDarkMode";
import { Avatar } from "@/components/Layouts/MainLayout/Avatar";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="layout-header">
      <section>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="hidden text-xl text-dark-300 dark:text-light-800 md:block">
          {subtitle}
        </h2>
      </section>
      <section className="layout-header-options">
        <ToggleDarkMode />
        <Avatar />
      </section>
    </header>
  );
}
