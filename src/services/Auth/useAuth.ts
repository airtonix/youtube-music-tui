import { useContext } from "react";
import { AuthContext } from "./AuthContext.ts";
import type { ContextType } from "https://esm.sh/react@17.0.2";

export function useAuth(): ContextType<typeof AuthContext> {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuth must only be used within children of <AuthProvider/>"
    );
  return context;
}
