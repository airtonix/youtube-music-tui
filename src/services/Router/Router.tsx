import React, { useCallback } from "react";
import type { PropsWithChildren } from "https://esm.sh/react@17.0.2";
import urlcat from "urlcat";

import type { Route, RouteParams } from "./types.ts";
import { useHistory } from "./useHistory.ts";
import { RouterContext } from "./RouterContext.ts";

type RouterProps = PropsWithChildren<{}>;
export const Router = ({ children }: RouterProps) => {
  const { state, set } = useHistory<Route>({ path: "/" });

  const matches = useCallback(
    (path: string, params?: string) => {
      try {
        return state.path === urlcat(path, state.params ?? {});
      } catch (error) {
        return false;
      }
    },
    [state]
  );

  const goto = useCallback(
    (path: string, params?: RouteParams) => {
      const target = urlcat(path, params ?? {});
      set({ path: target, params });
    },
    [state]
  );

  return (
    <RouterContext.Provider
      value={{
        goto,
        matches,
        pathname: state.path,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};
