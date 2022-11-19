import React, { useState } from "react";
import type { PropsWithChildren } from "https://esm.sh/react@17.0.2";

import { AuthContext } from "./AuthContext.ts";

type AuthProviderProps = PropsWithChildren<{}>;

export function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authToken,
        setAuthToken,
        authToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
