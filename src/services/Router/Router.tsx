import React, { useCallback, useState } from "react";
import type { PropsWithChildren } from "react";
import urlcat from "urlcat";

import type { Route, RouteParams } from "./types";
import { useHistory } from "./useHistory";
import { RouterContext } from "./RouterContext";
import type { RoutePath } from "./RouterContext";

type RouterProps = PropsWithChildren<{}>;
export function Router({ children }: RouterProps) {
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
    (path: RoutePath, params?: RouteParams) => {
      const target = urlcat(path, params ?? {});
      set({ path: target, params: params || {} });
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
}
