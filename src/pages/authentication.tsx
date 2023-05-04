import Head from "next/head";

import { ChangeEvent, FormEvent, useState } from "react";

import { AuthInput } from "@/components/auth/AuthInput";

import { ToggleDarkMode } from "@/components/ToggleDarkMode/ToggleDarkMode"; //! Not working on this page! Need to be fixed

import { useAppData } from "@/data/hooks/useAppData";
import Image from "next/image";
import { GoogleLogo } from "@phosphor-icons/react";

type Mode = "login" | "register";

interface userInfoProps {
  email?: string;
  password?: string;
}

export default function Authentication() {
  const [userInfo, setUserInfo] = useState<userInfoProps>({});
  const [mode, setMode] = useState<Mode>("login");

  const appData = useAppData();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(mode);
  };
  return (
    <>
      <Head>
        <title>{mode === "login" ? "Login" : "Cadastro"}</title>
      </Head>
      <main className={`login-main ${appData.theme}`}>
        <section className="login-section">
          <h1 className="text-4xl font-semibold text-center">
            {mode === "login" ? "Bem-vindo de volta!" : "Crie sua conta!"}
          </h1>
          <article className="login-card">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <AuthInput
                label="E-mail"
                type="email"
                required
                value={userInfo.email}
                valueChange={handleChange}
              />
              <AuthInput
                label="Senha"
                type="password"
                required
                value={userInfo.password}
                valueChange={handleChange}
              />
              <AuthInput
                label="Confirmar senha"
                type="password"
                required
                value={userInfo.password}
                valueChange={handleChange}
                render={mode !== "login"}
              />
              <button
                type="submit"
                className="login-btn bg-primary-500 hover:bg-primary-600"
              >
                {mode === "login" ? "Entrar" : "Cadastrar"}
              </button>
              <hr />
              <button className="login-btn bg-red-500 hover:bg-red-600">
                <GoogleLogo size={24} weight="bold" />
              </button>
            </form>
            {mode === "login" ? (
              <p>
                Novo por aqui?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="login-link"
                >
                  Crie uma conta gratuitamente.
                </button>
              </p>
            ) : (
              <p>
                Já faz parte do projeto?{" "}
                <button onClick={() => setMode("login")} className="login-link">
                  Entre por aqui.
                </button>
              </p>
            )}
          </article>
        </section>
        <section className="login-banner">
          <figure>
            <Image src="/logo.svg" width={128} height={128} alt="H3's logo" />
          </figure>
        </section>
      </main>
    </>
  );
}
