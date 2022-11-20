import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import type { ContextType } from "react";

export function useAuth(): ContextType<typeof AuthContext> {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuth must only be used within children of <AuthProvider/>"
    );
  return context;
}
