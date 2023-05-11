//#region Imports

import { useRouter } from "next/router";

import { createContext, useState } from "react";

import { auth } from "@/firebase/config";

import {
  User as FirebaseUser,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import User from "@/models/Usuario";

//#endregion

//#region Interfaces

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

//#endregion

const AuthContext = createContext<AuthContextProps>({});

const normalizedUser = async (userFirebase: FirebaseUser) => {
  const token = userFirebase.getIdToken();

  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName!,
    email: userFirebase.email!,
    token,
    provider: userFirebase.providerData[0].providerId!,
    imageUrl: userFirebase.photoURL!,
  };
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  const router = useRouter();

  const loginGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, new GoogleAuthProvider());

      if (response.user?.email) {
        const user = await normalizedUser(response.user);
        setUser(user);
        router.push("/");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
