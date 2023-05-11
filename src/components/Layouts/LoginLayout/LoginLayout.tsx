//#region Imports

import Head from "next/head";

import { ReactNode } from "react";

import { ToggleDarkMode } from "@/components/ToggleDarkMode/ToggleDarkMode";

import { useAppData } from "@/data/hooks/useAppData";

//#endregion

interface LoginLayoutProps {
  pageTitle: string;
  children?: ReactNode;
}

export function LoginLayout({ pageTitle, children }: LoginLayoutProps) {
  const appData = useAppData();
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className={`login-main ${appData.theme}`}>
        <ToggleDarkMode className="absolute top-4 left-4" />
        <section className="login-section">{children}</section>
      </main>
    </>
  );
}
