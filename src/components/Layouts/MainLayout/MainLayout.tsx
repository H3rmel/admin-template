import Head from "next/head";

import { ReactNode } from "react";

import { Sidebar, Header, Content } from "../../Index";

import { useAppData } from "@/data/hooks/useAppData";

interface LayoutProps {
  pageTitle: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function MainLayout({
  pageTitle,
  title,
  subtitle,
  children,
}: LayoutProps) {
  const appData = useAppData();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className={`layout-main ${appData.theme}`}>
        <Sidebar />
        <section className="layout-section">
          <Header title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </section>
      </main>
    </>
  );
}
