import React, { useState } from "react";
import type { PropsWithChildren } from "react";

import { AuthContext } from "./AuthContext";

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
