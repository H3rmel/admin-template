import { Dispatch, SetStateAction } from "react";

type Mode = "login" | "register";

interface AuthChangeModeProps {
  mode: string;
  setMode: Dispatch<SetStateAction<Mode>>
}

export function AuthChangeMode({ mode, setMode }: AuthChangeModeProps) {
  return mode === "login" ? (
    <p>
      Novo por aqui?{" "}
      <button type="button" onClick={() => setMode("register")} className="login-link">
        Crie uma conta.
      </button>
    </p>
  ) : (
    <p>
      Já faz parte do projeto?{" "}
      <button type="button" onClick={() => setMode("login")} className="login-link">
        Entre por aqui.
      </button>
    </p>
  );
}
