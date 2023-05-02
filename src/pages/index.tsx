import { Layout } from "@/layouts/Index";

import { useAppData } from "@/data/hooks/useAppData";

export default function Home() {
  const appData = useAppData();

  return (
    <Layout
      pageTitle="Home"
      title="Página Inicial"
      subtitle="Estamos construindo o template!"
    >
      <h3>{appData.theme}</h3>
      <p>Home</p>
    </Layout>
  );
}
