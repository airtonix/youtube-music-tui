import { createContext } from "https://esm.sh/react@17.0.2";
import { Route, RouteParams } from "./types.ts";

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
