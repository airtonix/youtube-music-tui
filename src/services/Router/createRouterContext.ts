import { createContext } from "react";
import { Route, RouteParams } from "./types";

export function createRouterContext<T extends Route>(_routes: readonly T[]) {
  return createContext<{
    query?: RouteParams;
    pathname: string;
    matches: (path: string) => boolean;
    goto: (routename: T["path"], params?: RouteParams) => void;
  }>({
    matches: () => false,
    goto: () => {},
    pathname: "",
  });
}
