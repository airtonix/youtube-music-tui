import { createContext } from "react";
import type { Context, Dispatch } from "react";

type AuthContextShape = {
  isAuthenticated?: boolean;
  authToken: string | null;
  setIsAuthenticated: Dispatch<string>;
  setAuthToken: Dispatch<string>;
};

export const AuthContext: Context<AuthContextShape> =
  createContext<AuthContextShape>({
    isAuthenticated: false,
    authToken: null,
    setIsAuthenticated: () => {},
    setAuthToken: () => {},
  });
