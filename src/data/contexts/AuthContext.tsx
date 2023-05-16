//#region Imports

import { useRouter } from "next/router";

import { createContext, useEffect, useState } from "react";

import { auth } from "@/firebase/config";

import {
  User,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import Cookies from "js-cookie";

//#endregion

//#region Interfaces

interface AuthContextProps {
  user?: User;
  loginWithGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

//#endregion

const AuthContext = createContext<AuthContextProps>({});

const manageCookie = (logged: boolean) => {
  if (logged)
    Cookies.set("admin-template-auth", String(logged), {
      expires: 7,
    });
  else Cookies.remove("admin-template-auth");
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  const router = useRouter();

  const configureSession = async (firebaseUser?: User) => {
    if (firebaseUser?.email) {
      setUser(firebaseUser);
      manageCookie(true);
      return firebaseUser.email;
    } else {
      setUser(undefined);
      manageCookie(false);
      return false;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, new GoogleAuthProvider());

      if (response.user?.email) {
        configureSession(response.user);
        router.push("/");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      await configureSession(undefined);
      router.push("/authentication");
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancel = onIdTokenChanged(auth, () => {
        configureSession(user);
      });
      return () => cancel();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
