import { ChangeEvent, useState } from "react";

import { AuthInput } from "@/components/auth/AuthInput";

type Mode = "login" | "register";

interface userInfoProps {
  email?: string;
  password?: string;
}

export default function Authentication() {
  const [userInfo, setUserInfo] = useState<userInfoProps>({});
  const [mode, setMode] = useState<Mode>("login");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <main>
      <h1>
        {mode === "login"
          ? "Entre com sua conta!"
          : "Cadastre-se na plataforma!"}
      </h1>
      <form>
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
      </form>
    </main>
  );
}
