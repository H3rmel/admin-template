import { MainLayout } from "@/components/Index";

import { useAppData } from "@/data/hooks/index";

export default function Home() {
  const appData = useAppData();

  return (
    <MainLayout
      pageTitle="Home"
      title="Página Inicial"
      subtitle="Estamos construindo o template!"
    >
      <h3>{appData.theme}</h3>
      <p>Home</p>
    </MainLayout>
  );
}
