import { useContext } from "react";
import { AuthContext } from "./AuthContext.ts";

export function useAuth(): typeof AuthContext {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuth must only be used within children of <AuthProvider/>"
    );
  return context;
}
