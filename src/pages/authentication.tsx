//#region Imports

import Image from "next/image";

import { ChangeEvent, FormEvent, useState } from "react";

import { LoginLayout, AuthInput, AuthChangeMode } from "@/components/Index";

import { useAppData, useAuthData } from "@/data/hooks/index";

import { GoogleLogo } from "@phosphor-icons/react";

import toast from "react-hot-toast";

//#endregion

//#region Types & Imports

type Mode = "login" | "register";

interface userInfoProps {
  email?: string;
  password?: string;
}

//#endregion

export default function Authentication() {
  const [userInfo, setUserInfo] = useState<userInfoProps>({});
  const [mode, setMode] = useState<Mode>("login");

  const appData = useAppData();
  const { user, loginWithGoogle } = useAuthData();

  //#region Methods

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(mode);
  };

  const handleError = (message: string, timeout: number = 5000) => {
    toast.error(message, {
      position: "bottom-center",
      duration: timeout,
      style:
        appData.theme === "dark"
          ? {
              color: "#eceff1",
              background: "#16272e",
            }
          : {
              color: "#1c313a",
              background: "#bdbfc1",
            },
    });
  };

  //#endregion

  return (
    <LoginLayout pageTitle={mode === "login" ? "Entrar" : "Cadastrar"}>
      <article className="login-article">
        <h1 className="text-4xl font-semibold text-center">
          {mode === "login" ? "Bem-vindo de volta!" : "Crie sua conta!"}
        </h1>
        <div className="login-card">
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
            <button
              type="button"
              onClick={loginWithGoogle}
              title="Login with Google"
              className="login-btn bg-red-500 hover:bg-red-600"
            >
              <GoogleLogo size={24} weight="bold" />
            </button>
          </form>
          <AuthChangeMode mode={mode} setMode={(mode) => setMode(mode)} />
        </div>
      </article>
      <article className="login-banner">
        <figure>
          <Image src="/logo.svg" width={128} height={128} alt="H3's logo" />
        </figure>
      </article>
    </LoginLayout>
  );
}
