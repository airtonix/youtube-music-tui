import React from "react";
import type { ContextType, FunctionComponent, PropsWithChildren } from "react";

import { useRouter } from "./useRouter";
import { RouterContext } from "./RouterContext";

type RouteProps = PropsWithChildren<{
  path: Parameters<ContextType<typeof RouterContext>["goto"]>[0];
  component: FunctionComponent<unknown>;
}>;

export function Route({ children, component: Element, path }: RouteProps) {
  const { matches } = useRouter();
  if (!matches(path)) return null;
  if (!Element) return <>{children}</>;
  return <Element>{children}</Element>;
}
