import React, { useState } from "react";
import type { PropsWithChildren } from "react";

import { AuthContext } from "./AuthContext.ts";

type AuthProviderProps = PropsWithChildren<{}>;

export function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        setAuthToken,
        authToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
