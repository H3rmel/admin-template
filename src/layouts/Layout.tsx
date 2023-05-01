import Head from "next/head";

import { ReactNode } from "react";

import { Sidebar, Header, Content } from "./Index";

interface LayoutProps {
  pageTitle: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function Layout({ pageTitle, title, subtitle, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="layout-main">
        <Sidebar />
        <section className="layout-section">
          <Header title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </section>
      </main>
    </>
  );
}
