//#region Imports

import Head from "next/head";

import { ReactNode, useEffect } from "react";

import { Sidebar, Header, Content, AuthVerify } from "../../Index";

import { useAppData, useAuthData } from "@/data/hooks";
import { useRouter } from "next/router";

//#endregion

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
  const authData = useAuthData();

  const router = useRouter();

  useEffect(() => {
    if (authData.user?.email === null || undefined) router.push("/authentication");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
