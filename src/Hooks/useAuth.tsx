import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/api";

interface AuthContextType {
  permissions: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [permissions, setPermissions] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setPermissions(true);
    }
  }, []);

  const signIn = async (email: string, senha: string) => {
    try {
      const response = await api.post("/login", {
        email,
        senha,
      });
      console.log("Resposta do servidor:", response.data);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setPermissions(true);
    } catch (error) {
      console.error("Erro ao fazer login", error);
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem("jwtToken");
    setPermissions(false);
  };

  return (
    <AuthContext.Provider value={{ permissions, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
